import type { ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";

type Props = { eyebrow: string; title: string; text?: string; breadcrumbs: Crumb[]; children?: ReactNode };

export function PageHeader({ eyebrow, title, text, breadcrumbs, children }: Props) {
  return (
    <header className="network-grid relative overflow-hidden bg-primary-deep py-16 text-white md:py-24">
      <Container className="relative">
        <Breadcrumb items={breadcrumbs} />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.035em] md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </header>
  );
}
