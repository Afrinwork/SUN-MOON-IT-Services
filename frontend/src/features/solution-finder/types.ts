import type { LucideIcon } from "lucide-react";

export type Solution = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Erste Antwort des Assistenten nach der Auswahl. */
  reply: string;
  solves: string[];
  steps: string[];
  /** Verweis auf ein Paket aus content/pricing/packages.ts – liefert den Preis. */
  packageId: string;
  duration: string;
  serviceHref: string;
};

export type Timing = { id: string; label: string; startText: string };
