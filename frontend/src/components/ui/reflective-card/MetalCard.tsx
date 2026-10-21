"use client";

import type { ReactNode } from "react";
import ReflectiveCard from "@/components/ui/reflective-card/ReflectiveCard";

/** Helles Bananengelb für die Metallfläche. */
const BANANA = "#ffe135";

type Props = { children: ReactNode; className?: string };

/**
 * Metallische Karte (React Bits ReflectiveCard) mit den Einstellungen der Seite:
 * bananengelbe Fläche mit dunkler Schrift, spiegelt das Hero-Video in Graustufen.
 */
export function MetalCard({ children, className = "" }: Props) {
  return (
    <ReflectiveCard
      theme="light"
      videoSrc="/videos/hero-background.mp4"
      tint={BANANA}
      metalness={0.35}
      roughness={0.3}
      blurStrength={14}
      shine={1}
      glare={0.5}
      grayscale={1}
      warp={0.6}
      warpScale={1}
      bevel={3}
      tiltStrength={12}
      radius={24}
      width="100%"
      height="100%"
      enableTilt
      intro
      className={`metal-card mono-light ${className}`.trim()}
    >
      {children}
    </ReflectiveCard>
  );
}
