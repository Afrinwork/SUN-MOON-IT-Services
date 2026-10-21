import { ServicesGallery } from "@/components/sections/services/ServicesGallery";
import { CardLink } from "@/components/ui/card/CardLink";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { services } from "@/features/services/data/services";

/** Mobil: Karten zum Wischen. Desktop: Karten-Galerie. */
export function ServicesSection() {
  const galleryServices = services.map(({ slug, title, short }) => ({ slug, title, short }));
  return (
    <section id="leistungen" className="home-services overflow-hidden bg-white py-10 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Leistungen" title="Was wir für Ihr Unternehmen umsetzen." text="Websites, Apps, individuelle Software, Microsoft 365 und Automatisierung – von der Planung bis zum laufenden Betrieb." />
        <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:hidden">
          {services.map(({ slug, title, short, icon: Icon }, index) => <li key={slug} className={`reveal delay-${(index % 3) + 1} w-[84%] shrink-0 snap-start`}><CardLink href={`/leistungen/${slug}`} title={title} text={short} icon={<Icon size={23} />} /></li>)}
        </ul>
        <div className="hidden md:block"><ServicesGallery services={galleryServices} /></div>
      </Container>
    </section>
  );
}
