import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languagePages, supportedLocales, type LanguagePage } from "@/content/languages/language-pages";
import { LanguageLandingPage } from "@/features/languages/components/LanguageLandingPage";
import { siteConfig } from "@/config/site.config";

type Props = { params: Promise<{ locale: string }> };

const languageAlternates = {
  de: "/sprachen",
  en: "/en",
  ar: "/ar",
  tr: "/tr",
  ku: "/ku",
  "x-default": "/sprachen",
};

function getContent(locale: string): LanguagePage | undefined {
  return languagePages[locale as LanguagePage["locale"]];
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  if (!content) return {};

  const path = `/${content.locale}`;
  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: { canonical: path, languages: languageAlternates },
    openGraph: {
      title: `${content.seoTitle} | ${siteConfig.name}`,
      description: content.seoDescription,
      url: path,
      locale: content.locale === "ar" ? "ar_DE" : `${content.locale}_DE`,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function LocalizedLandingPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale);
  if (!content) notFound();
  return <LanguageLandingPage content={content} />;
}
