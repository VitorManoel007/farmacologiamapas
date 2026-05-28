import { Card, CardContent } from "@/components/ui/card";

const bonusCards = [
  {
    badge: "#1-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81.png",
    imageWrapperClassName: "pt-[5px]",
    imageBackdropClassName: "mt-[5px]",
    imageClassName: "ml-[-7px] mt-[-3px] h-[154px] w-[154px]",
    title: "CONCEITOS BÁSICOS DE FARMACOLOGIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Entenda todos os conceitos
        <br />
        básicos de farmacologia por um mapa mental pratico e rápido.
      </>
    ),
  },
  {
    badge: "#2-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-1.png",
    imageWrapperClassName: "pt-px",
    imageBackdropClassName: "mt-[9px]",
    imageClassName: "ml-[-7px] mt-[-3px] h-[154px] w-[154px]",
    title: "FÁRMACOS DE EMERGÊNCIA E URGÊNCIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda de tudo sobre fármacos que são utilizados
        <br />
        para salvar vidas, um material intuitivo e visual
      </>
    ),
  },
  {
    badge: "#4-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-2.png",
    imageWrapperClassName: "pt-px",
    imageBackdropClassName: "mt-[9px]",
    imageClassName: "ml-[-7px] mt-[-3px] h-[154px] w-[154px]",
    title: "+ 75 PAGINAS DE CASOS CLÍNICOS DE FARMACOLOGIA",
    category: "MAPA MENTAL",
    description: (
      <>
        Anotações de casos reais de <br />
        farmacologia, estude com quem já passou pela situação.
      </>
    ),
  },
  {
    badge: "#4-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-3.png",
    imageWrapperClassName: "pt-px",
    imageBackdropClassName: "mt-[9px]",
    imageClassName: "ml-[-7px] mt-[-3px] h-[154px] w-[154px]",
    title: "FÁRMACOS MICROBIANOS COMPLETOS",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda tudo das contraindicações, efeitos adversos,&nbsp;&nbsp;dose,
        indicações e muito mais dos fármacos microbianos de forma lúdica.
      </>
    ),
  },
  {
    badge: "#5-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-4.png",
    imageWrapperClassName: "pt-0",
    imageBackdropClassName: "mt-[9px]",
    imageClassName: "ml-[-7px] mt-[-3px] h-[154px] w-[154px]",
    title: (
      <>
        PSICOFÁRMACOS <br />
        CONCEITOS
      </>
    ),
    category: "MAPA MENTAL",
    description: (
      <>
        Recebe todo o conhecimento dos psicofármacos em um material detalhado e{" "}
        <br />
        fácil de entender.
      </>
    ),
  },
  {
    badge: "#6-BÔNUS HOJE!",
    image:
      "/figmaAssets/magnific--criar-um-mockup-moderno-e-altamente-chamativo-para--81-5.png",
    imageWrapperClassName: "pt-1",
    imageBackdropClassName: "mt-[5px]",
    imageClassName: "ml-[-3px] mt-[-3px] h-36 w-36",
    title: "FÁRMACOS SISTEMA NERVOSO E PSICOFÁRMACO",
    category: "MAPA MENTAL",
    description: (
      <>
        Aprenda tudo das contraindicações, efeitos adversos,&nbsp;&nbsp;dose,
        indicações e muito mais dos psicofármacos de forma lúdica.
      </>
    ),
  },
];

export const BasicPlanSection = (): JSX.Element => {
  return (
    <section className="mt-[36.5px] w-full px-[6px]">
      <div className="mx-auto flex w-full max-w-[383px] flex-col items-center">
        <header className="mb-[13px] flex w-full max-w-[371px] flex-col items-center text-center">
          <h2 className="[font-family:'Poppins',Helvetica] text-[17.2px] font-medium leading-[19.8px] tracking-[0.52px] text-white">
            E NÃO PARA POR AÍ...
          </h2>
          <p className="mt-[6px] [font-family:'Poppins',Helvetica] text-[17.2px] font-medium leading-[19.8px] tracking-[0.52px] text-white">
            TEM MAIS!
          </p>
          <p className="mt-[6px] [font-family:'Poppins',Helvetica] text-[15.3px] font-medium leading-[17.6px] tracking-[0.46px] text-[#00ff2e]">
            Você vai receber...
          </p>
          <div className="mt-[8px] w-full rounded-[2.86px] bg-[#00ff2e] py-[2px]">
            <p className="[font-family:'Poppins',Helvetica] text-[17.2px] font-medium leading-[19.8px] tracking-[0.52px] text-white">
              6 bônus exclusivos
            </p>
          </div>
        </header>
        <div className="grid w-full grid-cols-2 gap-x-[11px] gap-y-[12px]">
          {bonusCards.map((card, index) => (
            <Card
              key={`${card.badge}-${index}`}
              className="rounded-[16.17px] border-0 bg-white shadow-none"
            >
              <CardContent className="flex h-full min-h-[311px] flex-col items-center px-5 pb-5 pt-px">
                <div
                  className={`relative flex h-[141px] w-[141px] justify-center overflow-visible ${card.imageWrapperClassName}`}
                >
                  <div
                    className={`h-[121px] w-[141px] rounded-[10.39px] bg-[#111820] ${card.imageBackdropClassName}`}
                  />
                  <img
                    className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-[17.32px] object-cover ${card.imageClassName}`}
                    alt="Magnific criar um"
                    src={card.image}
                  />
                </div>
                <div className="mt-px flex h-[22px] w-[148px] items-start justify-center">
                  <div className="mt-px flex h-[15px] w-[146px] items-center justify-center rounded-[3.46px] bg-[#00ff2e]">
                    <span className="[font-family:'Poppins',Helvetica] text-center text-[11.2px] font-medium leading-[12.9px] tracking-[0.34px] text-white">
                      {card.badge}
                    </span>
                  </div>
                </div>
                <div className="mt-[-1px] flex w-full flex-1 flex-col items-center text-center">
                  <h3 className="min-h-[26px] max-w-[173px] [font-family:'Poppins',Helvetica] text-[11.2px] font-medium leading-[12.9px] tracking-[0.34px] text-black">
                    {card.title}
                  </h3>
                  <p className="mt-[2px] max-w-[131px] [font-family:'Playpen_Sans_Deva',Helvetica] text-[11.2px] font-medium leading-[12.9px] tracking-[0.34px] text-[#019a01]">
                    {card.category}
                  </p>
                  <div className="mt-[2px] h-px w-full bg-[#000000b2]" />
                  <p className="mt-3 max-w-[187px] [font-family:'Poppins',Helvetica] text-[11.5px] font-normal leading-[13.3px] tracking-[0.35px] text-black">
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
