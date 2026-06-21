/**
 * funnelManager — Downsell 01
 *
 * Detecta abandono da página e redireciona para o Downsell 02.
 * Usa localStorage (chave: funnel_step) para controlar o estado do funil.
 *
 * Adicionar no <head> ou antes do </body> do Downsell 01:
 *   <script src="ds1-funnel-script.js"></script>
 * ou inline, copiando o conteúdo dentro de <script>...</script>.
 */
(function () {
  "use strict";

  // ── Configuração ────────────────────────────────────────────────────────
  var DOWNSELL2_URL = "https://vitor-downseel-01--vitorbelezatikt.replit.app/";
  var STEP_KEY = "funnel_step";

  // ── Estado ──────────────────────────────────────────────────────────────

  function getStep() {
    return localStorage.getItem(STEP_KEY) || "ds1";
  }

  function setStep(step) {
    localStorage.setItem(STEP_KEY, step);
  }

  // Marcar que o visitante está no DS1
  if (getStep() !== "ds2" && getStep() !== "finished") {
    setStep("ds1");
  }

  // ── Navegação permitida ─────────────────────────────────────────────────

  /**
   * Chamar nos botões de compra/checkout para não confundir com abandono.
   * Uso: <button onclick="allowNavigation()">Comprar</button>
   */
  window.allowNavigation = function () {
    window.allowExit = true;
  };

  // ── Lógica de redirect ──────────────────────────────────────────────────

  function shouldRedirect() {
    if (window.allowExit) return false;
    var step = getStep();
    return step === "ds1";
  }

  function handleExit() {
    if (!shouldRedirect()) return;
    setStep("ds2");
    window.allowExit = true;
    window.location.href = DOWNSELL2_URL;
  }

  // ── Eventos ─────────────────────────────────────────────────────────────

  // Botão Voltar (popstate)
  history.pushState(null, "", location.href);
  history.pushState(null, "", location.href);
  history.pushState(null, "", location.href);

  window.addEventListener("popstate", function () {
    history.pushState(null, "", location.href);
    handleExit();
  });

  // Trocar de aba / minimizar (visibilitychange)
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      handleExit();
    }
  });

  // Mobile / Safari (pagehide)
  window.addEventListener("pagehide", function () {
    handleExit();
  });

  // Suporte geral (beforeunload)
  window.addEventListener("beforeunload", function () {
    handleExit();
  });

  // Cliques em links externos
  document.addEventListener("click", function (e) {
    var target = e.target.closest("a");
    if (!target) return;

    var href = target.getAttribute("href") || "";
    var isExternal = href.startsWith("http") && href.indexOf(location.hostname) === -1;

    // Nunca interceptar o link do próprio DS2 (evitar loop)
    var isDs2 = href.indexOf("vitorbelezatikt.replit.app") !== -1;
    if (isDs2) return;

    if (isExternal) {
      handleExit();
    }
  });

})();
