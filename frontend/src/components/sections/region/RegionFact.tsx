import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; label: string; value: string; href?: string };

const base = "flex items-center gap-4 rounded-2xl border border-white/12 bg-white/6 p-4 md:p-5";

/** Eine Kontakt-/Standortangabe; mit `href` wird sie zum Link (z. B. tel:). */
export function RegionFact({ icon: Icon, label, value, href }: Props) {
  const body = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Icon size={20} /></span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-wider text-white/55">{label}</span>
        <span className="mt-0.5 block font-bold">{value}</span>
      </span>
    </>
  );
  return href ? <a href={href} className={`${base} transition hover:bg-white/10`}>{body}</a> : <div className={base}>{body}</div>;
}
