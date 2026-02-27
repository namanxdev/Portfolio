"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 font-mono text-sm text-blue-400">// contact</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          Open to AI engineering roles, agent infrastructure work, and
          interesting problems.
        </p>
        <a
          href="mailto:namanguptabhopal@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          Get in touch
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </motion.section>
  );
}
