import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { AppWindow, ArrowRight, BarChart3, CalendarCheck2, Check, ChevronDown, Cloud, Database, FileInput, FileSpreadsheet, Files, Fingerprint, KeyRound, Laptop, LayoutGrid, LockKeyhole, Mail, MessageSquare, Network, PanelsTopLeft, ShieldCheck, SlidersHorizontal, Smartphone, Terminal, UsersRound, Workflow, Wrench } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { Microsoft365Motion } from "@/features/services/components/Microsoft365Motion";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { MobileServiceContent } from "@/features/services/components/MobileServiceContent";
import { getService } from "@/features/services/data/services";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

type Technology = { name: string; detail: string; example: string; icon: LucideIcon };

const collaboration: Technology[] = [
  { name: "Microsoft Teams", detail: "Chats, Besprechungen, Kanäle und Dateien an einem gemeinsamen Arbeitsort.", example: "Beispiel: Ein Projektteam arbeitet mit klaren Kanälen statt verteilter E-Mail-Verläufe.", icon: MessageSquare },
  { name: "SharePoint Online", detail: "Dokumente, Intranet-Inhalte und Wissen strukturiert und sicher bereitstellen.", example: "Beispiel: Verträge liegen zentral mit Versionierung, Suche und passenden Rechten.", icon: PanelsTopLeft },
  { name: "SharePoint Lists", detail: "Informationen wie Vorgänge, Inventar oder Anfragen übersichtlich verwalten.", example: "Beispiel: Eine Liste ersetzt eine gemeinsam bearbeitete Excel-Datei für Bestellungen.", icon: LayoutGrid },
  { name: "OneDrive for Business", detail: "Persönliche Arbeitsdateien cloudbasiert speichern, synchronisieren und teilen.", example: "Beispiel: Mitarbeitende greifen sicher von Büro und unterwegs auf ihre Dateien zu.", icon: Files },
  { name: "Exchange Online", detail: "Geschäftliche E-Mails, Kalender und Postfächer zuverlässig in der Cloud betreiben.", example: "Beispiel: Funktionspostfächer für Service oder Buchhaltung werden sauber zugewiesen.", icon: Mail },
  { name: "Microsoft Outlook", detail: "E-Mail, Kalender, Kontakte und Aufgaben im täglichen Arbeitsfluss verbinden.", example: "Beispiel: Anfragen werden aus Outlook direkt in einen strukturierten Prozess übergeben.", icon: CalendarCheck2 },
  { name: "Microsoft Forms", detail: "Interne und externe Formulare, Umfragen und einfache Abfragen erstellen.", example: "Beispiel: Eine Schulungsanmeldung landet automatisch in einer zentralen Liste.", icon: FileInput },
  { name: "Microsoft Planner", detail: "Teamaufgaben visuell planen, zuweisen und gemeinsam nachverfolgen.", example: "Beispiel: Offene Aufgaben eines Kundenprojekts bleiben für alle sichtbar.", icon: Check },
  { name: "Microsoft Bookings", detail: "Termine online buchbar machen und mit Kalendern abstimmen.", example: "Beispiel: Kunden wählen selbst einen freien Beratungstermin ohne Rückfragen.", icon: CalendarCheck2 },
];

