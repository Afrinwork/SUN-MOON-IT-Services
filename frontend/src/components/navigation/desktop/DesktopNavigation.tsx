"use client";

import { useRef, useState, type MouseEvent } from "react";
import { DesktopNavItem } from "@/components/navigation/desktop/DesktopNavItem";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation } from "@/config/navigation.config";

export function DesktopNavigation() {
  const navigationRef = useRef<HTMLElement>(null);
  const [forceClosed, setForceClosed] = useState(false);

  const closeNavigation = () => {
    setForceClosed(true);
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && navigationRef.current?.contains(activeElement)) activeElement.blur();
  };

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) closeNavigation();
  };

  return (
    <nav
      ref={navigationRef}
      aria-label="Hauptnavigation"
      className={`hidden items-center gap-8 lg:flex ${forceClosed ? "desktop-nav-closed" : ""}`}
      onClick={handleNavigation}
      onMouseEnter={() => setForceClosed(false)}
      onMouseLeave={() => setForceClosed(false)}
      onFocusCapture={() => setForceClosed(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") closeNavigation();
      }}
    >
      <ul className="flex items-center gap-7">
        {mainNavigation.map((item) => <DesktopNavItem key={item.href} item={item} />)}
      </ul>
      <ButtonLink href="/kontakt" className="min-h-10 px-5 py-2">Projekt anfragen</ButtonLink>
    </nav>
  );
}
