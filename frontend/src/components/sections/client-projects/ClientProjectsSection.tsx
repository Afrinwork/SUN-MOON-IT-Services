import { ArrowRight, Factory, ShoppingBag, Stethoscope } from "lucide-react";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const projects = [
  { icon: Factory, type: "Prozessdigitalisierung", title: "Zentrale Auftragssteuerung", problem: "Verteilte Excel-Listen und manuelle Übergaben", result: "Ein klarer digitaler Prozess für das gesamte Team" },
  { icon: ShoppingBag, type: "Webplattform", title: "Digitales Kundenportal", problem: "Hoher Aufwand bei wiederkehrenden Anfragen", result: "Self-Service und transparente Bearbeitungsstände" },
  { icon: Stethoscope, type: "Individuelle Software", title: "Intelligente Terminplanung", problem: "Unübersichtliche Planung und viele Rückfragen", result: "Schnellere Planung mit automatischen Benachrichtigungen" },
];

export function ClientProjectsSection() {
  return (
    <section className="home-projects overflow-hidden bg-primary py-10 text-white md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><SectionHeader eyebrow="Konkrete Beispiele" title="So lösen wir typische Probleme im Arbeitsalltag." text="Weniger Excel-Listen, Rückfragen und Handarbeit – dafür klare digitale Abläufe." light /><ButtonLink href="/projekte" variant="secondary" className="mb-8 self-start md:mb-14">Projekte ansehen <ArrowRight size={17} /></ButtonLink></div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {projects.map(({ icon: Icon, type, title, problem, result }) => <article key={title} className="group w-[82%] shrink-0 snap-start rounded-2xl border border-white/12 bg-white/6 p-5 transition duration-300 active:scale-[0.99] md:w-auto md:rounded-3xl md:p-7 md:hover:-translate-y-1 md:hover:bg-white/10"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-white/8"><Icon size={20} className="text-accent" /></span><p className="text-[0.65rem] font-bold uppercase tracking-widest text-accent">{type}</p></div><h3 className="mt-4 text-lg font-bold md:mt-8 md:text-xl">{title}</h3><div className="mt-4 border-t border-white/10 pt-4 md:mt-6 md:pt-5"><span className="text-[0.62rem] font-bold uppercase tracking-wider text-white/65">Ausgangslage</span><p className="mt-1 text-xs leading-5 text-white/65 md:text-sm md:leading-6">{problem}</p></div><div className="mt-3 md:mt-4"><span className="text-[0.62rem] font-bold uppercase tracking-wider text-accent">Ergebnis</span><p className="mt-1 text-xs leading-5 text-white/85 md:text-sm md:leading-6">{result}</p></div></article>)}
        </div>
      </Container>
    </section>
  );
}
