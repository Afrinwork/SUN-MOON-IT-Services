"use client";

import { reopen } from "@/features/cookies/cookieNoticeStore";

/** Öffnet den Cookie-Hinweis jederzeit erneut. */
export function CookieSettingsButton() {
  return <button type="button" onClick={reopen} className="transition hover:text-white">Cookie-Einstellungen</button>;
}
