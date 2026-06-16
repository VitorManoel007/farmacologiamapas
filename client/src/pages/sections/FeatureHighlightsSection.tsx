import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const highlightItems = [
  "117 Páginas De Fármacos Explicados De Forma Objetiva",
  "Efeitos Adversos De Cada Fármaco;",
  "Farmacocinética De Cada Fármaco;",
  "Dose Correta De Cada Fármaco;",
  "Contraindicações De Cada Fármaco;",
  "Interações De Cada Fármaco;",
  "Nome Comercial De Cada Fármaco;",
  "Composição De Cada Fármaco;",
  "Ilustrações No Material;",
];

export const FeatureHighlightsSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-0">
        <header className="flex flex-col">
          <div className="flex min-h-[56px] items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-2">
            <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
              VOCÊ VAI RECEBER AO ADQUIRIR
              <br />O PRODUTO
            </h2>
          </div>
          <img
            className="mt-[-8px] w-full object-cover"
            alt="Magnific quero que"
            src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-6.webp"
          />
        </header>
        <Card className="mt-[-10px] overflow-hidden rounded-md border-0 bg-white shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col items-center px-3 pb-5 pt-5">
              <div className="flex w-full flex-col items-center">
                <div className="flex h-8 w-full max-w-[200px] items-center justify-center rounded-[2.95px] bg-[#00ff48]">
                  <span className="[font-family:'Poppins',Helvetica] text-center text-[19px] font-bold leading-[15.1px] tracking-[0.59px] text-white">
                    ITEM 01
                  </span>
                </div>
                <p className="mt-2 w-full text-center [font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[0.51px] text-black">
                  117 páginas dos principais fármacos explicados de forma
                  objetiva
                </p>
              </div>
              <Separator className="mt-4 h-px w-full bg-black" />
              <ul className="mt-3 flex w-full list-none flex-col p-0">
                {highlightItems.map((item, index) => (
                  <li key={item} className="flex flex-col">
                    <div className="flex min-h-[40px] items-center gap-3 px-2 py-1">
                      <img
                        className="h-7 w-7 shrink-0 object-cover"
                        alt="Istockphoto"
                        src="/figmaAssets/istockphoto-691856234-612x612-photoroom-2.webp"
                      />
                      <span
                        className="[font-family:'Poppins',Helvetica] text-left flex-1 text-sm font-medium leading-5 tracking-[0.27px] text-[#019a01]"
                      >
                        {item}
                      </span>
                    </div>
                    <Separator className="ml-0 mt-0 h-px w-full bg-[#c2bbbb]" />
                  </li>
                ))}
              </ul>
              <p className="mt-4 w-full text-center [font-family:'Poppins',Helvetica] text-lg font-medium leading-6 tracking-[0.54px] text-black">
                e muito mais...
              </p>
            </div>
          </CardContent>
        </Card>
        <Button
          type="button"
          data-testid="button-feature-highlights-cta"
          className="mt-6 h-auto min-h-[56px] w-full rounded-[7.33px] bg-[#00ff48] px-8 py-4 [font-family:'Poppins',Helvetica] text-lg font-semibold tracking-[0.45px] text-white hover:bg-[#00ff48]/90"
          onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="block leading-snug">Compra agora!</span>
        </Button>
      </div>
    </section>
  );
};
