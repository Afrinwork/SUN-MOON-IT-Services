import { ChevronRight, SkipForward, type LucideIcon } from "lucide-react";

type Choice = { id: string; label: string; icon?: LucideIcon };
type Props = { choices: Choice[]; onSelect: (id: string) => void; onSkip?: () => void };

/** Mobil: 2-spaltige Kacheln (große Tippflächen). Desktop: Liste mit Pfeil. Optional „Überspringen“. */
export function ChoiceList({ choices, onSelect, onSkip }: Props) {
  return (
    <div className="finder-replies finder-pop md:ml-11 md:max-w-2xl">
      <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-1 md:gap-2">
        {choices.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onSelect(id)}
              className="finder-choice group relative flex h-full min-h-16 w-full flex-col items-start gap-2 overflow-hidden rounded-2xl border border-border bg-white p-3.5 text-left text-sm font-bold text-primary shadow-sm transition duration-200 active:scale-[0.98] md:min-h-14 md:flex-row md:items-center md:gap-3 md:px-4 md:py-3 md:text-base md:hover:-translate-y-0.5 md:hover:border-accent md:hover:shadow-lg"
            >
              {Icon && <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary-deep"><Icon size={18} /></span>}
              <span className="flex-1">{label}</span>
              <ChevronRight size={18} className="hidden shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent-strong md:block" />
            </button>
          </li>
        ))}
      </ul>
      {onSkip && (
        <button type="button" onClick={onSkip} className="mt-2 inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted transition hover:bg-white hover:text-primary">
          <SkipForward size={15} /> Überspringen
        </button>
      )}
    </div>
  );
}