const powerPlatform: Technology[] = [
  { name: "Power Apps", detail: "Geschäftsanwendungen mit wenig Code für Teams, Browser und Mobilgeräte entwickeln.", example: "Beispiel: Mitarbeitende erfassen Prüfungen und Fotos direkt vor Ort.", icon: AppWindow },
  { name: "Canvas Apps", detail: "Oberflächen flexibel gestalten und mit Microsoft- sowie externen Daten verbinden.", example: "Beispiel: Eine individuelle Bestell-App bildet genau den internen Ablauf ab.", icon: Smartphone },
  { name: "Power Automate", detail: "Wiederkehrende Abläufe, Freigaben und Benachrichtigungen automatisieren.", example: "Beispiel: Ein Antrag startet automatisch Prüfung, Freigabe und Rückmeldung.", icon: Workflow },
  { name: "Power BI", detail: "Daten in verständliche Berichte und interaktive Dashboards verwandeln.", example: "Beispiel: Leitungskräfte sehen aktuelle Aufträge, Umsatz und Auslastung auf einen Blick.", icon: BarChart3 },
  { name: "Microsoft Dataverse", detail: "Geschäftsdaten zentral, strukturiert und mit Rollen sowie Regeln speichern.", example: "Beispiel: Kunden, Vorgänge und Ansprechpartner bilden eine gemeinsame Datenbasis.", icon: Database },
  { name: "Power Query", detail: "Daten aus unterschiedlichen Quellen laden, bereinigen und zusammenführen.", example: "Beispiel: Monatliche Excel-Dateien werden automatisch zu einer Auswertung kombiniert.", icon: FileSpreadsheet },
  { name: "DAX", detail: "Kennzahlen und Berechnungen für aussagekräftige Power-BI-Berichte erstellen.", example: "Beispiel: Vorjahresvergleich und laufende Zielerreichung werden dynamisch berechnet.", icon: BarChart3 },
  { name: "Power Fx", detail: "Formeln und Logik für Power Apps verständlich und flexibel umsetzen.", example: "Beispiel: Pflichtfelder und Preise reagieren direkt auf die Auswahl des Nutzers.", icon: Wrench },
];

const security: Technology[] = [
  { name: "Microsoft 365 Admin Center", detail: "Benutzer, Lizenzen, Dienste und zentrale Einstellungen nachvollziehbar verwalten.", example: "Beispiel: Neue Mitarbeitende erhalten passend zur Rolle die benötigten Dienste.", icon: SlidersHorizontal },
  { name: "Microsoft Entra ID", detail: "Identitäten, Gruppen und Anmeldungen als Grundlage für sichere Zugriffe steuern.", example: "Beispiel: Eine Anmeldung ermöglicht kontrollierten Zugriff auf mehrere Unternehmensdienste.", icon: UsersRound },
  { name: "Microsoft Intune", detail: "Computer und Mobilgeräte verwalten sowie Unternehmensdaten schützen.", example: "Beispiel: Geschäftliche Apps und Einstellungen werden automatisch auf Geräten bereitgestellt.", icon: Laptop },
  { name: "Microsoft Defender", detail: "Bedrohungen, verdächtige Aktivitäten und Sicherheitsrisiken sichtbar machen.", example: "Beispiel: Auffällige Anhänge oder Anmeldungen lösen eine Sicherheitsprüfung aus.", icon: ShieldCheck },
  { name: "Conditional Access", detail: "Zugriff abhängig von Benutzer, Gerät, Standort und Risiko erlauben oder begrenzen.", example: "Beispiel: Sensible Daten sind nur von verwalteten Geräten erreichbar.", icon: LockKeyhole },
  { name: "Multi-Factor Authentication", detail: "Konten durch einen zusätzlichen Nachweis neben dem Passwort absichern.", example: "Beispiel: Eine Anmeldung wird zusätzlich über eine App bestätigt.", icon: Fingerprint },
  { name: "IAM & RBAC", detail: "Zugriffe nach Aufgaben und Rollen vergeben, statt Rechte einzeln und unübersichtlich zu verteilen.", example: "Beispiel: Vertrieb und Buchhaltung sehen jeweils nur die für sie bestimmten Bereiche.", icon: KeyRound },
];

const development: Technology[] = [
  { name: "Microsoft Azure", detail: "Cloud-Dienste, Anwendungen und technische Komponenten für erweiterte Lösungen betreiben.", example: "Beispiel: Eine sichere Schnittstelle verarbeitet Daten zwischen App und Microsoft 365.", icon: Cloud },
  { name: "Microsoft Graph API", detail: "Teams, Benutzer, Dateien, Kalender und weitere Microsoft-Daten programmatisch verbinden.", example: "Beispiel: Eine Anwendung zeigt automatisch freie Termine und zugehörige Dokumente.", icon: Network },
  { name: "SharePoint Framework (SPFx)", detail: "Individuelle Komponenten und moderne Oberflächen direkt für SharePoint entwickeln.", example: "Beispiel: Eine eigene Projektübersicht erscheint als Baustein im Intranet.", icon: AppWindow },
  { name: "PowerShell", detail: "Wiederkehrende Verwaltungsaufgaben kontrolliert und nachvollziehbar automatisieren.", example: "Beispiel: Gruppen, Berechtigungen oder Berichte werden standardisiert verarbeitet.", icon: Terminal },
  { name: "Microsoft-365-Administration", detail: "Teams, Exchange, SharePoint, Benutzer und Richtlinien als Gesamtsystem betreuen.", example: "Beispiel: Ein geregelter Eintritts- und Austrittsprozess verhindert vergessene Zugänge.", icon: SlidersHorizontal },
];

