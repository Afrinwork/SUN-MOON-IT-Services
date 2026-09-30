import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";

type Props = { eyebrow: string; title: string; text?: string; breadcrumbs: Crumb[]; children?: ReactNode };

/** Mobil: kompakter Kopf mit Zurück-Link. Desktop: großer Kopf mit Brotkrumen. */
export function PageHeader({ eyebrow, title, text, breadcrumbs, children }: Props) {
  const parent = [...breadcrumbs].reverse().find((crumb) => crumb.href);
  return (
    <header className="network-grid relative overflow-hidden bg-primary-deep py-8 text-white md:py-24">
      <Container className="relative">
        <div className="hidden md:block"><Breadcrumb items={breadcrumbs} /></div>
        <Link href={parent?.href ?? "/"} className="mb-5 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-white/75 md:hidden">
          <ChevronLeft size={17} /> {parent?.label ?? "Start"}
        </Link>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-accent md:text-xs">{eyebrow}</p>
        <h1 className="mobile-safe-title mt-3 max-w-4xl font-black leading-[1.08] tracking-[-0.035em] md:mt-4 md:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:mt-6 md:text-lg md:leading-8">{text}</p>}
        {children && <div className="mt-6 flex flex-wrap gap-3 md:mt-8">{children}</div>}
      </Container>
    </header>
  );
}
