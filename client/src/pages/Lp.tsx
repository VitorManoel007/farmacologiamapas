import { BasicPlanSection } from "./sections/BasicPlanSection";
import { CompletePlanSection } from "./sections/CompletePlanSection";
import { DeliverablesGridSection } from "./sections/DeliverablesGridSection";
import { FeatureHighlightsSection } from "./sections/FeatureHighlightsSection";
import { HeroPromoSection } from "./sections/HeroPromoSection";
import { MaterialPreviewSection } from "./sections/MaterialPreviewSection";

export const Lp = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-[#101720]">
      <HeroPromoSection />
      <MaterialPreviewSection />
      <DeliverablesGridSection />
      <FeatureHighlightsSection />
      <BasicPlanSection />
      <CompletePlanSection />
    </main>
  );
};
