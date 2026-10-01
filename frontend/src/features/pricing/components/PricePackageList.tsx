import { priceNote, pricePackages } from "@/content/pricing/packages";
import { PriceCard } from "@/features/pricing/components/PriceCard";

/** Mobil: Karussell zum Wischen (mit Zähler). Desktop: 3er-Raster. */
export function PricePackageList() {
  return (
    <>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 pt-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
        {pricePackages.map((pkg, index) => (
          <li key={pkg.id} className="w-[84%] shrink-0 snap-center md:w-auto">
            <span className="mb-2 block text-xs font-bold text-muted md:hidden">{index + 1} / {pricePackages.length}</span>
            <PriceCard pkg={pkg} />
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted md:hidden">Zum Vergleichen wischen →</p>
      <p className="mt-6 text-sm text-muted">{priceNote}</p>
    </>
  );
}
