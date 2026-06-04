import { Card, CardContent } from "@/components/ui/card";

const valueItems = [
  { emoji: "📚", label: "Farmacologia Geral" },
  { emoji: "💊", label: "Psicofármacos" },
  { emoji: "🚑", label: "Emergência e Urgência" },
  { emoji: "🦠", label: "Fármacos Microbianos" },
  { emoji: "📋", label: "Casos Clínicos" },
  { emoji: "🧠", label: "Conceitos Fundamentais" },
];

export const PerceivedValueSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            VOCÊ NÃO ESTÁ RECEBENDO APENAS MAPAS DE FARMACOLOGIA
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-5 pb-6 pt-5">
            <p className="mb-6 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Ao escolher o Plano Completo você recebe acesso a uma biblioteca completa de revisão farmacológica.
            </p>
            <div className="grid w-full grid-cols-2 gap-3">
              {valueItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#e8e8e8] bg-[#f9f9f9] px-3 py-4"
                >
                  <span className="text-3xl leading-none">{item.emoji}</span>
                  <span className="text-center [font-family:'Poppins',Helvetica] text-xs font-semibold leading-5 tracking-[0.36px] text-[#1a1a1a]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Tudo organizado para facilitar seus estudos e economizar horas de revisão.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
