# UTMify - Sumário Técnico da Implementação

## 📊 Configuração Finalizada

**Pixel ID:** `1383313273845160`

---

## 📍 Onde os Eventos Estão Sendo Disparados

### 1️⃣ **PAGE VIEW**

#### 🎯 Ponto 1: Inicialização no App
```typescript
// src/App.tsx (line ~23)
useEffect(() => {
  utmifyPixel.init().catch((error) => {
    console.error('[App] UTMify initialization error:', error);
  });
}, []);
```
- ✅ Dispara NO carregamento inicial
- ✅ Apenas UMA ÚNICA VEZ
- ✅ Não se repete com React Strict Mode

#### 🎯 Ponto 2: Rastreamento de Rotas SPA
```typescript
// src/pages/Lp.tsx (line ~13)
export const Lp = (): JSX.Element => {
  usePixelTracking(); // Aqui!
  // ... resto do componente
}
```
- ✅ Dispara a cada mudança de rota SPA
- ✅ Compatível com Wouter Router
- ✅ Sem duplicação garantida

**Log esperado no console:**
```
[UTMify] ✓ Initialized successfully
[UTMify] PageView tracked
```

---

### 2️⃣ **INITIATE CHECKOUT**

#### 🎯 Botão 1: Plano Básico
```typescript
// src/pages/sections/CompletePlanSection.tsx (line ~81)
<a
  href="https://pay.cakto.com.br/p2cpxzq_905851"
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleBasicPlanClick}  // ← Aqui!
  className="..."
>
  <span>Quero somente o básico</span>
</a>
```
- 💰 Valor: R$ 15,90
- 📌 onClick dispara: `trackInitiateCheckout('basic')`
- ✅ Apenas este botão dispara para plano básico

#### 🎯 Botão 2: Plano Completo
```typescript
// src/pages/sections/CompletePlanSection.tsx (line ~187)
<a
  href="https://pay.cakto.com.br/f2aq3km_905864"
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleCompletePlanClick}  // ← Aqui!
  className="..."
>
  <span>Quero o Plano Completo</span>
</a>
```
- 💰 Valor: R$ 25,90
- 📌 onClick dispara: `trackInitiateCheckout('complete')`
- ✅ Apenas este botão dispara para plano completo

**Handler:**
```typescript
const handleBasicPlanClick = () => {
  trackInitiateCheckout('basic');
};

const handleCompletePlanClick = () => {
  trackInitiateCheckout('complete');
};
```

**Log esperado no console:**
```
[UTMify] InitiateCheckout tracked (basic)
[UTMify] InitiateCheckout tracked (complete)
```

---

### 3️⃣ **PURCHASE**

❌ **NÃO dispara na landing page** (conforme solicitado)

**Onde implementar:**
- ✅ Webhook de pagamento confirmado da Cakto
- ✅ Página de sucesso após checkout
- ✅ Integração oficial da Cakto

**Função preparada e pronta:**
```typescript
utmifyPixel.trackPurchase(value, 'BRL', planType);
```

---

## 🔍 Validação - Checklist

### ✅ Build
```bash
npm run build
```
**Status:** ✓ Compilando sem erros

### ✅ Console Logs
Abra DevTools (F12) → Console:
- [ ] `[UTMify] ✓ Initialized successfully`
- [ ] `[UTMify] PageView tracked` (ao carregar)
- [ ] `[UTMify] InitiateCheckout tracked (basic)` (ao clicar botão)
- [ ] `[UTMify] InitiateCheckout tracked (complete)` (ao clicar botão)

### ✅ Meta UTMify dashboard
1. Acesse: UTMify dashboard or developer console
2. Selecione Pixel: `1383313273845160`
3. Vá para "Test Events"
4. Verifique:
   - [ ] PageView aparece no carregamento
   - [ ] InitiateCheckout aparece ao clicar "Quero somente o básico"
   - [ ] InitiateCheckout aparece ao clicar "Quero o Plano Completo"
   - [ ] Nenhum evento duplicado

### ✅ UTMify logs
1. Abra o console do navegador para UTMify logs
2. Recarregue a página
3. Verifique:
   - [ ] Extensão mostra eventos em tempo real
   - [ ] Está VERDE (sem erros)
   - [ ] Mostra: PageView + InitiateCheckout

