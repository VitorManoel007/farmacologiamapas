import { BasicPlanSection } from "./sections/BasicPlanSection";
import { CompletePlanSection } from "./sections/CompletePlanSection";
import { DeliverablesGridSection } from "./sections/DeliverablesGridSection";
import { FaqSection } from "./sections/FaqSection";
import { FeatureHighlightsSection } from "./sections/FeatureHighlightsSection";
import { FooterSection } from "./sections/FooterSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { HeroPromoSection } from "./sections/HeroPromoSection";
import { HowToAccessSection } from "./sections/HowToAccessSection";
import { IdealForYouSection } from "./sections/IdealForYouSection";
import { MaterialCarouselSection } from "./sections/MaterialCarouselSection";
import { PainIntensificationSection } from "./sections/PainIntensificationSection";
import { PerceivedValueSection } from "./sections/PerceivedValueSection";
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";
import { usePixelTracking } from "@/hooks/use-pixel-tracking";

export const Lp = (): JSX.Element => {
  // Track PageView on route change
  usePixelTracking();

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
      <BasicPlanSection />
      <CompletePlanSection />
      <HowToAccessSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
