/**
 * Meta Pixel Configuration and Event Tracking
 * Pixel ID: 1383313273845160
 * 
 * CRITICAL RULES:
 * 1. NO duplicate events
 * 2. PageView: initial load + all SPA route changes
 * 3. InitiateCheckout: ONLY on two official plan buttons
 * 4. Purchase: NOT on landing page (Cakto webhook only)
 */

type PixelEventType = 'PageView' | 'InitiateCheckout' | 'Purchase';

interface PixelEventData {
  type: PixelEventType;
  timestamp: number;
}

interface FbqFunction {
  (command: 'init' | 'track' | 'trackCustom', ...args: any[]): void;
  disallowedPixels?: string[];
  allowedPixels?: string[];
  queue?: any[];
}

declare global {
  interface Window {
    fbq?: FbqFunction;
    facebook?: any;
  }
}

const PIXEL_ID = '1383313273845160';
const DEDUP_COOLDOWN = 2000; // 2 seconds

class MetaPixelManager {
  private isInitialized = false;
  private eventHistory: Map<string, number> = new Map();
  private initPromise: Promise<void> | null = null;

  /**
   * Initialize Meta Pixel - called only once
   */
  async init(): Promise<void> {
    // Return existing promise if already initializing
    if (this.initPromise) {
      return this.initPromise;
    }

    if (this.isInitialized) {
      return;
    }

    this.initPromise = this._performInit();
    return this.initPromise;
  }

  private async _performInit(): Promise<void> {
    try {
      // Check if fbq already exists (React Strict Mode protection)
      if (window.fbq && (window.fbq as any).loaded) {
        console.log('[Meta Pixel] Already initialized, skipping...');
        this.isInitialized = true;
        return;
      }

      // Create fbq stub first
      const fbq = function (this: any) {
        if ((fbq as any).callMethod) {
          (fbq as any).callMethod.apply(fbq, arguments as any);
        } else {
          (fbq as any).queue?.push(arguments);
        }
      } as any;

      fbq.callMethod = fbq;
      fbq.push = fbq;
      fbq.loaded = false;
      fbq.version = '2.0';
      fbq.queue = [];

      window.fbq = fbq;

      // Load Facebook SDK script FIRST
      await this._loadFacebookScript();

      // Initialize pixel AFTER script is loaded
      if (window.fbq) {
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');
        console.log('[Meta Pixel] ✓ Initialized successfully');
      }

      this.isInitialized = true;
    } catch (error) {
      console.error('[Meta Pixel] Initialization error:', error);
      this.isInitialized = true; // Mark as initialized to prevent retries
    }
  }

  private _loadFacebookScript(): Promise<void> {
    return new Promise((resolve) => {
      // Check if script already exists
      if (document.getElementById('facebook-jssdk')) {
        console.log('[Meta Pixel] Facebook SDK script already exists');
        resolve();
        return;
      }

      // Check if fbq SDK is already loaded
      if (window.fbq && (window.fbq as any).loaded) {
        console.log('[Meta Pixel] Facebook SDK already loaded');
        resolve();
        return;
      }

      console.log('[Meta Pixel] Loading Facebook SDK script...');
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      
      let timeout: NodeJS.Timeout;

      script.onload = () => {
        clearTimeout(timeout);
        console.log('[Meta Pixel] Facebook SDK script loaded');
        if (window.fbq) {
          (window.fbq as any).loaded = true;
        }
        resolve();
      };

      script.onerror = () => {
        clearTimeout(timeout);
        console.warn('[Meta Pixel] Facebook SDK script failed to load, but continuing...');
        resolve(); // Resolve even on error to not block
      };

      // Timeout after 5 seconds
      timeout = setTimeout(() => {
        console.warn('[Meta Pixel] Facebook SDK script load timeout, but continuing...');
        resolve();
      }, 5000);

      document.head.appendChild(script);
    });
  }

  /**
   * Check if event should be tracked (deduplication)
   */
  private _shouldTrackEvent(eventType: PixelEventType): boolean {
    const eventKey = eventType;
    const lastTrackedTime = this.eventHistory.get(eventKey);
    const now = Date.now();

    if (!lastTrackedTime) {
      this.eventHistory.set(eventKey, now);
      return true;
    }

    const timeSinceLastEvent = now - lastTrackedTime;

    if (timeSinceLastEvent < DEDUP_COOLDOWN) {
      console.warn(
        `[Meta Pixel] ${eventType} blocked: duplicate within ${DEDUP_COOLDOWN}ms`
      );
      return false;
    }

    this.eventHistory.set(eventKey, now);
    return true;
  }

  /**
   * Track PageView event
   */
  trackPageView(): void {
    if (!this._shouldTrackEvent('PageView')) {
      return;
    }

    if (!window.fbq) {
      console.warn('[Meta Pixel] fbq not available');
      return;
    }

    try {
      window.fbq('track', 'PageView');
      console.log('[Meta Pixel] PageView tracked');
    } catch (error) {
      console.error('[Meta Pixel] PageView error:', error);
    }
  }

  /**
   * Track InitiateCheckout event
   * CRITICAL: Only call from official plan buttons
   */
  trackInitiateCheckout(planType: 'basic' | 'complete'): void {
    if (!this._shouldTrackEvent('InitiateCheckout')) {
      return;
    }

    if (!window.fbq) {
      console.warn('[Meta Pixel] fbq not available');
      return;
    }

    try {
      window.fbq('track', 'InitiateCheckout', {
        content_name: `Plan: ${planType}`,
        content_type: 'product',
        value: planType === 'basic' ? 15.9 : 25.9,
        currency: 'BRL',
      });
      console.log(`[Meta Pixel] InitiateCheckout tracked (${planType})`);
    } catch (error) {
      console.error('[Meta Pixel] InitiateCheckout error:', error);
    }
  }

  /**
   * Track Purchase event
   * NOTE: This should NOT be called from landing page
   * Call only after successful payment from Cakto webhook
   */
  trackPurchase(
    value: number,
    currency: string = 'BRL',
    planType?: string
  ): void {
    if (!this._shouldTrackEvent('Purchase')) {
      return;
    }

    if (!window.fbq) {
      console.warn('[Meta Pixel] fbq not available');
      return;
    }

    try {
      window.fbq('track', 'Purchase', {
        value,
        currency,
        content_name: planType ? `Purchase: ${planType}` : 'Purchase',
        content_type: 'product',
      });
      console.log('[Meta Pixel] Purchase tracked');
    } catch (error) {
      console.error('[Meta Pixel] Purchase error:', error);
    }
  }

  /**
   * Get initialization status
   */
  getStatus(): { initialized: boolean; eventHistory: Record<string, number> } {
    return {
      initialized: this.isInitialized,
      eventHistory: Object.fromEntries(this.eventHistory),
    };
  }
}

// Singleton instance
const metaPixel = new MetaPixelManager();

export { metaPixel, PIXEL_ID };
