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
    <section className="bg-primary py-14 text-white md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><SectionHeader eyebrow="Anwendungsbeispiele" title="Vom Problem zur passenden Lösung." text="Typische Aufgaben, bei denen digitale Lösungen Abläufe spürbar verbessern." light /><ButtonLink href="/projekte" variant="secondary" className="mb-8 self-start md:mb-14">Zu den Projekten <ArrowRight size={17} /></ButtonLink></div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {projects.map(({ icon: Icon, type, title, problem, result }) => <article key={title} className="group w-[82%] shrink-0 snap-start rounded-3xl md:w-auto border border-white/12 bg-white/6 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/10"><Icon className="text-accent" /><p className="mt-8 text-xs font-bold uppercase tracking-widest text-accent">{type}</p><h3 className="mt-2 text-xl font-bold">{title}</h3><div className="mt-6 border-t border-white/10 pt-5"><span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/65">Ausgangslage</span><p className="mt-1 text-sm leading-6 text-white/65">{problem}</p></div><div className="mt-4"><span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent">Ergebnis</span><p className="mt-1 text-sm leading-6 text-white/85">{result}</p></div></article>)}
        </div>
      </Container>
    </section>
  );
}
