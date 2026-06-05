import { Card, CardContent } from "@/components/ui/card";

const audienceItems = [
  "Farmácia",
  "Enfermagem",
  "Medicina",
  "Biomedicina",
  "Fisioterapia",
  "Odontologia",
  "Profissionais da área da saúde",
];

export const TargetAudienceSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            PARA QUEM ESTE MATERIAL FOI DESENVOLVIDO?
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col px-5 pb-5 pt-5">
            <p className="mb-5 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Ideal para estudantes e profissionais da área da saúde que desejam revisar farmacologia de forma mais rápida e organizada.
            </p>
            <div className="flex flex-col gap-0">
              {audienceItems.map((item, index) => (
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
