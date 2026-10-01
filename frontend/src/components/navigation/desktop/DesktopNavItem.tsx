import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { DesktopDropdown } from "@/components/navigation/desktop/DesktopDropdown";
import type { NavItem } from "@/config/navigation.config";

const linkClass = "inline-flex items-center gap-1 whitespace-nowrap py-2 text-sm font-semibold text-muted transition hover:text-accent-strong group-hover:text-accent-strong";

export function DesktopNavItem({ item, align = "center" }: { item: NavItem; align?: "center" | "right" }) {
  if (!item.children) {
    return <li className="group"><Link href={item.href} className={linkClass}>{item.label}</Link></li>;
  }
  return (
    <li className="group relative">
      <Link href={item.href} className={linkClass} aria-haspopup="true">
        {item.label}
        <ChevronDown size={15} className="transition group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>
      <DesktopDropdown items={item.children} align={align} />
    </li>
  );
}
