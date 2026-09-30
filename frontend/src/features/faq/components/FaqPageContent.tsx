import { ArrowRight, CheckCircle2, ChevronDown, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import type { FaqItem } from "@/components/ui/faq/FaqList";

const facts = [
  { icon: CheckCircle2, title: "Transparent", text: "Klare Angebote ohne versteckte Positionen" },
  { icon: Clock3, title: "Planbar", text: "Realistische Zeiträume und feste Schritte" },
  { icon: ShieldCheck, title: "Verlässlich", text: "Betreuung auch nach der Veröffentlichung" },
];

function DesktopFaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white">
      {items.map((item, index) => (
        <details key={item.question} className="group border-b border-border last:border-b-0">
          <summary className="grid min-h-24 cursor-pointer list-none grid-cols-[3rem_1fr_auto] items-center gap-4 px-7 py-5 md:px-8">
            <span className="text-sm font-black text-accent-strong">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-bold text-primary md:text-xl">{item.question}</h3>
            <span className="grid size-10 place-items-center rounded-full border border-border text-primary transition group-open:rotate-180 group-open:border-accent group-open:text-accent-strong"><ChevronDown size={18} /></span>
          </summary>
          <p className="max-w-3xl px-8 pb-7 pl-[7rem] leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

function MobileFaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-white">
      {items.map((item, index) => (
        <details key={item.question} className="group border-b border-border last:border-b-0">
          <summary className="grid min-h-18 cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-3 px-4 py-4">
            <span>
              <span className="mb-1 block text-[0.65rem] font-black tracking-widest text-accent-strong">{String(index + 1).padStart(2, "0")}</span>
              <span className="block font-bold leading-6 text-primary">{item.question}</span>
            </span>
            <ChevronDown size={18} className="shrink-0 text-muted transition group-open:rotate-180 group-open:text-accent-strong" />
          </summary>
          <p className="px-4 pb-5 text-sm leading-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqPageContent({ items }: { items: FaqItem[] }) {
  return (
    <>
      <header className="network-grid bg-primary-deep text-white">
        <Container className="hidden gap-14 py-20 md:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "FAQ" }]} />
            <p className="reveal mt-10 text-xs font-bold uppercase tracking-[0.2em] text-accent">Fragen & Antworten</p>
            <h1 className="reveal delay-1 mt-4 max-w-3xl text-6xl font-black leading-[1.03] tracking-[-0.045em]">Klare Antworten. <span className="text-accent">Bevor wir starten.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">Was Sie über Kosten, Ablauf und Zusammenarbeit wissen möchten – verständlich und ohne Fachsprache beantwortet.</p>
          </div>
          <ul className="reveal delay-2 divide-y divide-white/10 border-y border-white/10">
            {facts.map(({ icon: Icon, title, text }) => <li key={title} className="flex items-center gap-4 py-5"><Icon size={19} className="shrink-0 text-accent" /><span><strong className="block text-sm">{title}</strong><span className="mt-1 block text-sm text-white/55">{text}</span></span></li>)}
          </ul>
        </Container>

        <Container className="py-10 md:hidden">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Gut zu wissen</p>
          <h1 className="mobile-safe-title mobile-reveal mobile-delay-1 mt-3 font-black leading-[1.03] tracking-[-0.045em]">Ihre Fragen.<br /><span className="text-accent">Klar beantwortet.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">Kompakte Antworten zu Projekt, Kosten und Betreuung.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 flex flex-wrap gap-2 text-xs font-semibold text-white/70">
            {['Kosten', 'Ablauf', 'Betreuung'].map((label) => <span key={label} className="rounded-full border border-white/15 bg-white/6 px-3 py-2">{label}</span>)}
          </div>
        </Container>
      </header>

      <section className="bg-surface">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Orientierung</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Die wichtigsten Punkte auf einen Blick.</h2>
            <p className="mt-5 leading-7 text-muted">Ihre Frage ist nicht dabei? Schreiben Sie uns direkt. Eine kurze Beschreibung genügt.</p>
            <Link href="/kontakt" className="mt-7 inline-flex items-center gap-2 font-bold text-primary transition hover:text-accent-strong">Persönlich nachfragen <ArrowRight size={17} /></Link>
          </aside>
          <DesktopFaqList items={items} />
        </Container>

        <Container className="py-12 md:hidden">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Häufig gefragt</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Schnell zur passenden Antwort.</h2>
          <MobileFaqList items={items} />
          <div className="mt-8 rounded-2xl bg-primary p-5 text-white">
            <MessageCircle size={21} className="text-accent" />
            <h2 className="mt-4 text-xl font-black">Noch etwas unklar?</h2>
            <p className="mt-2 text-sm leading-6 text-white/62">Schreiben Sie uns kurz. Wir antworten persönlich und verständlich.</p>
            <Link href="/kontakt" className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-accent px-4 font-bold text-primary-deep">Kontakt aufnehmen <ArrowRight size={17} /></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
