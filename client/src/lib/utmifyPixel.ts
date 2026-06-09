/**
 * UTMify Pixel Configuration and Event Tracking
 * Pixel ID: 6a269b721892220b96e9724b
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

declare global {
  interface Window {
    pixelId?: string;
    utmify?: any;
    pixel?: any;
  }
}

const PIXEL_ID = '6a269b721892220b96e9724b';
const DEDUP_COOLDOWN = 2000; // 2 seconds

class UTMifyPixelManager {
  private isInitialized = false;
  private eventHistory: Map<string, number> = new Map();
  private initPromise: Promise<void> | null = null;

  /**
   * Initialize UTMify Pixel - called only once
   */
  async init(): Promise<void> {
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
      await this._loadPixelScript();

      console.log('[UTMify] ✓ UTMify pixel initialization complete');
      this.isInitialized = true;
    } catch (error) {
      console.error('[UTMify] Initialization error:', error);
      this.isInitialized = true;
    }
  }

  private _loadPixelScript(): Promise<void> {
    return new Promise((resolve) => {
      (window as any).pixelId = PIXEL_ID;

      const existingScript = document.getElementById('utmify-pixel-script');
      if (existingScript) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = 'utmify-pixel-script';
      script.async = true;
      script.defer = true;
      script.src = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js';
      script.onload = () => {
        console.log('[UTMify] UTMify pixel script loaded');
        resolve();
      };
      script.onerror = () => {
        console.error('[UTMify] Failed to load UTMify pixel script');
        resolve();
      };

      document.head.appendChild(script);
      console.log('[UTMify] UTMify pixel script injected');
    });
  }

  private _trackEvent(eventType: string, payload?: Record<string, any>): void {
    const utmify = (window as any).utmify;
    const pixel = (window as any).pixel;

    if (utmify && typeof utmify.track === 'function') {
      utmify.track(eventType, payload || {});
      return;
    }

    if (pixel && typeof pixel.track === 'function') {
      pixel.track(eventType, payload || {});
      return;
    }

    console.warn('[UTMify] No compatible pixel tracker found for', eventType);
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
        `[UTMify] ${eventType} blocked: duplicate within ${DEDUP_COOLDOWN}ms`
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

    try {
      this._trackEvent('PageView');
      console.log('[UTMify] PageView tracked');
    } catch (error) {
      console.error('[UTMify] PageView error:', error);
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
    try {
      this._trackEvent('InitiateCheckout', {
        content_name: `InitiateCheckout: ${planType}`,
        content_type: 'product',
      });
      console.log('[UTMify] InitiateCheckout tracked');
    } catch (error) {
      console.error('[UTMify] InitiateCheckout error:', error);
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
    try {
      this._trackEvent('Purchase', {
        value,
        currency,
        content_name: planType ? `Purchase: ${planType}` : 'Purchase',
        content_type: 'product',
      });
      console.log('[UTMify] Purchase tracked');
    } catch (error) {
      console.error('[UTMify] Purchase error:', error);
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
const utmifyPixel = new UTMifyPixelManager();

export { utmifyPixel, PIXEL_ID };
