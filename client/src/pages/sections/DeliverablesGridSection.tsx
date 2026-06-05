import { Card, CardContent } from "@/components/ui/card";

const deliverablesContent = {
  titleLines: [
    "Acesso ainda hoje, você vai",
    "entender tudo sobre farmacologia",
    "usando nossos mapas mentais.",
    "Chega de dúvidas!",
  ],
  ctaLabel: "Compra agora!",
};

export const DeliverablesGridSection = (): JSX.Element => {
  return (
    <section className="mt-3 w-full px-0">
      <Card className="w-full border-0 bg-[#ff0000] shadow-none rounded-none">
        <CardContent className="flex min-h-[200px] flex-col items-center justify-center px-5 py-8">
          <header className="w-full text-center">
            <h2 className="[font-family:'Poppins',Helvetica] text-xl font-bold tracking-[0.60px] text-white leading-7">
              {deliverablesContent.titleLines.map((line, index) => (
                <span
                  key={`deliverables-line-${index}`}
                  className="block"
                >
                  {line}
                </span>
              ))}
            </h2>
          </header>

        </CardContent>
      </Card>
    </section>
  );
};
