import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TARGET_MINUTES = 15;

function useCountdown(minutes: number) {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return { mm, ss, expired: seconds <= 0 };
}

export const UrgencySection = (): JSX.Element => {
  const { mm, ss, expired } = useCountdown(TARGET_MINUTES);

  return (
    <section className="w-full bg-[#111820] px-4 py-8">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4">
        <p className="[font-family:'Poppins',Helvetica] text-center text-sm font-semibold uppercase tracking-[0.5px] text-[#ff0000]">
          ⚠ Oferta por tempo limitado!
        </p>
        <p className="[font-family:'Poppins',Helvetica] text-center text-base font-medium leading-6 tracking-[0.48px] text-white">
          Garanta agora antes que o preço suba.
          <br />
          Esta oferta expira em:
        </p>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00ff2e]">
              <span
                data-testid="countdown-minutes"
                className="[font-family:'Poppins',Helvetica] text-2xl font-black leading-none text-white"
              >
                {expired ? "00" : mm}
              </span>
            </div>
            <span className="mt-1 [font-family:'Poppins',Helvetica] text-[10px] font-medium uppercase tracking-[0.5px] text-[#ffffff80]">
              min
            </span>
          </div>
          <span className="mb-4 [font-family:'Poppins',Helvetica] text-2xl font-black text-white">
            :
          </span>
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00ff2e]">
              <span
                data-testid="countdown-seconds"
                className="[font-family:'Poppins',Helvetica] text-2xl font-black leading-none text-white"
              >
                {expired ? "00" : ss}
              </span>
            </div>
            <span className="mt-1 [font-family:'Poppins',Helvetica] text-[10px] font-medium uppercase tracking-[0.5px] text-[#ffffff80]">
              seg
            </span>
          </div>
        </div>
        <Button
          type="button"
          data-testid="button-urgency-cta"
          className="mt-1 h-auto min-h-[52px] w-full rounded-[13px] bg-[#00ff48] px-6 py-3 [font-family:'Poppins',Helvetica] text-lg font-bold leading-snug tracking-[0] text-white hover:bg-[#00e643]"
        >
          QUERO GARANTIR AGORA
        </Button>
      </div>
    </section>
  );
};
