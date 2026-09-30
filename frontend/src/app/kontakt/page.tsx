import { JsonLd } from "@/components/layout/page/JsonLd";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ButtonLink } from "@/components/ui/buttons/Button";
import { Card } from "@/components/ui/cards/Card";
import { Section } from "@/components/ui/containers/Section";
import { Icon } from "@/components/ui/icons/Icon";
import { siteConfig } from "@/config/site/site.config";
import { contactContent } from "@/content/contact/contact";
import { faqContent } from "@/content/faq/faq";
import { toTelHref } from "@/lib/helpers/format-phone";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/structured-data/faq";

export const metadata = pageMetadata({
  path: "/kontakt",
  title: "Kontakt",
  description: "Rufen Sie uns an oder nutzen Sie unser Anfrageformular.",
});

export default function KontaktPage() {
  const { phone, hours, formUrl } = siteConfig.contact;
  return (
    <>
      <JsonLd data={faqSchema(faqContent.items)} />
      <PageHeader eyebrow={contactContent.eyebrow} title={contactContent.title} text={contactContent.text} />
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-700">{contactContent.phoneTitle}</h2>
            <a href={toTelHref(phone)} className="flex items-center gap-3 text-2xl font-semibold tabular-nums text-navy-900 hover:text-brand-700">
              <Icon name="phone" size={24} className="text-brand-600" /> {phone}
            </a>
            <p className="text-slate-600">{hours}</p>
          </Card>
          {formUrl && (
            <Card className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-700">{contactContent.formTitle}</h2>
              <p className="text-slate-600">{contactContent.formText}</p>
              <ButtonLink href={formUrl} external={{ label: contactContent.formCta }} className="mt-2 self-start">
                {contactContent.formCta} <Icon name="external" size={16} />
              </ButtonLink>
            </Card>
          )}
        </div>
        <h2 className="mt-16 text-2xl font-bold text-navy-900">{faqContent.title}</h2>
        <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {faqContent.items.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-semibold text-navy-900">{item.question}</dt>
              <dd className="mt-2 text-slate-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
