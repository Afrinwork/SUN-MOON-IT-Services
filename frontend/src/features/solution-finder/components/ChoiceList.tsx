import { ChevronRight, type LucideIcon } from "lucide-react";

type Choice = { id: string; label: string; icon?: LucideIcon };

/** Mobil: 2-spaltige Kacheln (große Tippflächen). Desktop: Liste mit Pfeil. */
export function ChoiceList({ choices, onSelect }: { choices: Choice[]; onSelect: (id: string) => void }) {
  return (
    <ul className="finder-pop grid grid-cols-2 gap-2.5 md:ml-12 md:max-w-xl md:grid-cols-1 md:gap-2">
      {choices.map(({ id, label, icon: Icon }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onSelect(id)}
            className="group flex h-full min-h-14 w-full flex-col items-start gap-2 rounded-2xl border border-border bg-white p-3.5 text-left text-sm font-bold text-primary transition hover:border-accent hover:shadow-lg md:flex-row md:items-center md:gap-3 md:px-4 md:py-3 md:text-base"
          >
            {Icon && <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary-deep"><Icon size={18} /></span>}
            <span className="flex-1">{label}</span>
            <ChevronRight size={18} className="hidden shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent-strong md:block" />
          </button>
        </li>
      ))}
    </ul>
  );
}
