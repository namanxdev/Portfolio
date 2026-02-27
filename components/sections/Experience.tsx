"use client";

import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { BlurFade } from "@/components/ui/blur-fade";

interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  description: string;
  metric: string;
}

const experiences: ExperienceEntry[] = [
  {
    company: "Infradock.ai",
    role: "AI Engineer Intern",
    date: "Jan 2026 – Present",
    description:
      "Building multi-agent workflows and RAG pipelines for enterprise clients. Architected semantic chunking strategies and cross-encoder reranking systems that achieved 95%+ retrieval precision on technical documentation. Implementing evaluation frameworks for continuous improvement of agent performance.",
    metric: "95%+ retrieval precision",
  },
  {
    company: "Oldowan Innovations",
    role: "Software Developer Intern",
    date: "Oct 2025 – Feb 2026",
    description:
      "Engineered recommendation engine and real-time notification system processing 10,000+ daily events with sub-50ms latency. Built scalable microservices architecture using FastAPI and PostgreSQL, reducing infrastructure costs by 30% through query optimization and caching strategies.",
    metric: "10,000+ daily events • sub-50ms latency",
  },
  {
    company: "Yantram Medtech",
    role: "Software Engineer Intern",
    date: "Jul – Oct 2025",
    description:
      "Built healthcare microservices with JWT-based RBAC for HIPAA compliance. Reduced database latency by 25% via targeted indexing and query restructuring. Implemented automated testing pipelines achieving 90%+ code coverage across critical patient data modules.",
    metric: "25% database latency reduction",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050505] py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <BlurFade delay={0} inView>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ededed] mb-12 tracking-tight">
            Experience
          </h2>
        </BlurFade>

        <TracingBeam>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <BlurFade key={exp.company} delay={0.1 + index * 0.1} inView>
                <div className="relative pl-8 md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1e1e1e] border border-[#3b82f6]/30" />

                  {/* Card */}
                  <div className="p-6 rounded-xl border border-[#1e1e1e] bg-[#0a0a0a]/50 hover:border-[#3b82f6]/20 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#ededed]">
                          {exp.company}
                        </h3>
                        <p className="text-[#888888] text-sm">{exp.role}</p>
                      </div>
                      <span className="text-[#555555] text-sm whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#888888] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Metric */}
                    <p className="text-blue-500 text-sm font-medium">
                      {exp.metric}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
