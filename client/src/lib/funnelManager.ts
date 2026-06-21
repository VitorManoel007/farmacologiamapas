import { FUNNEL, FUNNEL_STEP_KEY, type FunnelStep } from "@/config/funnelConfig";

declare global {
  interface Window {
    allowExit?: boolean;
  }
}

// ─── Estado ────────────────────────────────────────────────────────────────

function getStep(): FunnelStep {
  return (localStorage.getItem(FUNNEL_STEP_KEY) as FunnelStep) ?? "main";
}

function setStep(step: FunnelStep): void {
  localStorage.setItem(FUNNEL_STEP_KEY, step);
}

// ─── Navegação permitida ───────────────────────────────────────────────────

/**
 * Chamar antes de qualquer link de compra/checkout para que o sistema
 * nunca confunda uma compra com abandono.
 */
export function allowNavigation(): void {
  window.allowExit = true;
}

// ─── Lógica de redirect ────────────────────────────────────────────────────

function shouldBlock(): boolean {
  if (window.allowExit) return false;
  const step = getStep();
  return step === "main" || step === "ds1" || step === "ds2";
}

function handleExit(): void {
  if (!shouldBlock()) return;

  const step = getStep();

  if (step === "main") {
    setStep("ds1");
    window.allowExit = true;
    window.location.href = FUNNEL.downsell1;
    return;
  }

  if (step === "ds1") {
    setStep("ds2");
    window.allowExit = true;
    window.location.href = FUNNEL.downsell2;
    return;
  }

  if (step === "ds2") {
    setStep("finished");
  }
}

// ─── Init ──────────────────────────────────────────────────────────────────

/**
 * Inicializa o gerenciador de funil.
 * Deve ser chamado uma única vez no mount da página principal.
 * Retorna uma função de cleanup para o useEffect do React.
 */
export function initFunnelManager(): () => void {
  const step = getStep();

  // Se já passou por todo o funil, não fazer nada
  if (step === "finished") return () => {};

  // Garantir que a página principal seja marcada como "main" se ainda não houver step
  if (!localStorage.getItem(FUNNEL_STEP_KEY)) {
    setStep("main");
  }

  // ── popstate (botão Voltar) ──────────────────────────────────────────────
  history.pushState(null, "", location.href);
  history.pushState(null, "", location.href);
  history.pushState(null, "", location.href);

  const onPopState = () => {
    history.pushState(null, "", location.href);
    handleExit();
  };
  window.addEventListener("popstate", onPopState);

  // ── visibilitychange (trocar de aba / minimizar) ─────────────────────────
  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      handleExit();
    }
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  // ── pagehide (mobile / Safari) ────────────────────────────────────────────
  const onPageHide = () => {
    handleExit();
  };
  window.addEventListener("pagehide", onPageHide);

  // ── beforeunload (suporte — sem texto personalizado) ──────────────────────
  const onBeforeUnload = () => {
    handleExit();
  };
  window.addEventListener("beforeunload", onBeforeUnload);

  // ── cliques em links externos ─────────────────────────────────────────────
  const onDocumentClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    const href = target.getAttribute("href") ?? "";
    const isExternal =
      href.startsWith("http") && !href.includes(location.hostname);
    const isCakto = href.includes("cakto.com.br");
    const isDownsell =
      href.includes("emocionaloferta.replit.app") ||
      href.includes("vitorbelezatikt.replit.app");

    // Checkout e links internos do funil nunca disparam o redirect
    if (isCakto || isDownsell) return;

    if (isExternal) {
      handleExit();
    }
  };
  document.addEventListener("click", onDocumentClick);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  return () => {
    window.removeEventListener("popstate", onPopState);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pagehide", onPageHide);
    window.removeEventListener("beforeunload", onBeforeUnload);
    document.removeEventListener("click", onDocumentClick);
  };
}
