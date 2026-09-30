import Link from "next/link";
import { ArrowRight, Bell, Check, ChevronDown, CloudCog, Gauge, Globe2, MonitorSmartphone, PlugZap, Rocket, ServerCog, ShieldCheck, Smartphone, Store, WifiOff } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { AppDevelopmentMotion } from "@/features/services/components/AppDevelopmentMotion";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

const offerIcons = [Smartphone, MonitorSmartphone, Globe2, Rocket];

const appFeatures = [
  { icon: Bell, title: "Push-Nachrichten", text: "Wichtige Informationen erreichen Nutzer direkt und zum passenden Zeitpunkt." },
  { icon: WifiOff, title: "Offline nutzbar", text: "Ausgewählte Funktionen bleiben auch ohne stabile Internetverbindung verfügbar." },
  { icon: PlugZap, title: "Systeme anbinden", text: "Die App tauscht Daten sicher mit vorhandener Software und Diensten aus." },
  { icon: ShieldCheck, title: "Sicherer Zugriff", text: "Anmeldung, Rollen und sensible Daten werden von Anfang an berücksichtigt." },
];

const process = [
  ["01", "Ziel klären", "Wir definieren, wem die App hilft und welche Aufgabe sie wirklich lösen soll."],
  ["02", "Bedienung entwerfen", "Die wichtigsten Wege werden sichtbar, bevor die eigentliche Entwicklung beginnt."],
  ["03", "App entwickeln", "Sie erhalten früh testbare Versionen für Smartphone und passende Geräte."],
  ["04", "Veröffentlichen", "Nach gründlichen Tests begleiten wir Store-Freigabe, Start und laufende Updates."],
] as const;

const operation = [
  { icon: Store, title: "Stores", text: "Vorbereitung und Veröffentlichung im Apple App Store und bei Google Play." },
  { icon: ServerCog, title: "Server & Backend", text: "Auswahl, Bereitstellung und Betreuung der technischen Grundlage." },
  { icon: CloudCog, title: "Wartung", text: "Monitoring, Fehlerbehebung und Anpassungen für neue Geräteversionen." },
];

function DesktopAppPreview() {
  return (
    <div className="app-hero-phone relative mx-auto h-[31rem] w-full max-w-lg" aria-label="Vorschau einer modernen mobilen App">
      <div className="absolute left-1/2 top-0 h-[30rem] w-[15.5rem] -translate-x-1/2 rounded-[2.8rem] border-[0.45rem] border-white/15 bg-primary p-2 shadow-2xl shadow-black/35">
        <div className="relative h-full overflow-hidden rounded-[2.15rem] bg-surface text-foreground">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-primary-deep" />
          <div className="bg-primary px-5 pb-7 pt-11 text-white"><p className="text-[0.62rem] text-white/55">Guten Morgen</p><strong className="mt-1 block text-lg">Meine Übersicht</strong><div className="mt-5 h-1.5 rounded-full bg-white/10"><i className="app-progress block h-full rounded-full bg-accent" /></div></div>
          <div className="-mt-3 space-y-3 px-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Check size={17} /></span><span className="text-[0.62rem] font-bold text-accent-strong">3 von 4 erledigt</span></div><strong className="mt-5 block text-sm text-primary">Heutige Aufgaben</strong><p className="mt-1 text-[0.65rem] text-muted">Alles Wichtige auf einen Blick</p></div>
            <div className="grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white p-4 shadow-sm"><Bell size={17} className="text-accent-strong" /><strong className="mt-5 block text-xs text-primary">Nachrichten</strong><span className="text-[0.6rem] text-muted">2 neu</span></div><div className="rounded-2xl bg-accent p-4 text-primary-deep"><Gauge size={17} /><strong className="mt-5 block text-xs">Status</strong><span className="text-[0.6rem]">Aktuell</span></div></div>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-around rounded-2xl bg-white px-3 py-3 shadow-lg"><i className="size-2 rounded-full bg-accent" /><i className="size-2 rounded-full bg-border" /><i className="size-2 rounded-full bg-border" /></div>
        </div>
      </div>
      <div className="app-notification absolute right-0 top-20 w-52 rounded-2xl border border-white/15 bg-white p-4 text-foreground shadow-xl"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-accent text-primary-deep"><Bell size={16} /></span><div><strong className="block text-xs text-primary">Aufgabe aktualisiert</strong><span className="text-[0.62rem] text-muted">Gerade eben</span></div></div></div>
      <div className="absolute bottom-16 left-0 rounded-2xl border border-white/15 bg-primary-deep/90 px-4 py-3 text-xs font-bold text-white shadow-xl backdrop-blur"><span className="text-accent">iOS</span> & Android</div>
    </div>
  );
}

