"use client";

import { motion } from "framer-motion";

const achievements = [
  { title: "NASA Space Apps Challenge 2025", result: "Winner · Top 1% Global" },
  { title: "CodeSlayer 2025 · NIT Delhi", result: "Finalist · Top 1% of 10K+" },
  { title: "MumbaiHacks 2025 · FinTech", result: "Finalist · Top ~5%" },
  { title: "Smart India Hackathon 2024", result: "Finalist · Top 5% nationwide" },
];

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Achievements</h2>
        <p className="text-lg text-zinc-400 mb-12">Competitions and hackathons.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-zinc-950/50 p-4 transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/50"
            >
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="mt-1 text-xs text-blue-400">{item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
