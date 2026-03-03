"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, Shield, ArrowUpRight } from "lucide-react";

// Types
type Achievement = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  role: string;
  desc: string;
  glowColor: string;
  icon: React.ReactNode;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "01",
    year: "2025",
    title: "NASA Space Apps",
    subtitle: "Challenge",
    role: "Global Winner",
    desc: "Top 1% Global. Built an AI-driven orbital mechanics predictor.",
    glowColor: "rgba(59, 130, 246, 0.4)", // Blue
    icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />,
  },
  {
    id: "02",
    year: "2025",
    title: "CodeSlayer",
    subtitle: "NIT Delhi",
    role: "Finalist",
    desc: "Top 1% of 10,000+ participants. Engineered a distributed system.",
    glowColor: "rgba(16, 185, 129, 0.4)", // Emerald
    icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />,
  },
  {
    id: "03",
    year: "2025",
    title: "MumbaiHacks",
    subtitle: "Finance Tech",
    role: "Finalist",
    desc: "Developed an autonomous trading agent protocol.",
    glowColor: "rgba(249, 115, 22, 0.4)", // Orange
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />,
  },
  {
    id: "04",
    year: "2024",
    title: "Smart India",
    subtitle: "Hackathon",
    role: "Finalist",
    desc: "Top 5% nationwide. Created predictive healthcare resource allocator.",
    glowColor: "rgba(168, 85, 247, 0.4)", // Purple
    icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />,
  },
];

export default function Achievements() {
  // First item open by default for immediate impact
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="achievements" className="relative w-full bg-[#050505] py-24 md:py-40 overflow-hidden flex justify-center z-10 border-t border-white/[0.02]">
      
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] px-4 md:px-8 lg:px-12 relative z-10 flex flex-col">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-blue-500/50" />
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400">
              Verified Honors
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0">
             <h2 className="text-4xl md:text-7xl lg:text-[7rem] leading-[0.85] font-medium tracking-[-0.02em] text-[#FAFAFA] uppercase">
                Global <br />
                <span className="font-serif italic font-light lowercase text-white/50 tracking-normal">recognition.</span>
             </h2>
             <p className="text-white/40 text-sm md:text-base max-w-[280px] leading-relaxed font-light pb-2">
                A selection of architectural deployments and hackathon outcomes pushed to the absolute limit.
             </p>
          </div>
        </div>

        {/* Dynamic Accordion List */}
        <div className="flex flex-col w-full border-t border-white/10">
          {ACHIEVEMENTS.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={item.id}
                layout="position"
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`group relative flex flex-col border-b border-white/10 cursor-pointer overflow-hidden transition-colors duration-700 ease-[0.16,1,0.3,1] ${
                  isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.01]"
                }`}
              >
                
                {/* ── ACCORDION HEADER (Always visible) ── */}
                <motion.div layout="position" className="w-full flex items-center justify-between py-6 md:py-10 px-4 md:px-8">
                  {/* Left: ID + Title */}
                  <div className="flex items-center gap-6 md:gap-12 w-[70%]">
                    <span className={`font-mono text-xs md:text-sm transition-colors duration-500 hidden sm:block ${isActive ? "text-blue-400" : "text-white/20"}`}>
                      {item.id}
                    </span>
                    
                    <motion.div layout="position" className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 truncate">
                      <h3 className={`uppercase font-medium tracking-tight transition-all duration-700 ease-[0.16,1,0.3,1] ${
                        isActive ? "text-2xl md:text-5xl lg:text-7xl text-[#FAFAFA]" : "text-xl md:text-3xl lg:text-5xl text-[#FAFAFA]/40 group-hover:text-[#FAFAFA]/60"
                      }`}>
                        {item.title}
                      </h3>
                      <span className={`font-serif italic lowercase tracking-wide transition-all duration-700 ease-[0.16,1,0.3,1] ${
                        isActive ? "text-xl md:text-4xl lg:text-6xl text-blue-400/80" : "text-lg md:text-2xl lg:text-4xl text-[#FAFAFA]/20 group-hover:text-[#FAFAFA]/40"
                      }`}>
                        {item.subtitle}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right: Year / Role Swapper */}
                  <div className="w-[30%] flex justify-end items-center">
                    <div className="relative h-6 md:h-8 w-full flex justify-end items-center overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        {isActive ? (
                          <motion.span
                            key="role"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#FAFAFA]"
                          >
                            {item.role}
                          </motion.span>
                        ) : (
                          <motion.span
                            key="year"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/20 group-hover:text-white/40"
                          >
                            {item.year}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                {/* ── ACCORDION BODY (Cinematic Plaque Reveal) ── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`body-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="origin-top"
                    >
                      <div className="px-4 md:px-8 pb-8 md:pb-12 pt-2 md:pt-4">
                        
                        {/* Cinematic Inner Card */}
                        <div className="relative w-full h-[220px] md:h-[320px] rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                          
                          {/* Animated Blur Background Layer */}
                          <div className="absolute inset-0 z-0">
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1], 
                                rotate: [0, 45, 0],
                                x: ["-10%", "10%", "-10%"],
                                y: ["-10%", "10%", "-10%"] 
                              }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                              className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] mix-blend-screen blur-[100px]"
                              style={{ 
                                background: `radial-gradient(circle 300px at center, ${item.glowColor}, transparent 80%)`,
                                opacity: 0.7 
                              }}
                            />
                            {/* Overlay noise pattern */}
                            <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            {/* Scanning line */}
                            <motion.div
                              animate={{ top: ["-10%", "110%"] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </div>

                          {/* Data Overlay */}
                          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between h-full">
                            
                            {/* Top row of internal card */}
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3 backdrop-blur-md bg-black/20 border border-white/10 px-4 py-2 rounded-full">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.2em] text-[#FAFAFA]/80">
                                  {item.year} // Verified Selection
                                </span>
                              </div>
                              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-xl">
                                {item.icon}
                              </div>
                            </div>

                            {/* Bottom row of internal card */}
                            <div className="flex items-end justify-between gap-6">
                              <p className="text-base md:text-2xl font-light text-[#FAFAFA] max-w-2xl leading-relaxed tracking-wide drop-shadow-md">
                                {item.desc}
                              </p>
                              
                              <motion.div 
                                whileHover={{ scale: 1.1, rotate: 45 }}
                                className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white text-black items-center justify-center cursor-pointer transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                              >
                                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                              </motion.div>
                            </div>
                              
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
