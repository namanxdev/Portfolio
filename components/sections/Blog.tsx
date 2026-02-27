"use client";

import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BlogCard } from "@/components/BlogCard";

const featuredPosts = [
  {
    title: "Building Production RAG Pipelines",
    date: "2026-03-01",
    excerpt: "From chunking strategies to cross-encoder reranking — how to build retrieval systems that actually work at scale.",
    slug: "building-rag-pipelines",
  },
  {
    title: "Multi-Agent Orchestration Patterns",
    date: "2026-03-15",
    excerpt: "Patterns for coordinating agents: sequential chains, DAG decomposition, error recovery, and state management.",
    slug: "multi-agent-orchestration",
  },
  {
    title: "Understanding the MCP Protocol",
    date: "2026-04-01",
    excerpt: "A practical guide to the Model Context Protocol — architecture, server implementation, and production deployment.",
    slug: "mcp-protocol-guide",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Blog
          </p>
          <h2 className="mb-4 text-[28px] font-bold tracking-tight text-white sm:text-[32px]">
            Technical writing
          </h2>
          <p className="mb-14 max-w-md text-[15px] leading-relaxed text-[#71717a]">
            On AI systems, agent infrastructure, and engineering in production.
          </p>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, i) => (
            <BlurFade key={post.slug} delay={0.15 + i * 0.08} inView>
              <BlogCard {...post} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.4} inView>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#71717a] transition-colors hover:text-white"
            >
              All posts
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
