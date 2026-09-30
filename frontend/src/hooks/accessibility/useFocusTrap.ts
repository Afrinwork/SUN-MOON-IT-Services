"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Hält den Tastaturfokus innerhalb von `ref`, solange `active` true ist (z. B. Mobilmenü). */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean): void {
  useEffect(() => {
    const container = ref.current;
    if (!active || !container) return;

    const elements = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));
    elements()[0]?.focus();

    const handler = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = elements();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    container.addEventListener("keydown", handler);
    return () => container.removeEventListener("keydown", handler);
  }, [ref, active]);
}
