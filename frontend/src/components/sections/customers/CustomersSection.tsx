import { Briefcase, Hammer, HeartPulse, Rocket, ShoppingBag, Store } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const audiences = [
  [Hammer, "Handwerk"],
  [Briefcase, "Dienstleister"],
  [Store, "Mittelstand"],
  [ShoppingBag, "Handel"],
  [HeartPulse, "Praxen"],
  [Rocket, "Start-ups"],
] as const;

export function CustomersSection() {
  return (
    <section className="home-customers overflow-hidden bg-white py-10 md:py-28">
      <Container>
        <SectionHeader eyebrow="Unsere Kunden" title="Für kleine und mittlere Unternehmen." text="Wir arbeiten unter anderem für Handwerksbetriebe, Dienstleister, Praxen, Handel und Start-ups." centered />
        <ul className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-px md:overflow-hidden md:rounded-3xl md:border md:border-border md:bg-border md:px-0 md:pb-0 lg:grid-cols-6">
          {audiences.map(([Icon, name]) => (
            <li key={name} className="grid min-h-24 w-28 shrink-0 snap-start place-items-center gap-2 rounded-2xl border border-border bg-white p-4 text-center md:min-h-28 md:w-auto md:rounded-none md:border-0 md:p-5">
              <Icon size={22} className="text-accent-strong" />
              <span className="text-sm font-bold text-primary">{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
