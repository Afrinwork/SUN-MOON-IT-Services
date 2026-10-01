import { ChevronLeft, RotateCcw } from "lucide-react";

type Props = { done: number; total: number; onBack?: () => void; onRestart?: () => void };

/** Fortschritt („Schritt 3 von 7“) mit Zurück und Neustart – klebt am Handy oben. */
export function FinderProgress({ done, total, onBack, onRestart }: Props) {
  const percent = Math.round((done / total) * 100);
  const finished = done >= total;
  return (
    <div className="sticky top-[4.6rem] z-20 -mx-5 border-b border-border bg-surface/95 px-5 py-3 backdrop-blur md:static md:mx-0 md:rounded-2xl md:border md:bg-white md:px-5">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-bold text-primary">{finished ? "Ihre Übersicht ist fertig" : `Schritt ${Math.min(done + 1, total)} von ${total}`}</span>
        <span className="flex items-center gap-3">
          {onBack && !finished && <button type="button" onClick={onBack} className="inline-flex min-h-9 items-center gap-1 font-semibold text-muted hover:text-primary"><ChevronLeft size={16} /> Zurück</button>}
          {onRestart && <button type="button" onClick={onRestart} className="inline-flex min-h-9 items-center gap-1 font-semibold text-muted hover:text-primary"><RotateCcw size={14} /> Neu</button>}
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Fortschritt">
        <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
