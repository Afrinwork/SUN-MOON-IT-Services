"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bot, Building2, CodeXml, RefreshCw, Smartphone, Wrench, type LucideIcon } from "lucide-react";
import CircularGallery, { type CircularGalleryItem } from "@/components/ui/circular-gallery/CircularGallery";
import { drawServiceCard } from "@/components/sections/services/serviceCardImage";

export type GalleryService = { slug: string; title: string; short: string };

const icons: Record<string, LucideIcon> = {
  webentwicklung: CodeXml,
  "app-entwicklung": Smartphone,
  softwareentwicklung: Wrench,
  "microsoft-365": Building2,
  "ki-automatisierung": Bot,
  modernisierung: RefreshCw,
};

/** Desktop: Leistungen als Karten-Galerie (React Bits CircularGallery). Klick öffnet die Leistungsseite. */
export function ServicesGallery({ services }: { services: GalleryService[] }) {
  const router = useRouter();
  const iconsRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<CircularGalleryItem[] | null>(null);

  useEffect(() => {
    let alive = true;
    const build = async () => {
      await document.fonts.ready;
      const fontFamily = getComputedStyle(document.body).fontFamily;
      const svgs = Array.from(iconsRef.current?.querySelectorAll("svg") ?? []);
      const images = await Promise.all(services.map((service, index) => drawServiceCard({ title: service.title, text: service.short, icon: svgs[index], fontFamily })));
      if (alive) setItems(services.map((service, index) => ({ image: images[index], text: service.title, alt: service.title })));
    };
    build().catch(() => {});
    return () => { alive = false; };
  }, [services]);

  return (
    <div className="relative h-[26rem] md:-mt-6 md:h-[34rem]">
      <div ref={iconsRef} className="hidden" aria-hidden="true">
        {services.map(({ slug }) => { const Icon = icons[slug] ?? CodeXml; return <Icon key={slug} />; })}
      </div>
      {items && (
        <CircularGallery
          items={items}
          bend={3}
          textColor="#ffffff"
          font="700 30px var(--font-sans), system-ui, sans-serif"
          borderRadius={0.05}
          scrollEase={0.05}
          itemSize={1}
          itemAspect={0.78}
          gap={0.26}
          wave={1}
          fadeEdges={0.12}
          shadow={0.25}
          scrollSpeed={2}
          autoScroll={0}
          snap
          grayscale={false}
          showTitles={false}
          openOnClick={false}
          intro
          aria-label="Unsere Leistungen"
          onItemClick={(_, index) => router.push(`/leistungen/${services[index].slug}`)}
        />
      )}
    </div>
  );
}
