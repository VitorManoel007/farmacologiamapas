/**
 * =====================================================================
 * UTMIFY CONFIGURATION - VALIDATION & DOCUMENTATION
 * =====================================================================
 * 
 * PIXEL ID: 1383313273845160
 * 
 * =====================================================================
 * IMPLEMENTATION SUMMARY
 * =====================================================================
 * 
 * ✓ Arquivos criados:
 *   1. src/lib/utmifyPixel.ts       - Core UTMify manager
 *   2. src/hooks/use-pixel-tracking.ts - React hook for tracking
 * 
 * ✓ Arquivos modificados:
 *   1. src/App.tsx                - Initialize pixel (one-time only)
 *   2. src/pages/Lp.tsx           - Track PageView on route change
 *   3. src/pages/sections/CompletePlanSection.tsx - InitiateCheckout events
 * 
 * =====================================================================
 * EVENTOS IMPLEMENTADOS
 * =====================================================================
 * 
 * 1. PAGE VIEW
 *    ├─ Dispara: No carregamento inicial (App.tsx)
 *    ├─ Dispara: Em toda troca de rota SPA (Lp.tsx via usePixelTracking)
 *    ├─ Deduplicação: 2 segundos entre eventos iguais
 *    └─ Status: ✓ IMPLEMENTADO
 * 
 * 2. INITIATE CHECKOUT
 *    ├─ Botão 1: "QUERO SOMENTE O PLANO BÁSICO" (R$ 15,90)
 *    │  ├─ Link: https://pay.cakto.com.br/p2cpxzq_905851
 *    │  ├─ onClick: trackInitiateCheckout('basic')
 *    │  └─ Dados: value: 15.9, currency: BRL
 *    │
 *    ├─ Botão 2: "QUERO O PLANO COMPLETO" (R$ 25,90)
 *    │  ├─ Link: https://pay.cakto.com.br/f2aq3km_905864
 *    │  ├─ onClick: trackInitiateCheckout('complete')
 *    │  └─ Dados: value: 25.9, currency: BRL
 *    │
 *    ├─ Deduplicação: 2 segundos entre eventos
 *    └─ Status: ✓ IMPLEMENTADO (APENAS ESSES 2 BOTÕES)
 * 
 * 3. PURCHASE
 *    ├─ NÃO dispara na landing page
 *    ├─ Deve ser chamado APENAS após pagamento confirmado
 *    ├─ Opção A: Via webhook da Cakto
 *    ├─ Opção B: Chamar utmifyPixel.trackPurchase() após confirmação
 *    └─ Status: ✓ PREPARADO (mas desativado para landing)
 * 
 * =====================================================================
 * FUNCIONALIDADES DE SEGURANÇA
 * =====================================================================
 * 
 * ✓ Deduplicação:
 *   - Bloqueia eventos duplicados em menos de 2 segundos
 *   - Funciona com React Strict Mode
 *   - Impede múltiplos inicializações
 * 
 * ✓ Tipagem TypeScript:
 *   - Tipos para UTMify
 *   - Type-safe event tracking
 *   - Erros em tempo de compilação
 * 
 * ✓ Proteção contra erros:
 *   - Verifica existência do runtime UTMify
 *   - Try-catch em todas as chamadas
 *   - Fallback seguro se SDK falhar
 * 
 * ✓ Carregamento profissional:
 *   - Script carregado assincronamente
 *   - Não bloqueia a página
 *   - Promise-based initialization
 * 
 * ✓ SPA compatible:
 *   - React Strict Mode safe
 *   - Wouter router compatible
 *   - PageView em toda mudança de rota
 * 
 * =====================================================================
 * COMO VALIDAR NO UTMIFY
 * =====================================================================
 * 
 * 1. Acesse: https://utmify dashboard/ → UTMify dashboard
 * 
 * 2. Selecione sua propriedade/pixel: 1383313273845160
 * 
 * 3. Vá para: Aba "Events" ou "Test Events"
 * 
 * 4. Valide os eventos:
 * 
 *    PAGE VIEW:
 *    ├─ Deve aparecer no carregamento inicial
 *    ├─ Deve aparecer a cada mudança de rota
 *    ├─ Deve aparecer SEM DUPLICAÇÃO
 *    └─ Clique em "Test Events" e recarregue a página
 * 
 *    INITIATE CHECKOUT:
 *    ├─ Clique no botão "QUERO SOMENTE O PLANO BÁSICO"
 *    ├─ Deve aparecer no UTMify dashboard
 *    ├─ Dados esperados: {"content_name": "Plan: basic", "value": 15.9}
 *    ├─ Clique no botão "QUERO O PLANO COMPLETO"
 *    ├─ Deve aparecer no UTMify dashboard
 *    ├─ Dados esperados: {"content_name": "Plan: complete", "value": 25.9}
 *    └─ Nenhum outro botão deve disparar InitiateCheckout
 * 
 *    PURCHASE:
 *    ├─ NÃO deve aparecer na landing page
 *    └─ Deve ser implementado apenas após pagamento confirmado
 * 
 * 5. Use UTMify logs:
 *    ├─ Check browser console for UTMify logs
 *    ├─ Deve mostrar eventos em tempo real
 *    ├─ Deve mostrar: PageView + InitiateCheckout (sem duplicação)
 *    └─ Deve estar VERDE (sem erros)
 * 
 * =====================================================================
 * CONSOLE LOGS PARA DEBUG
 * =====================================================================
 * 
 * Abra o DevTools (F12) → Console e veja os logs:
 * 
 * ✓ UTMify initialization:
 *   [UTMify] ✓ Initialized successfully
 * 
 * ✓ PageView tracking:
 *   [UTMify] PageView tracked
 * 
 * ✓ InitiateCheckout tracking:
 *   [UTMify] InitiateCheckout tracked (basic)
 *   [UTMify] InitiateCheckout tracked (complete)
 * 
 * ✓ Deduplicação em ação:
 *   [UTMify] InitiateCheckout blocked: duplicate within 2000ms
 * 
 * ✓ Erros (se houver):
 *   [UTMify] Initialization error: ...
 *   [UTMify] InitiateCheckout error: ...
 * 
 * =====================================================================
 * CHECKLIST DE VALIDAÇÃO
 * =====================================================================
 * 
 * Antes de considerar PRONTO:
 * 
 * [ ] Build sem erros: npm run build
 * [ ] UTMify logs disponíveis no console
 * [ ] Console mostra: "[UTMify] ✓ Initialized successfully"
 * [ ] Página carregada → PageView aparece no UTMify dashboard
 * [ ] Clique "QUERO SOMENTE O BÁSICO" → InitiateCheckout aparece
 * [ ] Clique "QUERO O PLANO COMPLETO" → InitiateCheckout aparece
 * [ ] Teste duplo clique → Deduplicação funciona (vê mensagem no console)
 * [ ] UTMify dashboard mostra eventos SEM duplicação
 * [ ] UTMify logs mostram status correto
 * [ ] Nenhum outro botão dispara InitiateCheckout
 * [ ] Layout mantém-se intacto
 * [ ] Botões funcionam e redirecionam corretamente
 * [ ] Responsividade preservada
 * 
 * =====================================================================
 * ARQUITETURA
 * =====================================================================
 * 
 * Flow:
 * 
 *   App.tsx (useEffect)
 *       ↓
 *   utmifyPixel.init()  ← Executado UMA ÚNICA VEZ
 *       ↓
 *   Carrega script do UTMify
 *       ↓
 *   inicializa UTMify
 *       ↓
 *   Dispara PageView inicial
 *       ↓
 *   Lp.tsx (usePixelTracking)
 *       ↓
 *   Monitora mudanças de rota
 *       ↓
 *   trackPageView() a cada rota
 *       ↓
 *   CompletePlanSection (onClick dos botões)
 *       ↓
 *   trackInitiateCheckout('basic' | 'complete')
 * 
 * =====================================================================
 * DEDUPLICAÇÃO - COMO FUNCIONA
 * =====================================================================
 * 
 * Sistema de Map com timestamps:
 * 
 * Clique 1 em "QUERO SOMENTE O BÁSICO":
 *   └─ EventHistory["InitiateCheckout"] = timestamp_1
 *   └─ ✓ Evento disparado
 * 
 * Clique 2 em "QUERO SOMENTE O BÁSICO" (dentro de 2s):
 *   └─ Diferença = timestamp_2 - timestamp_1 < 2000ms
 *   └─ ✗ Evento BLOQUEADO (console warn)
 *   └─ Log: "[UTMify] InitiateCheckout blocked: duplicate within 2000ms"
 * 
 * Clique 3 em "QUERO SOMENTE O BÁSICO" (depois de 2s):
 *   └─ Diferença = timestamp_3 - timestamp_1 > 2000ms
 *   └─ ✓ Evento disparado (novo tempo registrado)
 * 
 * =====================================================================
 * PRÓXIMOS PASSOS (SE NECESSÁRIO)
 * =====================================================================
 * 
 * 1. Implementar Purchase via webhook da Cakto:
 *    - Configurar endpoint para receber webhook de pagamento
 *    - Chamar utmifyPixel.trackPurchase() com dados do pagamento
 *    - Ou integrar com API da Cakto oficialmente
 * 
 * 2. Adicionar mais eventos (opcional):
 *    - ViewContent: quando visualiza detalhes do plano
 *    - AddToCart: não aplicável neste caso
 *    - CompleteRegistration: se tiver formulário
 * 
 * 3. Teste A/B:
 *    - Crie eventos customizados por variante se necessário
 * 
 * =====================================================================
 * SUPORTE
 * =====================================================================
 * 
 * Se algum evento não aparecer:
 * 
 * 1. Abra DevTools (F12) → Console
 * 2. Procure por logs com "[UTMify]"
 * 3. Verifique se há erros
 * 4. UTMify logs mostram erro?
 * 5. Verificar:
 *    - Pixel ID está correto: 1383313273845160
 *    - Pixel está ativo na propriedade do Meta
 *    - Nenhum ad blocker bloqueando
 *    - Cookie consent se aplicável
 * 
 * =====================================================================
 */
