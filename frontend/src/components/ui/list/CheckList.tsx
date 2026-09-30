import { Check } from "lucide-react";
import { EmptyState } from "@/components/ui/empty/EmptyState";

/** Mobil: schlanke Liste in einer Box. Desktop: einzelne Kacheln im Raster. */
export function CheckList({ items }: { items: string[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white md:grid md:grid-cols-2 md:gap-3 md:divide-y-0 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 px-4 py-3.5 text-sm text-foreground md:rounded-2xl md:border md:border-border md:bg-white md:p-5 md:text-base">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent-strong md:size-6"><Check size={13} /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}
