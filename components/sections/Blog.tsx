"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/BlogCard";

const featuredPosts = [
  {
    title: "Building Production RAG Pipelines",
    date: "Coming Soon",
    excerpt: "From chunking strategies to cross-encoder reranking — how to build retrieval systems that actually work at scale.",
    slug: "building-rag-pipelines",
  },
  {
    title: "Multi-Agent Orchestration Patterns",
    date: "Coming Soon",
    excerpt: "Patterns for coordinating agents: sequential chains, DAG decomposition, error recovery, and state management.",
    slug: "multi-agent-orchestration",
  },
  {
    title: "Understanding the MCP Protocol",
    date: "Coming Soon",
    excerpt: "A practical guide to the Model Context Protocol — architecture, server implementation, and production deployment.",
    slug: "mcp-protocol-guide",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Blog() {
  return (
    <motion.section
      id="blog"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Blog</h2>
        <p className="text-lg text-zinc-400 mb-12">Technical writing on AI systems — first posts dropping soon.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-white"
          >
            All posts
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
