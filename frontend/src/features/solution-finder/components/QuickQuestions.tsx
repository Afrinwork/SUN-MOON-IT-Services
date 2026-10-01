import { MessageCircleQuestion } from "lucide-react";
import type { FaqItem } from "@/components/ui/faq/FaqList";

type Props = { items: FaqItem[]; askedQuestions: string[]; onAsk: (item: FaqItem) => void };

/** Antippbare Folgefragen – mobil wischbar, Desktop umbrechend. */
export function QuickQuestions({ items, askedQuestions, onAsk }: Props) {
  const open = items.filter((q) => !askedQuestions.includes(q.question)).slice(0, 5);
  if (open.length === 0) return null;
  return (
    <div className="finder-pop md:ml-12">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-primary"><MessageCircleQuestion size={17} className="text-accent-strong" /> Noch Fragen? Antippen oder unten selbst fragen:</p>
      <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {open.map((item) => (
          <li key={item.question} className="shrink-0">
            <button type="button" onClick={() => onAsk(item)} className="min-h-11 rounded-full border border-accent/40 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-accent hover:bg-accent/10">
              {item.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
