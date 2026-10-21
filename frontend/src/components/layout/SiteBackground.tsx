import RippleGrid from "@/components/ui/ripple-grid/RippleGrid";

/** Seitenweiter Hintergrund: schwarzes Feld mit weißem RippleGrid, fest hinter allen Inhalten. */
export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <RippleGrid
        color="#ffffff"
        variant="lines"
        cellSize={116}
        lineWidth={0.5}
        glow={0.3}
        rippleStrength={1}
        rippleSpeed={0.45}
        rippleSize={1.75}
        autoRipple="center"
        rippleInterval={2.6}
        tilt={0}
        rotation={0}
        fade={0.6}
        opacity={0.55}
        mouseInteraction
        clickRipple
        intro
        lightMode={false}
      />
    </div>
  );
}
