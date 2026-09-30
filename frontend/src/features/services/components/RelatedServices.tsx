import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/features/services/data/services";

/** Mobil: kompakte Chips zum Wischen. Desktop: Kacheln im Raster. */
export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  return (
    <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
      {services.filter((s) => s.slug !== currentSlug).map(({ slug, title, icon: Icon }) => (
        <li key={slug} className="shrink-0">
          <Link href={`/leistungen/${slug}`} className="group flex h-full min-h-12 items-center gap-3 rounded-full border border-border bg-white py-2 pl-2 pr-4 font-bold text-primary transition hover:border-accent/50 hover:shadow-lg sm:rounded-2xl sm:p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-accent sm:size-10 sm:rounded-xl"><Icon size={17} /></span>
            <span className="flex-1 whitespace-nowrap text-sm sm:whitespace-normal">{title}</span>
            <ArrowRight size={16} className="hidden text-accent-strong transition group-hover:translate-x-0.5 sm:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
