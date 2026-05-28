import { BasicPlanSection } from "./sections/BasicPlanSection";
import { CompletePlanSection } from "./sections/CompletePlanSection";
import { DeliverablesGridSection } from "./sections/DeliverablesGridSection";
import { FaqSection } from "./sections/FaqSection";
import { FeatureHighlightsSection } from "./sections/FeatureHighlightsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroPromoSection } from "./sections/HeroPromoSection";
import { IdealForYouSection } from "./sections/IdealForYouSection";
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";

export const Lp = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-[#101720]">
      <HeroPromoSection />
      <MaterialPreviewSection />
      <DeliverablesGridSection />
      <FeatureHighlightsSection />
      <IdealForYouSection />
      <BasicPlanSection />
      <CompletePlanSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
