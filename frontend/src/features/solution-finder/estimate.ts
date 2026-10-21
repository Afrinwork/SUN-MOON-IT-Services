import { finderAssets } from "@/content/solution-finder/assets";
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
  /** Einmalig plus 12 Monate Betreuung; null ohne Betreuung. */
  firstYear: { from: number; to: number } | null;
  /** Abgleich mit dem angegebenen Budget; null ohne feste Obergrenze. */
  budgetFit: "passt" | "knapp" | "darunter" | null;
};

const roundTo50 = (value: number) => Math.round(value / 50) * 50;
const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9äöüß ]/g, " ");

/**
 * Lokale Stichwortsuche im Freitext. Längere Stichwörter zählen am Wortanfang („termin“ → „Terminbuchung“),
 * kurze (bis 3 Zeichen) nur als ganzes Wort („ki“ findet nicht „Kita“). Nichts wird gesendet.
 */
export function detectFeatures(text: string): FinderFeature[] {
  const normalized = ` ${normalize(text).replace(/\s+/g, " ").trim()} `;
  if (normalized.trim().length < 2) return [];
  const matches = (keyword: string) => normalized.includes(keyword.length <= 3 ? ` ${keyword} ` : ` ${keyword}`);
  return finderFeatures.filter((feature) => feature.keywords.some(matches));
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

  // Was noch fehlt (Logo, Texte, Fotos), kommt dazu – außer es steht schon in den Wünschen.
  const missing = selection.have === null ? [] : finderAssets.filter((asset) => !selection.have?.includes(asset.id));
  for (const asset of missing) {
    const feature = finderFeatures.find((f) => f.id === asset.featureId);
    if (feature && !features.includes(feature)) items.push({ label: feature.label, note: "noch nicht vorhanden", from: feature.from, to: feature.to });
  }

  const care = findPackage("betreuung");
  const monthly = selection.care?.withCare && care?.priceFrom ? care.priceFrom : null;
  const wordCount = selection.wishes.trim().split(/\s+/).filter(Boolean).length;

  const from = items.reduce((sum, item) => sum + item.from, 0);
  const to = items.reduce((sum, item) => sum + item.to, 0);
  const maxEuro = selection.budget?.maxEuro ?? null;

  return {
    items,
    from,
    to,
    monthly,
    hourly,
    openWishes: wordCount > features.length * 6 + 4,
    firstYear: monthly && items.length ? { from: from + monthly * 12, to: to + monthly * 12 } : null,
    budgetFit: maxEuro === null || items.length === 0 ? null : to <= maxEuro ? "passt" : from <= maxEuro ? "knapp" : "darunter",
  };
}
