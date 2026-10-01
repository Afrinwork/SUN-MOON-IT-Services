import Link from "next/link";
import { ChevronRight, Languages, MapPin, Sparkles } from "lucide-react";
import { intents, intentTitle } from "@/content/home/intents";

/** Desktop: „What can we build for you?“ – Anliegen wählen, direkt zur passenden Lösung. */
export function IntentPanel() {
  return (
    <div className="hero-visual-enter relative mx-auto w-full min-w-0 max-w-xl">
      <div className="hero-orbit hero-orbit-one absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" aria-hidden="true" />
      <div className="hero-float-badge hero-float-badge-one absolute -top-4 left-8 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-primary-deep/85 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur"><MapPin size={14} className="text-accent" /> Seelze &amp; Hannover</div>
      <div className="hero-float-badge hero-float-badge-two absolute -bottom-4 right-8 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-primary-deep/85 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur"><Languages size={14} className="text-accent" /> DE · EN · AR · TR · KU</div>
      <nav aria-label={intentTitle} className="relative rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="rounded-[1.4rem] bg-white p-5 text-foreground">
          <p className="px-2 text-lg font-black tracking-[-0.02em] text-primary">{intentTitle}</p>
          <ul className="mt-3 grid gap-1">
            {intents.map(({ title, text, href, icon: Icon }) => (
              <li key={title}>
                <Link href={href} className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-surface">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary-deep"><Icon size={19} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-primary">{title}</span>
                    <span className="block truncate text-sm text-muted">{text}</span>
                  </span>
                  <ChevronRight size={18} className="shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent-strong" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/loesung-finden" className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-bold text-primary transition hover:bg-accent/15"><span className="flex items-center gap-2"><Sparkles size={16} className="text-accent-strong" /> Unsicher? Lösungs-Assistent starten</span><ChevronRight size={17} /></Link>
        </div>
      </nav>
    </div>
  );
}
