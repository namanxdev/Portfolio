"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { NumberTicker } from "@/components/magicui/number-ticker";

const terminalLines = [
  { text: "$ reasonflow --classify --draft --send", className: "text-zinc-500" },
  { text: "", className: "" },
  { text: "  classify  partnership inquiry           done", className: "text-emerald-400/80" },
  { text: "  retrieve  3 threads matched  (0.8s)     done", className: "text-emerald-400/80" },
  { text: "  draft     94% confidence               done", className: "text-emerald-400/80" },
  { text: "  route     sent to outbox                done", className: "text-emerald-400/80" },
  { text: "", className: "" },
  { text: "  2 emails below threshold → HITL queue", className: "text-amber-400/70" },
];

const stats = [
  { value: 500, suffix: "+", label: "daily queries automated" },
  { value: 95, suffix: "%+", label: "RAG precision" },
  { value: 60, prefix: "~", suffix: "%", label: "less manual review" },
];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  },
});

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* #1 — Gradient orbs (Subtle) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#3b82f6] opacity-[0.05] blur-[120px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-[#8b5cf6] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20">
        {/* #1 — Pill badge */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="visible">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <span className="text-sm font-medium">
              <AnimatedGradientText>Building at Infradock.ai</AnimatedGradientText>
            </span>
          </div>
        </motion.div>

        {/* #1 — Headline: High contrast white */}
        <motion.div variants={fadeUp(1)} initial="hidden" animate="visible">
          <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            I build AI systems that <span className="text-zinc-400">work in production.</span>
          </h1>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeUp(2)}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400"
        >
          Currently shipping RAG pipelines and multi-agent workflows at{" "}
          <span className="text-zinc-200 font-medium">Infradock.ai</span>.
          Previously built real-time systems at{" "}
          <span className="text-zinc-200 font-medium">Oldowan Innovations</span> and healthcare
          APIs at <span className="text-zinc-200 font-medium">Yantram Medtech</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(3)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                View Projects
              </span>
            </ShimmerButton>
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
          >
            Read Blog
          </Link>
          <div className="flex items-center gap-4 pl-2">
            <a href="https://github.com/namanxdev" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-white" aria-label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/naman411" target="_blank" rel="noopener noreferrer" className="text-zinc-500 transition-colors hover:text-white" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:namanguptabhopal@gmail.com" className="text-zinc-500 transition-colors hover:text-white" aria-label="Email">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
            </a>
          </div>
        </motion.div>

        {/* #1 — Stats strip */}
        <motion.div
          variants={fadeUp(4)}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-12 border-t border-white/5 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tabular-nums text-white">
                {stat.prefix}
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Terminal */}
        <motion.div
          variants={fadeUp(5)}
          initial="hidden"
          animate="visible"
          className="mt-20"
        >
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent blur-xl" />
            <Terminal title="reasonflow" className="relative border-white/10 bg-black/40 backdrop-blur-xl">
              <TypingAnimation lines={terminalLines} typingSpeed={18} lineDelay={250} />
            </Terminal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
