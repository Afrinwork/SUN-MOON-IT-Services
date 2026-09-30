import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Container } from "@/components/ui/container/Container";
import { blogPosts } from "@/content/blog";
import { BlogPostList } from "@/features/blog/components/BlogPostList";
import { BlogTopicGrid } from "@/features/blog/components/BlogTopicGrid";
import { BlogTopicNavMobile } from "@/features/blog/components/BlogTopicNav";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "IT-Ratgeber & Blog",
  description: "Praxisnahe Tipps zu SharePoint, Webseiten, Apps, Microsoft 365, KI und Unternehmenssoftware – für Unternehmen in Hannover, Seelze und Umgebung.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <PageHeader eyebrow="Ratgeber" title="IT verständlich erklärt." text="Kurze, praxisnahe Artikel für Unternehmen, die digitaler arbeiten wollen." breadcrumbs={[{ label: "Blog" }]} />
      <section className="bg-surface py-8 md:py-24">
        <Container>
          <BlogTopicNavMobile />
          <h2 className="mb-5 hidden text-2xl font-bold text-primary md:block">Themen</h2>
          <BlogTopicGrid />
          <h2 className="mb-5 text-lg font-bold text-primary md:mt-16 md:text-2xl">Neueste Artikel</h2>
          <BlogPostList posts={blogPosts} />
        </Container>
      </section>
      <ContactCTASection />
    </main>
  );
}
