import type { BlogTopicSlug } from "@/content/blog/topics";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta-Beschreibung für Google (ca. 120–160 Zeichen). */
  description: string;
  /** Thema – bestimmt Themenseite, Label und passende Leistung. */
  topic: BlogTopicSlug;
  /** ISO-Datum, z. B. 2026-09-30 */
  published: string;
  readingMinutes: number;
  sections: BlogSection[];
};
