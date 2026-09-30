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
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader eyebrow="Für wen wir arbeiten" title="Für Unternehmen, die weiterkommen wollen." text="Wir unterstützen kleine und mittlere Unternehmen dabei, ihre Abläufe einfacher und digitaler zu machen." centered />
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {audiences.map(([Icon, name]) => (
            <li key={name} className="grid min-h-28 place-items-center gap-2 bg-white p-5 text-center">
              <Icon size={22} className="text-accent-strong" />
              <span className="text-sm font-bold text-primary">{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
