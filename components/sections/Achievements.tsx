"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const achievements = [
  { title: "NASA Space Apps 2025", result: "Winner", accent: true },
  { title: "CodeSlayer · NIT Delhi", result: "Top 1% of 10K+" },
  { title: "MumbaiHacks · FinTech", result: "Finalist" },
  { title: "Smart India Hackathon", result: "Top 5% nationwide" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Achievements
          </p>
          <h2 className="mb-12 text-[28px] font-bold tracking-tight text-white sm:text-[32px]">
            Competitions
          </h2>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <div className="flex flex-wrap gap-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 transition-colors ${
                  item.accent
                    ? "border-emerald-500/20 bg-emerald-500/[0.05]"
                    : "border-white/[0.06] bg-white/[0.02]"
                } hover:border-white/[0.12]`}
              >
                <span className="text-[13px] text-white/70">{item.title}</span>
                <span className={`text-[12px] font-medium ${
                  item.accent ? "text-emerald-400" : "text-[#3b82f6]/70"
                }`}>
                  {item.result}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
