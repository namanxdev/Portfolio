import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} — Naman Gupta`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 pt-28 pb-24">
      <header className="mb-12">
        <a
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-[#52525b] transition-colors hover:text-white"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to blog
        </a>
        <div className="flex items-center gap-2 text-[12px] text-[#52525b]">
          <time>{post.date}</time>
          <span className="text-white/10">·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white">{post.title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#71717a]">{post.excerpt}</p>
      </header>
      <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white prose-p:text-[#a1a1aa] prose-p:leading-[1.75] prose-a:text-[#3b82f6] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:rounded prose-code:bg-white/[0.04] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[#e4e4e7] prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-white/[0.06] prose-pre:bg-[#0c0c0e]">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
