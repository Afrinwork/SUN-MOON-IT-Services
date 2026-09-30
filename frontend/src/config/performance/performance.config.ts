// Bild- und Caching-Einstellungen, genutzt in next.config.ts.
export const performanceConfig = {
  images: {
    formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
    deviceSizes: [360, 640, 768, 1024, 1280, 1600],
    imageSizes: [32, 64, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 Tage
  },
  /** Cache-Dauer für unveränderliche Dateien aus /brand und /images */
  staticAssetMaxAge: 60 * 60 * 24 * 365,
} as const;
