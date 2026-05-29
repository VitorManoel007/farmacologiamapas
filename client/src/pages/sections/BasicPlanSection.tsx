import { Card, CardContent } from "@/components/ui/card";

const bonusCards = [
  {
    badge: "#1-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81.png",
    title: "CONCEITOS BÁSICOS DE FARMACOLOGIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Entenda todos os conceitos básicos de farmacologia por um mapa mental prático e rápido.
      </>
    ),
  },
  {
    badge: "#2-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-1.png",
    title: "FÁRMACOS DE EMERGÊNCIA E URGÊNCIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda de tudo sobre fármacos que são utilizados para salvar vidas, um material intuitivo e visual
      </>
    ),
  },
  {
    badge: "#4-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-2.png",
    title: "+ 75 PÁGINAS DE CASOS CLÍNICOS DE FARMACOLOGIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Anotações de casos reais de farmacologia, estude com quem já passou pela situação.
      </>
    ),
  },
  {
    badge: "#4-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-3.png",
    title: "FÁRMACOS MICROBIANOS COMPLETOS",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda tudo das contraindicações, efeitos adversos, dose, indicações e muito mais dos fármacos microbianos de forma lúdica.
      </>
    ),
  },
  {
    badge: "#5-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-4.png",
    title: "PSICOFÁRMACOS CONCEITOS",
    category: "MAPA MENTAL",
    description: (
      <>
        Receba todo o conhecimento dos psicofármacos em um material detalhado e fácil de entender.
      </>
    ),
  },
  {
    badge: "#6-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-5.png",
    title: "FÁRMACOS SISTEMA NERVOSO E PSICOFÁRMACO",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda tudo das contraindicações, efeitos adversos, dose, indicações e muito mais dos psicofármacos de forma lúdica.
      </>
    ),
  },
];

export const BasicPlanSection = (): JSX.Element => {
  return (
    <section className="mt-8 w-full px-4">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center">
        <header className="mb-4 flex w-full flex-col items-center text-center">
          <h2 className="[font-family:'Poppins',Helvetica] text-lg font-medium leading-6 tracking-[0.52px] text-white">
            E NÃO PARA POR AÍ...
          </h2>
          <p className="mt-1 [font-family:'Poppins',Helvetica] text-lg font-medium leading-6 tracking-[0.52px] text-white">
            TEM MAIS!
          </p>
          <p className="mt-1 [font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[0.46px] text-[#00ff2e]">
            Você vai receber...
          </p>
          <div className="mt-2 w-full rounded-[2.86px] bg-[#00ff2e] py-1.5">
            <p className="[font-family:'Poppins',Helvetica] text-lg font-medium leading-6 tracking-[0.52px] text-white">
              6 bônus exclusivos
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-2 gap-3">
          {bonusCards.map((card, index) => (
            <Card
              key={`${card.badge}-${index}`}
              data-testid={`card-bonus-${index}`}
              className="rounded-2xl border-0 bg-white shadow-none"
            >
              <CardContent className="flex h-full flex-col items-center px-3 pb-4 pt-3">
                <div className="relative flex w-full justify-center overflow-hidden rounded-xl bg-[#111820]" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="h-full w-full rounded-xl object-cover"
                    alt="Magnific criar um"
                    src={card.image}
                  />
                </div>
                <div className="mt-2 flex w-full items-center justify-center">
                  <div className="flex h-[18px] w-full items-center justify-center rounded-[3.46px] bg-[#00ff2e]">
                    <span className="[font-family:'Poppins',Helvetica] text-center text-[10px] font-medium leading-tight tracking-[0.34px] text-white">
                      {card.badge}
                    </span>
                  </div>
                </div>
                <div className="mt-1 flex w-full flex-1 flex-col items-center text-center">
                  <h3 className="w-full [font-family:'Poppins',Helvetica] text-[11px] font-semibold leading-[13px] tracking-[0.34px] text-black">
                    {card.title}
                  </h3>
                  <p className="mt-1 [font-family:'Playpen_Sans_Deva',Helvetica] text-[11px] font-medium leading-[13px] tracking-[0.34px] text-[#019a01]">
                    {card.category}
                  </p>
                  <div className="mt-1 h-px w-full bg-[#000000b2]" />
                  <p className="mt-2 w-full [font-family:'Poppins',Helvetica] text-[10.5px] font-normal leading-[13px] tracking-[0.35px] text-black">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
