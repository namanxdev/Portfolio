"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Canvas } from "@react-three/fiber";
import { ShaderPlane, EnergyRing } from "@/components/ui/background-paper-shaders";
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react";

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
    <section id="achievements" className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Mesh Gradient Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <MeshGradient
          colors={["#0a0a0a", "#111111", "#1e1e1e", "#2a2a2a"]}
          speed={0.015}
          swirl={0.6}
        />
        <DotOrbit
          colors={["#ffffff", "#888888", "#555555"]}
          colorBack="#0a0a0a"
          speed={0.4}
          size={0.8}
        />
        <div className="absolute inset-0 opacity-50 mix-blend-lighten">
          <Canvas camera={{ position: [0, 0, 1.5], fov: 90 }}>
            <ShaderPlane
              position={[0, 0, 0]}
              color1="#ffffff" // White
              color2="#555555" // Grey
            />
          </Canvas>
        </div>
        {/* Gradients to blend edges into the #0a0a0a background perfectly */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0a0a,transparent_10%,transparent_90%,#0a0a0a)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_100%)]" />
      </div>

      {/* Content — normal document flow, padded below the beam */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-[#888888] font-semibold">
            Honors & Awards
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#ededed] to-[#888888] sm:text-5xl">
            Recognition with actual signal.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#888888] leading-relaxed">
            Four competitive finishes — global, national, and track-level — with
            real build pressure and limited execution time.
          </p>
        </motion.div>

        {/* Leaderboard rows */}
        <div className="mx-auto w-full max-w-4xl divide-y divide-[#1e1e1e]">
          {HONORS.map((item, index) => (
            <BlurFade key={item.event} delay={0.1 * (index + 1)}>
              <div className="group flex flex-col sm:flex-row sm:items-center gap-4 py-8 px-6 -mx-6 rounded-2xl border border-transparent transition-all duration-300 hover:bg-[#111111] hover:border-[#1e1e1e] hover:shadow-[0_0_30px_-15px_rgba(255,255,255,0.05)]">
                {/* Row number */}
                <span className="w-12 shrink-0 font-mono text-sm text-[#555555] transition-colors group-hover:text-[#ededed]">
                  {item.num}
                </span>

                {/* Main */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-[#ededed] transition-colors group-hover:text-white">
                      {item.event}
                    </h3>
                    <Badge
                      variant="outline"
                      className="rounded-full border-[#1e1e1e] bg-[#0a0a0a] px-3 py-0.5 text-[11px] font-medium text-[#888888] transition-colors group-hover:border-[#888888]/30 group-hover:text-[#ededed]"
                    >
                      {item.placement}
                    </Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#888888] transition-colors group-hover:text-[#aaaaaa]">
                    {item.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="mt-2 sm:mt-0 shrink-0 text-left sm:text-right">
                  <p className="text-[15px] font-semibold text-[#ededed]">
                    {item.metric}
                  </p>
                  <span className="text-xs text-[#555555] font-mono mt-1 block">{item.year}</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
