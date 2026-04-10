"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

const HONORS = [
  {
    num: "01",
    event: "NASA Space Apps Challenge",
    placement: "Winner",
    metric: "Top 1% global",
    description:
      "AI-driven orbital mechanics and tracking solution built for high-signal decision support under hackathon constraints.",
    year: "2025",
  },
  {
    num: "02",
    event: "CodeSlayer, NIT Delhi",
    placement: "Finalist",
    metric: "Top 1% of 10,000+",
    description:
      "Systems-heavy build focused on architecture quality and execution speed in a competitive national setting.",
    year: "2025",
  },
  {
    num: "03",
    event: "MumbaiHacks",
    placement: "Finalist",
    metric: "Finance Tech track",
    description:
      "Finance-oriented hack built around fast reasoning loops and a practical product flow that reached the finals.",
    year: "2025",
  },
  {
    num: "04",
    event: "Smart India Hackathon",
    placement: "Finalist",
    metric: "Top 5% nationwide",
    description:
      "Problem-first system selected nationally that balanced strict constraints, scalability, and practical usability.",
    year: "2024",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#040404]">
      {/* Lamp beam — purely decorative, positioned at top of section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden">
        {/* Left conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-[#040404] [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-[#040404] [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-[#040404] [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-[#040404] [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Centre glow orb */}
        <div className="absolute left-1/2 top-0 z-10 h-36 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500 opacity-40 blur-3xl" />

        {/* Inner bright glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 z-30 h-28 w-64 -translate-x-1/2 rounded-full bg-cyan-400 blur-2xl"
        />

        {/* Horizontal line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 top-16 z-50 h-px -translate-x-1/2 bg-cyan-400"
        />

        {/* Fade beam into section background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#040404]" />
      </div>

      {/* Content — normal document flow, padded below the beam */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-48 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/35">
            Honors
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Recognition with actual signal.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
            Four competitive finishes — global, national, and track-level — with
            real build pressure and limited execution time.
          </p>
        </motion.div>

        {/* Leaderboard rows */}
        <div className="w-full divide-y divide-white/8">
          {HONORS.map((item, index) => (
            <BlurFade key={item.event} delay={0.1 * (index + 1)}>
              <div className="flex items-start gap-5 py-7 sm:gap-8">
                {/* Row number */}
                <span className="w-7 shrink-0 pt-1 text-[11px] uppercase tracking-[0.22em] text-white/20">
                  {item.num}
                </span>

                {/* Main */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">
                      {item.event}
                    </h3>
                    <Badge
                      variant="outline"
                      className="rounded-full border-white/12 bg-white/[0.04] px-3 py-0.5 text-[10px] uppercase tracking-[0.16em] text-white/55"
                    >
                      {item.placement}
                    </Badge>
                    <span className="text-[11px] text-white/22">{item.year}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="hidden shrink-0 text-right sm:block">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-white/70">
                    {item.metric}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
