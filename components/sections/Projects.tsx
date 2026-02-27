"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "ReasonFlow",
    description:
      "Autonomous inbox AI agent. Classifies emails, retrieves context via hybrid search (semantic + keyword) over CRM data using PostgreSQL and pgvector, and drafts responses with a human-in-the-loop fallback for low-confidence inferences routed through a Next.js dashboard.",
    tech: ["LangGraph", "Gemini 1.5 Pro", "FastAPI", "pgvector", "Next.js"],
    metric: "Sub-second retrieval · 94% draft confidence",
    href: "https://github.com/namanxdev",
    featured: true,
  },
  {
    title: "CampusMitra",
    description:
      "Domain-specific RAG assistant with custom retrieval pipelines and fine-tuned Hugging Face embeddings. Handles 1,000+ concurrent queries.",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Hugging Face"],
    metric: "40% improvement in MRR and top-k accuracy",
    href: "https://github.com/namanxdev",
  },
  {
    title: "MCPHub",
    description:
      "Postman for MCP Servers — test, debug, and discover Model Context Protocol servers in your browser with pre-configured templates.",
    tech: ["Next.js", "Supabase", "MCP SDK", "Tailwind"],
    metric: "15+ pre-configured servers",
    href: "https://github.com/namanxdev",
    status: "In Development",
  },
];

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Projects
          </p>
          <h2 className="mb-4 text-[28px] font-bold tracking-tight text-white sm:text-[32px]">
            Things I&apos;ve built
          </h2>
          <p className="mb-14 max-w-md text-[15px] leading-relaxed text-white/30">
            Agent systems, RAG pipelines, and developer tools — open source.
          </p>
        </BlurFade>

        {/* Featured project — full width */}
        <BlurFade delay={0.15} inView>
          <div className="mb-5">
            <ProjectCard {...featured} featured />
          </div>
        </BlurFade>

        {/* Rest in grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((project, i) => (
            <BlurFade key={project.title} delay={0.2 + i * 0.08} inView>
              <ProjectCard {...project} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.4} inView>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/namanxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/25 transition-colors hover:text-white/60"
            >
              View all on GitHub
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
