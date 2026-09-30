import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/features/services/data/services";

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {services.filter((s) => s.slug !== currentSlug).map(({ slug, title, icon: Icon }) => (
        <li key={slug}>
          <Link href={`/leistungen/${slug}`} className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-white p-4 font-bold text-primary transition hover:border-accent/50 hover:shadow-lg">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-accent"><Icon size={19} /></span>
            <span className="flex-1 text-sm">{title}</span>
            <ArrowRight size={16} className="text-accent-strong transition group-hover:translate-x-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
