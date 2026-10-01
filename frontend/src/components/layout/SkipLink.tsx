/** Unsichtbar, bis man mit Tab navigiert – springt direkt zum Seiteninhalt (Barrierefreiheit). */
export function SkipLink() {
  return (
    <a href="#inhalt" className="sr-only rounded-full bg-accent px-5 py-3 font-bold text-primary-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]">
      Zum Inhalt springen
    </a>
  );
}
