import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="mb-6 text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link href="/" className="hover:text-white">Start</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight size={14} aria-hidden="true" />
            {item.href ? <Link href={item.href} className="hover:text-white">{item.label}</Link> : <span aria-current="page" className="text-white">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
