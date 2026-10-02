"use client";

import { ArrowRight, Plus, SkipForward } from "lucide-react";
import { useState } from "react";
import { finderFeatures } from "@/content/solution-finder/features";
import { detectFeatures } from "@/features/solution-finder/estimate";

const euro = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const suggestions = ["shop", "termine", "login", "sprachen", "schnittstelle", "rechnungen"].map((id) => finderFeatures.find((f) => f.id === id)).filter((f) => f !== undefined);

type Props = { onDone: (text: string) => void; onSkip: () => void };

/** Freitext für besondere Wünsche. Erkannte Funktionen erscheinen sofort mit ungefährem Aufpreis. */
export function WishesInput({ onDone, onSkip }: Props) {
  const [text, setText] = useState("");
  const found = detectFeatures(text);
  const add = (label: string) => setText((prev) => (prev.trim() ? `${prev.trim()}, ${label}` : label));

  return (
    <div className="finder-pop space-y-3 md:ml-11 md:max-w-2xl">
      <label htmlFor="finder-wuensche" className="sr-only">Besondere Wünsche</label>
      <textarea id="finder-wuensche" value={text} onChange={(e) => setText(e.target.value)} rows={4} maxLength={600} placeholder="Beschreiben Sie kurz Ihre Wünsche …" className="w-full resize-y rounded-2xl border border-border bg-white p-4 text-[0.95rem] leading-relaxed text-foreground shadow-sm outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10" />

      {found.length > 0 && (
        <div className="rounded-2xl bg-white p-4 ring-1 ring-border">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-strong">Kommt ungefähr dazu</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {found.map((f) => <li key={f.id} className="flex justify-between gap-3"><span className="text-foreground">{f.label}</span><span className="shrink-0 font-bold text-primary">+ {euro.format(f.from)}–{euro.format(f.to)} €</span></li>)}
          </ul>
        </div>
      )}

      <div>
        <p className="mb-2 text-xs font-semibold text-muted">Oder antippen:</p>
        <ul className="flex flex-wrap gap-2">
          {suggestions.filter((s) => !found.includes(s)).map((s) => (
            <li key={s.id}><button type="button" onClick={() => add(s.label)} className="inline-flex min-h-9 items-center gap-1 rounded-full border border-border bg-white px-3 text-sm font-semibold text-primary hover:border-accent"><Plus size={14} /> {s.label}</button></li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <button type="button" disabled={text.trim().length < 3} onClick={() => onDone(text.trim())} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-40">
          Weiter <ArrowRight size={16} />
        </button>
        <button type="button" onClick={onSkip} className="inline-flex min-h-11 items-center justify-center gap-1.5 px-3 text-sm font-semibold text-muted hover:text-primary"><SkipForward size={15} /> Keine besonderen Wünsche</button>
      </div>
      <p className="text-xs text-muted">Ihr Text bleibt in Ihrem Browser und wird nirgendwohin gesendet.</p>
    </div>
  );
}
