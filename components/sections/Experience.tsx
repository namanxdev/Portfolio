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
      "Engineered a bidirectional recommendation engine with 15+ weighted compatibility factors, achieving ~35% relevancy uplift. Built real-time notification microservice processing 10K+ daily events at sub-50ms latency using Celery, Redis, and Stream Chat webhooks.",
  },
  {
    company: "Yantram Medtech",
    role: "Software Engineer Intern",
    period: "Jul — Oct 2025",
    description:
      "Built Node.js microservices with JWT-based RBAC for healthcare compliance. Optimized PostgreSQL and MongoDB queries, reducing database latency by 25%. Architected React + TypeScript frontend enabling 35% faster cross-team development.",
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-blue-400">
            // experience
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Where I&apos;ve built
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="group rounded-2xl border border-white/[0.06] bg-zinc-900/30 p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-zinc-900/50"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.company}
                    </h3>
                    {exp.active && (
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{exp.role}</p>
                </div>
                <span className="shrink-0 font-mono text-sm text-zinc-600">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
