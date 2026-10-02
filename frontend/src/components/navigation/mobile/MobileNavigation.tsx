"use client";

import { ArrowRight, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { MobileNavItem } from "@/components/navigation/mobile/MobileNavItem";
import { mainNavigation, projectCta } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function MobileNavigation() {
  const pathname = usePathname();
  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = openedAtPath === pathname;

  const closeMenu = (restoreFocus = false) => {
    setOpenedAtPath(null);
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpenedAtPath(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    window.requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  };

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpenedAtPath(open ? null : pathname)}
        className={`mobile-menu-trigger relative grid size-11 place-items-center overflow-hidden rounded-2xl border transition active:scale-95 ${open ? "border-primary bg-primary text-white" : "border-border bg-white text-primary"}`}
      >
        <Menu size={21} className={`absolute transition duration-200 ${open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
        <X size={21} className={`absolute transition duration-200 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`} />
      </button>

      {mounted && createPortal(<div className={`mobile-menu-layer fixed inset-x-0 bottom-0 top-16 z-[45] md:top-18 xl:hidden ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <button type="button" tabIndex={-1} aria-label="Menü schließen" onClick={() => closeMenu()} className="mobile-menu-backdrop absolute inset-0 bg-primary-deep/30" />
        <div
          ref={panelRef}
          id="mobile-navigation-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          tabIndex={-1}
          className="mobile-menu-panel relative ml-auto flex h-full w-full flex-col overflow-hidden bg-white outline-none md:w-[28rem] md:border-l md:border-border"
        >
          <div className="border-b border-border px-5 pb-4 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-accent-strong">Navigation</p>
                <p className="mt-1 text-xl font-black tracking-[-0.035em] text-primary">Wie können wir helfen?</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-surface-accent px-3 py-2 text-[0.68rem] font-bold text-accent-strong"><i className="size-1.5 rounded-full bg-emerald-500" /> Erreichbar</span>
            </div>
            <Link href="/loesung-finden" className="mobile-menu-highlight mt-4 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3.5 text-white shadow-lg shadow-primary/15">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent"><Sparkles size={18} /></span>
              <span className="min-w-0 flex-1"><strong className="block text-sm">Lösung finden</strong><span className="mt-0.5 block text-xs text-white/65">In wenigen Fragen zur Empfehlung</span></span>
              <ArrowRight size={17} className="shrink-0 text-accent" />
            </Link>
          </div>

          <nav className="mobile-menu-scroll min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain px-3 py-3 [-webkit-overflow-scrolling:touch]" aria-label="Mobile Navigation" onClick={handleNavigation}>
            <div className="space-y-1">
              {mainNavigation.filter((item) => item.href !== "/loesung-finden").map((item, index) => <MobileNavItem key={item.href} item={item} index={index} />)}
            </div>
          </nav>

          <div className="border-t border-border bg-white px-4 pt-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
            <Link href={projectCta.href} onClick={() => closeMenu()} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-5 text-sm font-black text-primary-deep transition active:scale-[0.98]">{projectCta.label} <ArrowRight size={17} /></Link>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={telHref} className="flex min-h-10 items-center justify-center gap-2 rounded-xl text-xs font-bold text-primary"><Phone size={14} className="text-accent-strong" /> Anrufen</a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-10 items-center justify-center gap-2 rounded-xl text-xs font-bold text-primary"><MessageCircle size={14} className="text-accent-strong" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </div>, document.body)}
    </div>
  );
}
