import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { FaqList } from "@/components/ui/faq/FaqList";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { generalFaq } from "@/content/faq/faq";

/** Die wichtigsten Fragen direkt beantworten – alle weiteren auf /faq. */
export function HomeFaqSection() {
  return (
    <section className="home-faq bg-surface py-10 md:py-28">
      <Container className="grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeader eyebrow="FAQ" title="Häufige Fragen" text="Ihre Frage ist nicht dabei? Rufen Sie einfach an, dann klären wir das direkt." />
          <Link href="/faq" className="group -mt-4 mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-strong transition hover:text-primary md:-mt-8">
            Alle Fragen &amp; Antworten <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <FaqList items={generalFaq.slice(0, 5)} />
      </Container>
    </section>
  );
}
