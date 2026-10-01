import Link from "next/link";
import { ChevronRight, Languages, MapPin } from "lucide-react";
import { heroContent } from "@/content/home/hero";
import { services } from "@/features/services/data/services";

/** Desktop: Leistungen direkt anklickbar – statt Beispielzahlen ein echter Einstieg. */
export function HeroServicePanel() {
  return (
    <div className="hero-visual-enter relative mx-auto w-full min-w-0 max-w-xl">
      <div className="hero-orbit hero-orbit-one absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" aria-hidden="true" />
      <div className="hero-float-badge hero-float-badge-one absolute -top-4 left-8 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-primary-deep/85 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur"><MapPin size={14} className="text-accent" /> Seelze &amp; Hannover</div>
      <div className="hero-float-badge hero-float-badge-two absolute -bottom-4 right-8 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-primary-deep/85 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur"><Languages size={14} className="text-accent" /> DE · EN · AR · TR · KU</div>
      <div className="hero-glass-card hero-parallax-layer relative rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="rounded-[1.4rem] bg-white p-5 text-foreground">
          <p className="px-2 text-xs font-bold uppercase tracking-widest text-accent-strong">{heroContent.panelTitle}</p>
          <ul className="mt-3 grid gap-1">
            {services.map(({ slug, title, icon: Icon }) => (
              <li key={slug}>
                <Link href={`/leistungen/${slug}`} className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-surface">
                  <span className="hero-system-icon grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-accent"><Icon size={19} /></span>
                  <span className="flex-1 font-bold text-primary">{title}</span>
                  <ChevronRight size={18} className="text-muted transition group-hover:translate-x-0.5 group-hover:text-accent-strong" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-border px-2 pt-4 text-sm text-muted">{heroContent.panelFooter}</p>
        </div>
      </div>
    </div>
  );
}
