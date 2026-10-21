"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import FlyingButton from "@/components/ui/flying-button/FlyingButton";
import { heroContent } from "@/content/home/hero";

/** Desktop-Hero: „Lösung finden“ hebt beim Überfahren ab, Klick öffnet den Assistenten. */
export function HeroFinderFlyingCta() {
  const router = useRouter();

  return (
    <div className="hero-finder-flight relative h-[3.6rem] w-[13.5rem] shrink-0">
      <FlyingButton
        className="hero-finder-flight__zone"
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
        buttonColor="#00a3ff"
        textColor="#071d40"
        thrustColor="#8ec5ff"
        smokeColor="#eef1f6"
        onClick={() => router.push("/loesung-finden")}
      >
        <span className="inline-flex items-center gap-2">{heroContent.finderCta} <ArrowRight size={17} /></span>
      </FlyingButton>
    </div>
  );
}
