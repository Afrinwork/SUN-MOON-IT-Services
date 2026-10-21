import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MetalCard } from "@/components/ui/reflective-card/MetalCard";
import type { PricePackage } from "@/content/pricing/packages";
import { formatPackagePrice } from "@/features/pricing/formatPrice";

/** Gelbe Metallkarte mit Paketname und Einstiegspreis. Mobil zum Wischen, ab Tablet im Raster. */
export function PricingTeaserItem({ pkg }: { pkg: PricePackage }) {
  return (
    <Link href={pkg.serviceHref} className="group block h-48 md:h-56">
      <MetalCard>
        <span className="flex h-full flex-col text-primary">
          <span className="block text-lg font-bold">{pkg.name}</span>
          <span className="mt-1 block text-sm leading-6 text-muted">{pkg.audience}</span>
          <span className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="text-base font-black text-accent-strong">{formatPackagePrice(pkg)}</span>
            <ArrowUpRight size={18} className="text-accent-strong transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </span>
      </MetalCard>
    </Link>
  );
}