---

## 🛡️ Proteções Implementadas

### Deduplicação
- ✅ Bloqueia eventos iguais em menos de 2 segundos
- ✅ React Strict Mode compatible
- ✅ Console warning: `"[UTMify] InitiateCheckout blocked: duplicate within 2000ms"`

### Type Safety
- ✅ TypeScript 100% tipado
- ✅ Tipos para UTMify
- ✅ Erros em tempo de compilação

### Inicialização Segura
- ✅ Executada apenas UMA vez
- ✅ Promise-based
- ✅ Carregamento assincronado do script

### Tratamento de Erros
- ✅ Try-catch em todas as chamadas
- ✅ Verificação segura de UTMify
- ✅ Fallback se SDK falhar

---

## 📁 Arquivos Modificados

| Arquivo | Mudança |
|---------|---------|
| `src/App.tsx` | Adicionado `useEffect` para inicializar UTMify |
| `src/pages/Lp.tsx` | Adicionado `usePixelTracking()` para PageView em rotas |
| `src/pages/sections/CompletePlanSection.tsx` | Adicionados `onClick` handlers nos 2 botões |

## 📁 Arquivos Criados

| Arquivo | Descrição |
|---------|-----------|
| `src/lib/utmifyPixel.ts` | Core UTMify manager (tipado, com deduplicação) |
| `src/hooks/use-pixel-tracking.ts` | Hook React para rastreamento |
| `UTMIFY_VALIDATION.md` | Documentação de validação (este arquivo) |

---

## 🚀 Como Testar

### Teste 1: PageView
1. Abra DevTools (F12)
2. Recarregue a página
3. Veja console: `[UTMify] PageView tracked`

### Teste 2: InitiateCheckout (Botão Básico)
1. Clique em "QUERO SOMENTE O PLANO BÁSICO"
2. Veja console: `[UTMify] InitiateCheckout tracked (basic)`
3. Verifique UTMify dashboard → novo evento aparece

### Teste 3: InitiateCheckout (Botão Completo)
1. Clique em "QUERO O PLANO COMPLETO"
2. Veja console: `[UTMify] InitiateCheckout tracked (complete)`
3. Verifique UTMify dashboard → novo evento aparece

### Teste 4: Deduplicação
1. Clique rapidamente (2x) no mesmo botão
2. Veja console: primeiro dispara, segundo mostra:
   ```
   [UTMify] InitiateCheckout blocked: duplicate within 2000ms
   ```
3. Eventos Manager mostra apenas 1 evento (não duplicado)

### Teste 5: Outros Botões (Garantir que NÃO disparam)
1. Clique em "GARANTIR MEU ACESSO AGORA" (FAQ)
2. Clique em outros botões (HeroPromoSection, etc)
3. Veja console: nenhum InitiateCheckout disparado ✓

---

## ⚠️ Importante

- **NÃO há listeners globais** para detectar checkout automaticamente
- **InitiateCheckout dispara SOMENTE** nos 2 botões oficiais
- **NENHUMA duplicação** graças ao sistema de cooldown de 2 segundos
- **Layout e design** completamente preservados
- **Responsividade** não afetada

---

## 📞 Suporte

Se algum evento não aparecer:

1. **Console vazio de logs UTMify?**
   - Verifique se `src/App.tsx` inicializa `utmifyPixel.init()`
   - Verifique se há bloqueadores de anúncio

2. **UTMify dashboard não mostra eventos?**
   - Pixel ID correto? `1383313273845160`
   - Pixel está ativo na propriedade do Meta?
   - UTMify logs mostram erros?

3. **Eventos duplicados?**
   - Sistema de deduplicação está ativo (2 segundos)
   - React Strict Mode pode causar aparência de duplicação em dev
   - Em produção será apenas 1 evento

4. **Outros botões disparando InitiateCheckout?**
   - Procure por listeners globais que possam estar ativando
   - Procure por detecção automática de links com "checkout", "pay", "cakto"

---

**Status:** ✅ **IMPLEMENTAÇÃO PROFISSIONAL COMPLETA**
