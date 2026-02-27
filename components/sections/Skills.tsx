"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

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
    skills: ["PostgreSQL", "pgvector", "ChromaDB", "Qdrant", "MongoDB", "MySQL", "Redis", "Pandas"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Django", "FastAPI", "Node.js", "Docker", "AWS (S3)", "Celery", "Cloudflare R2", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "Redux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Skills
          </p>
          <h2 className="mb-14 text-[28px] font-bold tracking-tight text-white sm:text-[32px]">
            Technical toolkit
          </h2>
        </BlurFade>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <BlurFade key={group.title} delay={0.12 + i * 0.06} inView>
              <div>
                <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#52525b]">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[12px] text-[#a1a1aa] transition-colors hover:border-white/[0.12] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
