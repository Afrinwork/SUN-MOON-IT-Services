import Link from "next/link";
import { Sparkles } from "lucide-react";
import { intents, intentTitle } from "@/content/home/intents";

/** Mobil: 2×3-Kacheln – große Tippflächen, jede führt direkt zur passenden Lösung. */
export function IntentGridMobile() {
  return (
    <nav aria-label={intentTitle}>
      <p className="text-lg font-black tracking-[-0.02em] text-white">{intentTitle}</p>
      <ul className="mt-4 grid grid-cols-2 gap-2.5">
        {intents.map(({ title, text, href, icon: Icon }) => (
          <li key={title}>
            <Link href={href} className="flex h-full min-h-28 flex-col rounded-2xl border border-white/15 bg-white/8 p-3.5 backdrop-blur active:bg-white/15">
              <span className="grid size-9 place-items-center rounded-xl bg-accent/20 text-accent"><Icon size={18} /></span>
              <span className="mt-3 text-sm font-bold leading-tight text-white">{title}</span>
              <span className="mt-1 text-xs leading-snug text-white/65">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/loesung-finden" className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-4 text-sm font-bold text-white"><Sparkles size={16} className="text-accent" /> Unsicher? Lösungs-Assistent starten</Link>
    </nav>
  );
}
