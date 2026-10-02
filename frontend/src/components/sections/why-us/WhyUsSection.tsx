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
    <section className="home-why overflow-hidden bg-primary py-10 text-white md:py-28">
      <Container>
        <SectionHeader eyebrow="Warum Sun & Moon" title="Darum arbeiten Unternehmen mit uns." text="Sie erhalten einen direkten Ansprechpartner, verständliche Antworten und eine Lösung, die langfristig funktioniert." light />
        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">{reasons.map(([Icon, title, text]) => <article key={title} className="w-[72%] shrink-0 snap-start rounded-2xl border border-border bg-white p-4 md:w-auto md:rounded-3xl md:p-6"><Icon size={21} className="text-accent-strong" /><h3 className="mt-3 font-bold text-primary md:mt-5">{title}</h3><p className="mt-1.5 text-sm leading-5 text-muted md:mt-2 md:leading-6">{text}</p></article>)}</div>
      </Container>
    </section>
  );
}
