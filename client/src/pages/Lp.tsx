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
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";

export const Lp = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-[#101720]">
      <HeroPromoSection />
      <MaterialCarouselSection />
      <MaterialPreviewSection />
      <DeliverablesGridSection />
      <IdealForYouSection />
      <FeatureHighlightsSection />
      <BasicPlanSection />
      <CompletePlanSection />
      <HowToAccessSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
