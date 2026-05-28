import { Card, CardContent } from "@/components/ui/card";

const items = [
  "Tem dificuldade para memorizar farmacologia",
  "Quer revisar mais rápido antes das provas",
  "Se perde em PDFs enormes e cansativos",
  "Quer estudar pelo celular de forma prática",
  "Busca mais clareza nos mecanismos de ação",
  "Precisa revisar medicamentos em minutos",
  "Quer estudar de forma mais visual e organizada",
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
              <div key={index} className="flex items-start gap-3 py-3 border-b border-[#e5e5e5] last:border-0">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ff2e] text-white text-xs font-bold">
                  ✓
                </span>
                <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-black">
                  {item}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
