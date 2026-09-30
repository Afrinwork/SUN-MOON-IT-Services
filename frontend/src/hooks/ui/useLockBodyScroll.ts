"use client";

import { useEffect } from "react";

/** Verhindert Scrollen der Seite, solange `locked` true ist (z. B. offenes Mobilmenü). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
