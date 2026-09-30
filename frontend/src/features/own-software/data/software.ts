import type { Software } from "@/features/own-software/types/software.types";

/** Eigene Produkte – neue Einträge hier ergänzen, Detailseiten entstehen automatisch. */
export const ownSoftware: Software[] = [];

export function findSoftware(slug: string): Software | undefined {
  return ownSoftware.find((s) => s.slug === slug);
}
