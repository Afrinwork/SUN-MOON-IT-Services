import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { projectsOverviewContent } from "@/content/projects/overview";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  path: "/projekte",
  title: "Projekte",
  description: "Ausgewählte Projekte aus Web, Software und Automatisierung.",
});

export default function ProjektePage() {
  return (
    <>
      <PageHeader
        eyebrow={projectsOverviewContent.eyebrow}
        title={projectsOverviewContent.pageTitle}
        text={projectsOverviewContent.pageText}
      />
      <ProjectsSection showHeader={false} showLink={false} />
      <ContactCTASection />
    </>
  );
}
