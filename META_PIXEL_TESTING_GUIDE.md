#!/usr/bin/env node
/**
 * META PIXEL - STEP-BY-STEP TESTING GUIDE
 * Pixel ID: 1383313273845160
 * 
 * Siga este guia para validar a implementação profissional do Meta Pixel
 */

console.log(`
╔════════════════════════════════════════════════════════════════════════╗
║          META PIXEL - TESTING & VALIDATION GUIDE                      ║
║                                                                        ║
║  Pixel ID: 1383313273845160                                           ║
║  Events: PageView | InitiateCheckout | Purchase                       ║
╚════════════════════════════════════════════════════════════════════════╝
`);

console.log(`
STEP 1: PREPARE YOUR BROWSER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Install Chrome Extension: "Meta Pixel Helper"
   ├─ Search in Chrome Web Store
   ├─ Install official Meta version
   └─ Pin to toolbar

2. Open Browser DevTools
   ├─ Press: F12 (or Ctrl+Shift+I on Windows, Cmd+Option+I on Mac)
   ├─ Go to: Console tab
   └─ Keep it open during testing

3. Have Meta Events Manager ready
   ├─ Open: https://business.facebook.com/
   ├─ Navigate: Events Manager → Your Pixel
   ├─ Pixel ID: 1383313273845160
   ├─ Tab: "Test Events" or "Events"
   └─ Keep it in another window
`);

console.log(`
STEP 2: BUILD & DEPLOY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run in terminal:
  $ npm run build

Expected output:
  ✓ 1677 modules transformed.
  ✓ built in ~5s
  ✓ No errors

Then deploy to your environment (Replit, etc)
`);

console.log(`
STEP 3: TEST - PAGEVIEW ON INITIAL LOAD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to your landing page URL
2. Check Console (DevTools F12):
   ✓ Look for: [Meta Pixel] ✓ Initialized successfully
   ✓ Look for: [Meta Pixel] PageView tracked

3. Check Meta Pixel Helper:
   ✓ Extension should show: PageView
   ✓ Status should be: GREEN ✓

4. Check Events Manager:
   ✓ Refresh Events Manager tab
   ✓ Should show: PageView event received

Expected Console Output:
┌─────────────────────────────────────────────────────────────┐
│ [Meta Pixel] ✓ Initialized successfully                    │
│ [Meta Pixel] PageView tracked                              │
└─────────────────────────────────────────────────────────────┘
`);

console.log(`
STEP 4: TEST - INITIATE CHECKOUT (BASIC PLAN)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Scroll to plan section (CompletePlanSection)
2. Find button: "QUERO SOMENTE O BÁSICO" (R$ 15,90)
3. CHECK BEFORE CLICKING:
   ├─ Console is open
   ├─ Meta Pixel Helper is visible
   └─ Events Manager is ready

4. CLICK the button

5. Check Console:
   ✓ Look for: [Meta Pixel] InitiateCheckout tracked (basic)

6. Check Meta Pixel Helper:
   ✓ Should show: InitiateCheckout
   ✓ Data: { content_name: "Plan: basic", value: 15.9 }
   ✓ Status: GREEN ✓

7. Check Events Manager:
   ✓ Should show: InitiateCheckout event received
   ✓ Value: 15.9
   ✓ Currency: BRL

8. Browser behavior:
   ✓ NEW TAB opens: https://pay.cakto.com.br/p2cpxzq_905851
   (Close it if you don't want to continue)

Expected Console Output:
┌─────────────────────────────────────────────────────────────┐
│ [Meta Pixel] InitiateCheckout tracked (basic)              │
└─────────────────────────────────────────────────────────────┘
`);

console.log(`
STEP 5: TEST - INITIATE CHECKOUT (COMPLETE PLAN)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Scroll to plan section (CompletePlanSection)
2. Find button: "QUERO O PLANO COMPLETO" (R$ 25,90)
3. CHECK BEFORE CLICKING:
   ├─ Console is open
   ├─ Meta Pixel Helper is visible
   └─ Events Manager is ready

4. CLICK the button

5. Check Console:
   ✓ Look for: [Meta Pixel] InitiateCheckout tracked (complete)

6. Check Meta Pixel Helper:
   ✓ Should show: InitiateCheckout
   ✓ Data: { content_name: "Plan: complete", value: 25.9 }
   ✓ Status: GREEN ✓

7. Check Events Manager:
   ✓ Should show: InitiateCheckout event received
   ✓ Value: 25.9
   ✓ Currency: BRL

8. Browser behavior:
   ✓ NEW TAB opens: https://pay.cakto.com.br/f2aq3km_905864
   (Close it if you don't want to continue)

Expected Console Output:
┌─────────────────────────────────────────────────────────────┐
│ [Meta Pixel] InitiateCheckout tracked (complete)           │
└─────────────────────────────────────────────────────────────┘
`);

console.log(`
STEP 6: TEST - DEDUPLICATION (IMPORTANT!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This ensures NO DUPLICATE EVENTS are sent to Meta

1. Go back to landing page
2. Clear Events Manager view (refresh if needed)
3. DOUBLE-CLICK "QUERO SOMENTE O BÁSICO" QUICKLY (within 2 seconds)

Expected Console Output:
┌─────────────────────────────────────────────────────────────┐
│ [Meta Pixel] InitiateCheckout tracked (basic)              │
│ [Meta Pixel] InitiateCheckout blocked: duplicate within    │
│ 2000ms                                                      │
└─────────────────────────────────────────────────────────────┘

4. Check Events Manager:
   ✓ Should show ONLY 1 InitiateCheckout event
   ✓ NOT 2 events (deduplication worked!)

5. Wait 2+ seconds, click again:
   ✓ Console should show: [Meta Pixel] InitiateCheckout tracked (basic)
   ✓ Events Manager should show 2nd event (cooldown passed)
`);

