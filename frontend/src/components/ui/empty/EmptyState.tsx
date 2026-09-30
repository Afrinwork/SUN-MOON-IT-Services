import { Hourglass } from "lucide-react";

export function EmptyState({ text = "Inhalte folgen in Kürze." }: { text?: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-dashed border-border bg-surface-accent/60 p-6 text-muted">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-accent-strong"><Hourglass size={20} /></span>
      <p className="leading-7">{text}</p>
    </div>
  );
}
