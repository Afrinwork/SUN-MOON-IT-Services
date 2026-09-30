import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { SkipLink } from "@/components/layout/page/SkipLink";
import { defaultMetadata } from "@/config/seo/seo.config";
import { siteConfig } from "@/config/site/site.config";
import { themeConfig } from "@/config/theme/theme.config";
import "./globals.css";

// next/font lädt die Schrift selbst gehostet (DSGVO: keine Google-Anfrage im Browser) und ohne Layout-Shift.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: themeConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SkipLink />
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
