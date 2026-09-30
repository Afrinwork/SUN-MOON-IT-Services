import Link from "next/link";
import { AlertTriangle, ArrowRight, ChevronDown, Clock3, Gauge, GitBranch, Layers3, PlugZap, RefreshCw, ShieldAlert, ShieldCheck, Wrench } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { ModernizationMotion } from "@/features/services/components/ModernizationMotion";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

const warningSigns = [
  { icon: Clock3, title: "Zu langsam", text: "Einfache Schritte kosten unnötig Zeit." },
  { icon: ShieldAlert, title: "Nicht mehr sicher", text: "Updates fehlen oder sind kaum möglich." },
  { icon: Wrench, title: "Schwer zu ändern", text: "Kleine Wünsche werden schnell teuer." },
  { icon: PlugZap, title: "Schlecht verbunden", text: "Daten werden mehrfach übertragen." },
];

const outcomes = [
  { icon: Gauge, title: "Schneller", text: "Kürzere Wege und bessere Leistung." },
  { icon: ShieldCheck, title: "Sicherer", text: "Aktuelle Technik und klare Zugriffe." },
  { icon: Layers3, title: "Einfacher", text: "Wartbar und verständlich aufgebaut." },
  { icon: GitBranch, title: "Erweiterbar", text: "Neue Funktionen gezielt ergänzen." },
];

const process = [
  ["01", "Prüfen", "Bestand und Risiken erfassen."],
  ["02", "Priorisieren", "Wichtiges zuerst erneuern."],
  ["03", "Testen", "Änderungen sicher vorbereiten."],
  ["04", "Umstellen", "Kontrolliert in Betrieb nehmen."],
] as const;

const paths = [
  { title: "Verbessern", text: "Gute Basis behalten und gezielt optimieren.", icon: Wrench },
  { title: "Verbinden", text: "Altes System über Schnittstellen ergänzen.", icon: PlugZap },
  { title: "Ersetzen", text: "Nur neu aufbauen, wenn es wirklich sinnvoll ist.", icon: RefreshCw },
];

function DesktopComparison() {
  return (
    <div className="modern-hero-compare relative mx-auto w-full max-w-xl" aria-label="Vergleich zwischen altem und modernisiertem System">
      <div className="rounded-[2rem] border border-white/15 bg-white/8 p-4 shadow-2xl shadow-black/25 backdrop-blur">
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
          <div className="rounded-[1.4rem] bg-white/7 p-5"><div className="flex items-center justify-between"><span className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-white/45">Vorher</span><AlertTriangle size={17} className="text-white/45" /></div><div className="mt-8 space-y-3"><div className="h-3 w-full rounded bg-white/10" /><div className="h-3 w-3/4 rounded bg-white/10" /><div className="h-14 rounded-xl border border-white/10" /></div><p className="mt-8 text-xs font-bold text-white/50">Langsam · starr · aufwendig</p></div>
          <div className="flex w-10 flex-col items-center justify-center"><span className="grid size-9 place-items-center rounded-full bg-accent text-primary-deep"><ArrowRight size={16} /></span><i className="modern-transfer mt-3 h-px w-8 bg-accent" /></div>
          <div className="rounded-[1.4rem] bg-white p-5 text-foreground"><div className="flex items-center justify-between"><span className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-accent-strong">Nachher</span><span className="modern-health size-2 rounded-full bg-accent" /></div><div className="mt-8 grid grid-cols-2 gap-2"><div className="col-span-2 h-16 rounded-xl bg-surface-accent" /><div className="h-14 rounded-xl bg-surface" /><div className="h-14 rounded-xl bg-accent" /></div><p className="mt-8 text-xs font-bold text-primary">Schnell · sicher · erweiterbar</p></div>
        </div>
      </div>
    </div>
  );
}

