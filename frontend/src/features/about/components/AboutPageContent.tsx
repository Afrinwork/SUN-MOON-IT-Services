import Link from "next/link";
import { ArrowRight, Check, Code2, Languages, MapPin, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { company } from "@/content/about/company";
import { qualityPrinciples } from "@/content/about/approach";
import { values } from "@/content/about/values";

const focusAreas = ["Websites", "Mobile Apps", "Individuelle Software", "Microsoft 365"];

export function AboutPageContent() {
  return (
    <>
      <header className="network-grid bg-primary-deep text-white">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Über uns" }]} />
            <p className="reveal mt-10 text-xs font-bold uppercase tracking-[0.2em] text-accent">Sun & Moon IT Services</p>
            <h1 className="reveal delay-1 mt-4 max-w-4xl text-6xl font-black leading-[1.02] tracking-[-0.045em]">Technik verstehen. Verantwortung <span className="text-accent">übernehmen.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">Wir entwickeln digitale Lösungen mit Blick auf Menschen, Prozesse und einen zuverlässigen Betrieb.</p>
          </div>
          <div className="reveal delay-2 border-y border-white/12 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Unser Fokus</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">{focusAreas.map((area, index) => <li key={area} className="flex items-center gap-3 text-sm font-bold"><span className="text-xs text-accent">0{index + 1}</span>{area}</li>)}</ul>
          </div>
        </Container>

        <Container className="py-10 md:hidden">
          <Breadcrumb items={[{ label: "Über uns" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Sun & Moon IT Services</p>
          <h1 className="mobile-reveal mobile-delay-1 mt-3 text-[2.5rem] font-black leading-[1.02] tracking-[-0.045em]">Technik mit Blick fürs <span className="text-accent">Ganze.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">Persönliche IT-Beratung und Entwicklung aus Seelze – verständlich, zuverlässig und passend zu Ihrem Unternehmen.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 grid grid-cols-2 border-y border-white/10 py-5">
            <div><MapPin size={18} className="mb-2 text-accent" /><strong className="block">Seelze</strong><span className="text-xs text-white/55">unser Standort</span></div>
            <div className="border-l border-white/10 pl-5"><Languages size={18} className="mb-2 text-accent" /><strong className="block">5 Sprachen</strong><span className="text-xs text-white/55">persönliche Beratung</span></div>
          </div>
        </Container>
      </header>

      <div className="hidden md:block">
        <section className="bg-white py-24">
          <Container className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Wer wir sind</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-primary">Ein IT-Partner mit Blick für das Wesentliche.</h2><blockquote className="mt-10 border-l-2 border-accent pl-5 text-xl font-bold leading-8 text-primary">„{company.statement}“</blockquote></div>
            <div className="space-y-5 text-lg leading-8 text-muted"><p className="font-semibold text-foreground">{company.intro}</p>{company.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="grid grid-cols-2 gap-5 border-t border-border pt-7"><div className="flex gap-3"><MapPin size={19} className="mt-1 shrink-0 text-accent-strong" /><span><strong className="block text-sm text-primary">Regional verwurzelt</strong><span className="text-sm">Wilhelm-Busch-Straße 8, Seelze</span></span></div><div className="flex gap-3"><Languages size={19} className="mt-1 shrink-0 text-accent-strong" /><span><strong className="block text-sm text-primary">Mehrsprachig</strong><span className="text-sm">Deutsch, Englisch, Arabisch, Türkisch und Kurdisch</span></span></div></div></div>
          </Container>
        </section>

        <section className="bg-surface py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Unsere Haltung</p>
            <h2 className="mt-3 max-w-3xl text-5xl font-black tracking-[-0.04em] text-primary">So möchten wir mit Ihnen zusammenarbeiten.</h2>
            <div className="mt-14 grid grid-cols-4 border-y border-border">{values.map((value, index) => <article key={value.title} className="border-r border-border px-6 py-8 first:pl-0 last:border-r-0"><span className="text-xs font-black text-accent-strong">0{index + 1}</span><h3 className="mt-5 text-xl font-bold text-primary">{value.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{value.text}</p></article>)}</div>
          </Container>
        </section>

        <section className="bg-primary py-24 text-white">
          <Container className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div><Code2 size={25} className="text-accent" /><p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">Technische Qualität</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Qualität zeigt sich im laufenden Betrieb.</h2><p className="mt-5 leading-7 text-white/62">Eine Lösung ist erst dann gut, wenn sie zuverlässig funktioniert, verständlich bleibt und weiterentwickelt werden kann.</p></div>
            <ul className="grid gap-x-8 md:grid-cols-2">{qualityPrinciples.map((principle) => <li key={principle} className="flex items-start gap-3 border-b border-white/10 py-5 text-sm leading-6 text-white/78"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{principle}</li>)}</ul>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container className="flex items-center justify-between gap-10"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Unsere Arbeitsweise</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Transparent vom ersten Gespräch bis zum Betrieb.</h2></div><Link href="/ablauf" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white">Projektablauf ansehen <ArrowRight size={17} /></Link></Container>
        </section>
      </div>

      <div className="md:hidden">
        <section className="bg-white py-12"><Container><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Wer wir sind</p><h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Ihr technischer Ansprechpartner.</h2><p className="mt-5 text-base font-semibold leading-7 text-foreground">{company.intro}</p><div className="mt-4 space-y-4 text-sm leading-6 text-muted">{company.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><blockquote className="mt-7 border-l-2 border-accent pl-4 font-bold leading-6 text-primary">„{company.statement}“</blockquote></Container></section>

        <section className="bg-surface py-12"><Container><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Unsere Haltung</p><h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Darauf können Sie sich verlassen.</h2><div className="mt-7 divide-y divide-border border-y border-border">{values.map((value, index) => <article key={value.title} className="grid grid-cols-[2rem_1fr] gap-3 py-5"><span className="text-xs font-black text-accent-strong">0{index + 1}</span><div><h3 className="font-bold text-primary">{value.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{value.text}</p></div></article>)}</div></Container></section>

        <section className="bg-primary py-12 text-white"><Container><Code2 size={22} className="text-accent" /><p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Qualitätsversprechen</p><h2 className="mt-3 text-2xl font-black tracking-[-0.035em]">Sauber entwickelt. Verlässlich betrieben.</h2><ul className="mt-6 divide-y divide-white/10">{qualityPrinciples.map((principle) => <li key={principle} className="flex gap-3 py-4 text-sm leading-6 text-white/75"><Check size={15} className="mt-0.5 shrink-0 text-accent" />{principle}</li>)}</ul></Container></section>

        <section className="bg-white py-12"><Container><div className="rounded-2xl bg-surface p-5"><MessageCircle size={21} className="text-accent-strong" /><h2 className="mt-4 text-xl font-black text-primary">Lernen wir uns kennen.</h2><p className="mt-2 text-sm leading-6 text-muted">Erzählen Sie uns kurz, was Sie digital verbessern möchten.</p><Link href="/kontakt" className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-accent px-4 font-bold text-primary-deep">Kontakt aufnehmen <ArrowRight size={17} /></Link></div><Link href="/ablauf" className="mt-4 flex min-h-12 items-center justify-between border-b border-border px-1 font-bold text-primary">So läuft ein Projekt ab <ArrowRight size={17} /></Link></Container></section>
      </div>
    </>
  );
}
