"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ReasonFlow",
    description:
      "Autonomous inbox AI — classifies emails, retrieves context via RAG, drafts responses with human-in-the-loop.",
    tech: ["LangGraph", "Gemini", "FastAPI", "pgvector"],
    metric: "Sub-second retrieval · 94% confidence",
    href: "https://github.com/namanxdev/ReasonFlow",
    gradient: "from-blue-950/40 to-indigo-950/30",
    accentColor: "blue",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    iconBg: "bg-blue-500/10 border-blue-500/20",
    hoverBorder: "hover:border-blue-500/20",
    metricColor: "text-blue-400/80",
    titleHover: "group-hover:text-blue-300",
    lineColor: "via-blue-500/30",
  },
  {
    title: "CampusMitra",
    description:
      "Domain-specific RAG assistant with custom retrieval pipelines and fine-tuned embeddings. 1,000+ concurrent queries.",
    tech: ["FastAPI", "LangChain", "ChromaDB", "HuggingFace"],
    metric: "40% MRR improvement · top-k accuracy boost",
    href: "https://github.com/namanxdev/CampusMitra",
    gradient: "from-emerald-950/40 to-teal-950/30",
    accentColor: "emerald",
    icon: (
      <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/20",
    metricColor: "text-emerald-400/80",
    titleHover: "group-hover:text-emerald-300",
    lineColor: "via-emerald-500/30",
  },
  {
    title: "MCPHub",
    description:
      "Postman for MCP Servers — test, debug, and discover MCP servers in your browser.",
    tech: ["Next.js", "Supabase", "MCP SDK", "Tailwind"],
    metric: "15+ pre-configured servers",
    href: "https://github.com/namanxdev/MCPHub",
    gradient: "from-purple-950/40 to-violet-950/30",
    accentColor: "purple",
    status: "In Development",
    icon: (
      <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    iconBg: "bg-purple-500/10 border-purple-500/20",
    hoverBorder: "hover:border-purple-500/20",
    metricColor: "text-purple-400/80",
    titleHover: "group-hover:text-purple-300",
    lineColor: "via-purple-500/30",
  },
];

const gridPattern = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
  backgroundSize: "24px 24px",
};

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-blue-400">// projects</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 text-zinc-500">
            Agent systems, RAG pipelines, and developer tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/40 transition-all duration-500 ${project.hoverBorder} hover:bg-zinc-900/70`}
            >
              {/* Visual header */}
              <div
                className={`relative h-44 overflow-hidden border-b border-white/[0.04] bg-gradient-to-br ${project.gradient}`}
              >
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={gridPattern}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border ${project.iconBg} transition-transform duration-500 group-hover:scale-110`}
                  >
                    {project.icon}
                  </div>
                </div>
                <div
                  className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${project.lineColor} to-transparent`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <h3
                    className={`text-base font-semibold text-white transition-colors ${project.titleHover}`}
                  >
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-400">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.04] bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 border-t border-white/[0.04] pt-3">
                  <span className={`text-[12px] font-medium ${project.metricColor}`}>
                    {project.metric}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/namanxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            View all projects on GitHub &rarr;
          </a>
        </div>
      </div>
    </motion.section>
  );
}
