import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const metadata = {
  title: "Blog — Naman Gupta",
  description: "Technical writing on AI engineering, agent systems, and building in production.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-24">
      <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
        Blog
      </p>
      <h1 className="mb-4 text-[32px] font-bold tracking-tight text-white">
        Technical writing
      </h1>
      <p className="mb-14 text-[15px] text-[#71717a]">
        On AI systems, agent infrastructure, and engineering in production.
      </p>

      {posts.length === 0 ? (
        <p className="text-[14px] text-[#52525b]">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
