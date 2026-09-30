import { Boxes, Gauge, PenTool, RefreshCcw, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const reasons = [
  [PenTool, "Individuell", "Lösungen folgen Ihren Abläufen – nicht umgekehrt."],
  [Rocket, "Modern", "Zeitgemäße Technik und eine klare Nutzererfahrung."],
  [Boxes, "Skalierbar", "Eine Basis, die mit neuen Anforderungen wachsen kann."],
  [Gauge, "Performant", "Schnelle Ladezeiten und direkte Interaktionen."],
  [RefreshCcw, "Wartbar", "Sauberer Code für eine langfristige Weiterentwicklung."],
] as const;

export function WhyUsSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow="Warum M&L" title="Qualität, die nicht an der Oberfläche endet." text="Gutes Design, durchdachte Technik und verlässliche Zusammenarbeit gehören für uns zusammen." />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">{reasons.map(([Icon, title, text]) => <article key={title} className="rounded-3xl border border-border bg-white p-6"><Icon className="text-accent-strong" /><h3 className="mt-5 font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div>
      </Container>
    </section>
  );
}