const allMicrosoft365Technologies = [...collaboration, ...powerPlatform, ...security, ...development];

const process = [
  ["01", "Bestand verstehen", "Lizenzen, Strukturen, Rechte und tägliche Arbeitsweisen gemeinsam betrachten."],
  ["02", "Zielbild ordnen", "Festlegen, welche Dienste wofür genutzt werden und wie sie zusammenspielen."],
  ["03", "Schrittweise umsetzen", "Strukturen, Anwendungen und Automationen kontrolliert aufbauen und testen."],
  ["04", "Nutzung verankern", "Mitarbeitende verständlich einführen und die Lösung langfristig weiterentwickeln."],
] as const;

function TechnologyGroup({ eyebrow, title, intro, items, dark = false, id }: { eyebrow: string; title: string; intro: string; items: Technology[]; dark?: boolean; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${dark ? "bg-primary text-white" : "bg-white"}`}>
      <Container>
        <div data-m365-reveal="" className="max-w-3xl"><p className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-accent" : "text-accent-strong"}`}>{eyebrow}</p><h2 className={`mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl ${dark ? "text-white" : "text-primary"}`}>{title}</h2><p className={`mt-5 text-lg leading-8 ${dark ? "text-white/65" : "text-muted"}`}>{intro}</p></div>
        <div className="m365-tech-grid mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ name, detail, example, icon: Icon }) => <article key={name} data-m365-reveal="" className={`m365-tech-card rounded-2xl border p-5 ${dark ? "border-white/10 bg-primary-deep hover:border-accent/45 hover:bg-white/5" : "border-border bg-surface hover:border-accent/45 hover:bg-white"}`}><div className="flex items-center justify-between"><span className={`m365-tech-icon grid size-10 place-items-center rounded-xl ${dark ? "bg-white/8 text-accent" : "bg-surface-accent text-accent-strong"}`}><Icon size={19} /></span><span className={`text-[0.6rem] font-bold uppercase tracking-[0.14em] ${dark ? "text-white/35" : "text-muted"}`}>Microsoft 365</span></div><h3 className={`mt-6 text-lg font-bold ${dark ? "text-white" : "text-primary"}`}>{name}</h3><p className={`mt-3 text-sm leading-6 ${dark ? "text-white/65" : "text-muted"}`}>{detail}</p><p className={`mt-5 border-t pt-4 text-xs leading-5 ${dark ? "border-white/10 text-white/48" : "border-border text-muted"}`}>{example}</p></article>)}
        </div>
      </Container>
    </section>
  );
}

