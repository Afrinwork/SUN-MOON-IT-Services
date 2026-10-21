import Link from "next/link";
import { ServicesGallery } from "@/components/sections/services/ServicesGallery";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { services } from "@/features/services/data/services";

/** Karten-Galerie auf allen Größen; die Links stehen zusätzlich als unsichtbare Liste für Screenreader und Suchmaschinen im Code. */
export function ServicesSection() {
  const galleryServices = services.map(({ slug, title, short }) => ({ slug, title, short }));
  return (
    <section id="leistungen" className="home-services overflow-hidden bg-white py-10 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Leistungen" title="Was wir für Ihr Unternehmen umsetzen." text="Websites, Apps, individuelle Software, Microsoft 365 und Automatisierung – von der Planung bis zum laufenden Betrieb." />
        <ul className="sr-only">
          {services.map(({ slug, title }) => <li key={slug}><Link href={`/leistungen/${slug}`}>{title}</Link></li>)}
        </ul>
        <ServicesGallery services={galleryServices} />
      </Container>
    </section>
  );
}
