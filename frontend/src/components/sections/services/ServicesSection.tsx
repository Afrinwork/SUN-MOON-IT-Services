import { ArrowUpRight, Bot, Building2, CodeXml, RefreshCw, Smartphone, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const services = [
  [CodeXml, "Webentwicklung", "Schnelle Unternehmenswebsites, die überzeugen und neue Anfragen ermöglichen."],
  [Smartphone, "App-Entwicklung", "Intuitive mobile Anwendungen für Kunden, Teams und neue Geschäftsmodelle."],
  [Wrench, "Softwareentwicklung", "Individuelle Systeme, die exakt zu Ihren Prozessen und Anforderungen passen."],
  [Building2, "Microsoft 365", "Digitale Zusammenarbeit mit SharePoint, Teams und intelligenten Workflows."],
  [Bot, "KI & Automatisierung", "Wiederkehrende Aufgaben automatisieren und wertvolle Zeit zurückgewinnen."],
  [RefreshCw, "Modernisierung", "Bestehende Software sicher, wartbar und zukunftsfähig weiterentwickeln."],
] as const;

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-surface py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Leistungen" title="Digitale Lösungen aus einer Hand." text="Von der ersten Idee bis zum stabilen Betrieb: Wir entwickeln Lösungen, die nicht nur gut aussehen, sondern im Alltag wirklich funktionieren." />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, text], index) => <li key={title} className={`reveal delay-${(index % 3) + 1} group rounded-3xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6`}><span className="grid size-12 place-items-center rounded-2xl bg-primary text-accent"><Icon size={23} /></span><h3 className="mt-6 text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-strong">Mehr erfahren <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span></li>)}
        </ul>
      </Container>
    </section>
  );
}
