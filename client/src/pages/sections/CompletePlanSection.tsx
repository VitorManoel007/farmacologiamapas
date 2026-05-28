import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const basicPlanFeatures = [
  "117 Paginas De Fármacos Explicados De Forma Objetiva(pdf)",
];

const completePlanFeatures = [
  "117 Paginas Dos Principais Fármacos",
  "Conceitos Básicos De Farmacologia",
  "Fármacos De Emergência E Urgência",
  "+ 75 Paginas De Casos Clínicos De Farmacologia",
  "Fármacos Microbianos Completos",
  "Psicofármacos Conceitos",
  "Fármacos Sistema Nervoso E Psicofármaco",
];

const arrowImages = ["/figmaAssets/arrow-4.svg", "/figmaAssets/arrow-4.svg"];

const paymentLogos = [
  {
    src: "/figmaAssets/pix-photoroom--1--1.png",
    alt: "Pix photoroom",
    className: "h-[84px] w-auto object-contain",
  },
  {
    src: "/figmaAssets/visa-logo-11530966316amvzjrobsf-photoroom-1.png",
    alt: "Visa logo",
    className: "h-[87px] w-auto object-contain",
  },
  {
    src: "/figmaAssets/r--1--photoroom-1.png",
    alt: "R photoroom",
    className: "h-[117px] w-auto object-contain",
  },
];

