import { preload } from "react-dom";

/**
 * Dekoratives Hintergrundvideo. Das Poster (15–35 KB) erscheint sofort, das Video lädt danach.
 * Bei „Bewegung reduzieren“ bleibt nur das Poster sichtbar.
 */
export function HeroBackgroundVideo() {
  preload("/videos/hero-poster.webp", { as: "image", fetchPriority: "high" });
  return (
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/videos/hero-poster.webp)" }} aria-hidden="true">
      <video
        className="size-full object-cover object-center motion-reduce:hidden"
        src="/videos/hero-background.mp4"
        poster="/videos/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
      {/* Mobil: Text über volle Breite → gleichmäßig abdunkeln; ab Tablet: Verlauf nach rechts. */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary-deep/70 to-primary-deep/80 md:bg-gradient-to-r md:from-primary-deep/90 md:via-primary-deep/65 md:to-primary-deep/40" />
    </div>
  );
}
