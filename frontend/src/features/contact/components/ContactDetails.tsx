import { ArrowUpRight, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { Container } from "@/components/ui/container/Container";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

const channels = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Nachricht senden", desktopValue: "Direkt eine Nachricht senden", description: "Ideal für eine kurze Projektidee oder eine erste Frage.", href: siteConfig.whatsappUrl, external: true, featured: true },
  { icon: Phone, label: "Telefon", value: siteConfig.phone, desktopValue: siteConfig.phone, description: "Für ein persönliches, unverbindliches Erstgespräch.", href: telHref, external: false, featured: false },
  { icon: EmailIcon, label: "E-Mail", value: siteConfig.email, desktopValue: siteConfig.email, description: "Für Anforderungen, Dokumente oder eine ausführlichere Anfrage.", href: `mailto:${siteConfig.email}`, external: false, featured: false },
  { icon: InstagramIcon, label: "Instagram", value: "@sunmoon_it_services", desktopValue: "@sunmoon_it_services", description: "Folgen Sie uns für Einblicke, Projekte und Neuigkeiten.", href: siteConfig.instagramUrl, external: true, featured: false },
] as const;

const projectQuestions = ["Was möchten Sie digital verbessern?", "Wer soll die Lösung später nutzen?", "Gibt es einen gewünschten Zeitrahmen?"];

function DesktopContactDetails() {
  return (
    <Container className="hidden py-24 md:block">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Direkter Kontakt</p>
        <h2 className="mt-3 text-5xl font-black tracking-[-0.035em] text-primary">Wählen Sie den Weg, der zu Ihnen passt.</h2>
        <p className="mt-5 text-lg leading-8 text-muted">Keine komplizierten Formulare und keine langen Wege. Sie erreichen uns direkt über Ihren bevorzugten Kanal.</p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4">
        {channels.map(({ icon: Icon, label, desktopValue, description, href, external, featured }) => (
          <li key={label}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`group flex h-full min-h-56 flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? "border-primary bg-primary text-white shadow-lg shadow-primary/10" : "border-border bg-white text-foreground hover:border-accent/35"}`}>
              <div className="flex items-start justify-between gap-4">
                <span className={`grid size-12 place-items-center rounded-2xl ${featured ? "bg-white/10 text-accent" : "bg-surface-accent text-accent-strong"}`}><Icon size={22} /></span>
                <ArrowUpRight size={19} className={`transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${featured ? "text-accent" : "text-muted"}`} />
              </div>
              <p className={`mt-7 text-xs font-bold uppercase tracking-[0.18em] ${featured ? "text-accent" : "text-accent-strong"}`}>{label}</p>
              <strong className="mt-2 break-words text-2xl">{desktopValue}</strong>
              <span className={`mt-3 block text-sm leading-6 ${featured ? "text-white/62" : "text-muted"}`}>{description}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-white lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-primary p-10 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Damit wir direkt helfen können</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Drei kurze Angaben reichen zum Start.</h2>
          <ol className="mt-8 space-y-5">
            {projectQuestions.map((item, index) => <li key={item} className="flex items-center gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/8 text-sm font-black text-accent">0{index + 1}</span><span className="font-semibold text-white/82">{item}</span></li>)}
          </ol>
        </div>
        <div className="p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Erreichbarkeit</p>
          <div className="mt-7 space-y-6">
            <InfoRow icon={Clock3} title="Geschäftszeiten"><span>{siteConfig.openingHours}</span></InfoRow>
            <InfoRow icon={MapPin} title="Standort">{siteConfig.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</InfoRow>
            <InfoRow icon={ShieldCheck} title="Vertraulich behandelt"><span>Ihre Projektinformationen bleiben selbstverständlich vertraulich.</span></InfoRow>
          </div>
        </div>
      </div>
    </Container>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof Clock3; title: string; children: React.ReactNode }) {
  return <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Icon size={20} /></span><div><strong className="block text-primary">{title}</strong><span className="mt-1 block text-sm leading-6 text-muted">{children}</span></div></div>;
}

function MobileContactDetails() {
  return (
    <Container className="py-12 md:hidden">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Alle Kontaktwege</p>
      <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Direkt erreichbar.</h2>

      <ul className="mt-7 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
        {channels.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex min-h-20 items-center gap-3 px-4 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Icon size={19} /></span>
              <span className="min-w-0 flex-1"><span className="block text-[0.65rem] font-bold uppercase tracking-wider text-muted">{label}</span><strong className="mt-0.5 block truncate text-sm text-primary">{value}</strong></span>
              <ArrowUpRight size={17} className="shrink-0 text-accent-strong" />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl bg-primary p-5 text-white">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">Vor dem Gespräch</p>
        <h2 className="mt-2 text-xl font-black">Drei kurze Gedanken helfen.</h2>
        <ol className="mt-5 space-y-4">
          {projectQuestions.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><span className="font-black text-accent">0{index + 1}</span><span>{item}</span></li>)}
        </ol>
      </div>

      <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-white p-5">
        <InfoRow icon={Clock3} title="Geschäftszeiten"><span>{siteConfig.openingHours}</span></InfoRow>
        <div className="border-t border-border" />
        <InfoRow icon={MapPin} title="Standort">{siteConfig.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</InfoRow>
      </div>
    </Container>
  );
}

export function ContactDetails() {
  return <section className="bg-surface"><DesktopContactDetails /><MobileContactDetails /></section>;
}
