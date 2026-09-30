"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icons/Icon";
import { useEscapeKey } from "@/hooks/ui/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useMediaQuery } from "@/hooks/ui/useMediaQuery";
import { MobileMenu } from "./MobileMenu";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const close = useCallback(() => setOpen(false), []);

  // Menü schließen bei Seitenwechsel oder wenn das Fenster auf Desktop-Breite wächst
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  const isOpen = open && !isDesktop;

  useEscapeKey(isOpen, close);
  useLockBodyScroll(isOpen);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        className="flex size-11 items-center justify-center rounded-lg text-navy-900 hover:bg-slate-100"
      >
        <Icon name={isOpen ? "close" : "menu"} size={24} />
      </button>
      {isOpen && <MobileMenu pathname={pathname} />}
    </div>
  );
}
