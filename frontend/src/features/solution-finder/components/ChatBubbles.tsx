import { Bot, CheckCheck } from "lucide-react";
import type { ReactNode } from "react";

/** Nachricht des Assistenten (links, mit Avatar). */
export function AssistantBubble({ children }: { children: ReactNode }) {
  return (
    <div className="finder-message finder-pop flex items-end gap-2.5">
      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary text-accent shadow-lg shadow-primary/18"><Bot size={16} /></span>
      <div className="max-w-[min(88%,38rem)] rounded-[1.35rem] rounded-bl-md bg-white px-4 py-3 text-[0.92rem] leading-6 text-foreground shadow-sm ring-1 ring-border/90 md:text-[0.95rem]">{children}</div>
    </div>
  );
}

/** Antwort des Besuchers (rechts). */
export function UserBubble({ children }: { children: ReactNode }) {
  return (
    <div className="finder-message finder-pop flex items-end justify-end gap-1.5">
      <CheckCheck size={14} className="mb-1 shrink-0 text-accent-strong" aria-label="Gelesen" />
      <div className="max-w-[82%] rounded-[1.35rem] rounded-br-md bg-primary px-4 py-3 text-[0.92rem] font-semibold leading-6 text-white shadow-lg shadow-primary/12">{children}</div>
    </div>
  );
}

/** „Assistent analysiert …“ mit animierten Punkten. */
export function TypingIndicator({ label = "schreibt …" }: { label?: string }) {
  return (
    <div className="finder-pop flex items-center gap-3" role="status" aria-live="polite">
      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary text-accent"><Bot size={16} /></span>
      <div className="flex items-center gap-2 rounded-[1.35rem] rounded-bl-md bg-white px-4 py-3 text-sm text-muted shadow-sm ring-1 ring-border">
        <span className="finder-dots flex gap-1" aria-hidden="true"><i /><i /><i /></span> {label}
      </div>
    </div>
  );
}
