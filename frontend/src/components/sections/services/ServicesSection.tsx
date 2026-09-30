import { Section } from "@/components/ui/containers/Section";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { servicesOverviewContent } from "@/content/services/overview";
import { ServiceGrid } from "@/features/services/components/ServiceGrid";

export function ServicesSection({ showHeader = true }: { showHeader?: boolean }) {
  const { eyebrow, title, text } = servicesOverviewContent;
  return (
    <Section tone="muted" id="leistungen">
      {showHeader && <SectionHeader eyebrow={eyebrow} title={title} text={text} align="left" />}
      <ServiceGrid />
    </Section>
  );
}
