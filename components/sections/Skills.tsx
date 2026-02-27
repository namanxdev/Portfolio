"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { IconCloud } from "@/components/ui/icon-cloud"
import { Marquee } from "@/components/ui/marquee"
import { Badge } from "@/components/ui/badge"

const skillGroups = [
  {
    title: "AI/ML & Agents",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "OpenAI API",
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
    highlight: false,
  },
  {
    title: "Data & Vector DBs",
    skills: ["PostgreSQL", "pgvector", "ChromaDB", "Qdrant", "MongoDB", "Redis"],
    highlight: false,
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
      "CI/CD",
    ],
    highlight: false,
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    highlight: false,
  },
]

const iconSlugs = [
  "python",
  "typescript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "postgresql",
  "docker",
  "git",
  "github",
  "fastapi",
  "mongodb",
  "redis",
  "nodedotjs",
  "amazonaws",
  "django",
]

const iconUrls = iconSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/888888`
)

const allSkills = skillGroups.flatMap((group) => group.skills)

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-8 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <BlurFade>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            Technical Skills
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            {skillGroups.map((group, groupIndex) => (
              <BlurFade key={group.title} delay={0.1 + groupIndex * 0.05}>
                <div
                  className={`p-5 rounded-xl border ${
                    group.highlight
                      ? "border-[#3b82f6]/30 bg-[#3b82f6]/5"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <h3
                    className={`text-sm font-medium mb-4 ${
                      group.highlight
                        ? "text-[#3b82f6]"
                        : "text-[#888888]"
                    }`}
                  >
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-xs font-normal ${
                          group.highlight
                            ? "border-[#3b82f6]/30 text-[#ededed] hover:bg-[#3b82f6]/10"
                            : "border-white/10 text-[#888888] hover:bg-white/5"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="lg:col-span-3 flex items-center justify-center">
            <BlurFade delay={0.2} className="w-full max-w-[500px]">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full blur-3xl" />
                <IconCloud images={iconUrls} />
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="mt-20">
          <BlurFade delay={0.3}>
            <div className="border-y border-white/5 py-6 -mx-6 md:-mx-8 overflow-hidden">
              <Marquee
                pauseOnHover
                className="[--duration:60s] [--gap:1.5rem]"
              >
                {allSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm font-normal px-4 py-1.5 border-white/10 text-[#888888] hover:bg-white/5 hover:text-[#ededed] transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
