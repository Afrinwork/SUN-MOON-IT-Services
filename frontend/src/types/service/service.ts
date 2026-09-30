import type { IconName } from "@/components/ui/icons/Icon";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  intro: string;
  benefits: readonly string[];
  deliverables: readonly string[];
  technologies: readonly string[];
};
