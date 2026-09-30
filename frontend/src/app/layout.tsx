import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer/Footer";
import { SiteHeader } from "@/components/layout/header/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import { CookieNotice } from "@/features/cookies/components/CookieNotice";
import { organizationSchema } from "@/lib/seo/structuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Websites, Apps & Software`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: { telephone: true, email: false, address: false },
};

export const viewport: Viewport = { themeColor: "#071d40" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
