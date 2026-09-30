import { ChevronDown, ListOrdered } from "lucide-react";
import { headingId } from "@/features/blog/headingId";
import type { BlogSection } from "@/features/blog/types/blog.types";

function TocLinks({ sections }: { sections: BlogSection[] }) {
  return (
    <ol className="space-y-1">
      {sections.map((s, i) => (
        <li key={s.heading}>
          <a href={`#${headingId(s.heading)}`} className="flex gap-3 rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-primary">
            <span className="font-bold text-accent-strong">{i + 1}</span>{s.heading}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Mobil: aufklappbar oben im Artikel. */
export function BlogTocMobile({ sections }: { sections: BlogSection[] }) {
  return (
    <details className="group mb-8 rounded-2xl border border-border bg-surface md:hidden">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-bold text-primary">
        <span className="flex items-center gap-2"><ListOrdered size={18} className="text-accent-strong" /> Inhalt</span>
        <ChevronDown size={18} className="transition group-open:rotate-180" />
      </summary>
      <div className="px-1 pb-3"><TocLinks sections={sections} /></div>
    </details>
  );
}

/** Desktop: feste Seitenleiste. */
export function BlogTocDesktop({ sections }: { sections: BlogSection[] }) {
  return (
    <nav aria-label="Inhalt" className="sticky top-28 hidden rounded-3xl border border-border bg-white p-4 md:block">
      <p className="mb-2 px-3 text-xs font-bold uppercase tracking-widest text-accent-strong">Inhalt</p>
      <TocLinks sections={sections} />
    </nav>
  );
}
