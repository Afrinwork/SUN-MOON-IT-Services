import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/features/services/data/services";

/** „Passt gut dazu“ – verwandte Leistungen. Mobil wischbar, Desktop nebeneinander. */
export function RelatedSuggestions({ slugs }: { slugs: string[] }) {
  const items = slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s) => s !== undefined);
  if (items.length === 0) return null;
  return (
    <ul className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
      {items.map(({ slug, title, short, icon: Icon }) => (
        <li key={slug} className="w-[78%] shrink-0 snap-start md:w-auto">
          <Link href={`/leistungen/${slug}`} className="group flex h-full gap-3 rounded-2xl border border-border bg-surface p-4 transition hover:border-accent">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-accent"><Icon size={18} /></span>
            <span className="min-w-0">
              <span className="flex items-center gap-1 font-bold text-primary">{title} <ArrowUpRight size={15} className="text-accent-strong" /></span>
              <span className="mt-1 block text-sm leading-5 text-muted">{short}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
