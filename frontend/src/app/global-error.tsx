"use client";

/** Letzte Rettung, falls selbst das Layout abstürzt – ohne externe Abhängigkeiten. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#071d40", color: "#fff", display: "grid", minHeight: "100vh", placeItems: "center", textAlign: "center", padding: "1.5rem" }}>
        <main>
          <h1 style={{ fontSize: "2rem", margin: 0 }}>Etwas ist schiefgelaufen.</h1>
          <p style={{ opacity: 0.75, marginTop: "1rem" }}>Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.</p>
          <button type="button" onClick={reset} style={{ marginTop: "1.5rem", padding: "0.85rem 1.75rem", borderRadius: 999, border: 0, background: "#00a3ff", color: "#071d40", fontWeight: 700, cursor: "pointer" }}>
            Erneut versuchen
          </button>
        </main>
      </body>
    </html>
  );
}
