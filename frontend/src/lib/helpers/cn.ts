/** Verbindet CSS-Klassen und lässt leere Werte weg. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
