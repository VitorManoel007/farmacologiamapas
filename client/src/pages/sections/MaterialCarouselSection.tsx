const carouselItems = [
  {
    image: "/figmaAssets/sample-domperidona.png",
    name: "Domperidona",
    description: "Antiemético / Procinético",
  },
  {
    image: "/figmaAssets/sample-estreptoquinasa.png",
    name: "Estreptoquinase",
    description: "Trombolítico",
  },
  {
    image: "/figmaAssets/sample-formoterol.png",
    name: "Formoterol",
    description: "Brocodilatador / Betadrenérgico",
  },
  {
    image: "/figmaAssets/sample-glimepirida.png",
    name: "Glimepirida",
    description: "Sulfonilureia de segunda geração",
  },
];

export const MaterialCarouselSection = (): JSX.Element => {
  return (
    <section className="mt-5 w-full">
      <div className="mb-4 flex items-center justify-center px-4">
        <p className="[font-family:'Poppins',Helvetica] text-center text-lg font-bold leading-6 tracking-[0.54px] text-white">
          Veja o material que você vai receber na prática!
        </p>
      </div>
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
            <div className="px-4 pb-4 pt-3">
              <p className="[font-family:'Poppins',Helvetica] text-sm font-bold leading-5 tracking-[0.42px] text-white">
                {item.name}
              </p>
              <p className="mt-0.5 [font-family:'Poppins',Helvetica] text-xs font-medium leading-4 tracking-[0.36px] text-[#00ff48]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  );
};
