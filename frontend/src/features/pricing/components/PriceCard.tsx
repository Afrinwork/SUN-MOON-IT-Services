import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MetalCard } from "@/components/ui/reflective-card/MetalCard";
import type { PricePackage } from "@/content/pricing/packages";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function PriceLabel({ pkg }: { pkg: PricePackage }) {
  if (pkg.priceFrom === null) {
    return <p className="text-xl font-black md:text-2xl">Festpreis nach Erstgespräch</p>;
  }
  return (
    <p className="flex items-baseline gap-2">
      <span className="text-sm font-semibold opacity-70">ab</span>
      <span className="text-3xl font-black md:text-4xl">{euro.format(pkg.priceFrom)}</span>
      <span className="text-sm font-semibold opacity-70">{pkg.unit}</span>
    </p>
  );
}

/** Paketkarte als Metallkarte. Das beliebte Paket ist silbern, die anderen dunkel. */
export function PriceCard({ pkg }: { pkg: PricePackage }) {
  return (
    <MetalCard light={pkg.highlighted}>
      <article className="flex h-full flex-col text-primary">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold">{pkg.name}</h3>
          {pkg.highlighted && <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">Beliebt</span>}
        </div>
        <p className="mt-1 text-sm text-muted">{pkg.audience}</p>
        <div className="mt-5 border-y border-border py-5"><PriceLabel pkg={pkg} /></div>
        <ul className="mt-5 flex-1 space-y-3">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <Check size={16} className="mt-0.5 shrink-0 text-accent-strong" />{item}
            </li>
          ))}
        </ul>
        <Link href={pkg.serviceHref} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-strong">
          Mehr erfahren <ArrowRight size={16} />
        </Link>
      </article>
    </MetalCard>
  );
}
