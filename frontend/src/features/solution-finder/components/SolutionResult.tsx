import Link from "next/link";
import { ArrowRight, BookOpen, CalendarClock, CheckCircle2, ClipboardList, Euro, Lightbulb, ListOrdered, MessageCircle, Puzzle, Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { getTopic } from "@/content/blog/topics";
import { timings } from "@/content/solution-finder/timings";
import type { Selection } from "@/features/solution-finder/conversation";
import { PriceOverview } from "@/features/solution-finder/components/PriceOverview";
import { RelatedSuggestions } from "@/features/solution-finder/components/RelatedSuggestions";
import { IconList, ResultCard } from "@/features/solution-finder/components/ResultCard";

/** Mobil: Karten untereinander. Desktop: 2-spaltiges Raster, Empfehlung und Preise über volle Breite. */
export function SolutionResult({ selection }: { selection: Selection }) {
  const { solution, main, detail, budget, care, timing, summary } = selection;
  const topic = getTopic(solution.blogTopic);
  const startText = (timing ?? timings[timings.length - 1]).startText;
  const tips = [...(detail?.extra ? [detail.extra] : []), ...solution.tips];
  const message = encodeURIComponent(`Hallo Sun & Moon, ich interessiere mich für: ${solution.label}. ${summary.length ? `Meine Angaben: ${summary.join(", ")}.` : ""}`);

  return (
    <div className="space-y-3 md:ml-12">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <ResultCard icon={<Star size={15} />} title="Unsere Empfehlung für Sie" dark wide>
          <p className="text-lg font-bold leading-snug md:text-xl">{main?.recommendation ?? `Ein kurzes, unverbindliches Gespräch – so finden wir die beste Variante für „${solution.label}“.`}</p>
          {summary.length > 0 && <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-white/80">{summary.map((tag) => <span key={tag} className="rounded-full border border-white/20 px-2.5 py-1">{tag}</span>)}</p>}
        </ResultCard>
        <ResultCard icon={<Euro size={15} />} title="Preisübersicht" wide>
          <PriceOverview recommendedId={main?.packageId ?? solution.packageId} optionIds={solution.priceOptions} withCare={care?.withCare ?? false} budget={budget} />
        </ResultCard>
        <ResultCard icon={<CheckCircle2 size={15} />} title="Das lösen wir für Sie"><IconList items={solution.solves} icon={<CheckCircle2 size={16} />} /></ResultCard>
        <ResultCard icon={<ListOrdered size={15} />} title="So läuft es ab">
          <ol className="space-y-2">{solution.steps.map((s, i) => <li key={s} className="flex items-center gap-3 text-sm text-foreground"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>{s}</li>)}</ol>
        </ResultCard>
        <ResultCard icon={<CalendarClock size={15} />} title="Wann es losgehen kann">
          <p className="text-sm font-semibold text-foreground">{startText}</p>
          <p className="mt-2 text-sm text-muted">{solution.duration}</p>
        </ResultCard>
        <ResultCard icon={<ClipboardList size={15} />} title="Das hilft uns für den Start"><IconList items={solution.prepare} icon={<ClipboardList size={16} />} /></ResultCard>
        <ResultCard icon={<Lightbulb size={15} />} title="Darauf achten wir" wide><IconList items={tips} icon={<Lightbulb size={16} />} /></ResultCard>
        <ResultCard icon={<Puzzle size={15} />} title="Passt gut dazu" wide><RelatedSuggestions slugs={solution.related} /></ResultCard>
      </div>
      <Link href={`/blog/thema/${topic.slug}`} className="finder-pop flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-sm font-bold text-primary transition hover:border-accent">
        <span className="flex items-center gap-2"><BookOpen size={17} className="text-accent-strong" /> Weiterlesen im Ratgeber: {topic.title}</span><ArrowRight size={16} />
      </Link>
      <div className="finder-pop flex flex-col gap-3 rounded-2xl bg-surface p-4 sm:flex-row sm:items-center sm:justify-between md:rounded-3xl md:p-5">
        <a href={`${siteConfig.whatsappUrl}?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-primary-deep">
          <MessageCircle size={18} /> Übersicht per WhatsApp senden
        </a>
        <Link href={solution.serviceHref} className="inline-flex min-h-11 items-center justify-center gap-1 text-sm font-bold text-accent-strong">Details zur Leistung <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
