import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = { href: string; title: string; text: string; eyebrow?: string; icon?: ReactNode };

export function CardLink({ href, title, text, eyebrow, icon }: Props) {
  return (
    <Link href={href} className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6">
      {icon && <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-primary text-accent">{icon}</span>}
      {eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">{eyebrow}</p>}
      <h3 className="mt-1 text-xl font-bold text-primary">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-strong">Mehr erfahren <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
    </Link>
  );
}
