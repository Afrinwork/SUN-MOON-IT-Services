"use client";

import MaskedHeading from "@/components/ui/masked-heading/MaskedHeading";
import TextType from "@/components/ui/text-type/TextType";
import { heroContent } from "@/content/home/hero";

/** Große Begrüßung, die Buchstaben zeigen das Hero-Video. Darüber tippt sich der Firmenname. */
export function HeroWelcome() {
  return (
    <div className="relative mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[calc(100svh-5rem)] md:px-8 md:py-24">
      <TextType
        as="p"
        text={[heroContent.welcomeBrand]}
        typingSpeed={75}
        pauseDuration={1500}
        deletingSpeed={50}
        cursorStyle="underscore"
        cursorGlide
        showCursor
        className="mb-4 font-mono text-sm font-semibold tracking-wide text-accent md:mb-6 md:text-lg"
      />
      <MaskedHeading
        tag="h1"
        text={heroContent.welcomeTitle}
        mediaType="video"
        src="/videos/hero-background.mp4"
        poster="/videos/hero-poster.webp"
        fillScale={1.25}
        parallax={26}
        reveal="scale"
        trigger="view"
        duration={1.1}
        stagger={0.09}
        drift={18}
        align="center"
        brightness={1.1}
        saturation={1.3}
        weight={900}
        tracking={-0.04}
        lineHeight={1.02}
        textScale={0.145}
        className="hero-welcome-title max-w-[56rem] text-white"
      />
    </div>
  );
}
