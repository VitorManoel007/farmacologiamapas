import { useRef, useState } from "react";

const carouselItems = [
  { image: "/figmaAssets/sample-domperidona.png", name: "Domperidona" },
  { image: "/figmaAssets/sample-estreptoquinasa.png", name: "Estreptoquinase" },
  { image: "/figmaAssets/sample-formoterol.png", name: "Formoterol" },
  { image: "/figmaAssets/sample-glimepirida.png", name: "Glimepirida" },
];

export const MaterialCarouselSection = (): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4;
    el.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(false);
    el.style.cursor = "grab";
    el.style.scrollSnapType = "x mandatory";
  };

  return (
    <section className="mt-5 w-full">
      <div className="mb-4 flex items-center justify-center px-4">
        <p className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.54px] text-white">
          Veja o material que você vai receber na prática!
        </p>
      </div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="w-[78vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl bg-[#1e2530] shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-auto w-full object-contain"
              draggable={false}
            />
          </div>
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  );
};
