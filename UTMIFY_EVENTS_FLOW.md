# 🎯 UTMify - Event Flow Visual

## Pixel ID: `1383313273845160`

---

## 📊 Event Firing Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│ USUÁRIO ACESSA A LANDING PAGE                                       │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│ App.tsx useEffect() - PRIMEIRA EXECUÇÃO                             │
│ ├─ utmifyPixel.init()                                                │
│ ├─ Carrega script do UTMify                                      │
│ ├─ Inicializa UTMify                                               │
│ └─ Dispara: PageView (initial)                                     │
│                                                                     │
│ 📱 Console: [UTMify] ✓ Initialized successfully                │
│ 📱 Console: [UTMify] PageView tracked                          │
│ 📊 UTMify dashboard: PageView ✓                                      │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                    ╔════════════╩════════════╗
                    │                         │
                    ▼                         ▼
        ┌──────────────────────┐  ┌──────────────────────┐
        │ USUÁRIO CLICA EM:    │  │ ROTAS SPA MUDAM      │
        │ "QUERO SOMENTE O     │  │ usePixelTracking()   │
        │ BÁSICO"              │  │ dispara: PageView    │
        │                      │  │                      │
        │ handleBasicPlanClick │  │ 📱 PageView tracked  │
        │ → trackInitiate      │  │ (a cada mudança)     │
        │   Checkout('basic')  │  │                      │
        │                      │  │ 📊 Events: PageView  │
        │ 💰 R$ 15,90          │  └──────────────────────┘
        │ 📱 Console:          │
        │ [UTMify]         │
        │ InitiateCheckout     │
        │ tracked (basic)      │
        │                      │
        │ 📊 UTMify dashboard:   │
        │ InitiateCheckout ✓   │
        │                      │
        │ 🔗 Abre URL:         │
        │ pay.cakto.com.br/... │
        └──────────────────────┘
                    │
                    ▼
        ┌──────────────────────┐
        │ USUÁRIO CLICA EM:    │
        │ "QUERO O PLANO       │
        │ COMPLETO"            │
        │                      │
        │ handleCompletePlan   │
        │ Click                │
        │ → trackInitiate      │
        │   Checkout('complete')
        │                      │
        │ 💰 R$ 25,90          │
        │ 📱 Console:          │
        │ [UTMify]         │
        │ InitiateCheckout     │
        │ tracked (complete)   │
        │                      │
        │ 📊 UTMify dashboard:   │
        │ InitiateCheckout ✓   │
        │                      │
        │ 🔗 Abre URL:         │
        │ pay.cakto.com.br/... │
        └──────────────────────┘
                    │
                    ▼
        ┌──────────────────────┐
        │ USUÁRIO REALIZA      │
        │ PAGAMENTO NA CAKTO   │
        │                      │
        │ (fora da landing)    │
        │                      │
        │ Webhook ou Success   │
        │ Page chama:          │
        │ utmifyPixel.track      │
        │ Purchase()           │
        │                      │
        │ 📱 Console:          │
        │ [UTMify]         │
        │ Purchase tracked     │
        │                      │
        │ 📊 UTMify dashboard:   │
        │ Purchase ✓           │
        └──────────────────────┘
```

---

## 🔑 Key Events Breakdown

### 1. PAGE VIEW
```
┌─────────────────────────────────────┐
│ EVENT: PageView                     │
├─────────────────────────────────────┤
│ Disparado por: App.tsx + Lp.tsx     │
│ Quando: Carregamento + Mudança rota │
│ Frequência: 1 por página/rota       │
│ Deduplicação: 2s cooldown           │
│ Dados enviados: (nenhum customizado)│
│ Status: ✅ ATIVO NA LANDING         │
└─────────────────────────────────────┘

src/App.tsx:
  useEffect(() => {
    utmifyPixel.init(); ← Dispara PageView aqui
  }, []);

src/pages/Lp.tsx:
  usePixelTracking(); ← Dispara PageView cada rota SPA
```

### 2. INITIATE CHECKOUT - Botão Básico
```
┌─────────────────────────────────────┐
│ EVENT: InitiateCheckout (basic)     │
├─────────────────────────────────────┤
│ Botão: QUERO SOMENTE O BÁSICO       │
│ Valor: R$ 15,90                     │
│ Localização: CompletePlanSection    │
│ Link: pay.cakto.com.br/p2cpxzq...   │
│ onClick: handleBasicPlanClick()     │
│ Deduplicação: 2s cooldown           │
│ Dados: {                            │
│   content_name: "Plan: basic"       │
│   value: 15.9                       │
│   currency: "BRL"                   │
│ }                                   │
│ Status: ✅ ATIVO NA LANDING         │
└─────────────────────────────────────┘

src/pages/sections/CompletePlanSection.tsx:
  <a href="..." onClick={handleBasicPlanClick}>
    Quero somente o básico
  </a>

  handleBasicPlanClick = () => {
    trackInitiateCheckout('basic'); ← Aqui!
  }
