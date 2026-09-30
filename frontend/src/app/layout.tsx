import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer/Footer";
import { SiteHeader } from "@/components/layout/header/SiteHeader";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Digitale Lösungen`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
