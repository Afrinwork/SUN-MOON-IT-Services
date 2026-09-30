import { JsonLd } from "@/components/layout/page/JsonLd";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Badge } from "@/components/ui/badges/Badge";
import { ButtonLink } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Section } from "@/components/ui/containers/Section";
import { Icon } from "@/components/ui/icons/Icon";
import { CheckList } from "@/components/ui/typography/CheckList";
import { servicesOverviewContent } from "@/content/services/overview";
import { serviceSchema } from "@/lib/structured-data/service";
import { getService } from "../data/get-service";
import type { ServiceSlug } from "../types";

export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = getService(slug);
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHeader eyebrow={servicesOverviewContent.eyebrow} title={service.title} text={service.intro}>
        <ButtonLink href="/kontakt">
          {servicesOverviewContent.requestLabel} <Icon name="arrowRight" size={18} />
        </ButtonLink>
      </PageHeader>
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-5 text-xl font-semibold text-navy-900">Ihre Vorteile</h2>
            <CheckList items={service.benefits} />
          </Card>
          <Card>
            <h2 className="mb-5 text-xl font-semibold text-navy-900">Was wir liefern</h2>
            <CheckList items={service.deliverables} />
          </Card>
        </div>
        <h2 className="mt-12 text-lg font-semibold text-navy-900">Eingesetzte Technologien</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Section>
      <ContactCTASection />
    </>
  );
}
