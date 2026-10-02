import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getTopic } from "@/content/blog/topics";
import type { BlogPost } from "@/features/blog/types/blog.types";

/** Mobil: Titelzeile mit Thema. Ab Tablet: Karte mit Beschreibung. */
export function BlogTeaserCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full gap-3 rounded-2xl border border-border bg-white p-4 transition duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/6 md:flex-col md:rounded-3xl md:p-7 md:hover:-translate-y-1">
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-accent-strong md:text-xs">{getTopic(post.topic).shortTitle}</span>
        <h3 className="mt-1 font-bold leading-snug text-primary md:mt-3 md:text-xl">{post.title}</h3>
        <p className="mt-3 hidden flex-1 leading-7 text-muted md:block">{post.description}</p>
        <span className="mt-6 hidden items-center gap-2 text-sm text-muted md:flex"><Clock size={15} /> {post.readingMinutes} Min. Lesezeit</span>
      </span>
      <ArrowUpRight size={18} className="mt-1 shrink-0 text-accent-strong md:hidden" aria-hidden="true" />
    </Link>
  );
}
