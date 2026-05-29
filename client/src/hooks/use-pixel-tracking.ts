import { useEffect } from 'react';
import { metaPixel } from '@/lib/metaPixel';

/**
 * Hook for Meta Pixel tracking in React components
 * Automatically handles PageView on route changes
 */
export function usePixelTracking() {
  useEffect(() => {
    // Track PageView on mount (route change)
    metaPixel.trackPageView();
  }, []);

  return {
    trackInitiateCheckout: metaPixel.trackInitiateCheckout.bind(metaPixel),
    trackPurchase: metaPixel.trackPurchase.bind(metaPixel),
  };
}
