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
import { ValueAnchoringSection } from "./sections/ValueAnchoringSection";
import { TargetAudienceSection } from "./sections/TargetAudienceSection";
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";
import { initFunnelManager } from "@/lib/funnelManager";

export const Lp = (): JSX.Element => {

  useEffect(() => {
    const cleanup = initFunnelManager();
    return cleanup;
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
