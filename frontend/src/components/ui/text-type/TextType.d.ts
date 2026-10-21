import type { ElementType, HTMLAttributes, ReactNode } from "react";

/** Typen für die React-Bits-Komponente (TextType.jsx, unverändert übernommen). */
export interface TextTypeProps extends Omit<HTMLAttributes<HTMLElement>, "prefix"> {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  deleteMode?: "backspace" | "select";
  loop?: boolean;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorStyle?: "character" | "bar" | "block" | "underscore";
  cursorCharacter?: string;
  cursorColor?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  cursorGlide?: boolean;
  typeEffect?: "none" | "fade" | "blur" | "rise";
  mistakes?: number;
  prefix?: string;
  prefixColor?: string;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

export default function TextType(props: TextTypeProps): ReactNode;
