import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { allowNavigation } from "@/lib/exitIntent";

const basicPlanFeatures = [
  "117 Páginas De Fármacos Explicados De Forma Objetiva (PDF)",
];

const completePlanFeatures = [
  "117 Páginas Dos Principais Fármacos",
  "Conceitos Básicos De Farmacologia",
  "Fármacos De Emergência E Urgência",
  "+ 75 Páginas De Casos Clínicos De Farmacologia",
  "Fármacos Microbianos Completos",
  "Psicofármacos Conceitos",
  "Fármacos Sistema Nervoso E Psicofármaco",
];

const arrowImages = ["/figmaAssets/arrow-4.svg", "/figmaAssets/arrow-4.svg"];

const paymentLogos = [
  {
    src: "/figmaAssets/pix-photoroom--1--1.webp",
    alt: "Pix photoroom",
    className: "h-14 w-full object-contain",
  },
  {
    src: "/figmaAssets/visa-logo-11530966316amvzjrobsf-photoroom-1.webp",
    alt: "Visa logo",
    className: "h-14 w-full object-contain",
  },
  {
    src: "/figmaAssets/r--1--photoroom-1.webp",
    alt: "R photoroom",
    className: "h-16 w-full object-contain",
  },
];

export const CompletePlanSection = (): JSX.Element => {
  return (
    <section id="oferta" className="relative mt-10 flex w-full justify-center px-4 pb-6">
      <div className="flex w-full max-w-lg flex-col gap-4">
        <Card className="rounded-2xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-5 pb-10 pt-5">
            <header className="mb-2">
              <h2 className="text-center [font-family:'Poppins',Helvetica] text-3xl font-black leading-tight tracking-[0.96px] text-black">
                Plano Básico
              </h2>
            </header>
            <img
              className="mt-1 w-full max-w-[260px] object-cover"
              alt="Magnific criar um"
              src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-6.webp"
            />
            <Separator className="mt-[-20px] w-full bg-[#d9d9d9b2]" />
            <ul className="mt-4 w-full list-none space-y-1 p-0">
              {basicPlanFeatures.map((feature, index) => (
                <li
                  key={`basic-feature-${index}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 block h-4 w-4 shrink-0 rounded-lg bg-[#00ff48]" />
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-semibold leading-6 tracking-[0.42px] text-black">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] text-center text-4xl font-semibold leading-tight tracking-[1.33px] text-[#019a01] sm:text-[42px]">
                R$ 15,90
              </p>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-center text-sm font-semibold leading-snug tracking-[0.39px] text-[#524949]">
                ou até 3x de R$ 5,30
              </p>
            </div>
            <a
              href="https://pay.cakto.com.br/p2cpxzq_905851"
              target="_blank"
              rel="noopener noreferrer"
              onClick={allowNavigation}
              className="mt-7 flex h-auto min-h-[60px] w-full items-center justify-center whitespace-normal rounded-[10.74px] bg-[#019a01] px-5 py-3 hover:bg-[#018301] no-underline transition-colors"
            >
              <span className="w-full [font-family:'Poppins',Helvetica] text-center text-xl font-semibold leading-snug tracking-[0.67px] text-white">
                Quero somente o básico
              </span>
            </a>
            <div className="mt-7 flex flex-col items-center">
              <p className="w-full text-center [font-family:'Poppins',Helvetica] text-sm font-semibold leading-5 tracking-[0.39px] text-[#ff0000]">
                <span className="tracking-[0.05px]">
                  ATENÇÃO: temos uma oferta ainda mais{" "}
                </span>
                <span className="tracking-[0.05px] underline">
                  vantajosa para você
                </span>
                <span className="tracking-[0.05px]">! veja logo abaixo</span>
              </p>
              <div className="mt-4 flex flex-col items-center gap-0">
                {arrowImages.map((src, index) => (
                  <img
                    key={`arrow-${index}`}
                    className="h-8 w-14"
                    alt="Arrow"
                    src={src}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-5 pb-8 pt-5">
            <header className="relative mb-2 flex w-full justify-center">
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#e9ff00]" />
              <h2 className="relative text-center [font-family:'Poppins',Helvetica] text-3xl font-black leading-tight tracking-[1.08px] text-black">
                PLANO COMPLETO
              </h2>
            </header>
            <img
              className="mt-2 w-full max-w-[260px] object-cover"
              alt="Magnific criar um"
              src="/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-7.webp"
            />
            <p className="mt-2 w-full text-center [font-family:'Poppins',Helvetica] text-sm font-semibold leading-5 tracking-[0.36px] text-black">
              Todos Os Materiais Na Versão Pdf(acesso Imediato)
            </p>
            <Separator className="mt-5 w-full bg-[#d9d9d9b2]" />
            <ul className="mt-4 flex w-full flex-col list-none p-0">
              {completePlanFeatures.map((feature, index) => (
                <li key={`complete-feature-${index}`} className="flex flex-col">
                  <div className="flex items-start gap-3 py-1">
                    <span className="mt-1 ml-4 block h-4 w-4 shrink-0 rounded-lg bg-[#00ff48]" />
                    <span className="[font-family:'Poppins',Helvetica] text-[15px] font-medium leading-6 tracking-[0.45px] text-black">
                      {feature}
                    </span>
                  </div>
                  {index < completePlanFeatures.length - 1 && (
                    <Separator className="mt-1 w-full bg-[#d9d9d9b2]" />
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex w-full flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] text-center text-base font-semibold leading-snug tracking-[0.5px] text-[#524949]">
                <span className="tracking-[0.08px]">De </span>
                <span className="tracking-[0.08px] text-[#ff0000] line-through">
                  R$197,00
                </span>
                <span className="tracking-[0.08px]"> por:</span>
              </p>
              <p className="mt-4 [font-family:'Poppins',Helvetica] text-center text-5xl font-semibold leading-tight tracking-[1.69px] text-[#019a01] sm:text-[52px]">
                R$ 25,90
              </p>
              <p className="mt-4 [font-family:'Poppins',Helvetica] text-center text-base font-semibold leading-snug tracking-[0.5px] text-[#524949]">
                ou até 5x de R$ 5,18
              </p>
              <Separator className="mt-6 w-full bg-[#d9d9d9b2]" />
            </div>
            <div className="mt-4 flex w-full flex-col items-center">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 w-6 object-cover"
                  alt="Istockphoto"
                  src="/figmaAssets/istockphoto-691856234-612x612-photoroom-2.webp"
                />
                <p className="[font-family:'Poppins',Helvetica] text-center text-base font-semibold leading-snug tracking-[0.5px] text-[#524949]">
                  Você vai economizar R$171,10
                </p>
              </div>
              <a
                href="https://pay.cakto.com.br/f2aq3km_905864"
                target="_blank"
                rel="noopener noreferrer"
                onClick={allowNavigation}
                className="mt-8 flex h-auto min-h-[60px] w-full items-center justify-center whitespace-normal rounded-[10.74px] bg-[#019a01] px-5 py-3 hover:bg-[#018301] no-underline transition-colors"
              >
                <span className="w-full [font-family:'Poppins',Helvetica] text-center text-xl font-semibold leading-snug tracking-[0.67px] text-white">
                  Quero o Plano Completo
                </span>
              </a>
              <p className="mt-4 [font-family:'Poppins',Helvetica] text-center text-base font-semibold leading-snug tracking-[0.5px] text-[#524949]">
                Compre agora mesmo!
              </p>
              <div className="mt-6 flex w-full items-end justify-around gap-2">
                {paymentLogos.map((logo, index) => (
                  <div key={`payment-logo-${index}`} className="flex flex-1 items-end justify-center overflow-hidden">
                    <img
                      className={logo.className}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
