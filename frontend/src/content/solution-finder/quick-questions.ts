import type { FaqItem } from "@/components/ui/faq/FaqList";
import { generalFaq } from "@/content/faq/faq";
import { pricingPage } from "@/content/pricing/pricing-page";
import { priceAnswers, serviceFaq } from "@/content/solution-finder/knowledge";
import { findPackage } from "@/features/pricing/formatPrice";

/** Folgefragen passend zum Thema: zuerst Preis des empfohlenen Pakets, dann Themen-FAQ, dann Allgemeines. */
export function topicQuestions(serviceHref: string, packageId: string): FaqItem[] {
  const pkg = findPackage(packageId);
  const priceQuestion = priceAnswers.filter((p) => pkg && p.question.includes(pkg.name));
  return [...priceQuestion, ...serviceFaq(serviceHref), ...pricingPage.faq, ...generalFaq].filter(
    (item, index, all) => all.findIndex((other) => other.question === item.question) === index,
  );
}
