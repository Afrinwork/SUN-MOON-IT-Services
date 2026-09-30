import type { ReactNode } from "react";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const tones = { white: "bg-white", surface: "bg-surface" };

type Props = { eyebrow: string; title: string; text?: string; tone?: keyof typeof tones; children?: ReactNode };

export function Section({ eyebrow, title, text, tone = "white", children }: Props) {
  return (
    <section className={`${tones[tone]} py-12 md:py-24`}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />
        {children}
      </Container>
    </section>
  );
}
