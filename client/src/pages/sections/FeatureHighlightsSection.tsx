import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const highlightItems = [
  "117 Paginas De Fármacos Explicados De Forma Objetiva",
  "Efeitos Adversos De Cada Fármaco;",
  "Farmacocinética De Cada Fármaco ;",
  "Dose Correta De Cada Fármaco;",
  "Contradições De Cada Fármaco;",
  "Interações De Cada Fármaco;",
  "Nome Comercial De Cada Fármaco;",
  "Composição De Cada Fármaco;",
  "Ilustrações No Material;",
];

export const FeatureHighlightsSection = (): JSX.Element => {
  return (
    <section className="mt-14 w-full px-5">
      <div className="mx-auto flex w-full max-w-[364px] flex-col gap-0">
        <header className="flex flex-col">
          <div className="flex min-h-[55px] items-center justify-center rounded-[3px] bg-[#00ff2e] px-4 py-[3px]">
            <h2 className="[font-family:'Poppins',Helvetica] text-center text-xl font-bold leading-[15.4px] tracking-[0.60px] text-white">
              VOCÊ VAI RECEBER AO ADQUIRIR
              <br />O PRODUTO
            </h2>
          </div>
          <img
            className="mt-[-8px] w-full object-cover"
            alt="Magnific quero que"
            src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-6.png"
          />
        </header>
        <Card className="mt-[-10px] overflow-hidden rounded-md border-0 bg-white shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col items-center px-[5px] pb-4 pt-[19px]">
              <div className="flex w-full flex-col items-center">
                <div className="flex h-[30px] w-[188px] items-center justify-center rounded-[2.95px] bg-[#00ff2e]">
                  <span className="[font-family:'Poppins',Helvetica] text-center text-[19.7px] font-bold leading-[15.1px] tracking-[0.59px] text-white">
                    ITEM 01
                  </span>
                </div>
                <p className="mt-[3px] w-[291px] [font-family:'Poppins',Helvetica] text-center text-[17px] font-medium leading-[19.6px] tracking-[0.51px] text-black">
                  117 paginas dos principais fármacos explicados de forma
                  objetiva
                </p>
              </div>
              <Separator className="mt-[18px] h-px w-full bg-black" />
              <ul className="mt-[10px] flex w-full list-none flex-col p-0">
                {highlightItems.map((item, index) => (
                  <li key={item} className="flex flex-col">
                    <div className="flex min-h-[34px] items-start gap-3 px-3">
                      <img
                        className="mt-0 h-[30px] w-[30px] shrink-0 object-cover"
                        alt="Istockphoto"
                        src="/figmaAssets/istockphoto-691856234-612x612-photoroom-2.png"
                      />
                      <span
                        className={`[font-family:'Poppins',Helvetica] ${
                          index === 0 ? "text-center" : "text-left"
                        } mt-[9px] block w-[268px] text-[9.1px] font-medium leading-[10.5px] tracking-[0.27px] text-[#019a01]`}
                      >
                        {item}
                      </span>
                    </div>
                    <Separator className="ml-0 mt-0 h-px w-full bg-[#c2bbbb]" />
                  </li>
                ))}
              </ul>
              <p className="mt-[14px] w-[283px] [font-family:'Poppins',Helvetica] text-center text-lg font-medium leading-[20.7px] tracking-[0.54px] text-black">
                e muito mais...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
