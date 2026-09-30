"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type MouseEvent } from "react";
import { MobileNavItem } from "@/components/navigation/mobile/MobileNavItem";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation } from "@/config/navigation.config";

export function MobileNavigation() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && menu.contains(activeElement)) activeElement.blur();
    menu.open = false;
    menu.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((submenu) => {
      submenu.open = false;
    });
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  };

  return (
    <details ref={menuRef} className="group relative lg:hidden" onClick={handleNavigation} onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      closeMenu();
      menuRef.current?.querySelector<HTMLElement>("summary")?.focus();
    }}>
      <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-border text-primary">
        <Menu size={21} /><span className="sr-only">Menü öffnen</span>
      </summary>
      <nav className="absolute right-0 top-14 max-h-[calc(100dvh-6rem)] w-[min(18rem,calc(100vw-2.5rem))] overscroll-contain overflow-y-auto rounded-2xl border border-border bg-white p-3 shadow-2xl" aria-label="Mobile Navigation">
        {mainNavigation.map((item) => <MobileNavItem key={item.href} item={item} />)}
        <ButtonLink href="/kontakt" className="mt-2 w-full">Projekt anfragen</ButtonLink>
      </nav>
    </details>
  );
}
