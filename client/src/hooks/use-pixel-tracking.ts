import { useEffect } from 'react';
import { metaPixel } from '@/lib/metaPixel';

/**
 * Hook for Meta Pixel tracking in React components
 * Automatically handles PageView on route changes
 */
export function usePixelTracking() {
  useEffect(() => {
    let active = true;

    metaPixel.init()
      .then(() => {
        if (!active) {
          return;
        }
        metaPixel.trackPageView();
      })
      .catch((error) => {
        console.error('[usePixelTracking] Meta Pixel init error:', error);
      });

    return () => {
      active = false;
    };
  }, []);

  return {
    trackInitiateCheckout: metaPixel.trackInitiateCheckout.bind(metaPixel),
    trackPurchase: metaPixel.trackPurchase.bind(metaPixel),
  };
}
