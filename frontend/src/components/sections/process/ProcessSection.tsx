import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const steps = [
  ["01", "Verstehen", "Ziele, Nutzer und bestehende Abläufe gemeinsam erfassen."],
  ["02", "Planen", "Eine klare Lösung, Prioritäten und realistische Schritte definieren."],
  ["03", "Entwickeln", "Iterativ umsetzen und Fortschritt regelmäßig sichtbar machen."],
  ["04", "Testen", "Qualität, Sicherheit, Barrierefreiheit und Performance prüfen."],
  ["05", "Veröffentlichen", "Sauber ausrollen, überwachen und zuverlässig betreiben."],
  ["06", "Weiterentwickeln", "Aus Feedback lernen und die Lösung sinnvoll ausbauen."],
];

export function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Arbeitsweise" title="Transparent vom ersten Gespräch bis zum Betrieb." text="Ein strukturierter Prozess schafft Sicherheit, macht Entscheidungen nachvollziehbar und hält Projekte beweglich." />
        <ol className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number, title, text]) => <li key={number} className="relative border-t border-border pt-6"><span className="absolute -top-3 left-0 bg-white pr-3 text-sm font-black text-accent-strong">{number}</span><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-7 text-muted">{text}</p></li>)}</ol>
      </Container>
    </section>
  );
}
