import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = { href: string; title: string; text: string; eyebrow?: string; icon?: ReactNode };

/** Mobil: kompakte Zeile (Icon neben Text). Ab Tablet: große Karte. */
export function CardLink({ href, title, text, eyebrow, icon }: Props) {
  return (
    <Link href={href} className="group flex h-full gap-4 rounded-2xl border border-border bg-white p-4 transition duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6 md:flex-col md:gap-0 md:rounded-3xl md:p-7 md:hover:-translate-y-1">
      {icon && <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-accent md:mb-6 md:size-12 md:rounded-2xl">{icon}</span>}
      <span className="flex min-w-0 flex-1 flex-col">
        {eyebrow && <span className="text-xs font-bold uppercase tracking-widest text-accent-strong">{eyebrow}</span>}
        <span className="flex items-center justify-between gap-2 md:mt-1">
          <h3 className="min-w-0 break-words text-base font-bold text-primary md:text-xl">{title}</h3>
          <ArrowUpRight size={18} className="shrink-0 text-accent-strong md:hidden" aria-hidden="true" />
        </span>
        <p className="mt-1 flex-1 text-sm leading-6 text-muted md:mt-3 md:text-base md:leading-7">{text}</p>
        <span className="mt-6 hidden items-center gap-2 text-sm font-bold text-accent-strong md:inline-flex">Mehr erfahren <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
      </span>
    </Link>
  );
}
