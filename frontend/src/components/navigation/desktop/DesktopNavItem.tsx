import Link from "next/link";
import { DesktopDropdown } from "@/components/navigation/desktop/DesktopDropdown";
import type { NavItem } from "@/config/navigation.config";

const linkClass = "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[0.8rem] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white group-hover:bg-white/10 group-hover:text-white 2xl:px-3.5 2xl:text-sm";

/** Menüpunkt in der Glas-Leiste: Icon und Text nebeneinander, Untermenü beim Überfahren. */
export function DesktopNavItem({ item, align = "center" }: { item: NavItem; align?: "center" | "right" }) {
  const Icon = item.icon;
  const content = <>{Icon && <Icon size={16} aria-hidden="true" />}{item.label}</>;
  if (!item.children) {
    return <li className="group"><Link href={item.href} className={linkClass}>{content}</Link></li>;
  }
  return (
    <li className="group relative">
      <Link href={item.href} className={linkClass} aria-haspopup="true">{content}</Link>
      <DesktopDropdown items={item.children} align={align} />
    </li>
  );
}
