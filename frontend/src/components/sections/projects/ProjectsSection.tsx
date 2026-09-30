import { ButtonLink } from "@/components/ui/buttons/Button";
import { Section } from "@/components/ui/containers/Section";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { projectsOverviewContent } from "@/content/projects/overview";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";

type ProjectsSectionProps = { showHeader?: boolean; showLink?: boolean };

export function ProjectsSection({ showHeader = true, showLink = true }: ProjectsSectionProps) {
  const { eyebrow, title, text, allLabel } = projectsOverviewContent;
  return (
    <Section tone="muted">
      {showHeader && (
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={eyebrow} title={title} text={text} align="left" />
          {showLink && (
            <ButtonLink href="/projekte" variant="secondary" className="mb-10 self-start md:mb-12 md:self-auto">
              {allLabel}
            </ButtonLink>
          )}
        </div>
      )}
      <ProjectGrid />
    </Section>
  );
}
