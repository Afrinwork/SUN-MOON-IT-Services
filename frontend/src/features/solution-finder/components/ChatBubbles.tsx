import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

/** Nachricht des Assistenten (links, mit Avatar). */
export function AssistantBubble({ children }: { children: ReactNode }) {
  return (
    <div className="finder-pop flex items-start gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-accent shadow-lg shadow-primary/20"><Sparkles size={17} /></span>
      <div className="max-w-xl rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-foreground shadow-sm ring-1 ring-border">{children}</div>
    </div>
  );
}

/** Antwort des Besuchers (rechts). */
export function UserBubble({ children }: { children: ReactNode }) {
  return (
    <div className="finder-pop flex justify-end">
      <div className="max-w-xs rounded-2xl rounded-tr-md bg-accent px-4 py-3 font-semibold text-primary-deep">{children}</div>
    </div>
  );
}

/** „Assistent analysiert …“ mit animierten Punkten. */
export function TypingIndicator() {
  return (
    <div className="finder-pop flex items-center gap-3" role="status" aria-live="polite">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-accent"><Sparkles size={17} /></span>
      <div className="flex items-center gap-2 rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-muted ring-1 ring-border">
        <span className="finder-dots flex gap-1" aria-hidden="true"><i /><i /><i /></span> Assistent analysiert …
      </div>
    </div>
  );
}
