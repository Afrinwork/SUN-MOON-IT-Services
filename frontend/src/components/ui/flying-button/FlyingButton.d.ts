import type { CSSProperties, MouseEvent, PointerEvent, ReactNode } from "react";

/** Typen für die React-Bits-Komponente (FlyingButton.jsx, unverändert übernommen). */
export interface FlyingButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement> | PointerEvent) => void;
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large" | "extra-large";
  radius?: number;
  altitude?: number;
  hoverTime?: number;
  jets?: number;
  thrusters?: boolean;
  trigger?: "hover" | "click";
  carryCursor?: boolean;
  ramp?: boolean;
  rampColor?: string;
  smoke?: number;
  turbulence?: number;
  wobble?: number;
  thrustColor?: string;
  smokeColor?: string;
  buttonColor?: string;
  textColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function FlyingButton(props: FlyingButtonProps): ReactNode;
