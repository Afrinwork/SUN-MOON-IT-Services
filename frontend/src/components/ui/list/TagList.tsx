import { EmptyState } from "@/components/ui/empty/EmptyState";

export function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => <li key={item} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary">{item}</li>)}
    </ul>
  );
}
