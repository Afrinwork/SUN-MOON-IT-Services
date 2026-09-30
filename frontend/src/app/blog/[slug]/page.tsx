import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/container/Container";
import { blogPosts, findBlogPost } from "@/content/blog";
import { getTopic } from "@/content/blog/topics";
import { BlogArticleBody } from "@/features/blog/components/BlogArticleBody";
import { BlogMobileContactBar } from "@/features/blog/components/BlogMobileContactBar";
import { BlogRelatedService } from "@/features/blog/components/BlogRelatedService";
import { BlogTocDesktop, BlogTocMobile } from "@/features/blog/components/BlogToc";
import { formatDate } from "@/features/blog/headingId";
import { createMetadata } from "@/lib/seo/createMetadata";
import { blogPostingSchema } from "@/lib/seo/structuredData";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findBlogPost((await params).slug);
  if (!post) return {};
  const base = createMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.published } };
}

export default async function BlogPostPage({ params }: Props) {
  const post = findBlogPost((await params).slug);
  if (!post) notFound();
  const topic = getTopic(post.topic);
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd data={blogPostingSchema(post)} />
      <PageHeader eyebrow={topic.shortTitle} title={post.title} breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: topic.title, href: `/blog/thema/${topic.slug}` }]}>
        <span className="flex items-center gap-2 text-sm text-white/70"><Clock size={15} /> {post.readingMinutes} Min. Lesezeit · {formatDate(post.published)}</span>
      </PageHeader>
      <Container className="grid gap-12 py-10 md:grid-cols-[1fr_17rem] md:py-20 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0 max-w-3xl">
          <p className="mb-8 text-lg font-medium leading-8 text-primary md:text-xl">{post.description}</p>
          <BlogTocMobile sections={post.sections} />
          <BlogArticleBody sections={post.sections} />
          <BlogRelatedService service={topic.service} />
        </article>
        <aside><BlogTocDesktop sections={post.sections} /></aside>
      </Container>
      <BlogMobileContactBar />
    </main>
  );
}
