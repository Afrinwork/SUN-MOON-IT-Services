import type { FaqItem } from "@/components/ui/faq/FaqList";
import { generalFaq } from "@/content/faq/faq";
import { pricingPage } from "@/content/pricing/pricing-page";

/** Antippbare Folgefragen nach dem Ergebnis – Antworten stammen aus den bestehenden FAQ. */
export const quickQuestions: FaqItem[] = [...pricingPage.faq, ...generalFaq].filter(
  (item, index, all) => all.findIndex((other) => other.question === item.question) === index,
);
