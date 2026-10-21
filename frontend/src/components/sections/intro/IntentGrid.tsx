import Link from "next/link";
import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { intents, intentTitle } from "@/content/home/intents";
import { introContent } from "@/content/home/intro";

/** Desktop: „Was dürfen wir für Sie umsetzen?“ – Anliegen als Kacheln, direkt zur passenden Lösung. */
export function IntentGrid() {
  return (
    <nav aria-label={intentTitle}>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted">{intentTitle}</p>
      <ul className="mt-5 grid grid-cols-2 gap-3">
        {intents.map(({ title, text, href, icon: Icon }) => (
          <li key={title}>
            <Link href={href} className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-20px_rgba(11,44,95,0.35)]">
              <span className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-surface-accent text-accent-strong transition group-hover:bg-accent group-hover:text-primary-deep"><Icon size={20} /></span>
                <ArrowUpRight size={18} className="text-border transition group-hover:text-accent-strong" />
              </span>
              <span className="mt-5 block font-bold text-primary">{title}</span>
              <span className="mt-1 block text-sm leading-6 text-muted">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/loesung-finden" className="group mt-3 flex items-center justify-between gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-white transition hover:bg-primary-deep">
        <span className="flex items-center gap-2"><Sparkles size={16} className="text-accent" /> {introContent.finderHint}</span>
        <ChevronRight size={17} className="transition group-hover:translate-x-0.5" />
      </Link>
    </nav>
  );
}