function DesktopM365Map() {
  const nodes = [[MessageSquare, "Teams"], [PanelsTopLeft, "SharePoint"], [Workflow, "Automate"], [BarChart3, "Power BI"]] as const;
  return (
    <div className="m365-hero-map relative mx-auto w-full max-w-xl" aria-label="Zusammenspiel zentraler Microsoft-365-Dienste">
      <div className="rounded-[2rem] border border-white/15 bg-white/8 p-5 shadow-2xl shadow-black/25 backdrop-blur">
        <div className="rounded-[1.5rem] bg-surface p-6 text-foreground">
          <div className="flex items-center justify-between"><div><p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">Ihr digitaler Arbeitsplatz</p><strong className="mt-1 block text-lg text-primary">Microsoft 365</strong></div><span className="m365-node grid size-11 place-items-center rounded-2xl bg-accent text-primary-deep"><Cloud size={21} /></span></div>
          <div className="mt-7 grid grid-cols-2 gap-3">{nodes.map(([Icon, name], index) => <div key={name} className="relative rounded-2xl bg-white p-4 shadow-sm"><Icon size={19} className="text-accent-strong" /><strong className="mt-5 block text-xs text-primary">{name}</strong><span className="mt-1 block text-[0.62rem] text-muted">{index < 2 ? "Zusammenarbeiten" : "Daten nutzen"}</span>{index < 2 && <i className="m365-route absolute -bottom-2 left-1/2 h-px w-1/2 bg-accent" />}</div>)}</div>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-4 py-3 text-white"><span className="flex items-center gap-2 text-xs font-bold"><ShieldCheck size={15} className="text-accent" /> Sicher verbunden</span><span className="text-[0.6rem] text-white/45">Entra · Intune · Defender</span></div>
        </div>
      </div>
    </div>
  );
}

