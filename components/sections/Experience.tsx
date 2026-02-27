"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Infradock.ai",
    role: "AI Engineer Intern",
    period: "Jan 2026 — Present",
    description:
      "Building multi-agent workflows with LangGraph and LangChain, automating 500+ daily queries with ~60% reduction in manual review. Improved RAG pipeline precision to 95%+ through semantic chunking, clause-level boundaries, and cross-encoder reranking on Qdrant.",
    active: true,
  },
  {
    company: "Oldowan Innovations",
    role: "Software Developer Intern",
    period: "Oct 2025 — Feb 2026",
    description:
      "Engineered a bidirectional recommendation engine with 15+ weighted compatibility factors, achieving ~35% relevancy uplift. Built real-time notification microservice processing 10K+ daily events at sub-50ms latency.",
  },
  {
    company: "Yantram Medtech",
    role: "Software Engineer Intern",
    period: "Jul — Oct 2025",
    description:
      "Built Node.js microservices with JWT-based RBAC for healthcare compliance. Optimized database queries across PostgreSQL and MongoDB, reducing latency by 25%.",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience</h2>
        <p className="text-lg text-zinc-400 mb-12">Where I&apos;ve built and shipped.</p>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-blue-500/20 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-semibold text-white">{exp.company}</h3>
                  {exp.active && (
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <span className="text-xs text-zinc-500">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{exp.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
