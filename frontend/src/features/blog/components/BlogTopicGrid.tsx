import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { postsByTopic } from "@/content/blog";
import { blogTopics } from "@/content/blog/topics";

/** Desktop: Themen als Karten mit Artikelanzahl. */
export function BlogTopicGrid({ active }: { active?: string }) {
  return (
    <nav aria-label="Blog-Themen" className="hidden gap-3 md:grid md:grid-cols-3 lg:grid-cols-4">
      {blogTopics.map((topic) => {
        const isActive = active === topic.slug;
        const count = postsByTopic(topic.slug).length;
        return (
          <Link key={topic.slug} href={`/blog/thema/${topic.slug}`} aria-current={isActive ? "page" : undefined} className={`group flex items-center justify-between gap-3 rounded-2xl border p-4 transition hover:border-accent/50 hover:shadow-lg ${isActive ? "border-primary bg-primary text-white" : "border-border bg-white text-primary"}`}>
            <span>
              <span className="block font-bold">{topic.title}</span>
              <span className={`text-xs ${isActive ? "text-white/70" : "text-muted"}`}>{count} {count === 1 ? "Artikel" : "Artikel"}</span>
            </span>
            <ArrowUpRight size={17} className={isActive ? "text-accent" : "text-accent-strong"} />
          </Link>
        );
      })}
    </nav>
  );
}
