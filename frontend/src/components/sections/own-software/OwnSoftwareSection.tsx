import { ArrowRight, BarChart3, Check, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

export function OwnSoftwareSection() {
  return (
    <section id="projekte" className="overflow-hidden bg-white py-14 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Eigene Software" title="Produkte, die aus echten Anforderungen entstehen." text="Wir entwickeln eigene Lösungen mit derselben Sorgfalt, die wir in Kundenprojekte investieren – klar, schnell und auf den täglichen Einsatz ausgerichtet." />
          <ul className="mb-8 space-y-3 text-sm text-muted">{["Durchdachte Nutzerführung", "Modular und flexibel erweiterbar", "Sicher und performant entwickelt"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-accent/12 text-accent-strong"><Check size={14} /></span>{item}</li>)}</ul>
          <ButtonLink href="/projekte/eigene-software">Alle eigenen Lösungen <ArrowRight size={17} /></ButtonLink>
        </div>
        <div className="relative rounded-[2rem] bg-primary p-4 shadow-2xl shadow-primary/20 md:p-7">
          <div className="absolute -right-12 -top-12 size-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl bg-surface p-5 md:p-7">
            <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-accent-strong">Sun &amp; Moon Flow</p><h3 className="mt-1 text-xl font-bold text-primary">Prozessübersicht</h3></div><span className="grid size-11 place-items-center rounded-xl bg-primary text-accent"><Layers3 /></span></div>
            <div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white p-4"><BarChart3 className="text-accent-strong" /><strong className="mt-6 block text-2xl text-primary">84%</strong><span className="text-xs text-muted">Automatisiert</span></div><div className="rounded-2xl bg-accent p-4 text-primary-deep"><strong className="text-4xl">12h</strong><span className="mt-8 block text-xs font-bold">pro Woche gespart</span></div></div>
            <div className="mt-3 space-y-2 rounded-2xl bg-white p-4">{["Anfrage automatisch erfasst", "Aufgabe dem Team zugewiesen", "Statusbericht vorbereitet"].map((item, i) => <div key={item} className="flex items-center gap-3 text-xs text-muted"><i className={`size-2 rounded-full ${i === 2 ? "bg-border" : "bg-accent"}`} />{item}</div>)}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
