import Link from "next/link";
import { ArrowRight, BadgeCheck, Wallet } from "lucide-react";
import { priceNote } from "@/content/pricing/packages";
import { findPackage, formatPackagePrice } from "@/features/pricing/formatPrice";
import type { Budget } from "@/features/solution-finder/types";

type Props = { recommendedId: string; optionIds: string[]; withCare: boolean; budget?: Budget };

function budgetHint(priceFrom: number | null, budget?: Budget): string | null {
  if (!budget || budget.maxEuro === null || priceFrom === null) return null;
  return priceFrom <= budget.maxEuro
    ? "Ihr Budget passt zum empfohlenen Einstieg."
    : "Ihr Budget liegt unter dem Einstiegspreis – wir empfehlen einen Start in kleinen Etappen.";
}

/** Empfohlenes Paket groß, Alternativen und Betreuung darunter – alle Preise aus der Preisseite. */
export function PriceOverview({ recommendedId, optionIds, withCare, budget }: Props) {
  const recommended = findPackage(recommendedId);
  const care = findPackage("betreuung");
  const alternatives = [...new Set(optionIds)].filter((id) => id !== recommendedId && id !== "betreuung").map(findPackage).filter((p) => p !== undefined);
  const hint = budgetHint(recommended?.priceFrom ?? null, budget);

  return (
    <div className="space-y-3">
      {recommended && (
        <div className="rounded-2xl bg-surface p-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-strong"><BadgeCheck size={15} /> Empfohlen: {recommended.name}</p>
          <p className="mt-1 text-2xl font-black text-primary md:text-3xl">{formatPackagePrice(recommended)}</p>
          {hint && <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-foreground"><Wallet size={16} className="mt-0.5 shrink-0 text-accent-strong" />{hint}</p>}
        </div>
      )}
      <ul className="divide-y divide-border text-sm">
        {alternatives.map((pkg) => (
          <li key={pkg.id} className="flex items-center justify-between gap-3 py-2.5"><span className="text-muted">Alternative: <strong className="text-primary">{pkg.name}</strong></span><span className="shrink-0 font-bold text-primary">{formatPackagePrice(pkg)}</span></li>
        ))}
        {care && (
          <li className="flex items-center justify-between gap-3 py-2.5">
            <span className="text-muted">{withCare ? "Gewählt" : "Optional"}: <strong className="text-primary">{care.name}</strong></span>
            <span className={`shrink-0 font-bold ${withCare ? "text-accent-strong" : "text-primary"}`}>{formatPackagePrice(care)}</span>
          </li>
        )}
      </ul>
      <p className="text-xs leading-5 text-muted">{priceNote}</p>
      <Link href="/preise" className="inline-flex min-h-10 items-center gap-1 text-sm font-bold text-accent-strong">Alle Preise ansehen <ArrowRight size={15} /></Link>
    </div>
  );
}
