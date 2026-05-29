import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    text: "Tem dificuldade para memorizar farmacologia",
    image: "/figmaAssets/ideal-memorizar.png",
  },
  {
    text: "Quer revisar mais rápido antes das provas",
    image: "/figmaAssets/ideal-revisar.png",
  },
  {
    text: "Se perde em PDFs enormes e cansativos",
    image: "/figmaAssets/ideal-pdfs.png",
  },
  {
    text: "Quer estudar pelo celular de forma prática",
    image: "/figmaAssets/ideal-celular.png",
  },
  {
    text: "Busca mais clareza nos mecanismos de ação",
    image: null,
  },
  {
    text: "Precisa revisar medicamentos em minutos",
    image: "/figmaAssets/ideal-minutos.png",
  },
  {
    text: "Quer estudar de forma mais visual e organizada",
    image: "/figmaAssets/ideal-visual.png",
  },
];

export const IdealForYouSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff2e] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            IDEAL PARA VOCÊ QUE:
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col gap-0 px-4 pb-4 pt-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b border-[#e5e5e5] py-3 last:border-0"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.text}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                ) : (
                  <div className="h-14 w-14 shrink-0" />
                )}
                <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-black">
                  {item.text}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
