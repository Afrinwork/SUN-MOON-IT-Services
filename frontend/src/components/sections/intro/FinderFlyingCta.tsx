"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import FlyingButton from "@/components/ui/flying-button/FlyingButton";
import { introContent } from "@/content/home/intro";

/**
 * „Lösung finden“ hebt ab: am Desktop beim Überfahren, auf dem Handy beim Antippen.
 * Auf Touch-Geräten öffnet sich der Assistent kurz nach dem Start, damit man den Flug sieht.
 */
export function FinderFlyingCta() {
  const router = useRouter();

  const openFinder = () => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch && !still) window.setTimeout(() => router.push("/loesung-finden"), 1100);
    else router.push("/loesung-finden");
  };

  return (
    <div className="intro-finder-flight relative h-[3.6rem] w-[13.5rem] shrink-0">
      <FlyingButton
        className="intro-finder-flight__zone"
        theme="dark"
        size="large"
        altitude={170}
        hoverTime={2.4}
        jets={2}
        thrusters
        trigger="hover"
        carryCursor
        smoke={1}
        turbulence={1}
        wobble={1}
        buttonColor="#ffffff"
        textColor="#000000"
        thrustColor="#ffffff"
        smokeColor="#eef1f6"
        onClick={openFinder}
      >
        <span className="inline-flex items-center gap-2">{introContent.finderCta} <ArrowRight size={17} /></span>
      </FlyingButton>
    </div>
  );
}
