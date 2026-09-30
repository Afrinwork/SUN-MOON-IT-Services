import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getTopic } from "@/content/blog/topics";
import type { BlogPost } from "@/features/blog/types/blog.types";

/** Mobil: kompakte, gut tippbare Liste statt Karten. */
export function BlogListMobile({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white md:hidden">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="flex items-center gap-3 px-4 py-4 active:bg-surface">
            <span className="min-w-0 flex-1">
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent-strong">{getTopic(post.topic).shortTitle} · {post.readingMinutes} Min.</span>
              <span className="mt-1 block font-bold leading-snug text-primary">{post.title}</span>
            </span>
            <ChevronRight size={20} className="shrink-0 text-muted" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
