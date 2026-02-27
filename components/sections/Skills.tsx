"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI/ML & Agents",
    skills: ["LangChain", "LangGraph", "Gemini API", "Hugging Face", "RAG", "Agentic Workflows", "MCP"],
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Data & Vector DBs",
    skills: ["PostgreSQL", "pgvector", "ChromaDB", "Qdrant", "MongoDB", "Redis"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Django", "FastAPI", "Node.js", "Docker", "AWS (S3)", "Celery", "Cloudflare R2", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
        <p className="text-lg text-zinc-400 mb-12">Technologies and tools I work with daily.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
