"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type HomePageMotionProps = {
  children: ReactNode;
};

export function HomePageMotion({ children }: HomePageMotionProps) {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!page || reduceMotion || !("IntersectionObserver" in window)) return;

    const sectionContents = Array.from(
      page.querySelectorAll<HTMLElement>(":scope > section:not(:first-child) > :first-child"),
    );

    sectionContents.forEach((content) => content.classList.add("home-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const frame = window.requestAnimationFrame(() => {
      sectionContents.forEach((content) => observer.observe(content));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <main ref={pageRef} className="home-page">
      {children}
    </main>
  );
}
