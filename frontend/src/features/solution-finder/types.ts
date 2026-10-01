import type { LucideIcon } from "lucide-react";
import type { BlogTopicSlug } from "@/content/blog/topics";

/** Antwort auf eine themenspezifische Rückfrage. */
export type FollowUpAnswer = {
  id: string;
  label: string;
  reply: string;
  /** Nur bei der ersten Rückfrage: die persönliche Empfehlung. */
  recommendation?: string;
  /** Zusätzlicher Hinweis für die Übersicht („Darauf achten wir“). */
  extra?: string;
  /** Überschreibt das empfohlene Paket (z. B. Relaunch → Website Business). */
  packageId?: string;
};

export type FollowUpQuestion = { id: string; question: string; answers: FollowUpAnswer[] };

export type Solution = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Erste Antwort des Assistenten nach der Auswahl. */
  reply: string;
  /** Zwei themenspezifische Rückfragen – die erste liefert die Empfehlung. */
  followUps: [FollowUpQuestion, FollowUpQuestion];
  solves: string[];
  steps: string[];
  prepare: string[];
  tips: string[];
  /** Standardpaket aus content/pricing/packages.ts. */
  packageId: string;
  /** Weitere passende Pakete für die Preisübersicht. */
  priceOptions: string[];
  /** Slugs verwandter Leistungen für „Passt gut dazu“. */
  related: string[];
  duration: string;
  serviceHref: string;
  blogTopic: BlogTopicSlug;
};

export type TeamSize = { id: string; label: string; reply: string };
export type Timing = { id: string; label: string; startText: string };
/** maxEuro: Obergrenze zum Abgleich mit dem Paketpreis; null = unbekannt bzw. offen. */
export type Budget = { id: string; label: string; reply: string; maxEuro: number | null };
export type CareOption = { id: string; label: string; reply: string; withCare: boolean };
