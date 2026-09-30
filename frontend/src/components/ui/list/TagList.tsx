import { EmptyState } from "@/components/ui/empty/EmptyState";

/** Mobil: eine Zeile zum Wischen. Desktop: umbrechende Chips. */
export function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
      {items.map((item) => <li key={item} className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary">{item}</li>)}
    </ul>
  );
}
