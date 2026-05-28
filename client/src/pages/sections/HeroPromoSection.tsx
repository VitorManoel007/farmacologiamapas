import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const headingParts = {
  prefix: "Mais de",
  highlighted: "110 mapas mentais",
  suffix: "para você decorar farmacologia",
};

const descriptionParts = {
  text: "Mapas mentais detalhados e faceeis de entender: cada medicamento explicados em mais de 110 paginas de forma clara e com ilustrações, sem  textos longos, para você entender cada componente de imediato.",
  price: "por apenas 15,90",
};

export const HeroPromoSection = (): JSX.Element => {
  return (
    <section className="relative mt-5 w-full">
      <Card className="mx-auto w-full max-w-lg border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center px-5 pb-0 pt-0">
          <header className="w-full text-center [font-family:'Inter',Helvetica] text-xl font-normal leading-7 tracking-[0] text-white">
            <span className="font-medium">{headingParts.prefix}</span>
            <span className="font-bold">&nbsp;</span>
            <span className="font-bold text-[#00ff48] underline">
              {headingParts.highlighted}
            </span>
            <span className="font-medium">
              {" "}
              para <br />
              você decorar farmacologia
            </span>
          </header>
          <figure className="mt-5 w-full">
            <img
              className="h-auto w-full max-w-full object-contain"
              alt="Ilustração promocional sobre farmacologia"
              src="/figmaAssets/magnific-quero-que-mude-o-tema-que-2989263901-1.png"
            />
          </figure>
          <p className="mt-6 w-full text-center [font-family:'Inter',Helvetica] text-base font-normal leading-6 tracking-[0] text-white">
            {descriptionParts.text}
            <span className="font-black text-[#00ff48]">
              {" "}
              {descriptionParts.price}
            </span>
          </p>
          <Button
            type="button"
            data-testid="button-hero-cta"
            className="mt-6 h-auto min-h-[52px] w-full max-w-xs rounded-[13px] bg-[#00ff48] px-6 py-3 [font-family:'Inter',Helvetica] text-center text-lg font-bold leading-[normal] tracking-[0] text-white hover:bg-[#00e643]"
          >
            QUERO ADQUIRIR O MEU
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
