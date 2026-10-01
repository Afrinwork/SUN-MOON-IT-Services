import type { FaqItem } from "@/components/ui/faq/FaqList";
import { knowledgeBase } from "@/content/solution-finder/knowledge";

const stopWords = new Set(["was", "wie", "ist", "der", "die", "das", "ich", "sie", "wir", "ein", "eine", "und", "oder", "für", "mit", "kann", "gibt", "bei", "auch", "noch", "mein", "meine", "ihr", "ihre", "euch", "habe", "haben", "wird", "werden", "viel", "sind", "man", "denn", "dann"]);

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9äöüß ]/g, " ");
/** Grober Wortstamm: die ersten 5 Buchstaben – „Kosten“ findet auch „kostet“. */
const stem = (word: string) => word.slice(0, 5);

/** Lokale Stichwortsuche – keine KI, keine Datenübertragung. Gibt die beste Antwort oder null zurück. */
export function findAnswer(query: string): FaqItem | null {
  const words = normalize(query).split(/\s+/).filter((w) => w.length > 2 && !stopWords.has(w)).map(stem);
  if (words.length === 0) return null;

  let best: { item: FaqItem; score: number } | null = null;
  for (const item of knowledgeBase) {
    const question = normalize(item.question);
    const answer = normalize(item.answer);
    const score = words.reduce((sum, w) => sum + (question.includes(w) ? 2 : 0) + (answer.includes(w) ? 1 : 0), 0);
    if (score > 0 && (!best || score > best.score)) best = { item, score };
  }
  return best && best.score >= 2 ? best.item : null;
}
