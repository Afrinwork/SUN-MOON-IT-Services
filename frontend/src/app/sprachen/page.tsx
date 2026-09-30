import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { languagePages } from "@/content/languages/language-pages";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "Sprachen",
  description: "Sun & Moon IT Services berät Sie auf Deutsch, Englisch, Arabisch, Türkisch und Kurdisch.",
  path: "/sprachen",
});

export default function SprachenPage() {
  return (
    <main>
      <header className="network-grid bg-primary-deep py-14 text-white md:py-24">
        <Container>
          <span className="grid size-12 place-items-center rounded-2xl bg-white/8 text-accent"><Globe2 size={23} /></span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-accent">Mehrsprachige Beratung</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] md:text-6xl">Technik versteht sich besser in der <span className="text-accent">eigenen Sprache.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Wir beraten und begleiten Sie auf Deutsch, Englisch, Arabisch, Türkisch und Kurdisch – persönlich, verständlich und ohne unnötige Fachsprache.</p>
        </Container>
      </header>
      <section className="bg-surface py-14 md:py-24">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Sprachseiten</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary md:text-5xl">Unsere Leistungen in Ihrer Sprache.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {Object.values(languagePages).map((language) => <Link key={language.locale} href={`/${language.locale}`} hrefLang={language.locale} className="group flex min-h-40 items-end justify-between rounded-3xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"><div><span className="text-xs font-bold uppercase tracking-widest text-accent-strong">{language.languageName}</span><h2 className="mt-2 text-2xl font-black text-primary" lang={language.locale} dir={language.direction}>{language.nativeName}</h2><p className="mt-2 text-sm text-muted">IT Services · Web · Apps · Software</p></div><ArrowRight size={19} className="text-accent-strong transition group-hover:translate-x-1" /></Link>)}
          </div>
        </Container>
      </section>
    </main>
  );
}