export function ModernizationPage() {
  const service = getService("modernisierung");
  const { content } = service;

  return (
    <ModernizationMotion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/modernisierung")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[41rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24"><div><Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Modernisierung" }]} /><p className="reveal mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><RefreshCw size={14} /> Modernisierung</p><h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Bewährtes behalten. <span className="text-accent">Veraltetes erneuern.</span></h1><p className="reveal delay-2 mt-6 max-w-xl text-lg leading-8 text-white/70">Wir modernisieren Software und Systeme Schritt für Schritt – ohne unnötigen Neustart.</p><div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">System prüfen lassen <ArrowRight size={17} /></Link><a href="#anzeichen" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-white/45">Mehr erfahren</a></div></div><DesktopComparison /></Container>

        <Container className="relative py-10 md:hidden"><Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Modernisierung" }]} /><p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Sicher modernisieren</p><h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Altes System.<br /><span className="text-accent">Neuer Schwung.</span></h1><p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/70">Schrittweise erneuern, ohne alles auf einmal auszutauschen.</p><div className="mobile-reveal mobile-delay-3 mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl border border-white/12 bg-white/7 p-4 text-center text-xs font-bold"><span className="min-w-0 rounded-xl bg-white/6 px-2 py-4 text-white/55">Langsam</span><ArrowRight size={15} className="text-accent" /><span className="min-w-0 rounded-xl bg-accent px-2 py-4 text-primary-deep">Modern</span></div><Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">System prüfen lassen <ArrowRight size={18} /></Link></Container>
      </header>

      <MobileServiceContent slug="modernisierung" eyebrow="Schrittweise erneuern" title="Weniger Risiko. Mehr Zukunft." intro="Mobil bleibt die Entscheidung klar: Was bremst, was kann bleiben und welcher Schritt bringt zuerst einen Vorteil?" benefitTitle="Spürbar besser, ohne harten Schnitt." technologyTitle="Aktuell und wartbar." faqTitle="Modernisierung kurz erklärt." ctaEyebrow="Erster Schritt" ctaTitle="Was bremst Ihr System heute?" ctaText="Eine kurze Bestandsaufnahme schafft Klarheit." revealAttribute="data-modern-reveal" />

      <div className="hidden md:block">

      <section id="anzeichen" className="scroll-mt-20 bg-white py-16 md:py-24"><Container data-modern-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Typische Anzeichen</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Wann Erneuerung sinnvoll wird.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{warningSigns.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-border bg-surface p-5"><Icon size={20} className="text-accent-strong" /><h3 className="mt-7 font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-modern-reveal=""><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Das Ziel</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">Im Alltag spürbar besser.</h2></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">{outcomes.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary-deep p-6"><Icon size={21} className="text-accent" /><h3 className="mt-6 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-modern-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">In sicheren Etappen</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Kein harter Schnitt.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <li key={number} className="border-t border-border pt-5"><span className="text-sm font-black text-accent-strong">{number}</span><h3 className="mt-4 text-lg font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}</ol></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-modern-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Der passende Weg</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">Nicht immer muss alles neu.</h2><div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">{paths.map(({ title, text, icon: Icon }) => <article key={title} className="bg-primary-deep p-6"><Icon size={22} className="text-accent" /><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></Container></section>

      <section className="bg-white py-16 md:py-20"><Container data-modern-reveal="" className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Technische Basis</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Aktuell und wartbar.</h2></div><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-bold text-primary">{technology}</li>)}</ul></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-modern-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Häufige Fragen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Kurz beantwortet.</h2></div><div className="overflow-hidden rounded-3xl border border-white/10 bg-primary-deep">{content.faq.map((item) => <details key={item.question} className="group border-b border-white/10 last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 text-accent transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-white/65 md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-modern-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em] text-primary">Was als Nächstes passen kann.</h2><RelatedServices currentSlug="modernisierung" /></Container></section>

      <section className="bg-primary py-12 text-white md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Erster Schritt</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">Was bremst Ihr System heute?</h2><p className="mt-3 text-white/65">Eine kurze Bestandsaufnahme schafft Klarheit.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">Modernisierung besprechen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </ModernizationMotion>
  );
}
