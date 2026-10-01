import { pricePackages, type PricePackage } from "@/content/pricing/packages";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

/** „ab 200 € einmalig“ – oder „Festpreis nach Erstgespräch“, wenn kein Preis hinterlegt ist. */
export function formatPackagePrice(pkg: PricePackage): string {
  return pkg.priceFrom === null ? "Festpreis nach Erstgespräch" : `ab ${euro.format(pkg.priceFrom)} ${pkg.unit}`;
}

export function findPackage(id: string): PricePackage | undefined {
  return pricePackages.find((p) => p.id === id);
}
