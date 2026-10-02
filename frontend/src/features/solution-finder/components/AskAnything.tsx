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
    <form onSubmit={submit} className="finder-composer flex items-center gap-2 rounded-2xl border border-border bg-white p-1.5 pl-4 shadow-lg shadow-primary/8 transition focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10" role="search">
      <label htmlFor="finder-frage" className="sr-only">Eigene Frage stellen</label>
      <input id="finder-frage" value={value} onChange={(e) => setValue(e.target.value)} maxLength={140} autoComplete="off" placeholder="Nachricht schreiben …" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted" />
      <button type="submit" aria-label="Frage senden" className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary-deep transition active:scale-95 hover:bg-accent-strong hover:text-white"><Send size={17} /></button>
    </form>
  );
}
