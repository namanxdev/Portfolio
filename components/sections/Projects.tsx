"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "MCPHub",
    description:
      "Postman for MCP Servers — test, debug, and discover MCP servers in your browser.",
    tech: ["Next.js", "Supabase", "MCP SDK", "Tailwind"],
    metric: "15+ pre-configured servers",
    href: "https://github.com/namanxdev",
    status: "In Development",
    featured: true,
  },
  {
    title: "ReasonFlow",
    description:
      "Autonomous inbox AI agent — classifies emails, retrieves context, and drafts responses with human-in-the-loop fallback.",
    tech: ["LangGraph", "Gemini 1.5 Pro", "FastAPI", "pgvector", "Next.js"],
    metric: "Sub-second retrieval · 94% draft confidence",
    href: "https://github.com/namanxdev",
  },
  {
    title: "AgentMesh",
    description:
      "MCP-native multi-agent orchestrator with real-time Mission Control dashboard.",
    tech: ["LangGraph", "FastAPI", "WebSocket", "React"],
    metric: "3 agent templates, real-time visualization",
    href: "https://github.com/namanxdev",
    status: "Coming Soon",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <motion.section
      id="projects"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h2>
        <p className="text-lg text-zinc-400 mb-12">Things I&apos;ve built and shipped.</p>

        <div className="mb-5">
          <ProjectCard {...featured} featured />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/namanxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-white"
          >
            View all on GitHub
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
