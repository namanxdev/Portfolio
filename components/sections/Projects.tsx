"use client";

import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { Safari } from "@/components/ui/safari";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "reasonflow",
    title: "ReasonFlow",
    description:
      "Autonomous inbox AI agent that classifies emails, retrieves context, and drafts responses with human-in-the-loop fallback.",
    tags: ["LangGraph", "Gemini", "FastAPI", "pgvector"],
    metric: "Sub-second retrieval, 94% confidence",
    featured: true,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "campusmitra",
    title: "CampusMitra",
    description:
      "AI-powered campus assistance platform with RAG-based document Q&A and event management.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "React"],
    metric: "500+ student queries automated",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "mcphub",
    title: "MCPHub",
    description:
      "Postman for MCP Servers — test, debug, and discover MCP servers in your browser.",
    tags: ["Next.js", "Supabase", "MCP SDK", "Tailwind"],
    metric: "15+ pre-configured servers",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "agentmesh",
    title: "AgentMesh",
    description:
      "MCP-native multi-agent orchestrator with real-time Mission Control dashboard.",
    tags: ["LangGraph", "FastAPI", "WebSocket", "React"],
    metric: "3 agent templates, real-time viz",
    featured: false,
    links: {
      github: "#",
      demo: "#",
    },
  },
];

function ProjectCard({
  project,
  className,
}: {
  project: (typeof projects)[0];
  className?: string;
}) {
  return (
    <BentoGridItem
      className={className}
      title={
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-neutral-100">
            {project.title}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.links.demo}
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      }
      description={
        <div className="flex flex-col gap-3">
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] border-white/10 text-neutral-400 bg-transparent hover:bg-white/5"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xs font-medium text-blue-400 mt-1">
            {project.metric}
          </p>
        </div>
      }
      header={
        project.featured ? (
          <div className="relative w-full mb-4">
            <Safari
              url="reasonflow.dev"
              className="w-full"
              mode="simple"
            />
            <BorderBeam
              size={60}
              duration={6}
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
              borderWidth={1}
              className="opacity-60"
            />
          </div>
        ) : null
      }
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-100 tracking-tight mb-2">
              Projects
            </h2>
            <p className="text-neutral-500">Things I&apos;ve built and shipped</p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <BentoGrid className="md:auto-rows-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  group relative overflow-hidden rounded-xl
                  ${project.featured ? "md:col-span-2" : "md:col-span-1"}
                `}
              >
                <CardSpotlight
                  className="h-full bg-[#111111] border border-white/[0.05] rounded-xl p-0"
                  color="rgba(59, 130, 246, 0.08)"
                  radius={300}
                >
                  <div className="p-6 h-full flex flex-col">
                    <ProjectCard
                      project={project}
                      className={`
                        bg-transparent border-0 shadow-none p-0
                        ${project.featured ? "md:col-span-2" : ""}
                      `}
                    />
                  </div>
                </CardSpotlight>
              </div>
            ))}
          </BentoGrid>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors group"
            >
              View all projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
