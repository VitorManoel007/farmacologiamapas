import { Card, CardContent } from "@/components/ui/card";
import imgFarmacologiaGeral from "@assets/flat_v2_farmacologia_geral_1780659442136.png";
import imgPsicofarmacos from "@assets/flat_v2_psicofarmacos_1780659442136.png";
import imgEmergencia from "@assets/flat_v2_emergencia_urgencia_1780659442136.png";
import imgFarmacosMicrobianos from "@assets/flat_v2_farmacos_microbianos_1780659442135.png";
import imgCasosClinicos from "@assets/flat_v2_casos_clinicos_1780659442135.png";
import imgConceitosFundamentais from "@assets/flat_v2_conceitos_fundamentais_1780659442134.png";

const valueItems = [
  { img: imgFarmacologiaGeral, label: "Farmacologia Geral" },
  { img: imgPsicofarmacos, label: "Psicofármacos" },
  { img: imgEmergencia, label: "Emergência e Urgência" },
  { img: imgFarmacosMicrobianos, label: "Fármacos Microbianos" },
  { img: imgCasosClinicos, label: "Casos Clínicos" },
  { img: imgConceitosFundamentais, label: "Conceitos Fundamentais" },
];

export const PerceivedValueSection = (): JSX.Element => {
  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#00ff48] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-white">
            VOCÊ NÃO ESTÁ RECEBENDO APENAS MAPAS DE FARMACOLOGIA
          </h2>
        </div>
        <Card className="w-full rounded-xl border-0 bg-white shadow-none">
          <CardContent className="flex flex-col items-center px-5 pb-6 pt-5">
            <p className="mb-6 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Ao escolher o Plano Completo você recebe acesso a uma biblioteca completa de revisão farmacológica.
            </p>
            <div className="grid w-full grid-cols-2 gap-3">
              {valueItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-xl border border-[#e8e8e8] bg-[#f9f9f9] p-2"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-32 w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="mt-5 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-6 tracking-[0.42px] text-[#524949]">
              Tudo organizado para facilitar seus estudos e economizar horas de revisão.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
