import { Section } from "@/components/ui/containers/Section";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { technologiesContent } from "@/content/technologies/overview";
import { TechnologyList } from "@/features/technologies/components/TechnologyList";

export function TechnologiesSection() {
  const { eyebrow, title, text } = technologiesContent;
  return (
    <Section tone="navy">
      <SectionHeader eyebrow={eyebrow} title={title} text={text} align="left" inverted />
      <TechnologyList />
    </Section>
  );
}
