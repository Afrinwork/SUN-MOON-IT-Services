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
    const siteHeader = document.querySelector<HTMLElement>("body > header");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const lowPowerDevice = (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4) || connection?.saveData === true;
    let pointerFrame = 0;
    let scrollFrame = 0;
    let cardFrame = 0;
    let magneticFrame = 0;

    page.classList.add("home-motion-ready");
    if (lowPowerDevice) page.classList.add("home-motion-lite");
    siteHeader?.classList.add("home-header-build");

    const entryFrame = window.requestAnimationFrame(() => {
      page.classList.add("is-entered");
      siteHeader?.classList.add("is-entered");
    });

    const resetHeroPointer = () => {
      if (!hero) return;
      hero.style.setProperty("--hero-pointer-x", "72%");
      hero.style.setProperty("--hero-pointer-y", "36%");
      hero.style.setProperty("--hero-shift-x", "0px");
      hero.style.setProperty("--hero-shift-y", "0px");
    };
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
    hero?.addEventListener("pointerleave", resetHeroPointer, { passive: true });

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

    const revealStyles = ["rise", "drift", "focus", "split", "mask", "settle"] as const;
    const cardSurfaces: HTMLElement[] = [];

    sectionContents.forEach((content, sectionIndex) => {
      if (content.closest(".connected-results")) return;
      content.classList.add("home-reveal", `home-reveal-${revealStyles[sectionIndex % revealStyles.length]}`);
      Array.from(content.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.classList.add("home-section-layer");
          child.style.setProperty("--home-layer-index", String(index));
        }
      });
      const items = Array.from(content.querySelectorAll<HTMLElement>(
        ":scope > ul > li, :scope > ol > li, :scope > nav > a, :scope > div > article, :scope > div > div > article",
      ));
      items.slice(0, 12).forEach((item, index) => {
        item.classList.add("home-item-reveal", "home-motion-card");
        item.style.setProperty("--home-item-index", String(index));
        const surface = item.querySelector<HTMLElement>(":scope > a") ?? item;
        surface.classList.add("home-motion-surface");
        cardSurfaces.push(surface);
      });
    });

    page.querySelectorAll<HTMLElement>(".connected-results .result-step").forEach((surface) => {
      surface.classList.add("home-motion-surface");
      cardSurfaces.push(surface);
    });

    page.querySelectorAll<HTMLElement>("a, button").forEach((element) => {
      element.classList.add("home-motion-control");
    });

    const handleCardPointerMove = (event: PointerEvent) => {
      const surface = event.currentTarget as HTMLElement;
      window.cancelAnimationFrame(cardFrame);
      cardFrame = window.requestAnimationFrame(() => {
        const rect = surface.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
        surface.style.setProperty("--card-light-x", `${x * 100}%`);
        surface.style.setProperty("--card-light-y", `${y * 100}%`);
        surface.style.setProperty("--card-rotate-x", `${(0.5 - y) * 2.4}deg`);
        surface.style.setProperty("--card-rotate-y", `${(x - 0.5) * 2.4}deg`);
      });
    };
    const resetCardPointer = (event: PointerEvent) => {
      const surface = event.currentTarget as HTMLElement;
      surface.style.setProperty("--card-rotate-x", "0deg");
      surface.style.setProperty("--card-rotate-y", "0deg");
    };

    const magneticControls = Array.from(page.querySelectorAll<HTMLElement>(".hero-primary-cta"));
    const handleMagneticPointer = (event: PointerEvent) => {
      const control = event.currentTarget as HTMLElement;
      window.cancelAnimationFrame(magneticFrame);
      magneticFrame = window.requestAnimationFrame(() => {
        const rect = control.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        control.style.setProperty("--magnetic-x", `${x * 5}px`);
        control.style.setProperty("--magnetic-y", `${y * 4}px`);
      });
    };
    const resetMagneticPointer = (event: PointerEvent) => {
      const control = event.currentTarget as HTMLElement;
      control.style.setProperty("--magnetic-x", "0px");
      control.style.setProperty("--magnetic-y", "0px");
    };

    if (finePointer && !lowPowerDevice) {
      cardSurfaces.forEach((surface) => {
        surface.addEventListener("pointermove", handleCardPointerMove, { passive: true });
        surface.addEventListener("pointerleave", resetCardPointer, { passive: true });
      });
      magneticControls.forEach((control) => {
        control.addEventListener("pointermove", handleMagneticPointer, { passive: true });
        control.addEventListener("pointerleave", resetMagneticPointer, { passive: true });
      });
    }

    const handleVisibilityChange = () => {
      page.classList.toggle("is-motion-paused", document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    handleVisibilityChange();

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
      window.cancelAnimationFrame(entryFrame);
      window.cancelAnimationFrame(pointerFrame);
      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(cardFrame);
      window.cancelAnimationFrame(magneticFrame);
      hero?.removeEventListener("pointermove", handlePointerMove);
      hero?.removeEventListener("pointerleave", resetHeroPointer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cardSurfaces.forEach((surface) => {
        surface.removeEventListener("pointermove", handleCardPointerMove);
        surface.removeEventListener("pointerleave", resetCardPointer);
      });
      magneticControls.forEach((control) => {
        control.removeEventListener("pointermove", handleMagneticPointer);
        control.removeEventListener("pointerleave", resetMagneticPointer);
      });
      siteHeader?.classList.remove("home-header-build", "is-entered");
      observer.disconnect();
    };
  }, []);

  return (
    <main ref={pageRef} className="home-page">
      {children}
    </main>
  );
}
