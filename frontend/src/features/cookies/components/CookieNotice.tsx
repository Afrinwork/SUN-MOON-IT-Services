"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useSyncExternalStore } from "react";
import { acknowledge, isAcknowledged, isAcknowledgedOnServer, subscribe } from "@/features/cookies/cookieNoticeStore";

export function CookieNotice() {
  const acknowledged = useSyncExternalStore(subscribe, isAcknowledged, isAcknowledgedOnServer);
  if (acknowledged) return null;

  return (
    <div role="dialog" aria-labelledby="cookie-hinweis-titel" aria-live="polite" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-3xl border border-border bg-white p-5 shadow-2xl shadow-primary/20 md:left-6 md:right-auto md:mx-0 md:p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-accent"><Cookie size={21} /></span>
        <div>
          <h2 id="cookie-hinweis-titel" className="font-bold text-primary">Keine Cookies, kein Tracking</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Diese Website setzt keine Cookies und nutzt keine Analyse- oder Werbedienste. Es werden nur technisch notwendige Daten verarbeitet, damit die Seite funktioniert.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/cookies" className="font-semibold text-accent-strong underline-offset-2 hover:underline">Cookie-Hinweis</Link>
            <span className="mx-2 text-border">|</span>
            <Link href="/datenschutz" className="font-semibold text-accent-strong underline-offset-2 hover:underline">Datenschutz</Link>
          </p>
        </div>
      </div>
      <button type="button" onClick={acknowledge} className="mt-5 min-h-11 w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-deep md:w-auto">
        Verstanden
      </button>
    </div>
  );
}
