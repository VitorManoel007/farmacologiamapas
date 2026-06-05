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
      <div className="mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="mb-4 flex w-full items-center justify-center rounded-[3px] bg-[#e9ff00] px-4 py-3">
          <h2 className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.60px] text-black">
            O QUE ESTÃO FALANDO SOBRE O MATERIAL
          </h2>
        </div>

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-full flex-shrink-0"
              >
                <div className="overflow-hidden rounded-2xl shadow-md" style={{ background: "transparent" }}>
                  <img
                    src={t.img}
                    alt={`Depoimento de ${t.name}`}
                    className="h-auto object-contain"
                    draggable={false}
                    style={{ maxWidth: "300px", borderRadius: "12px", display: "block", margin: "0 auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="h-1.5 w-6 rounded-full bg-[#e9ff00] opacity-60"
            />
          ))}
        </div>

        <p className="mt-2 text-center [font-family:'Poppins',Helvetica] text-xs font-medium tracking-[0.36px] text-[#888]">
          ← Arraste para ver mais →
        </p>
      </div>
    </section>
  );
};
