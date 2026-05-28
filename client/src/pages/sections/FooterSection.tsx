export const FooterSection = (): JSX.Element => {
  return (
    <footer className="mt-10 w-full border-t border-[#ffffff15] px-4 pb-8 pt-8">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4">
        <p className="[font-family:'Poppins',Helvetica] text-center text-sm font-semibold leading-snug tracking-[0.42px] text-white">
          Farmacologia Mapas Mentais © 2026
        </p>
        <p className="[font-family:'Poppins',Helvetica] text-center text-xs font-normal leading-5 tracking-[0.36px] text-[#ffffff80]">
          Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            data-testid="link-terms"
            className="[font-family:'Poppins',Helvetica] text-xs font-normal leading-5 tracking-[0.36px] text-[#ffffff80] underline hover:text-white transition-colors"
          >
            Termos de Uso
          </a>
          <span className="text-[#ffffff30] text-xs">|</span>
          <a
            href="#"
            data-testid="link-privacy"
            className="[font-family:'Poppins',Helvetica] text-xs font-normal leading-5 tracking-[0.36px] text-[#ffffff80] underline hover:text-white transition-colors"
          >
            Política de Privacidade
          </a>
          <span className="text-[#ffffff30] text-xs">|</span>
          <a
            href="#"
            data-testid="link-support"
            className="[font-family:'Poppins',Helvetica] text-xs font-normal leading-5 tracking-[0.36px] text-[#ffffff80] underline hover:text-white transition-colors"
          >
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
};
