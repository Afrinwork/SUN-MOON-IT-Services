import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { TagList } from "@/components/ui/list/TagList";
import { Section } from "@/components/ui/section/Section";
import { ProjectStory } from "@/features/client-projects/components/ProjectStory";
import { clientProjects, findClientProject } from "@/features/client-projects/data/client-projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return clientProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findClientProject((await params).slug);
  return project ? { title: project.title, description: project.short } : {};
}

export default async function KundenprojektDetailPage({ params }: Props) {
  const project = findClientProject((await params).slug);
  if (!project) notFound();
  return (
    <main>
      <PageHeader eyebrow={`${project.category} · ${project.customer}`} title={project.title} text={project.short} breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Kundenprojekte", href: "/projekte/kundenprojekte" }, { label: project.title }]} />
      <Section eyebrow="Projektverlauf" title="Von der Ausgangslage zum Ergebnis" tone="surface"><ProjectStory project={project} /></Section>
      <Section eyebrow="Technologien" title="Eingesetzte Technik"><TagList items={project.technologies} /></Section>
      <ContactCTASection />
    </main>
  );
}
