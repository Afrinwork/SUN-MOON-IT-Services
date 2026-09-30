import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Direkt eine Nachricht senden",
    description: "Ideal für eine kurze Projektidee oder eine erste Frage.",
    href: siteConfig.whatsappUrl,
    external: true,
    featured: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    description: "Für ein persönliches, unverbindliches Erstgespräch.",
    href: telHref,
    external: false,
    featured: false,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.email,
    description: "Für Anforderungen, Dokumente oder eine ausführlichere Anfrage.",
    href: `mailto:${siteConfig.email}`,
    external: false,
    featured: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@sunmoon_it_services",
    description: "Folgen Sie uns für Einblicke, Projekte und Neuigkeiten.",
    href: siteConfig.instagramUrl,
    external: true,
    featured: false,
  },
] as const;

export function ContactDetails() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Direkter Kontakt</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary md:text-5xl">Wählen Sie den Weg, der zu Ihnen passt.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Keine komplizierten Formulare und keine langen Wege. Sie erreichen uns direkt über Ihren bevorzugten Kanal.</p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, description, href, external, featured }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`group flex h-full min-h-56 flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7 ${featured ? "border-primary bg-primary text-white shadow-lg shadow-primary/10" : "border-border bg-white text-foreground hover:border-accent/35"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid size-12 place-items-center rounded-2xl ${featured ? "bg-white/10 text-accent" : "bg-surface-accent text-accent-strong"}`}><Icon size={22} /></span>
                  <ArrowUpRight size={19} className={`transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${featured ? "text-accent" : "text-muted"}`} />
                </div>
                <p className={`mt-7 text-xs font-bold uppercase tracking-[0.18em] ${featured ? "text-accent" : "text-accent-strong"}`}>{label}</p>
                <strong className="mt-2 break-words text-xl md:text-2xl">{value}</strong>
                <span className={`mt-3 block text-sm leading-6 ${featured ? "text-white/62" : "text-muted"}`}>{description}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-white lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-primary p-7 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Damit wir direkt helfen können</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] md:text-3xl">Drei kurze Angaben reichen zum Start.</h2>
            <ol className="mt-8 space-y-5">
              {["Was möchten Sie digital verbessern?", "Wer soll die Lösung später nutzen?", "Gibt es einen gewünschten Zeitrahmen?"].map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/8 text-sm font-black text-accent">0{index + 1}</span>
                  <span className="text-sm font-semibold text-white/82 md:text-base">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Erreichbarkeit</p>
            <div className="mt-7 space-y-6">
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Clock3 size={20} /></span><div><strong className="block text-primary">Geschäftszeiten</strong><span className="mt-1 block text-sm text-muted">{siteConfig.openingHours}</span></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><MapPin size={20} /></span><div><strong className="block text-primary">Standort</strong><span className="mt-1 block text-sm text-muted">{siteConfig.address}</span></div></div>
              <div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><ShieldCheck size={20} /></span><div><strong className="block text-primary">Vertraulich behandelt</strong><span className="mt-1 block text-sm leading-6 text-muted">Ihre Projektinformationen bleiben selbstverständlich vertraulich.</span></div></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
