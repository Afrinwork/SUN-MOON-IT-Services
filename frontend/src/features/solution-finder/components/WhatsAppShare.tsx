"use client";

import { Check, Copy, Eye, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";

/** Senden per WhatsApp (vorausgefüllt), Vorschau des Textes und Kopieren – z. B. für E-Mail. */
export function WhatsAppShare({ message }: { message: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <a href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-primary-deep">
          <MessageCircle size={18} /> Übersicht per WhatsApp senden
        </a>
        <button type="button" onClick={copy} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-bold text-primary hover:border-accent">
          {copied ? <><Check size={16} className="text-accent-strong" /> Kopiert</> : <><Copy size={16} /> Text kopieren</>}
        </button>
      </div>
      <details className="group rounded-2xl border border-border bg-white">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 text-sm font-bold text-muted hover:text-primary">
          <Eye size={16} /> Vorschau: Das steht in der Nachricht
        </summary>
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-words border-t border-border px-4 py-3 font-sans text-sm leading-6 text-foreground">{message}</pre>
      </details>
      <p className="text-xs leading-5 text-muted">WhatsApp öffnet sich mit dem fertigen Text. Gesendet wird erst, wenn Sie dort auf Senden tippen.</p>
    </div>
  );
}
