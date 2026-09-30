import type { NextConfig } from "next";
import { performanceConfig } from "./src/config/performance/performance.config";

const nextConfig: NextConfig = {
  // Für Docker (eigener Server); Vercel ignoriert diese Einstellung.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: [...performanceConfig.images.formats],
    deviceSizes: [...performanceConfig.images.deviceSizes],
    imageSizes: [...performanceConfig.images.imageSizes],
    minimumCacheTTL: performanceConfig.images.minimumCacheTTL,
  },
  async headers() {
    return [
      {
        source: "/(brand|images|fonts)/:path*",
        headers: [{ key: "Cache-Control", value: `public, max-age=${performanceConfig.staticAssetMaxAge}, immutable` }],
      },
      {
        // Greift auf Vercel; auf dem eigenen Server setzt nginx dieselben Header.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
