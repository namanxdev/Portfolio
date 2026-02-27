"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    event: "NASA Space Apps 2025",
    result: "Winner",
    detail: "Top 1% Global",
    color: "text-amber-400",
  },
  {
    event: "CodeSlayer · NIT Delhi",
    result: "Finalist",
    detail: "Top 1% of 10K+",
    color: "text-blue-400",
  },
  {
    event: "MumbaiHacks · FinTech",
    result: "Finalist",
    detail: "Finance Track",
    color: "text-emerald-400",
  },
  {
    event: "Smart India Hackathon",
    result: "Finalist",
    detail: "Top 5% nationwide",
    color: "text-purple-400",
  },
];

export function Achievements() {
  return (
    <motion.section
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-blue-400">
            // achievements
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Competitions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <div
              key={item.event}
              className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-5 transition-all duration-300 hover:border-white/[0.1]"
            >
              <div
                className={`mb-3 text-xs font-semibold uppercase tracking-wider ${item.color}`}
              >
                {item.result}
              </div>
              <div className="text-sm font-medium text-white">{item.event}</div>
              <div className="mt-1 text-xs text-zinc-500">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
