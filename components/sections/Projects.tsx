"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Badge } from "@/components/ui/badge";

const FEATURED_PROJECT = {
  title: "ReasonFlow",
  description:
    "Autonomous inbox AI agent that classifies emails, retrieves context, and drafts responses with human-in-the-loop fallback when confidence drops.",
  metric: "94% confidence / sub-second retrieval",
  image: "/images/ReasonFlow_LandingPage.png",
  tags: ["LangGraph", "Gemini", "FastAPI", "pgvector"],
  href: "https://github.com/namanxdev",
};

const PROJECTS = [
  {
    title: "MCPHub",
    category: "Developer Tooling",
    description:
      "Postman for MCP servers. Test, debug, and discover MCP servers in the browser without building custom local harnesses first.",
    metric: "15+ pre-configured servers",
    status: "In development",
    image: "/images/MCPHUB_landingPage.png",
    tags: ["Next.js", "Supabase", "MCP SDK", "Tailwind"],
    href: "https://github.com/namanxdev/mcphub",
  },
  {
    title: "AgentMesh",
    category: "Mission Control",
    description:
      "MCP-native multi-agent orchestrator with a real-time dashboard for monitoring coordination, execution state, and agent communication.",
    metric: "3 agent templates / live orchestration",
    status: "Coming soon",
    image: "/images/AgentMesh_landingPage.png",
    tags: ["LangGraph", "FastAPI", "WebSocket", "React"],
    href: "https://github.com/namanxdev",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <BlurFade>
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
              Featured Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 text-base leading-8 text-white/58">
              Direct product surfaces, agent infrastructure, and tooling built to
              ship rather than just demo.
            </p>
          </div>
        </BlurFade>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl">
        <ContainerScroll
          className="h-[48rem] md:h-[62rem]"
          contentClassName="py-8 md:py-20"
          cardClassName="border-[#3a3a3a] bg-[#171717]"
          titleComponent={
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-5 px-4 text-left">
              <Badge
                variant="outline"
                className="rounded-full border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/72"
              >
                Featured build
              </Badge>
              <div>
                <h3 className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                  {FEATURED_PROJECT.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/58">
                  {FEATURED_PROJECT.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FEATURED_PROJECT.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/64"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          }
        >
          <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/8 bg-[#050507]">
            <Image
              src={FEATURED_PROJECT.image}
              alt="ReasonFlow product preview"
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,6,0.08),rgba(4,4,6,0.62))]" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-6 md:top-6">
              <span className="rounded-full border border-white/12 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/74 backdrop-blur-xl">
                Inbox agent
              </span>
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-blue-200 backdrop-blur-xl">
                {FEATURED_PROJECT.metric}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
              <div className="flex flex-col gap-4 rounded-[22px] border border-white/8 bg-black/45 p-4 backdrop-blur-xl md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    Why it matters
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/62">
                    This is the product-facing layer: triage, retrieval,
                    confidence, and review in one operating surface instead of a
                    backend-only workflow.
                  </p>
                </div>
                <a
                  href={FEATURED_PROJECT.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  View source
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>

      <div className="relative mx-auto -mt-28 grid max-w-6xl gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <BlurFade key={project.title} delay={0.08 * (index + 1)}>
            <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300 hover:border-white/16">
              <div className="relative h-[320px] overflow-hidden border-b border-white/10 bg-[#08080a]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,6,0.08),rgba(4,4,6,0.72))]" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/12 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/72 backdrop-blur-xl"
                  >
                    {project.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-blue-200 backdrop-blur-xl"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-[20px] border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                      Impact
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {project.metric}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/62"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/72 transition-colors hover:text-white"
                  >
                    Open project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl">
        <BlurFade delay={0.24}>
          <a
            href="https://github.com/namanxdev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
          >
            View more projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
