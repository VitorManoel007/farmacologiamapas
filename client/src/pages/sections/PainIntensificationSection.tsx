import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  "Esquecer medicamentos importantes",
  "Confundir indicações e contraindicações",
  "Precisar revisar tudo novamente antes das provas",
  "Sentir insegurança durante estágios e práticas",
];

export const PainIntensificationSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            FARMACOLOGIA NÃO É APENAS SOBRE PASSAR NA PROVA
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col px-5 pb-6 pt-5">
            <p className="mb-1 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Hoje você pode estar estudando para uma avaliação.
            </p>
            <p className="mb-1 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Mas amanhã estará diante de pacientes, prescrições, estágios e situações reais.
            </p>
            <p className="mb-6 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Ter dificuldade para lembrar medicamentos, contraindicações, doses e mecanismos de ação não afeta apenas suas notas. Afeta também sua segurança e confiança profissional.
            </p>
            <div className="flex flex-col gap-3">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#f0eded] bg-[#fafafa] px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f0] text-lg">
                    ❌
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-[#1a1a1a]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
