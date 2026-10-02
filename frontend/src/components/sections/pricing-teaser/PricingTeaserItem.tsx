import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PricePackage } from "@/content/pricing/packages";
import { formatPackagePrice } from "@/features/pricing/formatPrice";

/** Mobil: kompakte Zeile mit Name und Preis. Ab Tablet: Karte. */
export function PricingTeaserItem({ pkg }: { pkg: PricePackage }) {
  return (
    <Link href={pkg.serviceHref} className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4 transition duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6 md:flex-col md:items-start md:rounded-3xl md:p-6">
      <span className="min-w-0">
        <span className="block font-bold text-primary md:text-lg">{pkg.name}</span>
        <span className="mt-0.5 hidden text-sm leading-6 text-muted md:block">{pkg.audience}</span>
      </span>
      <span className="flex shrink-0 items-center gap-2 md:w-full md:justify-between md:border-t md:border-border md:pt-4">
        <span className="text-sm font-black text-accent-strong md:text-base">{formatPackagePrice(pkg)}</span>
        <ArrowUpRight size={18} className="text-accent-strong transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
