"use client";

import type { ReactNode } from "react";
import GlassSurface from "@/components/ui/glass-surface/GlassSurface";

/** Glas-Leiste (React Bits GlassSurface) als Hintergrund hinter den Menüpunkten, damit Untermenüs nicht abgeschnitten werden. */
export function GlassNavBar({ children }: { children: ReactNode }) {
  return (
    <div className="glass-nav relative rounded-full">
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={28}
        distortionScale={-180}
        displace={0.5}
        backgroundOpacity={0.7}
        className="glass-nav__surface"
      />
      <div className="relative z-10 px-1.5 py-1.5">{children}</div>
    </div>
  );
}
