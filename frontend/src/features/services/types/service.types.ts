import type { LucideIcon } from "lucide-react";
import type { FaqItem } from "@/components/ui/faq/FaqList";
import type { Feature } from "@/components/ui/list/FeatureGrid";

export type ServiceContent = {
  intro: string;
  features: Feature[];
  benefits: string[];
  technologies: string[];
  faq: FaqItem[];
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  content: ServiceContent;
};
