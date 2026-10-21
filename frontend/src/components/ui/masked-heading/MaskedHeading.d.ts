import type { CSSProperties, ReactNode } from "react";

/** Typen für die React-Bits-Komponente (MaskedHeading.jsx, unverändert übernommen). */
export interface MaskedHeadingProps {
  text?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "div";
  mediaType?: "image" | "video";
  src?: string;
  poster?: string;
  fillScale?: number;
  parallax?: number;
  drift?: number;
  hoverZoom?: number;
  brightness?: number;
  saturation?: number;
  grayscale?: boolean;
  tint?: string;
  spotlight?: boolean;
  spotlightRadius?: number;
  outline?: boolean;
  outlineColor?: string;
  outlineWidth?: number;
  reveal?: "rise" | "scale" | "blur" | "wipe" | "fade" | "none";
  duration?: number;
  stagger?: number;
  trigger?: "view" | "hover" | "mount";
  align?: "left" | "center" | "right";
  weight?: number;
  tracking?: number;
  lineHeight?: number;
  textScale?: number;
  className?: string;
  style?: CSSProperties;
}

export default function MaskedHeading(props: MaskedHeadingProps): ReactNode;
