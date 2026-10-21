"use client";

import type { ReactNode } from "react";
import ReflectiveCard from "@/components/ui/reflective-card/ReflectiveCard";

type Props = { children: ReactNode; light?: boolean; className?: string };

/**
 * Metallische Karte (React Bits ReflectiveCard) mit den Einstellungen der Seite:
 * spiegelt das Hero-Video in Graustufen. `light` = silberne Variante mit dunkler Schrift.
 */
export function MetalCard({ children, light = false, className = "" }: Props) {
  return (
    <ReflectiveCard
      theme={light ? "light" : "dark"}
      videoSrc="/videos/hero-background.mp4"
      tint="#ffffff"
      metalness={1}
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
      className={`metal-card ${light ? "mono-light" : ""} ${className}`.trim()}
    >
      {children}
    </ReflectiveCard>
  );
}
