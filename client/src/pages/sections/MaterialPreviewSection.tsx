import { Card, CardContent } from "@/components/ui/card";

const previewItems = [
  "Revisão Rápida",
  "Fácil de entender",
  "ilustrações",
  "Pouco texto",
];

export const MaterialPreviewSection = (): JSX.Element => {
  return (
    <section className="mt-5 flex w-full flex-col items-center px-5">
      <header className="w-full text-center [font-family:'Poppins',Helvetica] text-xl font-normal leading-7 tracking-[0.66px] text-[#00ff48]">
        <span className="font-bold">
          Você vai receber um material único{" "}
        </span>
        <span className="font-bold underline">
          totalmente visual e organizado
        </span>
        <span className="font-bold">
          {" "}
          para facilitar a compreensão da farmacologia
        </span>
      </header>
      <div className="mt-6 flex w-full flex-col gap-4">
        {previewItems.map((item) => (
          <Card
            key={item}
            className="rounded-[13px] border-0 bg-[#282d34] shadow-none"
          >
            <CardContent className="flex min-h-14 items-center justify-center px-5 py-4">
              <p className="[font-family:'Poppins',Helvetica] text-center text-2xl font-semibold leading-tight tracking-[0.72px] text-white">
                {item}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-7 w-full text-center [font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[0.48px] text-white">
        Nossos mapas mentais vão fazer você decorar até duas 2x mais rápido de forma simples e prático.
      </p>
    </section>
  );
};
