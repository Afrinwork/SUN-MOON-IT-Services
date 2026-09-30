/** Dekoratives Hintergrundvideo; bei „Bewegung reduzieren“ ausgeblendet. */
export function HeroBackgroundVideo() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <video
        className="size-full object-cover object-center motion-reduce:hidden"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Mobil: Text über volle Breite → gleichmäßig abdunkeln; ab Tablet: Verlauf nach rechts. */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary-deep/70 to-primary-deep/80 md:bg-gradient-to-r md:from-primary-deep/90 md:via-primary-deep/65 md:to-primary-deep/40" />
    </div>
  );
}