```

### 3. INITIATE CHECKOUT - Botão Completo
```
┌─────────────────────────────────────┐
│ EVENT: InitiateCheckout (complete)  │
├─────────────────────────────────────┤
│ Botão: QUERO O PLANO COMPLETO       │
│ Valor: R$ 25,90                     │
│ Localização: CompletePlanSection    │
│ Link: pay.cakto.com.br/f2aq3km...   │
│ onClick: handleCompletePlanClick()  │
│ Deduplicação: 2s cooldown           │
│ Dados: {                            │
│   content_name: "Plan: complete"    │
│   value: 25.9                       │
│   currency: "BRL"                   │
│ }                                   │
│ Status: ✅ ATIVO NA LANDING         │
└─────────────────────────────────────┘

src/pages/sections/CompletePlanSection.tsx:
  <a href="..." onClick={handleCompletePlanClick}>
    Quero o Plano Completo
  </a>

  handleCompletePlanClick = () => {
    trackInitiateCheckout('complete'); ← Aqui!
  }
```

### 4. PURCHASE
```
┌─────────────────────────────────────┐
│ EVENT: Purchase                     │
├─────────────────────────────────────┤
│ Disparado por: NÃO na landing       │
│ Quando: Após pagamento confirmado   │
│ Onde: Cakto webhook / Success page  │
│ Deduplicação: 2s cooldown           │
│ Dados: {                            │
│   value: <valor do pagamento>       │
│   currency: "BRL"                   │
│   content_name: "Purchase: [plan]"  │
│ }                                   │
│ Status: ⏸️ DESATIVADO NA LANDING    │
│ Implementar após: Pagamento Cakto   │
└─────────────────────────────────────┘

IMPLEMENTAR SOMENTE DEPOIS:
  utmifyPixel.trackPurchase(25.90, 'BRL', 'complete');
```

---

## ✅ Validation Checklist

### Setup
- [x] Pixel ID: 6a269b721892220b96e9724b
- [x] TypeScript: ✅ 100% tipado
- [x] React: ✅ Compatible
- [x] SPA (Wouter): ✅ Compatible
- [x] Build: ✅ Sem erros

### Events
- [x] PageView: Implementado (init + SPA routes)
- [x] InitiateCheckout (basic): Implementado (botão correto)
- [x] InitiateCheckout (complete): Implementado (botão correto)
- [x] Purchase: Preparado (não dispara na landing)

### Security
- [x] Deduplicação: ✅ 2s cooldown
- [x] React Strict Mode: ✅ Compatible
- [x] Multiple inits: ✅ Bloqueado
- [x] Error handling: ✅ Try-catch
- [x] UTMify runtime check: ✅ Safe

### UTMify dashboard
- [ ] PageView aparece no carregamento
- [ ] InitiateCheckout (basic) aparece ao clicar
- [ ] InitiateCheckout (complete) aparece ao clicar
- [ ] Nenhum evento duplicado
- [ ] Nenhum evento inesperado

### UTMify logs
- [ ] Extensão instalada
- [ ] Mostra eventos em tempo real
- [ ] Status: VERDE ✓
- [ ] Sem erros

---

## 🎯 Console Output Expected

```javascript
// No carregamento inicial:
[UTMify] ✓ Initialized successfully
[UTMify] PageView tracked

// Ao clicar "QUERO SOMENTE O BÁSICO":
[UTMify] InitiateCheckout tracked (basic)
// Abre: https://pay.cakto.com.br/p2cpxzq_905851

// Ao clicar "QUERO O PLANO COMPLETO":
[UTMify] InitiateCheckout tracked (complete)
// Abre: https://pay.cakto.com.br/f2aq3km_905864

// Se clicar 2x rápido (dentro de 2s):
[UTMify] InitiateCheckout blocked: duplicate within 2000ms
// Evento NÃO é duplicado no UTMify dashboard

// Se houver erro:
[UTMify] Initialization error: [erro]
[UTMify] InitiateCheckout error: [erro]
```

---

## 🚨 What NOT to Do

❌ **NÃO adicione:**
- Listeners globais para detectar checkout
- Rastreamento automático em todos os botões
- Detecção baseada em texto/link ("pay", "cakto", "checkout")
- Events listeners que disparem Purchase antes do pagamento

❌ **NÃO modifique:**
- Layout ou design
- Responsividade
- Componentes existentes
- Copies do botão
- Funcionalidade dos links

---

## 📞 Support Matrix

| Problema | Solução |
|----------|---------|
| Events não aparecem | Verifique console logs, UTMify logs, Cookie consent |
| Eventos duplicados | Sistema de deduplicação está ativo (2s). Em prod será 1. |
| Pixel ID errado | Verifique `1383313273845160` em utmifyPixel.ts |
| React Strict Mode duplicação | Normal em dev. Em prod será apenas 1. |
| Botão não redireciona | Verifique URL da Cakto, navegador bloqueador? |
| Purchase não dispara | Correto! Implementar após pagamento confirmado. |

---

**Status:** ✅ **PRONTO PARA VALIDAÇÃO**

Teste no Meta UTMify dashboard → Confirme recebimento dos eventos → Launch!
