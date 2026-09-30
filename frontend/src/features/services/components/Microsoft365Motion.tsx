"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function Microsoft365Motion({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const elements = Array.from(page.querySelectorAll<HTMLElement>("[data-m365-reveal]"));
    elements.forEach((element) => element.classList.add("m365-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });
    const frame = window.requestAnimationFrame(() => elements.forEach((element) => observer.observe(element)));
    return () => { window.cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return <main ref={pageRef} className="microsoft-365-page">{children}</main>;
}
