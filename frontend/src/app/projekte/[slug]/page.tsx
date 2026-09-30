import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/features/projects/components/ProjectDetail";
import { findProject } from "@/features/projects/data/get-project";
import { projects } from "@/features/projects/data/projects";
import { pageMetadata } from "@/lib/seo/metadata";

// Nur bekannte Projekte – alles andere ist 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projekte/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return pageMetadata({ path: `/projekte/${slug}`, title: project.title, description: project.summary });
}

export default async function ProjectPage({ params }: PageProps<"/projekte/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
