import Link from "next/link";
import { ArrowRight, ChevronDown, Code2, Gauge, LayoutPanelTop, MonitorSmartphone, RefreshCw, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { WebDevelopmentMotion } from "@/features/services/components/WebDevelopmentMotion";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

const offerIcons = [MonitorSmartphone, LayoutPanelTop, Code2, RefreshCw];
const quality = [
  { icon: Gauge, title: "Performance", text: "Kurze Ladezeiten und stabile Darstellung auf allen Geräten." },
  { icon: Search, title: "Technische SEO", text: "Saubere Struktur, Metadaten und verständliche Inhalte." },
  { icon: MonitorSmartphone, title: "Responsive", text: "Eigenständig für Smartphone, Tablet und Desktop optimiert." },
  { icon: ShieldCheck, title: "Sicher & wartbar", text: "Datenschutzbewusst entwickelt und langfristig erweiterbar." },
];

const process = [
  ["01", "Ziele verstehen", "Angebot, Zielgruppen und gewünschte Wirkung gemeinsam klären."],
  ["02", "Struktur entwickeln", "Inhalte, Nutzerwege und technische Grundlage sinnvoll planen."],
  ["03", "Design & Umsetzung", "Die Website responsiv entwickeln und früh als echten Zwischenstand zeigen."],
  ["04", "Prüfen & starten", "Funktionen, Performance und Darstellung testen und kontrolliert veröffentlichen."],
] as const;

function DesktopBrowserPreview() {
  return (
    <div className="web-hero-visual relative mx-auto w-full max-w-xl" aria-label="Vorschau einer modernen Unternehmenswebsite">
      <div className="rounded-[2rem] border border-white/15 bg-white/9 p-3 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="overflow-hidden rounded-[1.35rem] bg-white text-foreground">
          <div className="flex items-center justify-between border-b border-border px-5 py-4"><div className="flex gap-1.5" aria-hidden="true"><i className="size-2 rounded-full bg-accent" /><i className="size-2 rounded-full bg-border" /><i className="size-2 rounded-full bg-border" /></div><span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">Live Preview</span></div>
          <div className="grid min-h-80 grid-cols-[0.8fr_1.2fr]">
            <div className="bg-primary p-7 text-white"><div className="h-2 w-20 rounded bg-accent" /><div className="mt-8 h-6 w-full rounded bg-white/90" /><div className="mt-3 h-6 w-4/5 rounded bg-white/90" /><div className="mt-6 h-2 w-full rounded bg-white/15" /><div className="mt-2 h-2 w-3/4 rounded bg-white/15" /><div className="mt-8 h-9 w-28 rounded-full bg-accent" /></div>
            <div className="relative overflow-hidden bg-surface p-6"><div className="web-preview-scan absolute inset-y-0 left-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" /><div className="grid grid-cols-2 gap-3"><div className="col-span-2 h-24 rounded-2xl bg-surface-accent" /><div className="h-24 rounded-2xl bg-white shadow-sm" /><div className="h-24 rounded-2xl bg-white shadow-sm" /></div><div className="mt-5 flex items-center gap-2 text-xs font-bold text-primary"><i className="web-status-dot size-2 rounded-full bg-accent" /> Schnell. Responsiv. Online.</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebDevelopmentPage() {
  const service = getService("webentwicklung");
  const { content } = service;

  return (
    <WebDevelopmentMotion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/webentwicklung")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[43rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Webentwicklung" }]} />
            <div className="reveal mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75"><Sparkles size={14} className="text-accent" /> Webentwicklung</div>
            <h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Websites, die schnell laden. Klar überzeugen. <span className="text-accent">Anfragen ermöglichen.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">Individuell entwickelt für Ihr Unternehmen – modern, suchmaschinenfreundlich und auf jedem Gerät überzeugend.</p>
            <div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep">Website anfragen <ArrowRight size={17} /></Link><a href="#angebot" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold">Leistungen ansehen</a></div>
          </div>
          <DesktopBrowserPreview />
        </Container>

        <Container className="relative py-10 md:hidden">
          <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Webentwicklung" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Webentwicklung</p>
          <h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Ihre Website.<br /><span className="text-accent">Schnell. Klar. Professionell.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">Ein digitaler Auftritt, der auf dem Smartphone genauso überzeugt wie am Desktop.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 rounded-2xl border border-white/12 bg-white/7 p-4"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-bold"><i className="size-2 rounded-full bg-accent" /> Website bereit</span><span className="text-xs text-white/50">Mobile First</span></div><div className="mt-4 grid grid-cols-3 gap-2 text-center text-[0.65rem] text-white/60"><span className="rounded-xl bg-white/6 px-2 py-3">Schnell</span><span className="rounded-xl bg-white/6 px-2 py-3">SEO</span><span className="rounded-xl bg-white/6 px-2 py-3">Responsive</span></div></div>
          <Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">Website anfragen <ArrowRight size={18} /></Link>
        </Container>
      </header>

      <MobileServiceContent slug="webentwicklung" eyebrow="Ihre Website" title="Klar aufgebaut. Mobil schnell verstanden." intro="Alle wichtigen Inhalte, Funktionen und Kontaktwege werden für kleine Bildschirme bewusst kompakt angeordnet." benefitTitle="Was Ihre Website besser macht." technologyTitle="Sauber umgesetzt." faqTitle="Fragen zur neuen Website." ctaEyebrow="Website-Projekt" ctaTitle="Bereit für einen Auftritt, der funktioniert?" ctaText="Ein kurzes Gespräch reicht für eine erste Einschätzung." revealAttribute="data-web-reveal" />

      <div className="hidden md:block">

      <section id="angebot" className="scroll-mt-20 bg-white py-16 md:py-24"><Container data-web-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Unser Angebot</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Mehr als eine schöne Oberfläche.</h2><p className="mt-5 text-lg leading-8 text-muted">Wir verbinden verständliche Inhalte, durchdachtes Design und eine technische Basis, die langfristig funktioniert.</p></div><div className="mt-12 grid border-t border-border md:grid-cols-2">{content.features.map((feature, index) => { const Icon = offerIcons[index]; return <article key={feature.title} className="border-b border-border py-7 md:px-7"><div className="flex items-center gap-3"><Icon size={20} className="text-accent-strong" /><span className="text-xs font-black text-accent-strong">0{index + 1}</span></div><h3 className="mt-5 text-xl font-bold text-primary">{feature.title}</h3><p className="mt-3 leading-7 text-muted">{feature.text}</p></article>; })}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-web-reveal=""><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Qualität im Detail</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">Technisch stark. Im Alltag spürbar.</h2></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">{quality.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary-deep p-6"><Icon size={21} className="text-accent" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-web-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Projektablauf</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Von der ersten Idee bis zur fertigen Website.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <li key={number} className="border-t border-border pt-5"><span className="text-sm font-black text-accent-strong">{number}</span><h3 className="mt-4 text-lg font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}</ol></Container></section>

      <section className="bg-primary py-16 text-white md:py-20"><Container data-web-reveal="" className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Technologien</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Modern und wartbar.</h2></div><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-white/15 bg-white/7 px-4 py-2 text-sm font-bold text-white">{technology}</li>)}</ul></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-web-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">FAQ</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Häufige Fragen zur Website.</h2></div><div className="overflow-hidden rounded-3xl border border-border bg-surface">{content.faq.map((item) => <details key={item.question} className="group border-b border-border last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-primary md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-muted md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-web-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em]">Was Ihr Projekt zusätzlich stärkt.</h2><RelatedServices currentSlug="webentwicklung" /></Container></section>

      <section className="bg-white py-12 md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Website-Projekt</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary md:text-4xl">Bereit für einen Auftritt, der funktioniert?</h2><p className="mt-3 text-muted">Ein kurzes Gespräch reicht für eine erste Einschätzung.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep">Projekt besprechen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </WebDevelopmentMotion>
  );
}
