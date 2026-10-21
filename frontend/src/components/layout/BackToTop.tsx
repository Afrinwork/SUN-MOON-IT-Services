"use client";

import { useEffect, useState } from "react";
import SlingButton from "@/components/ui/sling-button/SlingButton";

/** Ab einer Bildschirmhöhe Scrollen erscheint unten rechts ein Knopf (React Bits SlingButton), der zum Seitenanfang führt. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={`back-to-top ${visible ? "is-visible" : ""}`} inert={!visible}>
      <SlingButton
        onSend={toTop}
        ariaLabel="Zum Seitenanfang"
        padColor="#f5f5f5"
        iconColor="#18181b"
        accentColor="#f5f5f5"
        wellColor="#27272a"
        bandColor="#52525b"
        size={56}
        strokeWidth={3}
        armAt={48}
        maxPull={160}
        launchSpeed={2600}
        recoil={0.2}
        flight={120}
        particles={14}
        spread={60}
        axis="any"
        tapSends
        disabled={!visible}
      />
    </div>
  );
}
