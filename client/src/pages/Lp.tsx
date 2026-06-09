import { useEffect } from "react";
import { BasicPlanSection } from "./sections/BasicPlanSection";
import { CompletePlanSection } from "./sections/CompletePlanSection";
import { DeliverablesGridSection } from "./sections/DeliverablesGridSection";
import { FaqSection } from "./sections/FaqSection";
import { FeatureHighlightsSection } from "./sections/FeatureHighlightsSection";
import { FooterSection } from "./sections/FooterSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { HeroPromoSection } from "./sections/HeroPromoSection";
import { HowToAccessSection } from "./sections/HowToAccessSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { IdealForYouSection } from "./sections/IdealForYouSection";
import { MaterialCarouselSection } from "./sections/MaterialCarouselSection";
import { PainIntensificationSection } from "./sections/PainIntensificationSection";
import { PerceivedValueSection } from "./sections/PerceivedValueSection";
import { ValueAnchoringSection } from "./sections/ValueAnchoringSection";
import { TargetAudienceSection } from "./sections/TargetAudienceSection";
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";
import { usePixelTracking } from "@/hooks/use-pixel-tracking";

export const Lp = (): JSX.Element => {
  // Track PageView on route change
  usePixelTracking();

  useEffect(() => {
    // ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
    const link = 'https://meubackredirect.com.br';

    const urlBackRedirect =
      link.trim() +
      (link.indexOf('?') > 0 ? '&' : '?') +
      document.location.search.replace('?', '').toString();

    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);

    const handler = () => {
      console.log('onpopstate', urlBackRedirect);
      setTimeout(() => {
        location.href = urlBackRedirect;
      }, 1);
    };

    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-[#101720]">
      <HeroPromoSection />
      <MaterialCarouselSection />
      <MaterialPreviewSection />
      <DeliverablesGridSection />
      <IdealForYouSection />
      <PainIntensificationSection />
      <FeatureHighlightsSection />
      <PerceivedValueSection />
      <ValueAnchoringSection />
      <BasicPlanSection />
      <CompletePlanSection />
      <HowToAccessSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <TargetAudienceSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
