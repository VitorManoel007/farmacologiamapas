import useEmblaCarousel from "embla-carousel-react";
import imgMarcus from "@assets/Group_1-ezremove_1780670125784.png";
import imgRafaela from "@assets/img_0136-ezremove_1780670125785.png";
import imgAndriele from "@assets/img_0136_(1)-ezremove_1780670125786.png";

const testimonials = [
  { img: imgMarcus, name: "Marcus" },
  { img: imgRafaela, name: "Rafaela" },
  { img: imgAndriele, name: "Andriele" },
];

export const TestimonialsSection = (): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <section className="mt-10 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#e9ff00] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-black">
            O QUE ESTÃO FALANDO SOBRE O MATERIAL
          </h2>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[80%] flex-shrink-0"
              >
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={t.img}
                    alt={`Depoimento de ${t.name}`}
                    className="w-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center [font-family:'Poppins',Helvetica] text-xs font-medium tracking-[0.36px] text-[#888]">
          ← Arraste para ver mais →
        </p>
      </div>
    </section>
  );
};
