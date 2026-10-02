import { CardLink } from "@/components/ui/card/CardLink";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { services } from "@/features/services/data/services";

export function ServicesSection() {
  return (
    <section id="leistungen" className="home-services overflow-hidden bg-white py-10 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Leistungen" title="Was wir für Ihr Unternehmen umsetzen." text="Websites, Apps, individuelle Software, Microsoft 365 und Automatisierung – von der Planung bis zum laufenden Betrieb." />
        <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {services.map(({ slug, title, short, icon: Icon }, index) => <li key={slug} className={`reveal delay-${(index % 3) + 1} w-[84%] shrink-0 snap-start md:w-auto`}><CardLink href={`/leistungen/${slug}`} title={title} text={short} icon={<Icon size={23} />} /></li>)}
        </ul>
      </Container>
    </section>
  );
}
