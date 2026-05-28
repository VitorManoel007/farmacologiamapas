const guaranteeItems = [
  "Garantia total de 7 dias",
  "Reembolso simples",
  "Compra segura",
  "Sem burocracia",
];

export const GuaranteeSection = (): JSX.Element => {
  return (
    <section className="mt-6 w-full px-4">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center px-1 pb-6 pt-5">
        <img
          src="/figmaAssets/garantia-7-dias.png"
          alt="Selo de garantia 7 dias"
          className="h-28 w-28 object-contain"
        />
        <h2 className="mt-3 [font-family:'Poppins',Helvetica] text-center text-xl font-black leading-tight tracking-[0.60px] text-white">
          TESTE POR 7 DIAS SEM RISCO
        </h2>
        <p className="mt-2 text-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-[#ffffff99]">
          Se o material não ajudar nos seus estudos, devolvemos 100% do seu dinheiro.
        </p>
        <div className="mt-4 flex w-full flex-col gap-0">
          {guaranteeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b border-[#ffffff15] py-3 last:border-0"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00ff2e] text-white text-xs font-bold">
                ✓
              </span>
              <span className="[font-family:'Poppins',Helvetica] text-sm font-medium leading-5 tracking-[0.42px] text-white">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
