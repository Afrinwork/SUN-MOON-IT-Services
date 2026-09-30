import type { NextConfig } from "next";
import { securityHeaders } from "./src/config/security.config";

const weekCache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/videos/:path*", headers: weekCache },
      { source: "/brand/:path*", headers: weekCache },
    ];
  },
};

export default nextConfig;
