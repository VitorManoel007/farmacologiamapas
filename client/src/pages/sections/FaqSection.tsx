import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quando recebo o material?",
    answer:
      "O acesso é enviado imediatamente no seu e-mail após a confirmação do pagamento.",
  },
  {
    question: "O material é físico?",
    answer: "Não. Todo o conteúdo é digital em PDF.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. O material foi otimizado para celular, tablet e computador.",
  },
  {
    question: "O acesso expira?",
    answer: "Não. O acesso é vitalício.",
  },
  {
    question: "Serve para qual área?",
    answer:
      "Ideal para estudantes da área da saúde que estudam farmacologia.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Sim. O pagamento é processado em ambiente totalmente seguro.",
  },
];

export const FaqSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff2e] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            DÚVIDAS FREQUENTES
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col gap-0 px-4 pb-2 pt-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#e5e5e5] last:border-0">
                <button
                  data-testid={`button-faq-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                >
                  <span className="[font-family:'Poppins',Helvetica] text-sm font-semibold leading-5 tracking-[0.42px] text-black">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#019a01] transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="[font-family:'Poppins',Helvetica] text-sm font-normal leading-5 tracking-[0.42px] text-[#524949]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Button
          type="button"
          data-testid="button-faq-cta"
          className="mt-5 h-auto min-h-[52px] w-full rounded-[13px] bg-[#00ff48] px-6 py-3 [font-family:'Poppins',Helvetica] text-base font-bold leading-snug tracking-[0] text-white hover:bg-[#00e643]"
        >
          GARANTIR MEU ACESSO AGORA
        </Button>
      </div>
    </section>
  );
};
