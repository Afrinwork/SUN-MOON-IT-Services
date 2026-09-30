import { ChevronDown } from "lucide-react";
import { EmptyState } from "@/components/ui/empty/EmptyState";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return <EmptyState text="Häufige Fragen werden hier in Kürze beantwortet." />;
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-border bg-white p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
            {item.question}
            <ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
