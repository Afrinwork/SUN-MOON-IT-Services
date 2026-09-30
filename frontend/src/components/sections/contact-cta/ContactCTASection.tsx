import { ButtonLink } from "@/components/ui/buttons/Button";
import { Container } from "@/components/ui/containers/Container";
import { Icon } from "@/components/ui/icons/Icon";
import { siteConfig } from "@/config/site/site.config";
import { contactContent } from "@/content/contact/contact";
import { toTelHref } from "@/lib/helpers/format-phone";

/** Abschluss jeder Seite: Telefonnummer groß und direkt anrufbar – kein Formular. */
export function ContactCTASection() {
  const { phone, hours } = siteConfig.contact;
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-navy-900 px-6 py-10 text-white md:grid-cols-[1.3fr_1fr] md:items-center md:px-12 md:py-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{contactContent.ctaTitle}</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">{contactContent.ctaText}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={toTelHref(phone)} className="flex items-center gap-3 text-2xl font-semibold tabular-nums hover:text-brand-500 md:text-3xl">
              <Icon name="phone" size={26} className="text-brand-500" />
              {phone}
            </a>
            <p className="text-sm text-slate-400">{hours}</p>
            <ButtonLink href="/kontakt" variant="inverted" className="mt-2 self-start md:self-end">
              {contactContent.ctaButton} <Icon name="arrowRight" size={18} />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
