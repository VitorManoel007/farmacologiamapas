import { Card, CardContent } from "@/components/ui/card";

const previewItems = [
  "Revisão Rápida",
  "Fácil de entender",
  "ilustrações",
  "Pouco texto",
];

export const MaterialPreviewSection = (): JSX.Element => {
  return (
    <section className="mt-[19px] flex w-full flex-col items-center px-3">
      <header className="w-full max-w-[376px] text-center [font-family:'Poppins',Helvetica] text-[22px] font-normal leading-[22px] tracking-[0.66px] text-[#00ff48]">
        <span className="font-bold tracking-[0.15px] leading-[0.1px]">
          Você vai receber um material único{" "}
        </span>
        <span className="font-bold tracking-[0.15px] leading-[25.3px] underline">
          totalmente visual e organizado
        </span>
        <span className="font-bold tracking-[0.15px] leading-[0.1px]">
          {" "}
          para facilitar a compreensão da farmacologia
        </span>
      </header>
      <div className="mt-[25px] flex w-full max-w-[346px] flex-col gap-[25px]">
        {previewItems.map((item) => (
          <Card
            key={item}
            className="rounded-[13px] border-0 bg-[#282d34] shadow-none"
          >
            <CardContent className="flex min-h-14 items-center justify-center px-4 py-3">
              <p className="[font-family:'Poppins',Helvetica] text-center text-2xl font-semibold leading-[18.4px] tracking-[0.72px] text-white">
                {item}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 w-full max-w-[376px] text-center [font-family:'Poppins',Helvetica] text-base font-medium leading-[12.3px] tracking-[0.48px] text-white">
        Nosso mapas mentais vão fazer <br />
        você decorar até duas 2x mais rápido de forma simples e pratico.
      </p>
    </section>
  );
};
