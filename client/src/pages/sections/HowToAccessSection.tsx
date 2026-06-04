import { Card, CardContent } from "@/components/ui/card";
import driveImg from "@assets/Untitled_Project-Photoroom_1780602284289.png";

const steps = [
  {
    image: "/figmaAssets/how-pagamento.png",
    text: "Efetue o pagamento de forma totalmente segura.",
  },
  {
    image: "/figmaAssets/how-email.png",
    text: "Receba imediatamente no seu Gmail o link de acesso ao material.",
  },
  {
    image: driveImg,
    text: "Abra o Drive e comece a estudar pelo celular, tablet ou computador.",
  },
];

export const HowToAccessSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            COMO VOCÊ RECEBE O ACESSO
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col px-5 pb-5 pt-4">
            <p className="mb-5 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-[#524949]">
              Seu acesso é liberado imediatamente após a confirmação do pagamento.
            </p>
            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111820] overflow-hidden">
                    <img
                      src={step.image}
                      alt={`Passo ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00ff48] [font-family:'Poppins',Helvetica] text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] text-[11px] font-semibold uppercase tracking-[0.5px] text-[#00ff48]">
                        Passo {index + 1}
                      </span>
                    </div>
                    <p className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-black">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
