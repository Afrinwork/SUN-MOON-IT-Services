import { Braces, Cloud, Coffee, PanelsTopLeft, Smartphone, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const technologies = [
  [PanelsTopLeft, "Next.js"], [Braces, "React & TypeScript"], [Coffee, "Java"],
  [Workflow, "Spring Boot"], [Cloud, "Microsoft 365"], [Smartphone, "SharePoint"],
] as const;

export function TechnologiesSection() {
  return (
    <section className="bg-primary-deep py-20 text-white md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Technologien" title="Bewährte Werkzeuge. Sinnvoll eingesetzt." text="Technologie ist für uns kein Selbstzweck. Wir wählen sie danach aus, was für Ihr Projekt langfristig zuverlässig funktioniert." light />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">{technologies.map(([Icon, name]) => <div key={name} className="rounded-2xl border border-white/10 bg-white/6 p-5 transition hover:bg-white/10"><Icon className="text-accent" size={22} /><span className="mt-5 block text-sm font-bold">{name}</span></div>)}</div>
      </Container>
    </section>
  );
}
