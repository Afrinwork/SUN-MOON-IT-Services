import type { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";
import { Container } from "./Container";

type Tone = "white" | "muted" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  muted: "bg-slate-50",
  navy: "bg-navy-900 text-white",
};

type SectionProps = { children: ReactNode; tone?: Tone; id?: string; className?: string; labelledBy?: string };

export function Section({ children, tone = "white", id, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
