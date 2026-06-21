/**
 * exitIntent.ts
 * Sistema de recuperação de abandono para o Downsell 01.
 * Deve ser inicializado uma única vez no mount da página principal.
 */

const DOWNSELL_URL = 'https://vitor-downseel-01-1--emocionaloferta.replit.app/';
const SESSION_KEY = 'downsell01Visited';

/** Retorna true se o usuário já foi enviado ao downsell nesta sessão. */
const alreadyVisited = (): boolean =>
  sessionStorage.getItem(SESSION_KEY) === 'true';

/** Marca que o usuário foi enviado ao downsell. */
const markVisited = (): void =>
  sessionStorage.setItem(SESSION_KEY, 'true');

/**
 * Chame esta função ANTES de qualquer navegação para o checkout.
 * Sinaliza que a saída é intencional e não deve acionar o downsell.
 */
export const allowNavigation = (): void => {
  window.allowExit = true;
};

/** Verifica se a saída deve acionar o redirect. */
const shouldRedirect = (): boolean => {
  if (window.allowExit) return false;
  if (alreadyVisited()) return false;
  return true;
};

/** Executa o redirect para o downsell uma única vez. */
const redirectToDownsell = (): void => {
  if (!shouldRedirect()) return;
  markVisited();
  window.allowExit = true; // evita re-trigger durante o redirect
  window.location.href = DOWNSELL_URL;
};

/**
 * Inicializa o sistema de exit intent.
 * Retorna uma função de cleanup para remover os listeners.
 */
export const initExitIntent = (): (() => void) => {
  // Guarda um histórico extra para capturar o botão Voltar
  history.pushState({ exitIntent: true }, '', location.href);
  history.pushState({ exitIntent: true }, '', location.href);

  // --- Listener: botão Voltar / navegação de histórico ---
  const onPopState = (): void => {
    // Pequeno delay para garantir que o estado já foi processado
    setTimeout(() => {
      redirectToDownsell();
    }, 50);
  };

  // --- Listener: aba/janela perdendo visibilidade (fechar aba, Alt+Tab etc.) ---
  const onVisibilityChange = (): void => {
    if (document.visibilityState === 'hidden') {
      redirectToDownsell();
    }
  };

  // --- Listener: pagehide (mais confiável que beforeunload em mobile) ---
  const onPageHide = (): void => {
    redirectToDownsell();
  };

  // --- Listener: links externos clicados ---
  const onExternalLinkClick = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    // Ignora links internos, âncoras e links de checkout
    if (!href.startsWith('http') && !href.startsWith('//')) return;
    if (href.includes(location.hostname)) return;
    if (href.includes('cakto.com.br')) return; // checkout — não redirecionar
    if (href.includes(DOWNSELL_URL)) return;
    // É um link externo real → sinaliza abandono
    if (shouldRedirect()) {
      e.preventDefault();
      redirectToDownsell();
    }
  };

  window.addEventListener('popstate', onPopState);
  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('pagehide', onPageHide);
  document.addEventListener('click', onExternalLinkClick, { capture: true });

  // Cleanup — remover todos os listeners ao desmontar o componente
  return () => {
    window.removeEventListener('popstate', onPopState);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pagehide', onPageHide);
    document.removeEventListener('click', onExternalLinkClick, { capture: true });
  };
};

// Extensão do tipo Window para o flag global
declare global {
  interface Window {
    allowExit: boolean;
  }
}
