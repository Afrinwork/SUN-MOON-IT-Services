import Link from "next/link";
import { blogTopics } from "@/content/blog/topics";

/** Mobil: wischbare Themen-Leiste. Das aktive Thema ist hervorgehoben. */
export function BlogTopicNavMobile({ active }: { active?: string }) {
  return (
    <nav aria-label="Blog-Themen" className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:hidden">
      <Link href="/blog" className={`flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold ${!active ? "border-primary bg-primary text-white" : "border-border bg-white text-primary"}`}>Alle</Link>
      {blogTopics.map((topic) => (
        <Link key={topic.slug} href={`/blog/thema/${topic.slug}`} aria-current={active === topic.slug ? "page" : undefined} className={`flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold ${active === topic.slug ? "border-primary bg-primary text-white" : "border-border bg-white text-primary"}`}>
          {topic.shortTitle}
        </Link>
      ))}
    </nav>
  );
}
