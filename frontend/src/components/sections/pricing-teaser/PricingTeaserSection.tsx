import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PricingTeaserItem } from "@/components/sections/pricing-teaser/PricingTeaserItem";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { priceNote, pricePackages } from "@/content/pricing/packages";

const allPricesLink = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-deep";

/** Preisrahmen auf einen Blick – Details stehen auf /preise. */
export function PricingTeaserSection() {
  return (
    <section className="home-pricing bg-surface py-10 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeader eyebrow="Preise" title="Was kostet das?" text="Das ist meist die erste Frage, deshalb steht die Antwort gleich hier. Es sind Einstiegspreise. Den festen Preis bekommen Sie nach dem ersten Gespräch schriftlich." />
          <Link href="/preise" className={`${allPricesLink} mb-14 hidden shrink-0 self-start md:inline-flex`}>Alle Preise ansehen <ArrowRight size={17} /></Link>
        </div>
        <ul className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {pricePackages.map((pkg) => <li key={pkg.id}><PricingTeaserItem pkg={pkg} /></li>)}
        </ul>
        <p className="mt-5 text-xs leading-5 text-muted md:mt-6 md:text-sm">{priceNote}</p>
        <Link href="/preise" className={`${allPricesLink} mt-6 w-full md:hidden`}>Alle Preise ansehen <ArrowRight size={17} /></Link>
      </Container>
    </section>
  );
}
