import { EmptyState } from "@/components/ui/empty/EmptyState";

export type Feature = { title: string; text: string };

export function FeatureGrid({ items }: { items: Feature[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="rounded-3xl border border-border bg-white p-7">
          <h3 className="text-xl font-bold text-primary">{item.title}</h3>
          <p className="mt-3 leading-7 text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
