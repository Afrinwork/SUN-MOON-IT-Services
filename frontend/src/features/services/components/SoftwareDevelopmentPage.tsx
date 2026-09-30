import Link from "next/link";
import { ArrowRight, Blocks, Check, ChevronDown, CircleDot, Database, FileSpreadsheet, GitBranch, Layers3, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { SoftwareDevelopmentMotion } from "@/features/services/components/SoftwareDevelopmentMotion";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

const offerIcons = [Layers3, GitBranch, Users, RefreshCw];

const results = [
  { icon: FileSpreadsheet, title: "Weniger Listen-Chaos", text: "Informationen liegen dort, wo sie gebraucht werden – aktuell und nachvollziehbar." },
  { icon: CircleDot, title: "Klare nächste Schritte", text: "Jeder sieht, was offen ist, wer übernimmt und wie der aktuelle Stand aussieht." },
  { icon: Blocks, title: "Passend erweiterbar", text: "Die Lösung startet sinnvoll und wächst später um genau die Funktionen, die Sie benötigen." },
];

const process = [
  ["01", "Zuhören", "Sie zeigen uns, was heute Zeit kostet oder unnötig kompliziert ist."],
  ["02", "Vereinfachen", "Wir ordnen Anforderungen und entwickeln einen verständlichen Lösungsweg."],
  ["03", "Früh zeigen", "Sie sehen schnell einen nutzbaren Zwischenstand und können direkt Rückmeldung geben."],
  ["04", "Sicher einführen", "Nach gemeinsamen Tests führen wir die Software kontrolliert in Ihren Alltag ein."],
] as const;

const examples = [
  { title: "Aufträge verwalten", text: "Vom Eingang bis zum Abschluss bleibt jeder Vorgang sichtbar.", icon: CircleDot },
  { title: "Freigaben vereinfachen", text: "Anträge, Dokumente und Entscheidungen laufen ohne E-Mail-Pingpong.", icon: Check },
  { title: "Daten zusammenführen", text: "Mehrere Quellen werden zu einer verlässlichen Übersicht verbunden.", icon: Database },
  { title: "Kunden einbinden", text: "Informationen und Dokumente stehen sicher und übersichtlich bereit.", icon: ShieldCheck },
];

function DesktopWorkflowPreview() {
  return (
    <div className="software-hero-panel relative mx-auto w-full max-w-xl" aria-label="Beispiel für einen digitalisierten Arbeitsablauf">
      <div className="rounded-[2rem] border border-white/15 bg-white/8 p-3 shadow-2xl shadow-black/25 backdrop-blur">
        <div className="overflow-hidden rounded-[1.35rem] bg-surface text-foreground">
          <div className="flex items-center justify-between border-b border-border bg-white px-5 py-4">
            <div><span className="block text-xs font-black text-primary">Auftragsübersicht</span><span className="mt-0.5 block text-[0.65rem] text-muted">Heute · automatisch aktualisiert</span></div>
            <span className="rounded-full bg-surface-accent px-3 py-1.5 text-[0.65rem] font-bold text-accent-strong">12 Vorgänge</span>
          </div>
          <div className="grid min-h-80 grid-cols-[0.72fr_1.28fr]">
            <div className="border-r border-border bg-white p-5">
              <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-muted">Bereiche</p>
              {["Übersicht", "Aufträge", "Kunden"].map((item, index) => <div key={item} className={`mt-3 rounded-xl px-3 py-3 text-xs font-bold ${index === 1 ? "bg-primary text-white" : "text-muted"}`}>{item}</div>)}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between"><strong className="text-sm text-primary">Neuer Auftrag</strong><span className="software-cursor grid size-8 place-items-center rounded-full bg-accent text-primary-deep"><ArrowRight size={14} /></span></div>
              <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-[0.62rem] font-bold text-primary">
                <span className="grid size-7 place-items-center rounded-full bg-accent text-primary-deep">1</span><i className="software-flow-line h-px bg-accent" /><span className="grid size-7 place-items-center rounded-full bg-primary text-white">2</span>
              </div>
              <div className="mt-5 space-y-2">
                {["Anfrage erfasst", "Team informiert", "Termin vorgeschlagen"].map((item, index) => <div key={item} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"><span className="text-xs font-semibold text-primary">{item}</span><Check size={14} className={index < 2 ? "text-accent-strong" : "text-border"} /></div>)}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[0.65rem] font-bold text-muted"><i className="size-2 rounded-full bg-accent" /> Alles an einem Ort</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SoftwareDevelopmentPage() {
  const service = getService("softwareentwicklung");
  const { content } = service;

  return (
    <SoftwareDevelopmentMotion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/softwareentwicklung")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[43rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Softwareentwicklung" }]} />
            <p className="reveal mt-9 text-xs font-bold uppercase tracking-[0.2em] text-accent">Individuelle Softwareentwicklung</p>
            <h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Software, die Ihre Arbeit <span className="text-accent">einfacher macht.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/70">Wenn Tabellen, E-Mails und einzelne Programme nicht mehr gut zusammenspielen, entwickeln wir eine Lösung, die zu Ihrem tatsächlichen Ablauf passt.</p>
            <div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">Vorhaben besprechen <ArrowRight size={17} /></Link><a href="#moeglichkeiten" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-white/45">Möglichkeiten ansehen</a></div>
          </div>
          <DesktopWorkflowPreview />
        </Container>

        <Container className="relative py-10 md:hidden">
          <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Softwareentwicklung" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Software nach Maß</p>
          <h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Weniger Umwege.<br /><span className="text-accent">Mehr Überblick.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/70">Wir machen aus komplizierten Abläufen eine Software, die Ihr Team gerne nutzt.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 rounded-2xl border border-white/12 bg-white/7 p-4">
            <div className="flex items-center justify-between"><span className="text-sm font-bold">Ihr Ablauf, digital</span><span className="text-[0.65rem] text-white/50">Klar & passend</span></div>
            <div className="service-mobile-flow mt-4 gap-1.5 text-[0.65rem] font-bold"><span className="rounded-lg bg-white/8 px-1.5 py-2">Anfrage</span><ArrowRight size={13} className="text-accent" /><span className="rounded-lg bg-white/8 px-1.5 py-2">Bearbeitung</span><ArrowRight size={13} className="text-accent" /><span className="rounded-lg bg-accent px-1.5 py-2 text-primary-deep">Erledigt</span></div>
          </div>
          <Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">Idee unverbindlich besprechen <ArrowRight size={18} /></Link>
        </Container>
      </header>

      <MobileServiceContent slug="softwareentwicklung" eyebrow="Software nach Maß" title="Ihr Ablauf. Einfach digital." intro="Mobile Inhalte konzentrieren sich auf das Problem, die passende Lösung und den nächsten sinnvollen Schritt." benefitTitle="Weniger Umwege im Alltag." technologyTitle="Bewährt und wartbar." faqTitle="Vor dem Projekt gut zu wissen." ctaEyebrow="Ihre Idee reicht" ctaTitle="Was kostet heute unnötig Zeit?" ctaText="Erzählen Sie uns vom Ablauf. Wir ordnen die passende Lösung ein." revealAttribute="data-software-reveal" />

      <div className="hidden md:block">

      <section id="moeglichkeiten" className="scroll-mt-20 bg-white py-16 md:py-24"><Container data-software-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Was wir entwickeln</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Passend zu Ihrem Betrieb. Nicht von der Stange.</h2><p className="mt-5 text-lg leading-8 text-muted">Sie müssen keine fertige technische Idee mitbringen. Ein konkretes Problem aus dem Alltag ist der beste Ausgangspunkt.</p></div><div className="mt-12 grid border-t border-border md:grid-cols-2">{content.features.map((feature, index) => { const Icon = offerIcons[index]; return <article key={feature.title} className="border-b border-border py-7 md:px-7"><div className="flex items-center gap-3"><Icon size={20} className="text-accent-strong" /><span className="text-xs font-black text-accent-strong">0{index + 1}</span></div><h3 className="mt-5 text-xl font-bold text-primary">{feature.title}</h3><p className="mt-3 leading-7 text-muted">{feature.text}</p></article>; })}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-software-reveal=""><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Im Arbeitsalltag</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">Der Unterschied muss spürbar sein.</h2><p className="mt-4 leading-7 text-white/60">Gute Software fällt nicht durch viele Funktionen auf, sondern dadurch, dass Arbeit leichter von der Hand geht.</p></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">{results.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary-deep p-6"><Icon size={22} className="text-accent" /><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-software-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Zusammenarbeit</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Verständlich von der Idee bis zur Einführung.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <li key={number} className="border-t border-border pt-5"><span className="text-sm font-black text-accent-strong">{number}</span><h3 className="mt-4 text-lg font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}</ol></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-software-reveal=""><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Typische Lösungen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">Wo eigene Software helfen kann.</h2></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{examples.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/6 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10"><Icon size={20} className="text-accent" /><h3 className="mt-8 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></article>)}</div></Container></section>

      <section className="bg-white py-16 md:py-20"><Container data-software-reveal="" className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Technische Grundlage</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Bewährt und wartbar.</h2><p className="mt-3 text-sm leading-6 text-muted">Wir wählen Technik passend zur Aufgabe – nicht nach einem kurzfristigen Trend.</p></div><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-bold text-primary">{technology}</li>)}</ul></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-software-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Häufige Fragen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Gut zu wissen, bevor es losgeht.</h2></div><div className="overflow-hidden rounded-3xl border border-white/10 bg-primary-deep">{content.faq.map((item) => <details key={item.question} className="group border-b border-white/10 last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 text-accent transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-white/65 md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-software-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em] text-primary">Was Ihr Projekt ergänzen kann.</h2><RelatedServices currentSlug="softwareentwicklung" /></Container></section>

      <section className="bg-primary py-12 text-white md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Ihre Idee reicht für den Anfang</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">Was kostet Sie heute unnötig Zeit?</h2><p className="mt-3 text-white/65">Erzählen Sie uns vom Ablauf. Wir zeigen Ihnen den nächsten sinnvollen Schritt.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">Unverbindlich besprechen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </SoftwareDevelopmentMotion>
  );
}
