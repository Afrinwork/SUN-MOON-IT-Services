import { CardLink } from "@/components/ui/card/CardLink";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { services } from "@/features/services/data/services";

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-white py-14 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Leistungen" title="Digitale Lösungen aus einer Hand." text="Von der ersten Idee bis zum stabilen Betrieb: Wir entwickeln Lösungen, die nicht nur gut aussehen, sondern im Alltag wirklich funktionieren." />
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {services.map(({ slug, title, short, icon: Icon }, index) => <li key={slug} className={`reveal delay-${(index % 3) + 1}`}><CardLink href={`/leistungen/${slug}`} title={title} text={short} icon={<Icon size={23} />} /></li>)}
        </ul>
      </Container>
    </section>
  );
}
