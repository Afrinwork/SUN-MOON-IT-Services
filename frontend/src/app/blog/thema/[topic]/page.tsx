import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Container } from "@/components/ui/container/Container";
import { postsByTopic } from "@/content/blog";
import { blogTopics, findTopic } from "@/content/blog/topics";
import { BlogPostList } from "@/features/blog/components/BlogPostList";
import { BlogRelatedService } from "@/features/blog/components/BlogRelatedService";
import { BlogTopicGrid } from "@/features/blog/components/BlogTopicGrid";
import { BlogTopicNavMobile } from "@/features/blog/components/BlogTopicNav";
import { createMetadata } from "@/lib/seo/createMetadata";

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogTopics.map(({ slug }) => ({ topic: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = findTopic((await params).topic);
  if (!topic) return {};
  return createMetadata({ title: topic.seoTitle, description: topic.description, path: `/blog/thema/${topic.slug}`, noIndex: postsByTopic(topic.slug).length === 0 });
}

export default async function BlogTopicPage({ params }: Props) {
  const topic = findTopic((await params).topic);
  if (!topic) notFound();
  const posts = postsByTopic(topic.slug);
  return (
    <main>
      <PageHeader eyebrow="Ratgeber" title={`${topic.title}: Tipps & Wissen`} text={topic.intro} breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: topic.title }]} />
      <section className="bg-surface py-8 md:py-24">
        <Container>
          <BlogTopicNavMobile active={topic.slug} />
          <h2 className="mb-5 text-lg font-bold text-primary md:text-2xl">Artikel zu {topic.title}</h2>
          <BlogPostList posts={posts} />
          <BlogRelatedService service={topic.service} />
          <h2 className="mb-5 mt-16 hidden text-2xl font-bold text-primary md:block">Weitere Themen</h2>
          <BlogTopicGrid active={topic.slug} />
        </Container>
      </section>
      <ContactCTASection />
    </main>
  );
}
