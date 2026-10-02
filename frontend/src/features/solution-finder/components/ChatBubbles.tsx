import { Bot, CheckCheck } from "lucide-react";
import type { ReactNode } from "react";

/** Nachricht des Assistenten (links, mit Avatar). */
export function AssistantBubble({ children, current = false }: { children: ReactNode; current?: boolean }) {
  return (
    <div className={`finder-message finder-pop flex items-end gap-2.5 ${current ? "finder-message-current" : ""}`}>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-accent shadow-lg shadow-primary/18"><Bot size={17} /></span>
      <div className="min-w-0 max-w-[min(90%,40rem)]">
        <span className="mb-1.5 flex items-center gap-2 px-1 text-[0.65rem] font-black uppercase tracking-[0.1em] text-muted">
          Sun &amp; Moon {current && <i className="not-italic text-accent-strong">· Aktuelle Frage</i>}
        </span>
        <div className="finder-bubble-assistant rounded-[1.35rem] rounded-bl-md bg-white px-4 py-3.5 text-[0.95rem] leading-6 text-foreground shadow-sm ring-1 ring-border/90 md:px-5 md:text-base md:leading-7">{children}</div>
      </div>
    </div>
  );
}

/** Antwort des Besuchers (rechts). */
export function UserBubble({ children }: { children: ReactNode }) {
  return (
    <div className="finder-message finder-pop flex items-end justify-end gap-1.5">
      <CheckCheck size={14} className="mb-1 shrink-0 text-accent-strong" aria-label="Gelesen" />
      <div className="min-w-0 max-w-[86%] text-right">
        <span className="mb-1.5 block px-1 text-[0.65rem] font-black uppercase tracking-[0.1em] text-muted">Sie</span>
        <div className="rounded-[1.35rem] rounded-br-md bg-primary px-4 py-3 text-left text-[0.95rem] font-semibold leading-6 text-white shadow-lg shadow-primary/12">{children}</div>
      </div>
    </div>
  );
}

/** „Assistent analysiert …“ mit animierten Punkten. */
export function TypingIndicator({ label = "schreibt …" }: { label?: string }) {
  return (
    <div className="finder-pop flex items-end gap-2.5" role="status" aria-live="polite">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-accent"><Bot size={17} /></span>
      <div>
        <span className="mb-1.5 block px-1 text-[0.65rem] font-black uppercase tracking-[0.1em] text-muted">Sun &amp; Moon</span>
        <div className="flex items-center gap-2 rounded-[1.35rem] rounded-bl-md bg-white px-4 py-3 text-sm font-medium text-muted shadow-sm ring-1 ring-border">
          <span className="finder-dots flex gap-1" aria-hidden="true"><i /><i /><i /></span> {label}
        </div>
      </div>
    </div>
  );
}
