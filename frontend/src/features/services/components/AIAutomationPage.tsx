import Link from "next/link";
import { ArrowRight, Bot, Check, ChevronDown, Clock3, FileSearch, MailCheck, MessageSquareText, PlugZap, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { AIAutomationMotion } from "@/features/services/components/AIAutomationMotion";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

const tools = [
  { name: "Power Automate", label: "Abläufe", text: "Freigaben, Benachrichtigungen und wiederkehrende Aufgaben automatisieren.", icon: Workflow },
  { name: "Microsoft Copilot", label: "Microsoft 365", text: "Im vertrauten Arbeitsumfeld schneller schreiben, zusammenfassen und Informationen finden.", icon: Sparkles },
  { name: "ChatGPT", label: "Assistenz", text: "Texte, Ideen, Analysen und individuelle Assistenten für passende Aufgaben nutzen.", icon: MessageSquareText },
  { name: "Claude", label: "Dokumente", text: "Längere Inhalte strukturiert auswerten, vergleichen und verständlich zusammenfassen.", icon: FileSearch },
];

const useCases = [
  { title: "Posteingang vorsortieren", text: "Anfragen erkennen, zuordnen und die zuständige Person informieren.", icon: MailCheck },
  { title: "Dokumente verstehen", text: "Wichtige Inhalte aus Verträgen, Formularen oder Berichten schneller erfassen.", icon: FileSearch },
  { title: "Wissen zugänglich machen", text: "Interne Informationen durchsuchen und verständliche Antworten bereitstellen.", icon: MessageSquareText },
  { title: "Anwendungen erweitern", text: "KI-Funktionen über Schnittstellen direkt in bestehende Software integrieren.", icon: PlugZap },
];

const steps = [
  ["01", "Aufgabe auswählen", "Wir beginnen mit einem klaren Ablauf, der heute regelmäßig Zeit kostet."],
  ["02", "Daten prüfen", "Gemeinsam klären wir Quellen, Zugriffe und die erlaubte Verarbeitung."],
  ["03", "Lösung testen", "Ein kleiner Praxistest zeigt früh, ob Qualität und Nutzen wirklich stimmen."],
  ["04", "Sicher ausbauen", "Nach erfolgreichem Test wird die Lösung eingeführt und gezielt erweitert."],
] as const;

function DesktopAutomationPreview() {
  return (
    <div className="ai-hero-board relative mx-auto w-full max-w-xl" aria-label="Beispiel für einen automatisierten Ablauf mit KI">
      <div className="rounded-[2rem] border border-white/15 bg-white/8 p-3 shadow-2xl shadow-black/25 backdrop-blur">
        <div className="overflow-hidden rounded-[1.35rem] bg-surface text-foreground">
          <div className="flex items-center justify-between border-b border-border bg-white px-5 py-4">
            <div><span className="block text-xs font-black text-primary">Anfrage automatisch bearbeiten</span><span className="mt-0.5 block text-[0.65rem] text-muted">Aktiver Ablauf</span></div>
            <span className="flex items-center gap-2 rounded-full bg-surface-accent px-3 py-1.5 text-[0.65rem] font-bold text-accent-strong"><i className="ai-pulse size-2 rounded-full bg-accent" /> Läuft</span>
          </div>
          <div className="grid min-h-80 grid-cols-[1fr_auto_1fr] items-center gap-4 p-6">
            <div className="space-y-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm"><MailCheck size={19} className="text-accent-strong" /><strong className="mt-5 block text-sm text-primary">Neue Anfrage</strong><span className="mt-1 block text-[0.65rem] text-muted">E-Mail eingegangen</span></div>
              <div className="rounded-2xl bg-white p-4 shadow-sm"><FileSearch size={19} className="text-accent-strong" /><strong className="mt-5 block text-sm text-primary">Anhang erkannt</strong><span className="mt-1 block text-[0.65rem] text-muted">PDF wird gelesen</span></div>
            </div>
            <div className="relative h-44 w-px bg-border"><i className="ai-route-line absolute inset-0 bg-accent" /></div>
            <div className="rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/15">
              <Bot size={21} className="text-accent" />
              <strong className="mt-7 block text-sm">KI unterstützt</strong>
              <p className="mt-2 text-[0.68rem] leading-5 text-white/60">Inhalt erfassen, einordnen und nächsten Schritt vorbereiten.</p>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[0.65rem] font-bold text-accent"><Check size={13} /> Zur Prüfung bereit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIAutomationPage() {
  const service = getService("ki-automatisierung");
  const { content } = service;

  return (
    <AIAutomationMotion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/ki-automatisierung")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[43rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "KI & Automatisierung" }]} />
            <p className="reveal mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><Sparkles size={14} /> KI & Automatisierung</p>
            <h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Weniger Routine. <span className="text-accent">Mehr Zeit für gute Arbeit.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/70">Wir verbinden Power Automate, Microsoft Copilot, ChatGPT, Claude und weitere KI-Dienste sinnvoll mit Ihren Abläufen und Anwendungen.</p>
            <div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">Einsatzmöglichkeit prüfen <ArrowRight size={17} /></Link><a href="#werkzeuge" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-white/45">Lösungen ansehen</a></div>
          </div>
          <DesktopAutomationPreview />
        </Container>

        <Container className="relative py-10 md:hidden">
          <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "KI & Automatisierung" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">KI sinnvoll einsetzen</p>
          <h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Routine abgeben.<br /><span className="text-accent">Zeit zurückgewinnen.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/70">Automatisierung und KI für Ihre tägliche Arbeit – verständlich, passend und kontrollierbar.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 rounded-2xl border border-white/12 bg-white/7 p-4"><p className="text-xs font-bold text-white/55">Beispiel: Neue Anfrage</p><div className="service-mobile-flow mt-4 gap-1.5 text-[0.62rem] font-bold leading-4"><span className="rounded-lg bg-white/8 px-1.5 py-2">E-Mail</span><ArrowRight size={13} className="text-accent" /><span className="rounded-lg bg-white/8 px-1.5 py-2">KI prüft</span><ArrowRight size={13} className="text-accent" /><span className="rounded-lg bg-accent px-1.5 py-2 text-primary-deep">Aufgabe bereit</span></div></div>
          <Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">Möglichkeit besprechen <ArrowRight size={18} /></Link>
        </Container>
      </header>

      <MobileServiceContent slug="ki-automatisierung" eyebrow="KI im Arbeitsalltag" title="Routine abgeben. Kontrolle behalten." intro="Auf dem Smartphone zeigen wir kompakt, welches Werkzeug zu welcher Aufgabe passt und wo Automatisierung wirklich hilft." benefitTitle="Mehr Zeit für wichtige Arbeit." technologyTitle="KI passend auswählen." faqTitle="KI verständlich erklärt." ctaEyebrow="Erster sinnvoller Schritt" ctaTitle="Welche Aufgabe wiederholt sich ständig?" ctaText="Wir prüfen gemeinsam, ob Automatisierung oder KI dabei wirklich hilft." revealAttribute="data-ai-reveal" />

      <div className="hidden md:block">

      <section id="werkzeuge" className="scroll-mt-20 bg-white py-16 md:py-24"><Container data-ai-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Werkzeuge passend auswählen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Nicht jede KI passt zu jeder Aufgabe.</h2><p className="mt-5 text-lg leading-8 text-muted">Wir starten bei Ihrem Ziel und wählen danach das passende Werkzeug – nicht umgekehrt.</p></div><div className="mt-12 grid border-t border-border md:grid-cols-2">{tools.map(({ name, label, text, icon: Icon }, index) => <article key={name} className="border-b border-border py-7 md:px-7"><div className="flex items-center justify-between"><Icon size={21} className="text-accent-strong" /><span className="text-xs font-black text-accent-strong">0{index + 1}</span></div><p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.17em] text-muted">{label}</p><h3 className="mt-2 text-xl font-bold text-primary">{name}</h3><p className="mt-3 leading-7 text-muted">{text}</p></article>)}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-ai-reveal=""><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Für Arbeit & Anwendungen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">Aus einzelnen Schritten wird ein ruhiger Ablauf.</h2><p className="mt-4 leading-7 text-white/60">Die KI kann vorbereiten und unterstützen. Wichtige Entscheidungen bleiben dort, wo sie hingehören: bei Ihren Mitarbeitenden.</p></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3"><article className="bg-primary-deep p-6"><Clock3 size={21} className="text-accent" /><h3 className="mt-7 font-bold">Automatisch starten</h3><p className="mt-2 text-sm leading-6 text-white/60">Ein Eingang oder Termin löst den passenden Ablauf aus.</p></article><article className="bg-primary-deep p-6"><Bot size={21} className="text-accent" /><h3 className="mt-7 font-bold">Sinnvoll vorbereiten</h3><p className="mt-2 text-sm leading-6 text-white/60">KI ordnet Inhalte und bereitet einen nächsten Schritt vor.</p></article><article className="bg-primary-deep p-6"><ShieldCheck size={21} className="text-accent" /><h3 className="mt-7 font-bold">Kontrolliert entscheiden</h3><p className="mt-2 text-sm leading-6 text-white/60">Menschen prüfen Ergebnisse und behalten die Verantwortung.</p></article></div></div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-ai-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Konkrete Einsatzfälle</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Wo Unterstützung wirklich Zeit spart.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{useCases.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white"><Icon size={21} className="text-accent-strong" /><h3 className="mt-8 font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-ai-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sicher starten</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">Klein testen. Nutzen prüfen. Gezielt ausbauen.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <li key={number} className="border-t border-white/15 pt-5"><span className="text-sm font-black text-accent">{number}</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></li>)}</ol></Container></section>

      <section className="bg-white py-16 md:py-20"><Container data-ai-reveal="" className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Plattformen & Schnittstellen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Offen für die passende Lösung.</h2><p className="mt-3 text-sm leading-6 text-muted">Neben bekannten Assistenten können auch spezialisierte KI-Dienste sicher angebunden werden.</p></div><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-bold text-primary">{technology}</li>)}</ul></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-ai-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Häufige Fragen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">KI verständlich eingeordnet.</h2></div><div className="overflow-hidden rounded-3xl border border-white/10 bg-primary-deep">{content.faq.map((item) => <details key={item.question} className="group border-b border-white/10 last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 text-accent transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-white/65 md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-ai-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em] text-primary">Was Ihre Lösung ergänzen kann.</h2><RelatedServices currentSlug="ki-automatisierung" /></Container></section>

      <section className="bg-primary py-12 text-white md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Erster sinnvoller Schritt</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">Welche Aufgabe wiederholt sich bei Ihnen ständig?</h2><p className="mt-3 text-white/65">Ein kurzes Gespräch zeigt, ob Automatisierung oder KI dabei wirklich helfen kann.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">Einsatz prüfen lassen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </AIAutomationMotion>
  );
}
