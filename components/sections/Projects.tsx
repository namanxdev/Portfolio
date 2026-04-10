"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WORK_LIST = [
  {
    title: "MCPHub",
    role: "Fullstack",
    year: "2024",
    client: "Open Source",
    link: "https://github.com/namanxdev/mcphub",
    metric: "15+ PRE-CONFIGURED SERVERS",
    image: "/images/MCPHUB_landingPage.png"
  },
  {
    title: "ReasonFlow",
    role: "AI/Backend",
    year: "2024",
    client: "Personal",
    link: "https://github.com/namanxdev",
    metric: "800ms RETRIEVAL",
    image: "/images/ReasonFlow_LandingPage.png"
  },
  {
    title: "AgentMesh",
    role: "Architecture",
    year: "2024",
    client: "In Development",
    link: "https://github.com/namanxdev",
    metric: "REAL-TIME WEBSOCKETS",
    image: "/images/AgentMesh_landingPage.png"
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Mouse coordinate tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configured for buttery smooth trailing
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Center the 400x300 floating image to the cursor
      mouseX.set(clientX - 200);
      mouseY.set(clientY - 150);
    };
    
    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050505] text-[#FAFAFA] py-32 sm:py-48"
    >
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#FAFAFA]/20" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#FAFAFA]/50 uppercase">
                Selected Works
              </span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              Agent <br />
              <span className="text-[#FAFAFA]/30 italic">Infrastructure.</span>
            </h2>
          </motion.div>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-t border-[#FAFAFA]/10 relative z-20">
          {WORK_LIST.map((work, idx) => (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-[#FAFAFA]/10 transition-colors duration-500 hover:bg-[#111111]/50 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col gap-2 relative z-10">
                <span className="font-mono text-[10px] text-[#FAFAFA]/40 tracking-widest uppercase mb-2 block md:hidden">
                  {work.metric}
                </span>
                <span className="text-[clamp(2rem,8vw,6rem)] font-medium tracking-tight group-hover:translate-x-4 md:group-hover:translate-x-12 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  {work.title}
                </span>
              </div>
              
              <div className="flex items-center gap-12 mt-6 md:mt-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 relative z-10">
                <div className="hidden lg:flex flex-col items-end text-right">
                  <span className="font-mono text-sm text-[#FAFAFA]/80 uppercase tracking-widest leading-relaxed">
                    {work.metric}
                  </span>
                  <span className="font-mono text-xs text-[#FAFAFA]/40 mt-1">
                    {work.role} — {work.year}
                  </span>
                </div>
                
                <div className="size-12 md:size-16 rounded-full border border-[#FAFAFA]/20 flex items-center justify-center bg-[#FAFAFA] text-black md:bg-transparent md:text-[#FAFAFA] md:group-hover:bg-[#FAFAFA] md:group-hover:text-black transition-all duration-500 md:-rotate-45 md:group-hover:rotate-0">
                  <ArrowUpRight className="size-5 md:size-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[300px] rounded-2xl overflow-hidden pointer-events-none z-[100] hidden lg:flex items-center justify-center bg-[#0a0a0a] shadow-2xl border border-white/10"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: hoveredIdx !== null ? 1 : 0,
          scale: hoveredIdx !== null ? 1 : 0.8,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const }
        }}
      >
        {hoveredIdx !== null && (
          <img 
            src={WORK_LIST[hoveredIdx].image} 
            alt={`${WORK_LIST[hoveredIdx].title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        )}
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-30 pointer-events-none" />
      </motion.div>
    </section>
  );
}
