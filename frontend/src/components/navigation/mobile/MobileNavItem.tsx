"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import type { NavItem } from "@/config/navigation.config";

export function MobileNavItem({ item, index }: { item: NavItem; index: number }) {
  const pathname = usePathname();
  const submenuId = useId();
  const [expandedAtPath, setExpandedAtPath] = useState<string | null>(null);
  const active = pathname === item.href || item.children?.some((child) => pathname === child.href) === true;
  const expanded = expandedAtPath === pathname;

  if (!item.children) {
    return (
      <Link href={item.href} aria-current={active ? "page" : undefined} className={`mobile-menu-link flex min-h-13 items-center gap-3 rounded-2xl px-3.5 py-3 font-bold transition active:scale-[0.99] ${active ? "bg-surface-accent text-accent-strong" : "text-primary hover:bg-surface"}`}>
        <span className={`grid size-7 shrink-0 place-items-center rounded-lg text-[0.65rem] font-black ${active ? "bg-accent text-primary-deep" : "bg-surface text-muted"}`}>{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1">{item.label}</span>
        <ArrowUpRight size={16} className={active ? "text-accent-strong" : "text-muted"} />
      </Link>
    );
  }

  return (
    <div className={`rounded-2xl transition ${expanded ? "bg-surface" : ""}`}>
      <button type="button" aria-expanded={expanded} aria-controls={submenuId} onClick={() => setExpandedAtPath(expanded ? null : pathname)} className={`flex min-h-13 w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left font-bold transition active:scale-[0.99] ${active ? "text-accent-strong" : "text-primary"}`}>
        <span className={`grid size-7 shrink-0 place-items-center rounded-lg text-[0.65rem] font-black ${active ? "bg-accent text-primary-deep" : "bg-white text-muted ring-1 ring-border"}`}>{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1">{item.label}</span>
        <ChevronDown size={17} className={`text-muted transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div id={submenuId} className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="grid gap-1 px-3 pb-3 pl-[3.65rem]">
            <li><Link href={item.href} className="block rounded-xl py-2 text-sm font-black text-accent-strong">Alle ansehen</Link></li>
            {item.children.map((child) => (
              <li key={child.href + child.label}><Link href={child.href} aria-current={pathname === child.href ? "page" : undefined} className={`block rounded-xl py-2 text-sm leading-5 transition ${pathname === child.href ? "font-bold text-accent-strong" : "font-medium text-muted hover:text-primary"}`}>{child.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
