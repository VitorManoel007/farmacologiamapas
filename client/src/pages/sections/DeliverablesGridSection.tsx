import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const deliverablesContent = {
  titleLines: [
    "Acesso ainda hoje, você vai",
    "entender tudo sobre farmacologia",
    "usando nosso mapas mentais.",
    "chega de duvidas!",
  ],
  ctaLabel: "Compra agora!",
};

export const DeliverablesGridSection = (): JSX.Element => {
  return (
    <section className="mt-[9px] w-full px-0">
      <Card className="w-full border-0 bg-[#ff0000] shadow-none rounded-none">
        <CardContent className="flex min-h-[209px] flex-col items-center justify-center px-4 py-[30px]">
          <header className="max-w-[364px] text-center">
            <h2 className="[font-family:'Poppins',Helvetica] text-xl font-bold tracking-[0.60px] text-white">
              {deliverablesContent.titleLines.map((line, index) => (
                <span
                  key={`deliverables-line-${index}`}
                  className="block leading-[15.4px]"
                >
                  {line}
                </span>
              ))}
            </h2>
          </header>
          <Button
            type="button"
            className="mt-[26px] h-auto min-h-[38px] rounded-[7.33px] bg-[#00ff2e] px-8 py-[10px] [font-family:'Poppins',Helvetica] text-[15.1px] font-semibold tracking-[0.45px] text-white hover:bg-[#00ff2e]/90"
          >
            <span className="block leading-[11.6px]">
              {deliverablesContent.ctaLabel}
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
