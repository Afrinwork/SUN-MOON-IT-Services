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

    const hero = page.querySelector<HTMLElement>(".home-hero");
    let pointerFrame = 0;
    let scrollFrame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return;
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        hero.style.setProperty("--hero-pointer-x", `${x * 100}%`);
        hero.style.setProperty("--hero-pointer-y", `${y * 100}%`);
        hero.style.setProperty("--hero-shift-x", `${(x - 0.5) * 14}px`);
        hero.style.setProperty("--hero-shift-y", `${(y - 0.5) * 10}px`);
      });
    };
    hero?.addEventListener("pointermove", handlePointerMove, { passive: true });

    const updateHeroScroll = () => {
      if (!hero) return;
      const heroHeight = Math.max(hero.offsetHeight, 1);
      const distance = Math.min(Math.max(window.scrollY, 0), heroHeight);
      const progress = distance / heroHeight;
      hero.style.setProperty("--hero-scroll-progress", String(progress));
      hero.style.setProperty("--hero-scroll-offset", `${distance * 0.28}px`);
      hero.style.setProperty("--hero-media-scale", String(1.065 - progress * 0.035));
      hero.style.setProperty("--hero-scroll-fade", String(Math.max(0, 1 - progress * 2.4)));
    };
    const handleScroll = () => {
      window.cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(updateHeroScroll);
    };
    updateHeroScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionContents = Array.from(
      page.querySelectorAll<HTMLElement>(":scope > section:not(:first-child) > :first-child"),
    );

    sectionContents.forEach((content) => {
      if (content.closest(".connected-results")) return;
      content.classList.add("home-reveal");
      const items = Array.from(content.querySelectorAll<HTMLElement>(
        ":scope > ul > li, :scope > ol > li, :scope > div > article, :scope > div > div > article",
      ));
      items.slice(0, 12).forEach((item, index) => {
        item.classList.add("home-item-reveal");
        item.style.setProperty("--home-item-index", String(index));
      });
    });

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
      window.cancelAnimationFrame(pointerFrame);
      window.cancelAnimationFrame(scrollFrame);
      hero?.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main ref={pageRef} className="home-page">
      {children}
    </main>
  );
}
