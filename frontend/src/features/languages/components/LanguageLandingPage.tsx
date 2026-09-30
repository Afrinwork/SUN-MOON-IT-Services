import Link from "next/link";
import { ArrowRight, Check, Globe2, MessageCircle } from "lucide-react";
import { MobileContactBar } from "@/components/mobile/MobileContactBar";
import { Container } from "@/components/ui/container/Container";
import { languagePages, type LanguagePage } from "@/content/languages/language-pages";
import { siteConfig } from "@/config/site.config";

const callLabels: Record<LanguagePage["locale"], string> = { en: "Call", ar: "اتصال", tr: "Ara", ku: "Telefon bike" };

export function LanguageLandingPage({ content }: { content: LanguagePage }) {
  return (
    <main lang={content.locale} dir={content.direction}>
      <header className="network-grid bg-primary-deep text-white">
        <Container className="py-12 md:py-20 lg:py-24">
          <nav className="flex flex-wrap items-center gap-2" aria-label="Languages">
            <Globe2 size={16} className="me-1 text-accent" />
            {Object.values(languagePages).map((language) => <Link key={language.locale} href={`/${language.locale}`} lang={language.locale} hrefLang={language.locale} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${language.locale === content.locale ? "border-accent bg-accent text-primary-deep" : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"}`}>{language.nativeName}</Link>)}
          </nav>
          <div className="mt-12 max-w-5xl md:mt-16">
            <p className="reveal text-xs font-bold uppercase tracking-[0.18em] text-accent">{content.eyebrow}</p>
            <h1 className="reveal delay-1 mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] md:text-6xl lg:text-7xl">{content.title}</h1>
            <p className="reveal delay-2 mt-6 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">{content.intro}</p>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="reveal delay-3 mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white"><MessageCircle size={18} />{content.contactLabel}</a>
          </div>
        </Container>
      </header>

      <article>
        <section className="bg-white py-16 md:py-24">
          <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Sun & Moon IT Services</p>
            <div><h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-primary md:text-5xl">{content.aboutTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{content.aboutText}</p></div>
          </Container>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <Container>
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Services</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary md:text-5xl">{content.servicesTitle}</h2><p className="mt-5 text-lg leading-8 text-muted">{content.servicesIntro}</p></div>
            <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-0 md:overflow-visible md:border-t md:border-border md:px-0 md:pb-0 lg:grid-cols-3">
              {content.services.map((service, index) => <section key={service.title} className="w-[80%] shrink-0 snap-start rounded-2xl border border-border bg-white p-5 md:w-auto md:rounded-none md:border-0 md:border-b md:bg-transparent md:px-6 md:py-7"><span className="text-xs font-black text-accent-strong">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-xl font-bold text-primary">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{service.text}</p></section>)}
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <h2 className="text-3xl font-black tracking-[-0.035em] text-primary md:text-4xl">{content.valuesTitle}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">{content.values.map((value) => <li key={value} className="flex items-start gap-3 border-b border-border py-3 text-sm font-semibold text-foreground"><Check size={17} className="mt-0.5 shrink-0 text-accent-strong" />{value}</li>)}</ul>
          </Container>
        </section>

        <section className="bg-primary py-12 text-white md:py-16">
          <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div><h2 className="text-3xl font-black tracking-[-0.035em]">{content.ctaTitle}</h2><p className="mt-3 text-white/65">{content.ctaText}</p></div>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep">{content.contactLabel}<ArrowRight size={17} /></a>
          </Container>
        </section>
      </article>
      <MobileContactBar callLabel={callLabels[content.locale]} whatsappLabel="WhatsApp" />
    </main>
  );
}
