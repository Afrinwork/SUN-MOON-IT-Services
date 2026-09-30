import type { NextConfig } from "next";

const weekCache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/videos/:path*", headers: weekCache },
      { source: "/brand/:path*", headers: weekCache },
    ];
  },
};

export default nextConfig;
