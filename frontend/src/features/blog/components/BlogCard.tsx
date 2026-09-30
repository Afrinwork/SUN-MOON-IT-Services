import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate } from "@/features/blog/headingId";
import { getTopic } from "@/content/blog/topics";
import type { BlogPost } from "@/features/blog/types/blog.types";

/** Desktop-Karte für die Blog-Übersicht. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6">
      <span className="text-xs font-bold uppercase tracking-widest text-accent-strong">{getTopic(post.topic).shortTitle}</span>
      <h2 className="mt-3 text-xl font-bold leading-snug text-primary">{post.title}</h2>
      <p className="mt-3 flex-1 leading-7 text-muted">{post.description}</p>
      <span className="mt-6 flex items-center justify-between text-sm text-muted">
        <span className="flex items-center gap-2"><Clock size={15} /> {post.readingMinutes} Min. · {formatDate(post.published)}</span>
        <ArrowUpRight size={18} className="text-accent-strong transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