export function AppDevelopmentPage() {
  const service = getService("app-entwicklung");
  const { content } = service;

  return (
    <AppDevelopmentMotion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/app-entwicklung")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[43rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "App-Entwicklung" }]} />
            <p className="reveal mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><Smartphone size={14} /> App-Entwicklung</p>
            <h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Apps, die man gern <span className="text-accent">in die Hand nimmt.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/70">Für iPhone, Android oder direkt im Browser – verständlich bedienbar, mit Ihren Systemen verbunden und zuverlässig betreut.</p>
            <div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">App-Idee besprechen <ArrowRight size={17} /></Link><a href="#app-arten" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-white/45">Möglichkeiten ansehen</a></div>
          </div>
          <DesktopAppPreview />
        </Container>

        <Container className="relative py-10 md:hidden">
          <Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "App-Entwicklung" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Apps für iOS & Android</p>
          <h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Ihre Idee.<br /><span className="text-accent">Direkt auf dem Smartphone.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/70">Eine App, die einfach funktioniert – für Kunden, Mitarbeitende oder Ihren eigenen digitalen Service.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 rounded-2xl border border-white/12 bg-white/7 p-4"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-bold"><i className="size-2 rounded-full bg-accent" /> App bereit</span><span className="text-[0.65rem] text-white/50">iOS · Android · Web</span></div><div className="mt-4 grid grid-cols-3 gap-2 text-center text-[0.65rem] text-white/65"><span className="rounded-xl bg-white/6 px-2 py-3">Intuitiv</span><span className="rounded-xl bg-white/6 px-2 py-3">Verbunden</span><span className="rounded-xl bg-white/6 px-2 py-3">Sicher</span></div></div>
          <Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">App-Idee besprechen <ArrowRight size={18} /></Link>
        </Container>
      </header>

      <MobileServiceContent slug="app-entwicklung" eyebrow="Mobile Lösungen" title="Eine App, die unterwegs einfach funktioniert." intro="Funktionen, Plattformen und Betrieb sind mobil in kurzen, gut erreichbaren Bereichen angeordnet." benefitTitle="Für Menschen am Smartphone gedacht." technologyTitle="iOS, Android oder Web." faqTitle="Der Weg zur eigenen App." ctaEyebrow="Ihre App-Idee" ctaTitle="Was soll Ihre App einfacher machen?" ctaText="Wir ordnen Zielgruppe, Funktionen und den passenden technischen Weg ein." revealAttribute="data-app-reveal" />

      <div className="hidden md:block">

      <section id="app-arten" className="scroll-mt-20 bg-white py-16 md:py-24"><Container data-app-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Die passende App</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Gebaut für den echten Alltag.</h2><p className="mt-5 text-lg leading-8 text-muted">Nicht jede Idee braucht dieselbe technische Lösung. Wir wählen den Weg, der für Nutzung, Budget und spätere Erweiterungen sinnvoll ist.</p></div><div className="mt-12 grid border-t border-border md:grid-cols-2">{content.features.map((feature, index) => { const Icon = offerIcons[index]; return <article key={feature.title} className="border-b border-border py-7 md:px-7"><div className="flex items-center justify-between"><Icon size={21} className="text-accent-strong" /><span className="text-xs font-black text-accent-strong">0{index + 1}</span></div><h3 className="mt-6 text-xl font-bold text-primary">{feature.title}</h3><p className="mt-3 leading-7 text-muted">{feature.text}</p></article>; })}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-app-reveal=""><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Nutzung im Mittelpunkt</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">Einfach öffnen. Sofort verstehen.</h2><p className="mt-4 leading-7 text-white/60">Eine gute App fühlt sich selbstverständlich an. Klare Wege, kurze Eingaben und die richtigen Funktionen am richtigen Ort.</p></div><div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">{appFeatures.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary-deep p-6"><Icon size={21} className="text-accent" /><h3 className="mt-6 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-app-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Von der Idee zur App</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-primary md:text-5xl">Früh sehen, testen und verbessern.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <li key={number} className="border-t border-border pt-5"><span className="text-sm font-black text-accent-strong">{number}</span><h3 className="mt-4 text-lg font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}</ol></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-app-reveal=""><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Mehr als Entwicklung</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">Veröffentlichung und Betrieb gehören dazu.</h2><p className="mt-5 text-lg leading-8 text-white/65">Die App ist erst fertig, wenn sie zuverlässig bei ihren Nutzern ankommt und langfristig funktioniert.</p></div><div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">{operation.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary-deep p-6"><Icon size={22} className="text-accent" /><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></Container></section>

      <section className="bg-white py-16 md:py-20"><Container data-app-reveal="" className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Technologien & Plattformen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Passend statt kompliziert.</h2><p className="mt-3 text-sm leading-6 text-muted">Die technische Grundlage richtet sich nach der App – nicht nach einem kurzfristigen Trend.</p></div><ul className="flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-bold text-primary">{technology}</li>)}</ul></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-app-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Häufige Fragen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Der Weg zur eigenen App.</h2></div><div className="overflow-hidden rounded-3xl border border-white/10 bg-primary-deep">{content.faq.map((item) => <details key={item.question} className="group border-b border-white/10 last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 text-accent transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-white/65 md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-app-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em] text-primary">Was Ihre App ergänzen kann.</h2><RelatedServices currentSlug="app-entwicklung" /></Container></section>

      <section className="bg-primary py-12 text-white md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Von der Idee zum ersten Bildschirm</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">Welche App haben Sie im Kopf?</h2><p className="mt-3 text-white/65">Erzählen Sie uns kurz von Zielgruppe und Idee. Wir ordnen den sinnvollsten Weg ein.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">App unverbindlich besprechen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </AppDevelopmentMotion>
  );
}
