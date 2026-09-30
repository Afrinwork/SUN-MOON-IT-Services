import { Check } from "lucide-react";
import { EmptyState } from "@/components/ui/empty/EmptyState";

export function CheckList({ items }: { items: string[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 text-foreground">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/12 text-accent-strong"><Check size={14} /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}