console.log(`
STEP 7: TEST - OTHER BUTTONS SHOULD NOT TRIGGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL: Ensure InitiateCheckout ONLY fires on 2 official buttons

Click these buttons and verify NO InitiateCheckout is triggered:

1. "GARANTIR MEU ACESSO AGORA" (FAQ section)
   ├─ Console should NOT show: InitiateCheckout
   └─ ✓ Correct behavior

2. "QUERO ADQUIRIR O MEU" (Hero section)
   ├─ Console should NOT show: InitiateCheckout
   └─ ✓ Correct behavior

3. Any other button on the page
   ├─ Console should NOT show: InitiateCheckout
   └─ ✓ Correct behavior

Only these 2 buttons should trigger InitiateCheckout:
  ✅ "QUERO SOMENTE O BÁSICO"
  ✅ "QUERO O PLANO COMPLETO"
`);

console.log(`
STEP 8: TEST - PURCHASE SHOULD NOT TRIGGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL: Purchase should NOT be triggered on landing page

1. Refresh entire page
2. Perform all tests above
3. Check Events Manager:
   ✓ Should show: PageView (1+)
   ✓ Should show: InitiateCheckout (2)
   ✓ Should NOT show: Purchase

Purchase is expected ONLY after:
  - User completes payment on Cakto
  - Cakto webhook is triggered
  - Success page calls metaPixel.trackPurchase()

This is correct! ✓
`);

console.log(`
STEP 9: FINAL VALIDATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Core Functionality:
  [ ] PageView appears on initial load
  [ ] InitiateCheckout (basic) appears when clicking button
  [ ] InitiateCheckout (complete) appears when clicking button
  [ ] No duplicate events

Security & Deduplication:
  [ ] Fast double-click blocks duplicate
  [ ] 2 second cooldown works
  [ ] Console shows block message

Events Manager:
  [ ] PageView events visible
  [ ] InitiateCheckout events visible
  [ ] Purchase events NOT visible
  [ ] Event data matches expected values
  [ ] No errors shown

Meta Pixel Helper:
  [ ] Extension shows GREEN status
  [ ] No red error indicators
  [ ] Shows events in real-time
  [ ] Pixel ID matches: 1383313273845160

Other Buttons:
  [ ] No InitiateCheckout on other buttons
  [ ] No InitiateCheckout on FAQ button
  [ ] No InitiateCheckout on Hero button
  [ ] No unexpected events

Layout & Design:
  [ ] Page layout unchanged
  [ ] Button styling preserved
  [ ] Links still work and redirect
  [ ] Mobile responsive still works
  [ ] No broken elements

All checked? ✅ READY FOR PRODUCTION!
`);

console.log(`
STEP 10: TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problem: Console shows no [Meta Pixel] logs
Solution:
  1. Check if browser has ad blocker enabled
  2. Check if cookie consent is blocking scripts
  3. Verify Pixel ID: 1383313273845160
  4. Check network tab for facebook.com requests

Problem: Events Manager shows events but Meta Pixel Helper doesn't
Solution:
  1. Refresh Meta Pixel Helper extension
  2. Reload page
  3. Try incognito mode
  4. Verify extension is latest version

Problem: InitiateCheckout not appearing in Events Manager
Solution:
  1. Check console for errors
  2. Verify button onClick is connected
  3. Check Meta Business Settings → Pixel active
  4. Wait 15-30 seconds for Events Manager to refresh

Problem: Duplicate events appearing in Events Manager
Solution:
  1. Wait 2 seconds between clicks
  2. Check deduplication cooldown is working
  3. Look for: "blocked: duplicate within 2000ms"
  4. In production, React Strict Mode doesn't run

Problem: Wrong event data in Events Manager
Solution:
  1. Check metaPixel.ts event tracking code
  2. Verify values: basic=15.9, complete=25.9
  3. Check currency: should be BRL
  4. Verify event type: should be InitiateCheckout

Problem: "OTHER BUTTONS triggering InitiateCheckout
Solution:
  1. Search for global event listeners
  2. Remove any automatic checkout detection
  3. Ensure ONLY onClick handlers on 2 buttons
  4. Check for old Meta Pixel code
`);

console.log(`
FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Implementation: PROFESSIONAL
✅ Type Safety: TYPESCRIPT 100%
✅ Deduplication: 2-SECOND COOLDOWN
✅ React Compatible: YES (Strict Mode Safe)
✅ SPA Support: YES (Wouter Router)
✅ Error Handling: TRY-CATCH ALL
✅ Security: MULTIPLE SAFEGUARDS
✅ Events Manager: READY FOR VALIDATION

Files Created:
  • src/lib/metaPixel.ts (Core manager)
  • src/hooks/use-pixel-tracking.ts (React hook)
  • META_PIXEL_*.md (Documentation)

Files Modified:
  • src/App.tsx (Initialization)
  • src/pages/Lp.tsx (PageView tracking)
  • src/pages/sections/CompletePlanSection.tsx (Event triggers)

Build Status: ✅ PASSING
Test Status: ⏳ READY FOR YOUR VALIDATION

Next Steps:
  1. Run: npm run build
  2. Deploy to your environment
  3. Follow testing steps above
  4. Validate in Meta Events Manager
  5. Launch!

Questions?
  • Check META_PIXEL_VALIDATION.md
  • Check META_PIXEL_SUMMARY.md
  • Check META_PIXEL_EVENTS_FLOW.md
  • Check console logs: [Meta Pixel] ...

═══════════════════════════════════════════════════════════════════════
                    🎯 READY FOR VALIDATION!
═══════════════════════════════════════════════════════════════════════
`);