export function Microsoft365Page() {
  const service = getService("microsoft-365");
  const { content } = service;

  return (
    <Microsoft365Motion>
      <JsonLd data={serviceSchema(service.title, service.short, "/leistungen/microsoft-365")} />
      <JsonLd data={faqSchema(content.faq)} />

      <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
        <Container className="relative hidden min-h-[43rem] gap-16 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24"><div><Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Microsoft 365" }]} /><p className="reveal mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><Cloud size={14} /> Microsoft 365</p><h1 className="reveal delay-1 mt-5 text-6xl font-black leading-[1.02] tracking-[-0.05em]">Aus vielen Diensten wird <span className="text-accent">ein guter Arbeitsplatz.</span></h1><p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/70">Wir verbinden Zusammenarbeit, Power Platform, Sicherheit und Administration zu einer verständlichen Microsoft-365-Umgebung.</p><div className="reveal delay-3 mt-8 flex gap-3"><Link href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">M365 besprechen <ArrowRight size={17} /></Link><a href="#zusammenarbeit" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-white/45">Technologien ansehen</a></div></div><DesktopM365Map /></Container>

        <Container className="relative py-10 md:hidden"><Breadcrumb items={[{ label: "Leistungen", href: "/leistungen" }, { label: "Microsoft 365" }]} /><p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Microsoft 365</p><h1 className="service-mobile-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.02] tracking-[-0.045em]">Besser arbeiten.<br /><span className="text-accent">Sicher verbunden.</span></h1><p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/70">Teams, SharePoint, Power Platform und Sicherheit sinnvoll aufeinander abgestimmt.</p><div className="mobile-reveal mobile-delay-3 mt-7 rounded-2xl border border-white/12 bg-white/7 p-4"><div className="grid grid-cols-2 gap-2 text-xs font-bold">{["Teams", "SharePoint", "Power Apps", "Power BI"].map((item) => <span key={item} className="flex min-w-0 items-center gap-2 rounded-xl bg-white/6 px-3 py-3"><i className="size-1.5 shrink-0 rounded-full bg-accent" />{item}</span>)}</div><p className="mt-3 text-[0.65rem] text-white/45">Verwaltet mit Entra ID, Intune und Defender</p></div><Link href="/kontakt" className="mobile-reveal mobile-delay-4 mt-5 flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 font-bold text-primary-deep">M365 besprechen <ArrowRight size={18} /></Link></Container>
      </header>

      <MobileServiceContent slug="microsoft-365" eyebrow="Ihr digitaler Arbeitsplatz" title="Microsoft 365 klar geordnet." intro="Mobil finden Sie jeden wichtigen Dienst als kompakten Eintrag mit Zweck und echtem Praxisbeispiel." benefitTitle="Mehr aus vorhandenen Lizenzen machen." technologyTitle="Dienste im Detail." faqTitle="Microsoft 365 verständlich erklärt." ctaEyebrow="M365 im Alltag" ctaTitle="Wo verliert Ihr Team heute Zeit?" ctaText="Wir prüfen Struktur, Rechte und Abläufe und empfehlen den nächsten sinnvollen Schritt." revealAttribute="data-m365-reveal" technologyDetails={allMicrosoft365Technologies} />

      <div className="hidden md:block">

      <section className="bg-white py-14 md:py-20"><Container data-m365-reveal=""><div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Das Ökosystem</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary md:text-4xl">Jeder Dienst hat eine klare Aufgabe.</h2></div><div><p className="leading-7 text-muted">Sie müssen nicht alles einsetzen. Entscheidend ist, dass die richtigen Dienste sauber zusammenspielen und Menschen im Alltag wirklich unterstützen.</p><nav aria-label="Microsoft-365-Bereiche" className="mt-5 flex flex-wrap gap-2">{[["#zusammenarbeit", "Zusammenarbeit"], ["#power-platform", "Power Platform"], ["#sicherheit", "Sicherheit"], ["#entwicklung", "Entwicklung"]].map(([href, label]) => <a key={href} href={href} className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-bold text-primary transition hover:border-accent">{label}</a>)}</nav></div></div></Container></section>

      <TechnologyGroup id="zusammenarbeit" dark eyebrow="Zusammenarbeit & Kommunikation" title="Gemeinsam arbeiten, ohne Informationen zu suchen." intro="Diese Dienste verbinden Kommunikation, Dateien, Termine und Aufgaben zu einem nachvollziehbaren Arbeitsbereich." items={collaboration} />
      <TechnologyGroup id="power-platform" eyebrow="Power Platform & Daten" title="Eigene Anwendungen und Abläufe mit vorhandenen Daten." intro="Mit der Power Platform entstehen interne Apps, automatisierte Prozesse und verständliche Auswertungen – passend zu Ihren Abläufen." items={powerPlatform} />
      <TechnologyGroup id="sicherheit" dark eyebrow="Administration & Sicherheit" title="Zugänge, Geräte und Daten kontrolliert schützen." intro="Sicherheit wird nicht als Einzelprodukt betrachtet. Identitäten, Geräte, Regeln und Berechtigungen müssen gemeinsam funktionieren." items={security} />
      <TechnologyGroup id="entwicklung" eyebrow="Azure, Entwicklung & Schnittstellen" title="Microsoft 365 gezielt erweitern und verbinden." intro="Wenn Standardfunktionen nicht ausreichen, schaffen Schnittstellen, individuelle Komponenten und Administration passende Lösungen." items={development} />

      <section className="bg-primary py-16 text-white md:py-24"><Container data-m365-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unser Vorgehen</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">Erst ordnen. Dann sinnvoll erweitern.</h2><ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map(([number, title, text]) => <li key={number} className="border-t border-white/15 pt-5"><span className="text-sm font-black text-accent">{number}</span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></li>)}</ol></Container></section>

      <section className="bg-white py-16 md:py-24"><Container data-m365-reveal="" className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Häufige Fragen</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Microsoft 365 klar eingeordnet.</h2></div><div className="overflow-hidden rounded-3xl border border-border bg-surface">{content.faq.map((item) => <details key={item.question} className="group border-b border-border last:border-b-0"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-primary md:px-7">{item.question}<ChevronDown size={18} className="shrink-0 text-accent-strong transition group-open:rotate-180" /></summary><p className="px-5 pb-6 leading-7 text-muted md:px-7">{item.answer}</p></details>)}</div></Container></section>

      <section className="bg-primary py-16 text-white md:py-24"><Container data-m365-reveal=""><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Weitere Leistungen</p><h2 className="mt-3 mb-10 text-3xl font-black tracking-[-0.035em]">Was Ihre Microsoft-Lösung ergänzen kann.</h2><RelatedServices currentSlug="microsoft-365" /></Container></section>

      <section className="bg-white py-12 md:py-16"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Microsoft 365 im Alltag</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary md:text-4xl">Welche Stelle kostet Ihr Team heute Zeit?</h2><p className="mt-3 text-muted">Wir prüfen Ihre Umgebung und zeigen den nächsten sinnvollen Schritt.</p></div><Link href="/kontakt" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-primary hover:text-white">M365 unverbindlich besprechen <ArrowRight size={17} /></Link></Container></section>
      </div>
    </Microsoft365Motion>
  );
}
