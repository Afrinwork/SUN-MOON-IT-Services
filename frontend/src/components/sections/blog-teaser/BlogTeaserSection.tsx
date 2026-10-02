import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogTeaserCard } from "@/components/sections/blog-teaser/BlogTeaserCard";
import { Container } from "@/components/ui/container/Container";
import { SectionHeader } from "@/components/ui/section/SectionHeader";
import { blogPosts } from "@/content/blog";

/** Die neuesten Ratgeber-Artikel – die Liste ist bereits nach Datum sortiert. */
export function BlogTeaserSection() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="home-blog bg-white py-10 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeader eyebrow="Blog" title="Neu im Blog" text="Fragen, die uns in Projekten immer wieder gestellt werden. Hier ausführlich beantwortet." />
          <Link href="/blog" className="group mb-14 hidden shrink-0 items-center gap-2 text-sm font-bold text-accent-strong transition hover:text-primary md:inline-flex">
            Alle Artikel <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="grid gap-2 md:grid-cols-3 md:gap-5">
          {latest.map((post) => <li key={post.slug}><BlogTeaserCard post={post} /></li>)}
        </ul>
        <Link href="/blog" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-strong md:hidden">
          Alle Artikel <ArrowRight size={17} />
        </Link>
      </Container>
    </section>
  );
}
