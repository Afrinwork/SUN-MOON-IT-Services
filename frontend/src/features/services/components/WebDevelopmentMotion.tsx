"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function WebDevelopmentMotion({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(page.querySelectorAll<HTMLElement>("[data-web-reveal]"));
    elements.forEach((element) => element.classList.add("web-reveal"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    const frame = window.requestAnimationFrame(() => elements.forEach((element) => observer.observe(element)));
    return () => { window.cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  return <main ref={pageRef} className="web-development-page">{children}</main>;
}
