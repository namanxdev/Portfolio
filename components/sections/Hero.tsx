"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, TypingAnimation } from "@/components/magicui/terminal";

const terminalLines = [
  { text: "$ reasonflow --classify --draft --send", className: "text-white/30" },
  { text: "", className: "" },
  { text: "  classify  partnership inquiry           done", className: "text-emerald-400/70" },
  { text: "  retrieve  3 threads matched  (0.8s)     done", className: "text-emerald-400/70" },
  { text: "  draft     94% confidence               done", className: "text-emerald-400/70" },
  { text: "  route     sent to outbox                done", className: "text-emerald-400/70" },
  { text: "", className: "" },
  { text: "  2 emails below threshold → HITL queue", className: "text-amber-400/60" },
];

const stats = [
  { value: "500+", label: "daily queries automated" },
  { value: "95%+", label: "RAG precision" },
  { value: "~60%", label: "less manual review" },
];

const f = (i: number) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden">
      {/* Gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[30%] left-[5%] h-[800px] w-[800px] rounded-full bg-[#3b82f6]/[0.035] blur-[150px] animate-pulse-glow" />
        <div className="absolute top-[5%] right-0 h-[600px] w-[600px] rounded-full bg-[#7c3aed]/[0.025] blur-[130px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute -bottom-[10%] left-[40%] h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-20 pb-8">
        {/* Status pill */}
        <motion.div variants={f(0)} initial="hidden" animate="visible">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12px] text-white/50">
              Building at <span className="text-white/70">Infradock.ai</span>
            </span>
          </div>
        </motion.div>

        {/* Heading — massive, editorial */}
        <motion.div variants={f(1)} initial="hidden" animate="visible">
          <h1 className="max-w-[780px]">
            <span className="block text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              I build AI that
            </span>
            <span className="mt-2 block text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                actually ships.
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={f(2)}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-[480px] text-[15px] leading-[1.75] text-white/40"
        >
          Multi-agent workflows and{" "}
          <span className="text-white/65">RAG pipelines at Infradock.ai</span>.
          Real-time recommendation systems at{" "}
          <span className="text-white/65">Oldowan</span>.
          Healthcare microservices at{" "}
          <span className="text-white/65">Yantram Medtech</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={f(3)}
          initial="hidden"
          animate="visible"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-medium text-[#09090b] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Projects
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-[13px] font-medium text-white/60 backdrop-blur-sm transition-all hover:border-white/[0.12] hover:text-white/80"
          >
            Read Blog
          </Link>
          <div className="flex items-center gap-2.5 pl-2">
            <a href="https://github.com/namanxdev" target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 text-white/20 transition-all hover:bg-white/[0.04] hover:text-white/60" aria-label="GitHub">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/naman411" target="_blank" rel="noopener noreferrer" className="rounded-md p-1.5 text-white/20 transition-all hover:bg-white/[0.04] hover:text-white/60" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:namanguptabhopal@gmail.com" className="rounded-md p-1.5 text-white/20 transition-all hover:bg-white/[0.04] hover:text-white/60" aria-label="Email">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Stats strip — social proof */}
        <motion.div
          variants={f(4)}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-8 border-t border-white/[0.04] pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[22px] font-bold tabular-nums tracking-tight text-white">{stat.value}</p>
              <p className="mt-0.5 text-[12px] text-white/30">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Terminal — product screenshot feel */}
        <motion.div
          variants={f(5)}
          initial="hidden"
          animate="visible"
          className="mt-14"
        >
          <div className="relative mx-auto max-w-2xl">
            {/* Glow */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-[#3b82f6]/20 via-[#3b82f6]/5 to-transparent opacity-0 blur-sm transition-opacity duration-500 [.group:hover>&]:opacity-100" />
            <div className="absolute -inset-8 rounded-2xl bg-gradient-to-b from-[#3b82f6]/[0.04] to-transparent blur-2xl" />
            <Terminal title="reasonflow" className="relative">
              <TypingAnimation lines={terminalLines} typingSpeed={18} lineDelay={250} />
            </Terminal>
          </div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="h-6 w-[1px] bg-gradient-to-b from-transparent to-white/15" />
      </motion.div>
    </section>
  );
}
