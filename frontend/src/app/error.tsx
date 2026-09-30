"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="grid min-h-[60vh] place-items-center px-5 text-center"><div><h1 className="text-3xl font-bold text-primary">Etwas ist schiefgelaufen.</h1><button onClick={reset} className="mt-6 rounded-full bg-accent px-6 py-3 font-bold text-primary">Erneut versuchen</button></div></main>;
}
