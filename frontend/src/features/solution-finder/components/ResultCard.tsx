import type { ReactNode } from "react";

type Props = { icon: ReactNode; title: string; children: ReactNode; dark?: boolean; wide?: boolean };

/** Einzelne Ergebnis-Karte des Assistenten (hell oder dunkel hervorgehoben). */
export function ResultCard({ icon, title, children, dark = false, wide = false }: Props) {
  return (
    <section className={`finder-pop rounded-2xl border p-5 md:rounded-3xl md:p-6 ${dark ? "border-primary bg-primary text-white" : "border-border bg-white"} ${wide ? "md:col-span-2" : ""}`}>
      <h3 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "text-accent" : "text-accent-strong"}`}>{icon}{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

/** Kurze Liste mit Symbol – für „Das lösen wir“, „Vorbereiten“ und Tipps. */
export function IconList({ items, icon }: { items: string[]; icon: ReactNode }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => <li key={item} className="flex gap-2 text-sm text-foreground"><span className="mt-0.5 shrink-0 text-accent-strong">{icon}</span>{item}</li>)}
    </ul>
  );
}
