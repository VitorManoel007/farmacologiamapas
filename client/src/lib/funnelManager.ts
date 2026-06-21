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

/**
 * A página principal só intercepta quando o visitante ainda está
 * na etapa "main". Se já passou por ds1/ds2/finished, não redireciona.
 */
function shouldRedirect(): boolean {
  if (window.allowExit) return false;
  return getStep() === "main";
}

function handleExit(): void {
  if (!shouldRedirect()) return;
  setStep("ds1");
  window.allowExit = true;
  window.location.href = FUNNEL.downsell1;
}

// ─── Init ──────────────────────────────────────────────────────────────────

/**
 * Inicializa o gerenciador de funil na página principal.
 * Deve ser chamado uma única vez no mount.
 * Retorna função de cleanup para o useEffect do React.
 */
export function initFunnelManager(): () => void {
  const step = getStep();

  // Se o visitante já passou pela etapa principal (ou terminou o funil),
  // não instalar nenhum listener — evita loop se ele voltar via browser.
  if (step !== "main") return () => {};

  // Garantir que o estado está salvo no localStorage
  setStep("main");

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

  // ── beforeunload (suporte geral — sem texto personalizado) ────────────────
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
    const isDownsellLink =
      href.includes("emocionaloferta.replit.app") ||
      href.includes("vitorbelezatikt.replit.app");

    // Checkout e links internos do funil nunca disparam o redirect
    if (isCakto || isDownsellLink) return;

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
