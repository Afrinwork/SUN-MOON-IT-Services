import { Info, Wallet } from "lucide-react";
import type { Estimate } from "@/features/solution-finder/estimate";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const range = (from: number, to: number) => `${euro.format(from)} – ${euro.format(to)}`;

const budgetMessages = {
  passt: "Ihr Budget reicht für alles, was Sie ausgewählt haben.",
  knapp: "Ihr Budget reicht für den unteren Bereich. Wir schauen gemeinsam, was zuerst kommt.",
  darunter: "Ihr Budget liegt unter der Schätzung. Unser Vorschlag: mit dem Wichtigsten starten, den Rest später in Etappen.",
};

/** Ungefährer Gesamtpreis als Spanne, darunter jeder Posten einzeln. */
export function PriceEstimate({ estimate }: { estimate: Estimate }) {
  const { items, from, to, monthly, hourly, openWishes, firstYear, budgetFit } = estimate;
  return (
    <div className="space-y-4">
      {budgetFit && (
        <p className={`flex items-start gap-2 rounded-xl p-3 text-sm font-semibold ${budgetFit === "passt" ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
          <Wallet size={16} className="mt-0.5 shrink-0" />
          {budgetMessages[budgetFit]}
        </p>
      )}
      {items.length > 0 ? (
        <div className="rounded-2xl bg-surface p-4 md:p-5">
          <p className="text-sm font-semibold text-muted">Einmalig, ungefähr</p>
          <p className="mt-1 text-2xl font-black tracking-[-0.02em] text-primary min-[380px]:text-3xl md:text-4xl">{range(from, to)}</p>
          {(monthly || hourly) && (
            <p className="mt-2 text-sm font-semibold text-foreground">
              {monthly && <>dazu ab {euro.format(monthly)} pro Monat für Betreuung</>}
              {monthly && hourly && <br />}
              {hourly && <>IT-Hilfe nach Aufwand: ab {euro.format(hourly)} pro Stunde</>}
            </p>
          )}
          {firstYear && <p className="mt-3 border-t border-border pt-3 text-sm text-muted">Im ersten Jahr mit Betreuung: <strong className="text-primary">{range(firstYear.from, firstYear.to)}</strong></p>}
        </div>
      ) : (
        hourly && <p className="rounded-2xl bg-surface p-4 text-xl font-black text-primary">ab {euro.format(hourly)} pro Stunde, nach Aufwand</p>
      )}

      {items.length > 0 && (
        <ul className="divide-y divide-border text-sm">
          {items.map((item) => (
            <li key={item.label} className="flex items-start justify-between gap-3 py-2.5">
              <span className="min-w-0"><strong className="block text-primary">{item.label}</strong>{item.note && <span className="text-xs text-muted">{item.note}</span>}</span>
              <span className="shrink-0 font-bold text-primary">{range(item.from, item.to)}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="flex items-start gap-2 rounded-xl border border-border p-3 text-xs leading-5 text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent-strong" />
        <span>
          Das ist eine grobe Schätzung, kein Angebot. Der Preis hängt davon ab, wie viel schon da ist (Texte, Bilder, Daten) und wie umfangreich die einzelnen Funktionen werden.
          {openWishes && " Einen Teil Ihrer Wünsche konnten wir nicht automatisch einordnen. Den schätzen wir im Gespräch."}
          {" "}Wer in Etappen startet, zahlt am Anfang oft nur den unteren Wert.
        </span>
      </p>
    </div>
  );
}
