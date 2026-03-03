"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Workflow, Database, Terminal, Cpu, CheckCircle2, Globe, Activity } from "lucide-react";

// ── Ambient WebGL-Style Tracker ───────────────────────────────────────
function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 0.5 });

  const translateX = useTransform(smoothX, (v) => v - 400); // offset by half width
  const translateY = useTransform(smoothY, (v) => v - 400);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Base static ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
      
      {/* Dynamic tracking flare */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/15 blur-[150px] rounded-full mix-blend-screen hidden lg:block"
        style={{ x: translateX, y: translateY }}
      />
    </div>
  );
}

// ── Shared Magnetic Component ─────────────────────────────────────────────
function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Horizontal Wide Pipeline Dashboard ────────────────────────────────────
const PipelineDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const STEPS = [
    { id: 0, title: "Query Routing", icon: <Workflow className="w-4 h-4" /> },
    { id: 1, title: "Vector Search", icon: <Database className="w-4 h-4" /> },
    { id: 2, title: "Agent Execution", icon: <Cpu className="w-4 h-4" /> },
    { id: 3, title: "Response", icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 md:mt-24 relative z-30">
      
      {/* Mobile/Tablet Horizontal Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex xl:hidden justify-end w-full mb-3 pr-2 md:pr-4"
      >
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
          Scroll Right <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>

      <div className="relative w-full rounded-2xl md:rounded-[2rem] border border-white/[0.05] bg-[#0A0A0A]/40 backdrop-blur-3xl p-6 md:p-8 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
        
        {/* Dynamic Scanline */}
        <motion.div
          animate={{ left: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent z-50 pointer-events-none"
        />

        {/* Scrollable container on small screens, flex on large */}
        <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar pb-4 md:pb-0">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4 min-w-[800px] lg:min-w-[980px] xl:min-w-full">
            
            {/* Left Meta Group */}
            <div className="flex flex-col gap-1 text-left shrink-0">
              <h3 className="text-[#FAFAFA] font-medium text-sm md:text-base flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                Mission Control // Live
              </h3>
              <div className="flex items-center gap-2 mt-2 border border-white/10 bg-white/[0.03] rounded-full px-3 py-1.5 backdrop-blur-md w-fit">
                <div className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] font-mono uppercase text-emerald-400/90 tracking-widest whitespace-nowrap">99.9% Pipeline Uptime</span>
              </div>
            </div>

            {/* Center Pipeline Steps */}
            <div className="flex flex-row items-center w-auto flex-1 justify-center gap-0 px-4">
              {STEPS.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                
                return (
                  <React.Fragment key={step.id}>
                    <div className={`relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-700 ease-[0.16,1,0.3,1] shrink-0 ${
                      isActive ? "border-blue-500/40 bg-blue-500/[0.08] shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-105 z-10" 
                        : isPast ? "border-white/[0.05] bg-white/[0.02]" 
                        : "border-white/[0.02] bg-transparent opacity-40"
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 shrink-0 ${
                        isActive ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" : isPast ? "bg-blue-500/10 text-blue-400/50" : "bg-white/5 text-white/30"
                      }`}>
                        {step.icon}
                      </div>
                      <span className={`text-sm font-medium whitespace-nowrap transition-colors duration-500 hidden sm:block ${isActive ? "text-white" : "text-white/60"}`}>
                        {step.title}
                      </span>
                      
                      {isActive && (
                        <motion.div 
                          layoutId="pulse-dot"
                          className="absolute right-3 top-3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] block sm:hidden"
                          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Horizontal Line Connector */}
                    {index !== STEPS.length - 1 && (
                      <div className="flex w-6 lg:w-12 xl:w-16 h-[1px] relative mx-1 lg:mx-2 shrink-0">
                         <div className="absolute inset-0 bg-white/10" />
                         <motion.div 
                           initial={{ scaleX: 0, originX: 0 }}
                           animate={{ scaleX: isPast ? 1 : 0 }}
                           transition={{ duration: 0.5 }}
                           className="absolute inset-0 bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                         />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Right Metrics Group */}
            <div className="flex lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto pt-4 lg:pt-0 shrink-0 border-t border-white/5 lg:border-none mt-4 lg:mt-0">
               <div className="flex flex-col gap-1 text-left lg:text-right">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest whitespace-nowrap">Avg Latency</span>
                <span className="text-sm font-medium text-[#FAFAFA]">112ms</span>
              </div>
              <div className="flex flex-col gap-1 text-right mt-0 lg:mt-3">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest whitespace-nowrap">Precision</span>
                <span className="text-sm font-medium text-emerald-400">95.4%</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Hero Composition ──────────────────────────────────────────────────
export default function Hero() {
  // Sync entrance after global Preloader clears (~1.5s delay)
  const INIT_DELAY = 1.6;

  return (
    <section id="hero" className="relative w-full min-h-[100svh] flex flex-col justify-center bg-[#050505] overflow-hidden pt-28 pb-20">
      
      <AmbientBackground />
      
      {/* Top Meta Structural Border */}
      <div className="absolute top-24 md:top-32 left-0 w-full px-6 md:px-12 lg:px-16 flex justify-end items-start z-10 pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: INIT_DELAY, duration: 1 }} className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#FAFAFA]/40">
          [ 2026 EDITION ]
        </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center text-center mt-20 md:mt-10">
        
        {/* Sub-header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INIT_DELAY, duration: 1 }}
          className="mb-8 md:mb-12 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          AI Infrastructure Engineer
        </motion.div>

        {/* ── Center: Massive Typography Stack ── */}
        <div className="flex flex-col items-center justify-center w-full relative">
          
          <div className="overflow-hidden pb-2 md:pb-4 w-full">
            <motion.h1 
              initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: INIT_DELAY + 0.1 }}
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", lineHeight: 0.85 }}
              className="font-medium tracking-[-0.04em] text-[#FAFAFA] uppercase"
            >
              ARCHITECTING
            </motion.h1>
          </div>
          
          <div className="overflow-hidden pb-2 md:pb-6 w-full flex items-center justify-center gap-4 md:gap-8">
            <motion.h1 
              initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: INIT_DELAY + 0.2 }}
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", lineHeight: 0.85 }}
              className="font-serif italic font-light tracking-tight normal-case text-blue-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >
              intelligent
            </motion.h1>
          </div>

          <div className="overflow-hidden pb-2 md:pb-4 w-full">
            <motion.h1 
              initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: INIT_DELAY + 0.3 }}
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)", lineHeight: 0.85 }}
              className="font-medium tracking-[-0.04em] text-[#FAFAFA] uppercase"
            >
              SYSTEMS.
            </motion.h1>
          </div>

          {/* Floating Magnetic CTA - MOVED OUTSIDE of overflow-hidden blocks */}
          <motion.div 
             initial={{ opacity: 0, scale: 0 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ duration: 1, delay: INIT_DELAY + 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="hidden lg:block absolute right-0 bottom-0 pointer-events-auto z-50 translate-x-8 -translate-y-8 xl:translate-x-0"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="group flex flex-col items-center justify-center w-[160px] h-[160px] rounded-full bg-white text-black hover:bg-transparent hover:text-white border border-white/20 transition-all duration-700 ease-[0.76,0,0.24,1] relative overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                {/* Background color invert effect */}
                <div className="absolute inset-0 bg-[#0A0A0A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.76,0,0.24,1] z-0" />
                
                <span className="text-xs uppercase font-medium tracking-widest absolute top-12 z-10 transition-colors">Explore</span>
                <ArrowRight className="w-6 h-6 absolute bottom-12 -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[0.76,0,0.24,1] z-10" />
              </a>
            </MagneticButton>
          </motion.div>

        </div>

        {/* ── Subtitle & Data (Centered) ── */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: INIT_DELAY + 0.5 }}
          className="text-base md:text-xl text-[#888888] max-w-2xl text-center leading-relaxed font-light mt-10 md:mt-12"
        >
          Specializing in RAG pipelines, multi-agent workflows, and high-performance infrastructure. Currently shipping enterprise AI architectures at <span className="text-[#FAFAFA]">Infradock.ai</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: INIT_DELAY + 0.6 }}
          className="flex lg:hidden justify-center w-full mt-10"
        >
          <a
            href="#projects"
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white font-medium text-sm tracking-wide bg-white/5 active:scale-95 transition-transform"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── Full Width Interactive Pipeline Dock ── */}
        <motion.div
           initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: INIT_DELAY + 0.7, ease: [0.76, 0, 0.24, 1] }}
           className="w-full flex justify-center"
        >
           <PipelineDashboard />
        </motion.div>

      </div>
    </section>
  );
}
