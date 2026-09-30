import { ArrowUpRight, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function ContactHero() {
  return (
    <header className="network-grid relative overflow-hidden bg-primary-deep text-white">
      <div className="absolute -right-24 top-20 size-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-24">
        <div className="min-w-0">
          <Breadcrumb items={[{ label: "Kontakt" }]} />
          <div className="reveal mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
            <Sparkles size={14} className="text-accent" /> Persönlich & unverbindlich
          </div>
          <h1 className="reveal delay-1 mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.045em] md:text-6xl">
            Ihr Projekt beginnt mit einem <span className="text-accent">guten Gespräch.</span>
          </h1>
          <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Ob Website, App, individuelle Software oder Automatisierung: Erzählen Sie uns kurz, was Sie vorhaben. Wir besprechen gemeinsam den sinnvollsten nächsten Schritt.
          </p>
          <div className="reveal delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep transition duration-300 hover:-translate-y-0.5 hover:bg-white">
              <MessageCircle size={18} /> Per WhatsApp schreiben
            </a>
            <a href={telHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:bg-white/12">
              <PhoneCall size={17} /> Direkt anrufen
            </a>
          </div>
        </div>

        <aside className="reveal delay-2 rounded-[2rem] border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/20 backdrop-blur-md">
          <div className="rounded-[1.4rem] bg-white p-6 text-foreground md:p-8">
            <div className="flex items-start justify-between gap-5">
              <span className="grid size-13 place-items-center rounded-2xl bg-primary text-accent"><MessageCircle size={24} /></span>
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-accent px-3 py-1.5 text-xs font-bold text-accent-strong"><i className="size-2 rounded-full bg-accent" /> Kontakt offen</span>
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Schnellster Weg</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-primary md:text-3xl">Kurze Nachricht genügt.</h2>
            <p className="mt-4 leading-7 text-muted">Beschreiben Sie Ihre Idee in wenigen Sätzen. Auch wenn noch nicht alles feststeht, können wir bereits gemeinsam starten.</p>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 flex items-center justify-between rounded-2xl bg-primary px-5 py-4 font-bold text-white transition hover:bg-primary-deep">
              Chat auf WhatsApp öffnen <ArrowUpRight size={18} className="text-accent" />
            </a>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted"><CheckCircle2 size={15} className="text-accent-strong" /> Unverbindliche erste Einschätzung</div>
          </div>
        </aside>
      </Container>
    </header>
  );
}
