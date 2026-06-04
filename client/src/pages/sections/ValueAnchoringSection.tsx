import { Card, CardContent } from "@/components/ui/card";

const checklistItems = [
  "Indicações",
  "Contraindicações",
  "Efeitos adversos",
  "Interações medicamentosas",
  "Farmacocinética",
  "Dose",
];

export const ValueAnchoringSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            QUANTO VALE TER TUDO ORGANIZADO EM UM ÚNICO LUGAR?
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col px-5 pb-7 pt-6">
            <p className="mb-1 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Imagine precisar revisar um medicamento minutos antes de uma prova, estágio ou atividade prática.
            </p>
            <p className="mb-6 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Agora imagine encontrar rapidamente:
            </p>
            <div className="flex flex-col gap-0">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-[#f0eded] py-3 last:border-0"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00ff48] text-white text-xs font-bold">
                    ✓
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-[#1a1a1a]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Sem precisar procurar em vários PDFs, apostilas ou livros diferentes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
