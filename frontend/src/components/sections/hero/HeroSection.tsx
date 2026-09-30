import { ButtonLink } from "@/components/ui/buttons/Button";
import { Container } from "@/components/ui/containers/Container";
import { Icon } from "@/components/ui/icons/Icon";
import { siteConfig } from "@/config/site/site.config";
import { heroContent } from "@/content/home/hero";
import { toTelHref } from "@/lib/helpers/format-phone";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* dezentes Raster statt Verlauf – rein dekorativ, per CSS, kein Bild (LCP-neutral) */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <Container className="relative py-20 md:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-brand-100">
          <Icon name="sparkles" size={16} /> {heroContent.badge}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          {heroContent.titleStart} <span className="text-brand-500">{heroContent.titleHighlight}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">{heroContent.text}</p>
        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <ButtonLink href={toTelHref(siteConfig.contact.phone)}>
            <Icon name="phone" size={18} /> {heroContent.primaryCta}
          </ButtonLink>
          <ButtonLink href="/leistungen" variant="inverted">
            {heroContent.secondaryCta} <Icon name="arrowRight" size={18} />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
