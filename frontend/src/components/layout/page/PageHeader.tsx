import type { ReactNode } from "react";
import { Container } from "@/components/ui/containers/Container";

type PageHeaderProps = { eyebrow?: string; title: string; text?: string; children?: ReactNode };

/** Kopfbereich jeder Unterseite – enthält die einzige h1 der Seite. */
export function PageHeader({ eyebrow, title, text, children }: PageHeaderProps) {
  return (
    <div className="border-b-4 border-brand-500 bg-navy-900 py-14 text-white md:py-20">
      <Container>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-slate-300">{text}</p>}
        {children && <div className="mt-8 flex flex-col gap-4 md:flex-row">{children}</div>}
      </Container>
    </div>
  );
}