export const CompletePlanSection = (): JSX.Element => {
  return (
    <section className="relative mt-[60px] flex w-full justify-center px-3">
      <div className="flex w-full max-w-[542px] flex-col gap-0">
        <Card className="rounded-2xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-6 pb-[50px] pt-[19px]">
            <header className="mb-1">
              <h2 className="text-center [font-family:'Poppins',Helvetica] text-[32px] font-black leading-[36.9px] tracking-[0.96px] text-black">
                Plano Básico
              </h2>
            </header>
            <img
              className="mt-[2px] h-[308px] w-[308px] object-cover"
              alt="Magnific criar um"
              src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-6.png"
            />
            <Separator className="mt-[-27px] w-full max-w-[402px] bg-[#d9d9d9b2]" />
            <ul className="mt-3 w-full max-w-[366px] list-none space-y-0 p-0">
              {basicPlanFeatures.map((feature, index) => (
                <li
                  key={`basic-feature-${index}`}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 block h-4 w-4 shrink-0 rounded-lg bg-[#00ff48]" />
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-semibold leading-[16.1px] tracking-[0.42px] text-black">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-[44px] flex flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] text-center text-[44.4px] font-semibold leading-[34.1px] tracking-[1.33px] text-[#019a01]">
                R$ 15,90
              </p>
              <p className="mt-[8px] [font-family:'Poppins',Helvetica] text-center text-[13px] font-semibold leading-[10px] tracking-[0.39px] text-[#524949]">
                ou até 3x de R$ 5,30
              </p>
            </div>
            <Button
              type="button"
              className="mt-[33px] h-auto min-h-[62px] w-full max-w-[314px] rounded-[10.74px] bg-[#019a01] px-5 py-[14px] hover:bg-[#018301]"
            >
              <span className="[font-family:'Poppins',Helvetica] text-center text-[22.2px] font-semibold leading-[17.1px] tracking-[0.67px] text-white">
                Quero somente o básico
              </span>
            </Button>
            <div className="mt-[33px] flex flex-col items-center">
              <p className="max-w-[317px] text-center [font-family:'Poppins',Helvetica] text-[13px] font-semibold leading-[10px] tracking-[0.39px] text-[#ff0000]">
                <span className="tracking-[0.05px]">
                  ATENÇÃO: temos uma oferta ainda mais{" "}
                </span>
                <span className="tracking-[0.05px] underline">
                  vantajosa para você
                </span>
                <span className="tracking-[0.05px]">! veja logo abaixo</span>
              </p>
              <div className="mt-[17px] flex flex-col items-center gap-[0px]">
                {arrowImages.map((src, index) => (
                  <img
                    key={`arrow-${index}`}
                    className="h-[33px] w-[59px]"
                    alt="Arrow"
                    src={src}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-6 pb-[36px] pt-[19px]">
            <header className="relative mb-[3px] flex justify-center">
              <div className="absolute top-0 h-[39px] w-[402px] max-w-full bg-[#e9ff00]" />
              <h2 className="relative text-center [font-family:'Poppins',Helvetica] text-4xl font-black leading-[41.5px] tracking-[1.08px] text-black">
                PLANO COMPLETO
              </h2>
            </header>
            <img
              className="mt-[6px] h-[303px] w-[303px] object-cover"
              alt="Magnific criar um"
              src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-7.png"
            />
            <p className="mt-1 max-w-[379px] text-center [font-family:'Poppins',Helvetica] text-xs font-semibold leading-[13.8px] tracking-[0.36px] text-black">
              Todos Os Materiais Na Versão Pdf(acesso Imediato)
            </p>
            <Separator className="mt-6 w-full max-w-[402px] bg-[#d9d9d9b2]" />
            <ul className="mt-5 flex w-full max-w-[444px] flex-col list-none p-0">
              {completePlanFeatures.map((feature, index) => (
                <li key={`complete-feature-${index}`} className="flex flex-col">
                  <div className="flex items-start gap-[14px]">
                    <span className="mt-[1px] ml-7 block h-4 w-[18px] shrink-0 rounded-[8.8px/8px] bg-[#00ff48]" />
                    <span className="[font-family:'Poppins',Helvetica] text-[15px] font-medium leading-[17.3px] tracking-[0.45px] text-black">
                      {feature}
                    </span>
                  </div>
                  {index < completePlanFeatures.length - 1 && (
                    <Separator className="mt-[10px] w-full bg-[#d9d9d9b2]" />
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-[34px] flex w-full max-w-[448px] flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] text-center text-[16.5px] font-semibold leading-[12.7px] tracking-[0.5px] text-[#524949]">
                <span className="tracking-[0.08px]">De </span>
                <span className="tracking-[0.08px] text-[#ff0000] line-through">
                  R$197,00
                </span>
                <span className="tracking-[0.08px]"> por:</span>
              </p>
              <p className="mt-[18px] [font-family:'Poppins',Helvetica] text-center text-[56.5px] font-semibold leading-[43.4px] tracking-[1.69px] text-[#019a01]">
                R$ 25,90
              </p>
              <p className="mt-[23px] [font-family:'Poppins',Helvetica] text-center text-[16.5px] font-semibold leading-[12.7px] tracking-[0.5px] text-[#524949]">
                ou até 5x de R$ 5,18
              </p>
              <Separator className="mt-[28px] w-full max-w-[442px] bg-[#d9d9d9b2]" />
              <div className="mt-[24px] flex w-full items-center justify-start pl-[54px]">
                <img
                  className="h-[22px] w-[22px] object-cover"
                  alt="Istockphoto"
                  src="/figmaAssets/istockphoto-691856234-612x612-photoroom-2.png"
                />
              </div>
            </div>
            <div className="mt-[18px] flex w-full max-w-80 flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] text-center text-[16.5px] font-semibold leading-[12.7px] tracking-[0.5px] text-[#524949]">
                Você vai economizar R$171,10
              </p>
              <Button
                type="button"
                className="mt-10 h-auto min-h-[62px] w-full max-w-[314px] rounded-[10.74px] bg-[#019a01] px-5 py-[14px] hover:bg-[#018301]"
              >
                <span className="[font-family:'Poppins',Helvetica] text-center text-[22.2px] font-semibold leading-[17.1px] tracking-[0.67px] text-white">
                  Quero o Plano Completo
                </span>
              </Button>
              <p className="mt-5 [font-family:'Poppins',Helvetica] text-center text-[16.5px] font-semibold leading-[12.7px] tracking-[0.5px] text-[#524949]">
                Compre agora mesmo!
              </p>
            </div>
          </CardContent>
        </Card>
        <footer className="flex justify-center pb-[0px] pt-[6px]">
          <div className="flex w-full max-w-[318px] items-end justify-between gap-3">
            {paymentLogos.map((logo, index) => (
              <img
                key={`payment-logo-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};
