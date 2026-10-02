import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

/** Kurzinfos zu jedem zusätzlich gewählten Bereich: was gelöst wird, wie lange es dauert. */
export function ExtraAreas({ extras }: { extras: Solution[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {extras.map(({ id, label, icon: Icon, solves, duration, serviceHref }) => (
        <li key={id} className="rounded-2xl bg-surface p-4">
          <p className="flex items-center gap-2 font-bold text-primary"><Icon size={17} className="shrink-0 text-accent-strong" /> {label}</p>
          <ul className="mt-3 space-y-1.5">
            {solves.map((s) => <li key={s} className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-strong" />{s}</li>)}
          </ul>
          <p className="mt-3 flex gap-2 text-xs leading-5 text-muted"><Clock size={14} className="mt-0.5 shrink-0" />{duration}</p>
          <Link href={serviceHref} className="mt-2 inline-flex min-h-10 items-center gap-1 text-sm font-bold text-accent-strong">Mehr dazu <ArrowRight size={14} /></Link>
        </li>
      ))}
    </ul>
  );
}
