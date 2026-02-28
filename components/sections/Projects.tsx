"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { Safari } from "@/components/ui/safari";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MCPHub",
    description:
      "Postman for MCP Servers — test, debug, and discover context protocols in your browser.",
    tags: ["NEXT.JS", "SUPABASE", "MCP SDK"],
    metric: "15+ PRE-CONFIGURED SERVERS",
    link: "#",
    status: "LIVE DEMO",
    previewUrl: "https://github.com/namanxdev",
    previewImage: "https://opengraph.githubassets.com/1/namanxdev",
  },
  {
    title: "ReasonFlow",
    description:
      "Autonomous inbox AI agent that classifies emails, retrieves context, and drafts responses with human-in-the-loop fallback.",
    tags: ["LANGGRAPH", "GEMINI", "FASTAPI"],
    metric: "800ms RETRIEVAL · 94% CONFIDENCE",
    link: "#",
    status: "GITHUB",
    previewUrl: "https://github.com/namanxdev",
    previewImage: "https://opengraph.githubassets.com/1/namanxdev",
  },
  {
    title: "AgentMesh",
    description:
      "MCP-native multi-agent orchestrator with real-time Mission Control websocket dashboard.",
    tags: ["PYTHON", "WEBSOCKETS", "REACT"],
    metric: "REAL-TIME VISUALIZATION",
    link: "#",
    status: "COMING SOON",
    previewUrl: "https://github.com/namanxdev",
    previewImage: "https://opengraph.githubassets.com/1/namanxdev",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-[#0A0A0A] py-32 z-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Section Header */}
        <BlurFade delay={0.1} offset={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-zinc-700" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  Selected Works
                </span>
              </div>
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[0.9] text-[#FAFAFA]">
                Things I&apos;ve <br />
                <span className="text-zinc-600">built &amp; shipped.</span>
              </h2>
            </div>
            <p className="max-w-sm text-zinc-400 font-light leading-relaxed mb-2 md:mb-0">
              Infrastructure, agentic workflows, and protocol tools designed for scale and production reliability.
            </p>
          </div>
        </BlurFade>

        {/* Project List */}
        <div className="border-t border-white/[0.05]">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={0.2 + index * 0.1} offset={20}>
              <div
                className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-16 lg:py-20 border-b border-white/[0.05] cursor-pointer transition-colors hover:bg-white/[0.01]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Left Column: Typography */}
                <div className="flex-1 pr-0 lg:pr-12 relative z-10 w-full">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="font-mono text-sm text-zinc-600">
                      0{index + 1}
                    </span>
                    <div className="h-1 w-1 rounded-full bg-zinc-800" />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] px-2.5 py-1 rounded-[4px] border border-white/10 text-zinc-400 tracking-wider group-hover:border-white/20 transition-colors bg-[#0f0f0f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#FAFAFA] mb-6 tracking-tight group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {project.title}
                  </h3>

                  <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 mt-10 lg:hidden">
                    <div className="flex items-center gap-2 text-white font-medium text-sm">
                      {project.status}
                      <ArrowUpRight className="size-4" />
                    </div>
                    <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Right Column: Safari Browser Preview on Hover */}
                <div className="hidden lg:flex flex-col items-end shrink-0 relative z-10">
                  <div className="relative w-[360px] xl:w-[440px]">
                    <AnimatePresence initial={false} mode="wait">
                      {hoveredIndex !== index ? (
                        <motion.div
                          key="abstract"
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-[220px] rounded-xl bg-[#0F0F0F] border border-white/[0.04] overflow-hidden flex items-center justify-center"
                        >
                          <div className="relative w-full h-full flex items-center justify-center opacity-20">
                            <div className="w-full h-[1px] bg-zinc-800 absolute top-1/2 -translate-y-1/2" />
                            <div className="h-full w-[1px] bg-zinc-800 absolute left-1/2 -translate-x-1/2" />
                            <div className="size-24 rounded-full border border-zinc-700" />
                            <div className="size-48 rounded-full border border-zinc-800 absolute" />
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/5 font-mono text-[9px] text-blue-400 uppercase tracking-widest font-medium">
                              {project.metric}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="safari"
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.06]"
                        >
                          <Safari
                            url={project.previewUrl}
                            imageSrc={project.previewImage}
                            className="w-full"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex items-center gap-3 mt-5 text-zinc-500 group-hover:text-white transition-colors duration-500">
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {project.status}
                    </span>
                    <ArrowUpRight className="size-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
