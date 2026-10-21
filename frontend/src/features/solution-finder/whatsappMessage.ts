import type { Selection } from "@/features/solution-finder/conversation";
import type { Estimate } from "@/features/solution-finder/estimate";

const euro = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const range = (from: number, to: number) => `${euro.format(from)} – ${euro.format(to)} €`;
/** „Was haben Sie schon? Tippen Sie an …“ → „Was haben Sie schon?“ */
const firstSentence = (text: string) => text.match(/^[^?.!]*[?.!]/)?.[0] ?? text;

/**
 * Komplette Übersicht als Text für WhatsApp: jede Frage mit Antwort, Wünsche, Preis je Posten
 * und Fragen aus dem Chat. Wird nur vorausgefüllt – senden muss der Besucher selbst.
 */
export function buildWhatsAppMessage(selection: Selection, estimate: Estimate, chatQuestions: string[]): string {
  const { solution, extras, main, wishes, answered } = selection;
  const lines: string[] = [
    "Hallo Sun & Moon,",
    "ich habe auf Ihrer Website den Lösungs-Assistenten ausgefüllt.",
    "",
    `*Bereiche:* ${[solution, ...extras].map((s) => s.label).join(", ")}`,
  ];
  if (main?.recommendation) lines.push(`*Empfehlung:* ${main.recommendation}`);

  if (answered.length) {
    lines.push("", "*Meine Angaben:*");
    answered.forEach((a) => lines.push(`- ${firstSentence(a.question)} ${a.answer}`));
  }
  if (wishes) lines.push("", "*Meine Wünsche:*", wishes);

  if (estimate.items.length) {
    lines.push("", "*Ungefährer Preis laut Assistent:*");
    estimate.items.forEach((item) => lines.push(`- ${item.label}: ${range(item.from, item.to)}`));
    lines.push(`Einmalig gesamt: ca. ${range(estimate.from, estimate.to)}`);
  }
  if (estimate.monthly) lines.push(`Betreuung: ab ${euro.format(estimate.monthly)} € pro Monat`);
  if (estimate.firstYear) lines.push(`Erstes Jahr mit Betreuung: ca. ${range(estimate.firstYear.from, estimate.firstYear.to)}`);
  if (estimate.hourly) lines.push(`IT-Hilfe: ab ${euro.format(estimate.hourly)} € pro Stunde`);

  if (chatQuestions.length) {
    lines.push("", "*Meine Fragen im Chat:*");
    chatQuestions.forEach((q) => lines.push(`- ${q}`));
  }
  lines.push("", "Bitte melden Sie sich bei mir. Danke!");
  return lines.join("\n");
}
