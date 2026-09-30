import { CardGrid } from "@/components/ui/card/CardGrid";
import { EmptyState } from "@/components/ui/empty/EmptyState";
import { BlogCard } from "@/features/blog/components/BlogCard";
import { BlogListMobile } from "@/features/blog/components/BlogListMobile";
import type { BlogPost } from "@/features/blog/types/blog.types";

/** Mobil: kompakte Liste. Desktop: Karten-Raster. */
export function BlogPostList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return <EmptyState text="Zu diesem Thema erscheinen bald neue Artikel." />;
  return (
    <>
      <BlogListMobile posts={posts} />
      <div className="hidden md:block">
        <CardGrid>{posts.map((post) => <li key={post.slug}><BlogCard post={post} /></li>)}</CardGrid>
      </div>
    </>
  );
}
