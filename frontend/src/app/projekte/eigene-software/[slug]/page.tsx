import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CheckList } from "@/components/ui/list/CheckList";
import { TagList } from "@/components/ui/list/TagList";
import { Section } from "@/components/ui/section/Section";
import { SoftwareLinks } from "@/features/own-software/components/SoftwareLinks";
import { findSoftware, ownSoftware } from "@/features/own-software/data/software";
import { createMetadata } from "@/lib/seo/createMetadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ownSoftware.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const software = findSoftware((await params).slug);
  return software ? createMetadata({ title: software.title, description: software.short, path: `/projekte/eigene-software/${software.slug}` }) : {};
}

export default async function SoftwareDetailPage({ params }: Props) {
  const software = findSoftware((await params).slug);
  if (!software) notFound();
  return (
    <main>
      <PageHeader eyebrow="Eigene Software" title={software.title} text={software.description} breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Eigene Software", href: "/projekte/eigene-software" }, { label: software.title }]}>
        <SoftwareLinks url={software.url} />
      </PageHeader>
      <Section eyebrow="Funktionen" title="Was die Software kann"><CheckList items={software.features} /></Section>
      <Section eyebrow="Nutzen" title="Ihre Vorteile" tone="surface"><CheckList items={software.benefits} /></Section>
      <Section eyebrow="Technologien" title="Technische Basis"><TagList items={software.technologies} /></Section>
      <ContactCTASection />
    </main>
  );
}
