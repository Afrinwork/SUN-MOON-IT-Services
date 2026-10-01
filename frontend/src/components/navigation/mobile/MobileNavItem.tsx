"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import type { NavItem } from "@/config/navigation.config";

export function MobileNavItem({ item }: { item: NavItem }) {
  const submenuRef = useRef<HTMLDetailsElement>(null);

  if (!item.children) {
    return <Link href={item.href} className="block rounded-xl px-4 py-3 font-semibold text-primary hover:bg-surface">{item.label}</Link>;
  }

  const handleToggle = () => {
    const submenu = submenuRef.current;
    if (!submenu?.open) return;

    submenu.parentElement?.querySelectorAll<HTMLDetailsElement>(":scope > details[open]").forEach((otherSubmenu) => {
      if (otherSubmenu !== submenu) otherSubmenu.open = false;
    });

    requestAnimationFrame(() => {
      submenu.querySelector("summary")?.scrollIntoView({ block: "nearest" });
    });
  };

  return (
    <details ref={submenuRef} className="group/sub" onToggle={handleToggle}>
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
