import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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

export function PriceCard({ pkg }: { pkg: PricePackage }) {
  const dark = pkg.highlighted;
  return (
    <article className={`relative flex h-full flex-col rounded-3xl border p-6 md:p-7 ${dark ? "border-primary bg-primary text-white shadow-2xl shadow-primary/20" : "border-border bg-white text-primary"}`}>
      {dark && <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary-deep">Beliebt</span>}
      <h3 className="text-xl font-bold">{pkg.name}</h3>
      <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-muted"}`}>{pkg.audience}</p>
      <div className={`mt-5 border-y py-5 ${dark ? "border-white/15" : "border-border"}`}><PriceLabel pkg={pkg} /></div>
      <ul className="mt-5 flex-1 space-y-3">
        {pkg.includes.map((item) => (
          <li key={item} className={`flex items-start gap-3 text-sm ${dark ? "text-white/85" : "text-foreground"}`}>
            <Check size={16} className={`mt-0.5 shrink-0 ${dark ? "text-accent" : "text-accent-strong"}`} />{item}
          </li>
        ))}
      </ul>
      <Link href={pkg.serviceHref} className={`mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold ${dark ? "text-accent" : "text-accent-strong"}`}>
        Mehr erfahren <ArrowRight size={16} />
      </Link>
    </article>
  );
}
