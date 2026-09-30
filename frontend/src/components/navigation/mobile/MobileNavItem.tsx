import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/config/navigation.config";

export function MobileNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return <Link href={item.href} className="block rounded-xl px-4 py-3 font-semibold text-primary hover:bg-surface">{item.label}</Link>;
  }
  return (
    <details className="group/sub">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 font-semibold text-primary hover:bg-surface">
        {item.label}
        <ChevronDown size={18} className="transition group-open/sub:rotate-180" />
      </summary>
      <ul className="mb-2 ml-4 border-l border-border pl-2">
        <li><Link href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent-strong hover:bg-surface">Übersicht</Link></li>
        {item.children.map((child) => (
          <li key={child.href + child.label}><Link href={child.href} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-primary">{child.label}</Link></li>
        ))}
      </ul>
    </details>
  );
}
