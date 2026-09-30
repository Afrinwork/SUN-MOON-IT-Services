import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";

const customers = ["NORDWERK", "VITALIS", "ELBWERK", "KONTUR", "NOVENTA", "WERKRAUM"];

export function CustomersSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <SectionHeader eyebrow="Zusammenarbeit" title="Technologie lebt von Vertrauen." text="Hier können später echte, freigegebene Kundenlogos und die zugehörigen Projekte präsentiert werden." centered />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {customers.map((name) => <div key={name} className="grid min-h-28 place-items-center bg-white p-5 text-center text-sm font-black tracking-[0.12em] text-primary/35 transition hover:text-primary"><span>{name}</span></div>)}
        </div>
        <p className="mt-4 text-center text-xs text-muted">Platzhalterdarstellung – keine echten Kundenreferenzen.</p>
      </Container>
    </section>
  );
}
