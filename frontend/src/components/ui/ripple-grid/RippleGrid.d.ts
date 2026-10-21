import type { HTMLAttributes, ReactNode } from "react";

/** Typen für die React-Bits-Komponente (RippleGrid.jsx, unverändert übernommen). */
export interface RippleGridProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  variant?: "lines" | "dots" | "cross";
  cellSize?: number;
  lineWidth?: number;
  glow?: number;
  rippleStrength?: number;
  rippleSpeed?: number;
  rippleSize?: number;
  autoRipple?: "center" | "random" | "none";
  rippleInterval?: number;
  tilt?: number;
  rotation?: number;
  mouseInteraction?: boolean;
  clickRipple?: boolean;
  intro?: boolean;
  fade?: number;
  opacity?: number;
  lightMode?: boolean;
  paused?: boolean;
  dpr?: number;
}

export function RippleGrid(props: RippleGridProps): ReactNode;
export default RippleGrid;
