import { technologyIcon } from "@/features/technologies/technologyIcon";

/** Eine Technologie als kleine grüne Karte mit Logo in weißer Kachel. */
export function TechnologyChip({ name }: { name: string }) {
  return (
    <li className="lambo-card flex min-h-14 items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-bold leading-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-neutral-800 shadow-sm [&>svg]:size-5">{technologyIcon(name)}</span>
      <span className="min-w-0 hyphens-auto [overflow-wrap:anywhere]">{name}</span>
    </li>
  );
}
