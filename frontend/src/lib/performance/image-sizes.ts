/**
 * `sizes`-Angaben für next/image, passend zu den Breakpoints in tokens.css (md 48rem, lg 64rem).
 * Verhindert, dass Mobilgeräte Desktop-Bilder laden.
 */
export const imageSizes = {
  full: "100vw",
  /** 1 Spalte mobil, 2 ab md, 3 ab lg */
  cardGrid: "(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw",
  /** halbe Breite ab lg */
  half: "(min-width: 64rem) 50vw, 100vw",
} as const;
