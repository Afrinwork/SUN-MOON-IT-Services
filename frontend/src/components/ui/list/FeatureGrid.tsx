import { EmptyState } from "@/components/ui/empty/EmptyState";

export type Feature = { title: string; text: string };

/** Mobil: Karussell zum Wischen. Desktop: Raster. */
export function FeatureGrid({ items }: { items: Feature[] }) {
  if (items.length === 0) return <EmptyState />;
  return (
    <>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.title} className="w-[80%] shrink-0 snap-start rounded-2xl border border-border bg-white p-5 md:w-auto md:rounded-3xl md:p-7">
            <span className="text-xs font-black text-accent-strong md:hidden">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-bold text-primary md:mt-0 md:text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted md:mt-3 md:text-base md:leading-7">{item.text}</p>
          </li>
        ))}
      </ul>
      {items.length > 1 && <p className="mt-2 text-xs text-muted md:hidden">Zum Weiterblättern wischen →</p>}
    </>
  );
}
