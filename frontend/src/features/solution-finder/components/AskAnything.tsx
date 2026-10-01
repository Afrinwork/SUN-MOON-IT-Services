"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

/** Eigene Frage eintippen – wird nur lokal durchsucht, nichts wird gesendet oder gespeichert. */
export function AskAnything({ onAsk }: { onAsk: (question: string) => void }) {
  const [value, setValue] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const question = value.trim();
    if (question.length < 3) return;
    onAsk(question);
    setValue("");
  };
  return (
    <form onSubmit={submit} className="finder-pop flex items-center gap-2 rounded-full border border-border bg-white p-1.5 pl-4 shadow-sm focus-within:border-accent md:ml-12" role="search">
      <label htmlFor="finder-frage" className="sr-only">Eigene Frage stellen</label>
      <input id="finder-frage" value={value} onChange={(e) => setValue(e.target.value)} maxLength={140} autoComplete="off" placeholder="Eigene Frage stellen, z. B. „Was kostet eine App?“" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted" />
      <button type="submit" aria-label="Frage senden" className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-primary-deep transition hover:bg-accent-strong hover:text-white"><Send size={17} /></button>
    </form>
  );
}
