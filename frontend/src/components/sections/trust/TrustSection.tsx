import { Gauge, Lightbulb, Smartphone, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

const points = [
  [Lightbulb, "Individuelle Lösungen", "Kein Baukasten, sondern passend zu Ihrem Unternehmen."],
  [Workflow, "Moderne Entwicklung", "Saubere Architektur für langfristige Weiterentwicklung."],
  [Smartphone, "Mobile First", "Durchdacht für Smartphones, Tablets und Desktop."],
  [Gauge, "Performance & Qualität", "Schnell, stabil und konsequent auf Wirkung optimiert."],
] as const;

export function TrustSection() {
  return (
    <section className="bg-white py-10 md:py-12">
      <Container><ul className="grid grid-cols-2 gap-2 md:gap-4 lg:grid-cols-4">
        {points.map(([Icon, title, text]) => <li key={title} className="flex flex-col gap-3 rounded-2xl p-3 transition hover:bg-surface md:flex-row md:gap-4 md:p-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Icon size={21} /></span><span><strong className="block text-sm text-primary">{title}</strong><span className="mt-1 block text-xs leading-5 text-muted">{text}</span></span></li>)}
      </ul></Container>
    </section>
  );
}
