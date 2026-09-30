import Link from "next/link";
import { heroContent } from "@/content/home/hero";
import { services } from "@/features/services/data/services";

/** Mobil: Leistungen als wischbare Chip-Leiste. */
export function HeroServiceChips() {
  return (
    <nav aria-label={heroContent.panelTitle}>
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70">{heroContent.panelTitle}</p>
      <ul className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none]">
        {services.map(({ slug, title, icon: Icon }) => (
          <li key={slug} className="shrink-0">
            <Link href={`/leistungen/${slug}`} className="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/8 py-2 pl-2 pr-4 text-sm font-semibold text-white backdrop-blur">
              <span className="grid size-7 place-items-center rounded-full bg-accent/20 text-accent"><Icon size={15} /></span>{title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
