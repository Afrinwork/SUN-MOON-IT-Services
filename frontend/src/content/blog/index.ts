import { appOderWebApp } from "@/content/blog/posts/app-oder-web-app";
import { excelAbloesen } from "@/content/blog/posts/excel-abloesen";
import { itDienstleisterHannover } from "@/content/blog/posts/it-dienstleister-hannover";
import { microsoft365Tipps } from "@/content/blog/posts/microsoft-365-tipps";
import { prozesseAutomatisieren } from "@/content/blog/posts/prozesse-automatisieren";
import { sharepointDokumente } from "@/content/blog/posts/sharepoint-dokumente";
import { softwareModernisieren } from "@/content/blog/posts/software-modernisieren";
import { websiteKosten } from "@/content/blog/posts/website-kosten";
import type { BlogPost } from "@/features/blog/types/blog.types";

/** Neue Artikel: Datei unter posts/ anlegen und hier eintragen. Neueste zuerst. */
export const blogPosts: BlogPost[] = [
  itDienstleisterHannover,
  sharepointDokumente,
  websiteKosten,
  appOderWebApp,
  microsoft365Tipps,
  prozesseAutomatisieren,
  excelAbloesen,
  softwareModernisieren,
];

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function postsByTopic(topic: string): BlogPost[] {
  return blogPosts.filter((post) => post.topic === topic);
}
