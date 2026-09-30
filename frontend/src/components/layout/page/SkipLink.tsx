/** Tastatur-Nutzer:innen springen direkt zum Inhalt. */
export function SkipLink({ targetId = "inhalt" }: { targetId?: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-lg"
    >
      Zum Inhalt springen
    </a>
  );
}
