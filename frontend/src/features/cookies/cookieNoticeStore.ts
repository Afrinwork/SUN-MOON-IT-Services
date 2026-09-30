/**
 * Merkt sich, ob der Cookie-Hinweis bestätigt wurde (localStorage, technisch notwendig).
 * Ohne Speicherzugriff (z. B. privater Modus) erscheint der Hinweis einfach erneut.
 */
export const COOKIE_NOTICE_KEY = "sm-cookie-hinweis";
const CHANGE_EVENT = "sm-cookie-hinweis-change";

export function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function isAcknowledged(): boolean {
  try {
    return localStorage.getItem(COOKIE_NOTICE_KEY) === "bestaetigt";
  } catch {
    return false;
  }
}

/** Auf dem Server gilt der Hinweis als bestätigt, damit er nicht kurz aufblitzt. */
export const isAcknowledgedOnServer = () => true;

function update(action: (storage: Storage) => void) {
  try {
    action(localStorage);
  } catch {
    // Speicher nicht verfügbar – Hinweis bleibt dann bis zum nächsten Laden sichtbar.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export const acknowledge = () => update((s) => s.setItem(COOKIE_NOTICE_KEY, "bestaetigt"));
export const reopen = () => update((s) => s.removeItem(COOKIE_NOTICE_KEY));
