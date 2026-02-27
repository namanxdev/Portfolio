"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const experiences = [
  {
    company: "Infradock.ai",
    role: "AI Engineer Intern",
    period: "Jan 2026 — Present",
    bullets: [
      "Multi-agent workflows with LangGraph & LangChain — automating 500+ daily queries, ~60% less manual review.",
      "RAG pipeline accuracy up ~40% (95%+ precision) via semantic chunking, clause-level boundaries, and cross-encoder reranking on Qdrant.",
    ],
    active: true,
  },
  {
    company: "Oldowan Innovations",
    role: "Software Developer Intern",
    period: "Oct 2025 — Feb 2026",
    bullets: [
      "Bidirectional recommendation engine with 15+ weighted compatibility factors — ~35% relevancy uplift.",
      "Real-time notification microservice with Stream Chat webhooks, Celery, Redis — 10K+ daily events at sub-50ms.",
    ],
  },
  {
    company: "Yantram Medtech",
    role: "Software Engineer Intern",
    period: "Jul — Oct 2025",
    bullets: [
      "Node.js/Express microservices with JWT-based RBAC for healthcare compliance.",
      "PostgreSQL + MongoDB indexing optimization — 25% latency reduction.",
      "React + TypeScript frontend architecture — 35% faster cross-app dev cycles.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Experience
          </p>
          <h2 className="mb-14 text-[28px] font-bold tracking-tight text-white sm:text-[32px]">
            Where I&apos;ve built
          </h2>
        </BlurFade>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-2 bottom-2 left-[5px] hidden w-[1px] bg-gradient-to-b from-[#3b82f6]/30 via-white/[0.06] to-transparent sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <BlurFade key={exp.company} delay={0.12 + i * 0.08} inView>
                <div className="group relative sm:pl-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1.5 hidden h-[11px] w-[11px] rounded-full border-2 sm:block ${
                    exp.active
                      ? "border-[#3b82f6] bg-[#3b82f6]/20 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                      : "border-[#27272a] bg-[#09090b] group-hover:border-white/20"
                  } transition-colors`} />

                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-[15px] font-semibold text-white">{exp.company}</h3>
                      {exp.active && (
                        <span className="rounded-full bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium text-[#3b82f6]">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] text-white/20">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-white/30">{exp.role}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-[1.7] text-white/45">
                        <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-white/15" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
