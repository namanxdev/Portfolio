"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ACHIEVEMENTS = [
  {
    id: "01",
    year: "2025",
    title: "NASA Space Apps",
    subtitle: "Challenge",
    role: "Global Winner",
    desc: "Top 1% Global. Built an AI-driven orbital mechanics predictor.",
    glow: "rgba(59, 130, 246, 0.4)", // Blue
  },
  {
    id: "02",
    year: "2025",
    title: "CodeSlayer",
    subtitle: "NIT Delhi",
    role: "Finalist",
    desc: "Top 1% of 10,000+ participants. Engineered a distributed system.",
    glow: "rgba(16, 185, 129, 0.4)", // Emerald
  },
  {
    id: "03",
    year: "2025",
    title: "MumbaiHacks",
    subtitle: "Finance Tech",
    role: "Finalist",
    desc: "Developed an autonomous trading agent protocol.",
    glow: "rgba(249, 115, 22, 0.4)", // Orange
  },
  {
    id: "04",
    year: "2024",
    title: "Smart India",
    subtitle: "Hackathon",
    role: "Finalist",
    desc: "Top 5% nationwide. Created predictive healthcare resource allocator.",
    glow: "rgba(139, 92, 246, 0.4)", // Purple
  },
];

const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };

const AchievementRow = ({ achievement, isHovered, onHover, onLeave }: any) => {
  const rowRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for the radial gradient spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(circle 350px at ${springX}px ${springY}px, ${achievement.glow}, transparent 80%)`;

  return (
    <motion.div
      ref={rowRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 px-6 md:px-12 border-b border-white/[0.05] group overflow-hidden cursor-crosshair"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      
      {/* Dynamic scanline overlay when hovered */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-8 md:gap-0">
        
        {/* Left Col: ID & Year */}
        <div className="flex flex-row md:flex-col items-baseline md:items-start gap-4 md:gap-1 text-white/40 font-mono text-sm md:text-base w-full md:w-[15%]">
          <motion.span 
            className="block"
            animate={{ color: isHovered ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)" }}
          >
            {achievement.id}
          </motion.span>
          <motion.span 
            className="block"
            animate={{ color: isHovered ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.2)" }}
          >
            // {achievement.year}
          </motion.span>
        </div>

        {/* Center Col: Massive Title */}
        <div className="flex flex-col w-full md:w-[50%]">
          <motion.h3 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/50 uppercase leading-[0.85]"
            animate={{ 
              x: isHovered ? 10 : 0, 
              color: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)",
              textShadow: isHovered ? `0 0 40px ${achievement.glow}` : "0 0 0px transparent"
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {achievement.title}
          </motion.h3>
          <motion.h3 
            className="text-3xl md:text-5xl lg:text-5xl font-light tracking-tight text-white/30 uppercase mt-[-4px]"
            animate={{ 
              x: isHovered ? 15 : 0,
              color: isHovered ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)" 
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
          >
            {achievement.subtitle}
          </motion.h3>
        </div>

        {/* Right Col: Role & Desc */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-[35%]">
          <motion.p 
            className="text-lg md:text-xl font-medium text-white/80 border border-white/10 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm"
            animate={{ 
              y: isHovered ? 0 : 5, 
              opacity: isHovered ? 1 : 0.7,
              borderColor: isHovered ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            {achievement.role}
          </motion.p>
          <motion.p 
            className="mt-4 text-sm md:text-base text-white/40 max-w-[280px]"
            animate={{ 
              opacity: isHovered ? 1 : 0.4,
              y: isHovered ? 0 : 5
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {achievement.desc}
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
};

export default function Achievements() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative w-full py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            HONORS
          </h2>
          <p className="text-white/40 text-lg md:text-2xl mt-2 tracking-tight">
            Recognition from global hackathons.
          </p>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4" />
      </div>

      <div className="w-full border-t border-white/[0.05] flex flex-col">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementRow
            key={achievement.id}
            achievement={achievement}
            isHovered={hoveredIdx === index}
            onHover={() => setHoveredIdx(index)}
            onLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>
    </section>
  );
}
