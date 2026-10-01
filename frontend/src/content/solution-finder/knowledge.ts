import type { FaqItem } from "@/components/ui/faq/FaqList";
import { siteConfig } from "@/config/site.config";
import { generalFaq } from "@/content/faq/faq";
import { priceNote, pricePackages } from "@/content/pricing/packages";
import { pricingPage } from "@/content/pricing/pricing-page";
import { services } from "@/features/services/data/services";
import { formatPackagePrice } from "@/features/pricing/formatPrice";

/** Preisantworten werden automatisch aus den Paketen erzeugt – ändern sich die Preise, ändern sich die Antworten mit. */
export const priceAnswers: FaqItem[] = pricePackages.map((pkg) => ({
  question: `Was kostet „${pkg.name}“?`,
  answer: `${pkg.name}: ${formatPackagePrice(pkg)}. Enthalten: ${pkg.includes.join(", ")}. ${priceNote}`,
}));

const companyAnswers: FaqItem[] = [
  { question: "Wo sitzt Sun & Moon – Standort, Adresse, kommt ihr vor Ort?", answer: `Unser Standort ist ${siteConfig.address}. Wir arbeiten für Unternehmen in Seelze, Hannover und Umgebung – vieles auch per Fernwartung.` },
  { question: "Welche Sprachen sprechen Sie – Deutsch, Englisch, Arabisch, Türkisch, Kurdisch?", answer: "Wir beraten auf Deutsch, Englisch, Arabisch, Türkisch und Kurdisch." },
  { question: "Wann sind Sie erreichbar – Öffnungszeiten, Telefon, WhatsApp?", answer: `Sie erreichen uns ${siteConfig.openingHours} – am schnellsten per WhatsApp oder Telefon unter ${siteConfig.phone}.` },
];

/** Alle Inhalte, aus denen der Assistent Antworten auswählt – dedupliziert nach Frage. */
export const knowledgeBase: FaqItem[] = [
  ...priceAnswers,
  ...companyAnswers,
  ...pricingPage.faq,
  ...generalFaq,
  ...services.flatMap((s) => s.content.faq),
].filter((item, index, all) => all.findIndex((other) => other.question === item.question) === index);

/** Themen-FAQ einer Leistung (für passende Folgefragen). */
export function serviceFaq(serviceHref: string): FaqItem[] {
  return services.find((s) => `/leistungen/${s.slug}` === serviceHref)?.content.faq ?? [];
}
