"use client";

import { useMediaQuery } from "@/hooks/ui/useMediaQuery";

/** true, wenn Nutzer:innen im System "Bewegung reduzieren" eingestellt haben. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
