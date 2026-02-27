"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI/ML & Agents",
    skills: [
      "LangChain",
      "LangGraph",
      "Gemini API",
      "Hugging Face",
      "RAG",
      "Agentic Workflows",
      "MCP",
    ],
    highlight: true,
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Data & Vector DBs",
    skills: [
      "PostgreSQL",
      "pgvector",
      "ChromaDB",
      "Qdrant",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Django",
      "FastAPI",
      "Node.js",
      "Docker",
      "AWS",
      "Celery",
      "GitHub Actions",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
  },
];

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative z-10 py-24 md:py-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-blue-400">// skills</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technical toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3
                className={`mb-4 text-xs font-medium uppercase tracking-widest ${
                  group.highlight ? "text-blue-400" : "text-zinc-500"
                }`}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.05] bg-white/[0.04] px-2.5 py-1 text-[12px] text-zinc-400 transition-all duration-200 hover:border-white/[0.1] hover:text-zinc-300"
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
