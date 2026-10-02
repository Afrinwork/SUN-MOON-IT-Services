"use client";

import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { NONE } from "@/features/solution-finder/conversation";

type Choice = { id: string; label: string; icon?: LucideIcon };
type Props = { choices: Choice[]; onDone: (value: string) => void };

/** Mehrere Bereiche antippen. Mobil: 2-spaltige Kacheln. Desktop: Liste mit Haken. */
export function MultiChoiceList({ choices, onDone }: Props) {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (id: string) => setPicked((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));

  return (
    <div className="finder-replies finder-pop md:ml-11 md:max-w-2xl">
      <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-1 md:gap-2">
        {choices.map(({ id, label, icon: Icon }) => {
          const active = picked.includes(id);
          return (
            <li key={id}>
              <button type="button" aria-pressed={active} onClick={() => toggle(id)} className={`finder-choice relative flex h-full min-h-16 w-full flex-col items-start gap-2 overflow-hidden rounded-2xl border p-3.5 text-left text-sm font-bold shadow-sm transition active:scale-[0.98] md:min-h-14 md:flex-row md:items-center md:gap-3 md:px-4 md:py-3 md:text-base ${active ? "border-accent bg-accent/10 text-primary ring-2 ring-accent/15" : "border-border bg-white text-primary hover:border-accent"}`}>
                {Icon && <span className={`grid size-9 shrink-0 place-items-center rounded-xl transition ${active ? "bg-accent text-primary-deep" : "bg-primary text-accent"}`}><Icon size={18} /></span>}
                <span className="flex-1">{label}</span>
                <span className={`hidden size-6 shrink-0 place-items-center rounded-md border-2 md:grid ${active ? "border-accent bg-accent text-primary-deep" : "border-border"}`}>{active && <Check size={14} strokeWidth={3} />}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button type="button" disabled={picked.length === 0} onClick={() => onDone(picked.join(","))} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-40">
          {picked.length === 0 ? "Bereiche antippen" : `Weiter mit ${picked.length} ${picked.length === 1 ? "Bereich" : "Bereichen"}`} <ArrowRight size={16} />
        </button>
        <button type="button" onClick={() => onDone(NONE)} className="inline-flex min-h-11 items-center justify-center px-3 text-sm font-semibold text-muted hover:text-primary">Nein, das reicht</button>
      </div>
    </div>
  );
}
