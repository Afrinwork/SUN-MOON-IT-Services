import { MessageCircleQuestion } from "lucide-react";
import type { FaqItem } from "@/components/ui/faq/FaqList";

type Props = { items: FaqItem[]; askedQuestions: string[]; onAsk: (item: FaqItem) => void };

/** Antippbare Folgefragen – mobil wischbar, Desktop umbrechend. */
export function QuickQuestions({ items, askedQuestions, onAsk }: Props) {
  const open = items.filter((q) => !askedQuestions.includes(q.question)).slice(0, 5);
  if (open.length === 0) return null;
  return (
    <div className="finder-pop mb-3">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold text-primary"><MessageCircleQuestion size={16} className="text-accent-strong" /> Häufige Folgefragen</p>
      <ul className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {open.map((item) => (
          <li key={item.question} className="shrink-0">
            <button type="button" onClick={() => onAsk(item)} className="min-h-10 rounded-full border border-accent/35 bg-surface-accent px-4 py-2 text-xs font-bold text-primary transition active:scale-[0.98] hover:border-accent hover:bg-accent/10 md:text-sm">
              {item.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
