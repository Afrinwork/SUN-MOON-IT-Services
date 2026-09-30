import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Badge } from "@/components/ui/badges/Badge";
import { Card } from "@/components/ui/cards/Card";
import { Section } from "@/components/ui/containers/Section";
import { projectsOverviewContent } from "@/content/projects/overview";
import type { Project } from "@/types/project/project";

export function ProjectDetail({ project }: { project: Project }) {
  const { detailLabels } = projectsOverviewContent;
  const blocks = [
    { title: detailLabels.challenge, text: project.challenge },
    { title: detailLabels.solution, text: project.solution },
    { title: detailLabels.result, text: project.result },
  ];
  return (
    <>
      <PageHeader eyebrow={project.category} title={project.title} text={project.summary} />
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blocks.map((block) => (
            <Card key={block.title}>
              <h2 className="text-lg font-semibold text-navy-900">{block.title}</h2>
              <p className="mt-3 text-slate-600">{block.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Section>
      <ContactCTASection />
    </>
  );
}
