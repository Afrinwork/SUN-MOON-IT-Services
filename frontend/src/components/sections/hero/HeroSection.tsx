import { HeroBackgroundVideo } from "@/components/sections/hero/HeroBackgroundVideo";
import { HeroWelcome } from "@/components/sections/hero/HeroWelcome";

function HeroBackdrop() {
  return (
    <>
      <HeroBackgroundVideo />
      <div className="network-grid hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="hero-glow absolute -right-24 top-20 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="hero-glow-secondary absolute -left-32 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="hero-light-beam absolute -top-1/2 left-1/3 h-[150%] w-40 rotate-[24deg] bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="hero-particles absolute inset-0" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
    </>
  );
}

/** Erster Bildschirm: nur die Begrüßung. Alles Weitere steht direkt darunter in der HeroIntroSection. */
export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden bg-primary-deep text-white">
      <HeroBackdrop />
      <HeroWelcome />
    </section>
  );
}
