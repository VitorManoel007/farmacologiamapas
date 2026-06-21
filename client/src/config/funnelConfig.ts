export const FUNNEL = {
  main: "/",
  downsell1: "https://vitor-downseel-01-1--emocionaloferta.replit.app/",
  downsell2: "https://vitor-downseel-01--vitorbelezatikt.replit.app/",
} as const;

export type FunnelStep = "main" | "ds1" | "ds2" | "finished";
export const FUNNEL_STEP_KEY = "funnel_step";
