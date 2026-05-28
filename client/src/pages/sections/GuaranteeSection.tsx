import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const guaranteeItems = [
  "Garantia total de 7 dias",
  "Reembolso simples",
  "Compra segura",
  "Sem burocracia",
];

export const GuaranteeSection = (): JSX.Element => {
  return (
    <section className="mt-6 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-5 pb-6 pt-5">
            <img
              src="/figmaAssets/garantia-7-dias.png"
              alt="Selo de garantia 7 dias"
              className="h-28 w-28 object-contain"
            />
            <h2 className="mt-3 [font-family:'Poppins',Helvetica] text-center text-xl font-black leading-tight tracking-[0.60px] text-black">
              TESTE POR 7 DIAS SEM RISCO
            </h2>
            <p className="mt-2 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-[#524949]">
              Se o material não ajudar nos seus estudos, devolvemos 100% do seu dinheiro.
            </p>
            <div className="mt-4 flex w-full flex-col gap-0">
              {guaranteeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-[#e5e5e5] py-3 last:border-0"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ff2e] text-white text-xs font-bold">
                    ✓
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Button
              type="button"
              data-testid="button-guarantee-cta"
              className="mt-6 h-auto min-h-[52px] w-full rounded-[13px] bg-[#00ff48] px-6 py-3 [font-family:'Poppins',Helvetica] text-base font-bold leading-snug tracking-[0] text-white hover:bg-[#00e643]"
            >
              GARANTIR MEU ACESSO AGORA
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
