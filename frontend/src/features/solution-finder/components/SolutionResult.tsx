import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, Euro, ListOrdered, MessageCircle, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site.config";
import { pricePackages } from "@/content/pricing/packages";
import type { Solution, Timing } from "@/features/solution-finder/types";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function priceText(packageId: string) {
  const pkg = pricePackages.find((p) => p.id === packageId);
  if (!pkg || pkg.priceFrom === null) return { main: "Festpreis nach Erstgespräch", note: "Sie erhalten vorab ein schriftliches Angebot – ohne versteckte Kosten." };
  return { main: `ab ${euro.format(pkg.priceFrom)} ${pkg.unit}`, note: `Richtwert für „${pkg.name}“. Den genauen Preis erhalten Sie schriftlich vorab.` };
}

function Card({ icon, title, children, dark = false }: { icon: ReactNode; title: string; children: ReactNode; dark?: boolean }) {
  return (
    <section className={`finder-pop rounded-2xl border p-5 md:rounded-3xl md:p-6 ${dark ? "border-primary bg-primary text-white" : "border-border bg-white"}`}>
      <h3 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "text-accent" : "text-accent-strong"}`}>{icon}{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

/** Mobil: Karten untereinander. Desktop: 2×2-Raster plus Kontakt-Leiste. */
export function SolutionResult({ solution, timing, onRestart }: { solution: Solution; timing: Timing; onRestart: () => void }) {
  const price = priceText(solution.packageId);
  const message = encodeURIComponent(`Hallo Sun & Moon, ich interessiere mich für: ${solution.label}. Zeitrahmen: ${timing.label}.`);
  return (
    <div className="space-y-3 md:ml-12">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <Card icon={<CheckCircle2 size={15} />} title="Das lösen wir für Sie">
          <ul className="space-y-2">{solution.solves.map((s) => <li key={s} className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-strong" />{s}</li>)}</ul>
        </Card>
        <Card icon={<ListOrdered size={15} />} title="So läuft es ab">
          <ol className="space-y-2">{solution.steps.map((s, i) => <li key={s} className="flex items-center gap-3 text-sm text-foreground"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>{s}</li>)}</ol>
        </Card>
        <Card icon={<Euro size={15} />} title="Ungefährer Preis" dark>
          <p className="text-2xl font-black">{price.main}</p>
          <p className="mt-2 text-sm text-white/70">{price.note}</p>
        </Card>
        <Card icon={<CalendarClock size={15} />} title="Wann es losgehen kann">
          <p className="text-sm font-semibold text-foreground">{timing.startText}</p>
          <p className="mt-2 text-sm text-muted">{solution.duration}</p>
        </Card>
      </div>
      <div className="finder-pop flex flex-col gap-3 rounded-2xl bg-surface p-4 sm:flex-row sm:items-center sm:justify-between md:rounded-3xl md:p-5">
        <a href={`${siteConfig.whatsappUrl}?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-primary-deep">
          <MessageCircle size={18} /> Jetzt per WhatsApp anfragen
        </a>
        <div className="flex items-center justify-between gap-4 text-sm font-bold sm:justify-end">
          <Link href={solution.serviceHref} className="inline-flex min-h-11 items-center gap-1 text-accent-strong">Details ansehen <ArrowRight size={15} /></Link>
          <button type="button" onClick={onRestart} className="inline-flex min-h-11 items-center gap-1 text-muted hover:text-primary"><RotateCcw size={15} /> Neu starten</button>
        </div>
      </div>
    </div>
  );
}
