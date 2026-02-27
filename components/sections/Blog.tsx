"use client";

import { motion } from "framer-motion";

export function Blog() {
  return (
    <motion.section
      id="blog"
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-blue-400">// blog</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technical writing
          </h2>
          <p className="mt-3 text-zinc-500">
            On AI systems, agent infrastructure, and production engineering.
          </p>
        </div>

        <div className="rounded-2xl border border-dashed border-white/[0.08] p-16 text-center">
          <div className="font-mono text-sm text-zinc-600">
            First posts dropping March 2026.
          </div>
          <div className="mt-2 text-xs text-zinc-700">
            Topics: Production RAG &middot; Multi-agent orchestration &middot;
            MCP protocol deep-dive
          </div>
        </div>
      </div>
    </motion.section>
  );
}
