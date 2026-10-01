"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import { DesktopNavItem } from "@/components/navigation/desktop/DesktopNavItem";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation, projectCta } from "@/config/navigation.config";

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
      className={`hidden items-center gap-5 lg:flex xl:gap-8 ${forceClosed ? "desktop-nav-closed" : ""}`}
      onClick={handleNavigation}
      onMouseEnter={() => setForceClosed(false)}
      onMouseLeave={() => setForceClosed(false)}
      onFocusCapture={() => setForceClosed(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") closeNavigation();
      }}
    >
      <ul className="flex items-center gap-4 xl:gap-7">
        {mainNavigation.map((item, index) => <DesktopNavItem key={item.href} item={item} align={index >= mainNavigation.length - 2 ? "right" : "center"} />)}
      </ul>
      <ButtonLink href={projectCta.href} className="group min-h-11 whitespace-nowrap px-4 py-2 shadow-lg shadow-accent/30 xl:px-5">{projectCta.label} <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></ButtonLink>
    </nav>
  );
}
