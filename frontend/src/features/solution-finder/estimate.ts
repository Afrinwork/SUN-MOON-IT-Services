import { finderFeatures, type FinderFeature } from "@/content/solution-finder/features";
import { findPackage } from "@/features/pricing/formatPrice";
import type { Selection } from "@/features/solution-finder/conversation";

/** Pakete starten bei „ab …“ – die obere Grenze der Spanne ist dieses Vielfache davon. */
const PACKAGE_RANGE_FACTOR = 2.5;

export type EstimateItem = { label: string; from: number; to: number; note?: string };
export type Estimate = {
  items: EstimateItem[];
  from: number;
  to: number;
  monthly: number | null;
  hourly: number | null;
  /** Freitext enthielt mehr, als wir erkannt haben – wird im Gespräch geschätzt. */
  openWishes: boolean;
};

const roundTo50 = (value: number) => Math.round(value / 50) * 50;
const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9äöüß ]/g, " ");

/** Lokale Stichwortsuche im Freitext, nur am Wortanfang („ki“ findet nicht „Kita“). Nichts wird gesendet. */
export function detectFeatures(text: string): FinderFeature[] {
  const normalized = ` ${normalize(text).replace(/\s+/g, " ")}`;
  if (normalized.trim().length < 3) return [];
  return finderFeatures.filter((feature) => feature.keywords.some((keyword) => normalized.includes(` ${keyword}`)));
}

/** Ungefährer Gesamtpreis aus Hauptthema, weiteren Bereichen und erkannten Wünschen. */
export function buildEstimate(selection: Selection): Estimate {
  const items: EstimateItem[] = [];
  let hourly: number | null = null;
  const areas = [{ solution: selection.solution, packageId: selection.main?.packageId ?? selection.solution.packageId }, ...selection.extras.map((s) => ({ solution: s, packageId: s.packageId }))];

  for (const { solution, packageId } of areas) {
    const pkg = findPackage(packageId);
    if (!pkg || pkg.priceFrom === null) continue;
    if (pkg.unit === "pro Stunde") { hourly = pkg.priceFrom; continue; }
    if (pkg.unit === "einmalig") items.push({ label: solution.label, note: pkg.name, from: pkg.priceFrom, to: roundTo50(pkg.priceFrom * PACKAGE_RANGE_FACTOR) });
  }

  const features = detectFeatures(selection.wishes);
  features.forEach((feature) => items.push({ label: feature.label, note: "aus Ihren Wünschen", from: feature.from, to: feature.to }));

  const care = findPackage("betreuung");
  const monthly = selection.care?.withCare && care?.priceFrom ? care.priceFrom : null;
  const wordCount = selection.wishes.trim().split(/\s+/).filter(Boolean).length;

  return {
    items,
    from: items.reduce((sum, item) => sum + item.from, 0),
    to: items.reduce((sum, item) => sum + item.to, 0),
    monthly,
    hourly,
    openWishes: wordCount > features.length * 6 + 4,
  };
}
