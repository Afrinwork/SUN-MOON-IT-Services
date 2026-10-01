import type { LucideIcon } from "lucide-react";
import type { BlogTopicSlug } from "@/content/blog/topics";

/** Antwort auf die themenspezifische Rückfrage – liefert eigene Reaktion und Empfehlung. */
export type FollowUpAnswer = {
  id: string;
  label: string;
  reply: string;
  recommendation: string;
  /** Überschreibt das Paket der Lösung (z. B. Relaunch → Website Business). */
  packageId?: string;
};

export type Solution = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Erste Antwort des Assistenten nach der Auswahl. */
  reply: string;
  followUp: { question: string; answers: FollowUpAnswer[] };
  solves: string[];
  steps: string[];
  /** Was der Kunde für den Start vorbereiten kann. */
  prepare: string[];
  tips: string[];
  /** Verweis auf ein Paket aus content/pricing/packages.ts – liefert den Preis. */
  packageId: string;
  duration: string;
  serviceHref: string;
  blogTopic: BlogTopicSlug;
};

export type TeamSize = { id: string; label: string; reply: string };
export type Timing = { id: string; label: string; startText: string };
