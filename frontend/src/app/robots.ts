import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/metadata";

// Vercel-Vorschauen nicht indexieren – nur die echte Domain (NEXT_PUBLIC_SITE_URL gesetzt).
const isProductionDomain = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProductionDomain ? { userAgent: "*", allow: "/", disallow: "/api/" } : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
