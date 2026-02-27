"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "daily queries automated" },
  { value: "95%+", label: "RAG precision" },
  { value: "~60%", label: "less manual review" },
];

function TerminalBlock() {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-zinc-950/80 overflow-hidden shadow-2xl shadow-blue-500/[0.03]">
      <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/[0.04] bg-zinc-950">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2 text-[11px] text-zinc-600 font-mono">reasonflow</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-7 text-zinc-400">
        <div className="text-zinc-600">$ npx reasonflow --process-inbox</div>
        <div className="mt-3">
          <span className="text-emerald-500">&#10003;</span> Connected — 12 unread
          emails
        </div>
        <div>
          <span className="text-emerald-500">&#10003;</span> Classified: 3
          partnership, 5 support, 4 newsletter
        </div>
        <div>
          <span className="text-emerald-500">&#10003;</span> RAG context retrieved
          — 847ms
        </div>
        <div>
          <span className="text-emerald-500">&#10003;</span> 3 drafts generated —
          94% confidence
        </div>
        <div className="mt-1">
          <span className="text-blue-400">&rarr;</span> 2 auto-sent &middot; 1
          queued for review
        </div>
        <div className="mt-2 text-zinc-600 animate-pulse">&#9608;</div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16 py-24">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[128px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5">
            {/* Left column — 3 of 5 cols */}
            <div className="lg:col-span-3">
              {/* Status pill */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[13px] text-zinc-400">
                  Building at Infradock.ai
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">I build AI that</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                  actually ships.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Multi-agent workflows and RAG pipelines in production. Currently
                shipping AI infrastructure at Infradock.ai.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  View Projects
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/namanxdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 transition-all hover:bg-white/5"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/naman411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 transition-all hover:bg-white/5"
                >
                  LinkedIn
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 flex gap-10 border-t border-white/[0.06] pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — terminal, 2 of 5 cols */}
            <div className="hidden lg:col-span-2 lg:block">
              <TerminalBlock />
            </div>
          </div>

          {/* Mobile terminal */}
          <div className="mt-12 lg:hidden">
            <TerminalBlock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
