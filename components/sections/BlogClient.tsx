"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  return (
    <motion.section
      id="blog"
      className="relative z-10 py-24 md:py-32 bg-[#050505]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400">
                // blog
              </p>
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.9] text-white">
              Technical <br />
              <span className="font-serif italic font-light text-white/40">writing.</span>
            </h2>
          </div>
          <p className="max-w-sm text-zinc-500 font-light leading-relaxed">
            On AI systems, agent infrastructure, and production engineering.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between h-full p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] hover:border-white/10 transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                        <svg className="w-3 h-3 text-white/50 group-hover:text-white transition-colors rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-200 group-hover:text-blue-400 transition-colors mb-4">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/[0.03]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {post.readingTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/[0.08] p-16 text-center">
            <div className="font-mono text-sm text-zinc-600">
              First posts dropping March 2026.
            </div>
            <div className="mt-2 text-xs text-zinc-700">
              Topics: Production RAG &middot; Multi-agent orchestration &middot;
              MCP protocol deep-dive
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}