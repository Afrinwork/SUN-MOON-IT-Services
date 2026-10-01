import Link from "next/link";
import { ArrowRight, BookOpen, CalendarClock, CheckCircle2, ClipboardList, Euro, Lightbulb, ListOrdered, MessageCircle, RotateCcw, Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { getTopic } from "@/content/blog/topics";
import { pricePackages } from "@/content/pricing/packages";
import type { Selection } from "@/features/solution-finder/conversation";
import { IconList, ResultCard } from "@/features/solution-finder/components/ResultCard";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function priceText(packageId: string) {
  const pkg = pricePackages.find((p) => p.id === packageId);
  if (!pkg || pkg.priceFrom === null) return { main: "Festpreis nach Erstgespräch", note: "Sie erhalten vorab ein schriftliches Angebot – ohne versteckte Kosten." };
  return { main: `ab ${euro.format(pkg.priceFrom)} ${pkg.unit}`, note: `Richtwert für „${pkg.name}“. Den genauen Preis erhalten Sie schriftlich vorab.` };
}

/** Mobil: Karten untereinander. Desktop: 2-spaltiges Raster, Empfehlung über volle Breite. */
export function SolutionResult({ selection, onRestart }: { selection: Selection; onRestart: () => void }) {
  const { solution, followUp, team, timing } = selection;
  const price = priceText(followUp.packageId ?? solution.packageId);
  const topic = getTopic(solution.blogTopic);
  const message = encodeURIComponent(`Hallo Sun & Moon, ich interessiere mich für: ${solution.label} (${followUp.label}). Team: ${team.label}. Zeitrahmen: ${timing.label}.`);

  return (
    <div className="space-y-3 md:ml-12">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <ResultCard icon={<Star size={15} />} title="Unsere Empfehlung für Sie" dark wide>
          <p className="text-lg font-bold leading-snug md:text-xl">{followUp.recommendation}</p>
          <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-white/80">{[followUp.label, team.label, timing.label].map((tag) => <span key={tag} className="rounded-full border border-white/20 px-2.5 py-1">{tag}</span>)}</p>
        </ResultCard>
        <ResultCard icon={<CheckCircle2 size={15} />} title="Das lösen wir für Sie"><IconList items={solution.solves} icon={<CheckCircle2 size={16} />} /></ResultCard>
        <ResultCard icon={<ListOrdered size={15} />} title="So läuft es ab">
          <ol className="space-y-2">{solution.steps.map((s, i) => <li key={s} className="flex items-center gap-3 text-sm text-foreground"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>{s}</li>)}</ol>
        </ResultCard>
        <ResultCard icon={<Euro size={15} />} title="Ungefährer Preis">
          <p className="text-2xl font-black text-primary">{price.main}</p>
          <p className="mt-2 text-sm text-muted">{price.note}</p>
        </ResultCard>
        <ResultCard icon={<CalendarClock size={15} />} title="Wann es losgehen kann">
          <p className="text-sm font-semibold text-foreground">{timing.startText}</p>
          <p className="mt-2 text-sm text-muted">{solution.duration}</p>
        </ResultCard>
        <ResultCard icon={<ClipboardList size={15} />} title="Das hilft uns für den Start"><IconList items={solution.prepare} icon={<ClipboardList size={16} />} /></ResultCard>
        <ResultCard icon={<Lightbulb size={15} />} title="Gut zu wissen"><IconList items={solution.tips} icon={<Lightbulb size={16} />} /></ResultCard>
      </div>
      <Link href={`/blog/thema/${topic.slug}`} className="finder-pop flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm font-bold text-primary transition hover:border-accent">
        <span className="flex items-center gap-2"><BookOpen size={17} className="text-accent-strong" /> Weiterlesen im Ratgeber: {topic.title}</span><ArrowRight size={16} />
      </Link>
      <div className="finder-pop flex flex-col gap-3 rounded-2xl bg-surface p-4 sm:flex-row sm:items-center sm:justify-between md:rounded-3xl md:p-5">
        <a href={`${siteConfig.whatsappUrl}?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-primary-deep">
          <MessageCircle size={18} /> Übersicht per WhatsApp senden
        </a>
        <div className="flex items-center justify-between gap-4 text-sm font-bold sm:justify-end">
          <Link href={solution.serviceHref} className="inline-flex min-h-11 items-center gap-1 text-accent-strong">Details ansehen <ArrowRight size={15} /></Link>
          <button type="button" onClick={onRestart} className="inline-flex min-h-11 items-center gap-1 text-muted hover:text-primary"><RotateCcw size={15} /> Neu starten</button>
        </div>
      </div>
    </div>
  );
}
