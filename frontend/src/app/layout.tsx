import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer/Footer";
import { SiteHeader } from "@/components/layout/header/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&L IT Software Services | Digitale Lösungen",
  description: "Websites, Apps und individuelle Softwarelösungen für moderne Unternehmen.",
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
