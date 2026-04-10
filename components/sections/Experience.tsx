"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const experiences = [
  {
    company: "Infradock.ai",
    role: "AI Engineer Intern",
    date: "JAN 2026 — PRESENT",
    description:
      "Building multi-agent workflows and RAG pipelines for enterprise clients. Achieved 95%+ retrieval precision through semantic chunking and cross-encoder reranking.",
    metric: "95%+ RETRIEVAL PRECISION",
    link: "#",
    tags: ["LangGraph", "Gemini", "RAG", "Vector DBs"],
  },
  {
    company: "Oldowan Innovations",
    role: "Software Developer Intern",
    date: "OCT 2025 — PRESENT",
    description:
      "Engineered recommendation engine and real-time notification system processing 10,000+ daily events with sub-50ms latency.",
    metric: "SUB-50MS LATENCY",
    link: "#",
    tags: ["Python", "Kafka", "Redis", "WebSockets"],
  },
  {
    company: "Yantram Medtech",
    role: "Software Engineer Intern",
    date: "JUL — OCT 2025",
    description:
      "Built healthcare microservices with JWT-based RBAC. Reduced database latency by 25% via targeted indexing.",
    metric: "25% LATENCY REDUCTION",
    link: "#",
    tags: ["FastAPI", "PostgreSQL", "Docker", "AWS"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0A0A0A] py-32 z-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Section Header */}
        <BlurFade delay={0.1} offset={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-zinc-700" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  Career
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[0.9] text-[#FAFAFA]">
                Places I've <br />
                <span className="text-zinc-600">worked.</span>
              </h2>
            </div>
            <p className="max-w-sm text-zinc-400 font-light leading-relaxed mb-2 md:mb-0">
              Real world systems, impactful technical decisions, and shipping at production scale.
            </p>
          </div>
        </BlurFade>

        {/* Experience List using Tracing Beam */}
        <div className="mt-12 md:mt-24 border-t border-white/[0.05] pt-12 md:pt-24">
          <TracingBeam className="px-0 md:px-0 max-w-5xl lg:max-w-[1100px] mx-0 w-full ml-4 md:ml-12 lg:ml-20">
            <div className="space-y-24 md:space-y-40 antialiased relative">
              {experiences.map((exp, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} offset={20}>
                  <div className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    
                    {/* Left Column: Abstract Tech Data */}
                    <div className="md:w-[250px] shrink-0 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-blue-500 tracking-[0.2em] uppercase">
                          [0{index + 1}]
                        </span>
                        <div className="h-[1px] w-8 bg-white/[0.1] group-hover:bg-blue-500/50 group-hover:w-16 transition-all duration-500 ease-out" />
                      </div>
                      
                      <div className="flex flex-col">
                        <p className="font-mono text-sm tracking-tight text-white mb-1 group-hover:text-blue-200 transition-colors">
                          {exp.company}
                        </p>
                        <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                          {exp.date}
                        </p>
                      </div>

                      <div className="hidden md:flex flex-col gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <div key={tag} className="flex items-center gap-2">
                            <div className="h-[1px] w-2 bg-zinc-800" />
                            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Roles & Description */}
                    <a 
                      href={exp.link} 
                      className="block relative cursor-pointer group/link flex-1 w-full"
                    >
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-[-0.02em] text-white mb-6 pr-4">
                        <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-3 group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:from-zinc-100 group-hover/link:to-blue-200">
                          {exp.role}
                        </span>
                        <ArrowUpRight className="inline-block ml-4 size-6 md:size-8 lg:size-10 text-zinc-600 md:opacity-0 md:-translate-y-4 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      </h3>

                      <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl group-hover/link:text-zinc-200 transition-colors duration-500">
                        {exp.description}
                      </p>

                      <div className="mt-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-white/[0.04] bg-[#0A0A0A] overflow-hidden relative group-hover/link:border-blue-500/30 transition-colors duration-500">
                          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500" />
                          <div className="relative size-1.5 bg-blue-500 flex-shrink-0 shadow-[0_0_10px_2px_rgba(59,130,246,0.6)]">
                            <div className="absolute inset-0 bg-blue-500 animate-ping opacity-60" />
                          </div>
                          <span className="relative font-mono text-[9px] text-blue-400 uppercase tracking-widest font-medium">
                            {exp.metric}
                          </span>
                        </div>
                      </div>
                    </a>

                  </div>
                </BlurFade>
              ))}
            </div>
          </TracingBeam>
        </div>

      </div>
    </section>
  );
}
