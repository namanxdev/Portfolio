"use client";

import React, { useState, useEffect, useRef } from "react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Workflow, Database, Terminal, Cpu, CheckCircle2 } from "lucide-react";

// ── Magnetic Button Physics Wrapper ───────────────────────────────────────
function MagneticWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── High-End Agent Visualizer (Upgraded) ──────────────────────────────────
const AgentVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Cycling Logic States
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    { id: 0, title: "Query Routing", icon: <Workflow className="w-3.5 h-3.5" />, status: "Analyzing intent..." },
    { id: 1, title: "Vector Search", icon: <Database className="w-3.5 h-3.5" />, status: "Querying pgvector..." },
    { id: 2, title: "Agent Execution", icon: <Cpu className="w-3.5 h-3.5" />, status: "Thinking & drafting..." },
    { id: 3, title: "Response", icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />, status: "Task completed." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [STEPS.length]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-[500px] aspect-[4/3.2] rounded-[24px] border border-white/[0.04] bg-[#0A0A0A]/40 backdrop-blur-3xl p-8 shadow-2xl flex flex-col justify-between group cursor-crosshair"
    >
      {/* Dynamic Scanline */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-50 pointer-events-none"
      />

      {/* Subtle animated background glow behind UI */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-[24px] overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(30px)" }}>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[#FAFAFA] font-medium text-sm flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            Agentic Core
          </h3>
          <p className="text-[#FAFAFA]/40 font-mono text-[10px] uppercase tracking-widest">Mission Control // Live</p>
        </div>
        <div className="flex items-center gap-2 border border-white/5 bg-white/[0.02] rounded-full px-3 py-1.5 backdrop-blur-md">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </div>
          <span className="text-[9px] font-mono uppercase text-emerald-400/90 tracking-wider">99.9% Uptime</span>
        </div>
      </div>

      {/* Main Flow Representation */}
      <div className="relative z-10 flex flex-col gap-3 mt-6" style={{ transform: "translateZ(50px)" }}>
        {STEPS.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div 
              key={step.id} 
              className={`relative flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-700 ease-[0.16,1,0.3,1] ${
                isActive 
                  ? "border-blue-500/30 bg-blue-500/[0.08] shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-[1.02]" 
                  : isPast 
                    ? "border-white/[0.03] bg-white/[0.01] opacity-60" 
                    : "border-white/[0.02] bg-transparent opacity-30"
              }`}
            >
              {/* Connecting Line */}
              {index !== STEPS.length - 1 && (
                <div className={`absolute left-[23px] top-[40px] w-[1px] h-[18px] ${isPast ? 'bg-blue-500/50' : 'bg-white/10'} transition-colors duration-500`} />
              )}
              
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500 shrink-0 ${
                isActive ? "bg-blue-500/20 text-blue-400 border border-blue-500/50" : isPast ? "bg-blue-500/10 text-blue-400/50" : "bg-white/5 text-white/30"
              }`}>
                {step.icon}
              </div>
              
              <div className="flex flex-col">
                <span className={`text-sm font-medium tracking-tight transition-colors duration-500 ${isActive ? "text-white" : "text-white/60"}`}>
                  {step.title}
                </span>
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span 
                      key="active"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="text-[11px] font-mono text-blue-300/80 mt-0.5"
                    >
                      {step.status}
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="inactive"
                      className="text-[11px] font-mono text-transparent select-none mt-0.5"
                    >
                      Waiting...
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              {isActive && (
                <motion.div 
                  layoutId="pulse-dot"
                  className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Data Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/[0.05] pt-5 mt-6" style={{ transform: "translateZ(20px)" }}>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Avg Latency</span>
          <span className="text-sm font-medium text-[#FAFAFA]">112ms</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Precision</span>
          <span className="text-sm font-medium text-emerald-400">95.4%</span>
        </div>
      </div>
    </motion.div>
  );
};

// ── Shared Animation Config ──────────────────────────────────────────────────
const slideUp = {
  initial: { y: "100%", rotate: 2, opacity: 0 },
  enter: (i: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const, delay: i * 0.1 }
  })
};

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const, delay: i * 0.1 }
  })
};

// ── Hero Section ──────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#050505] overflow-hidden pt-32 pb-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-0 opacity-50"
        fill="#ffffff"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left column — Kinetic Typography */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-20">
            
            <motion.div 
              custom={1} initial="initial" animate="enter" variants={fadeUp}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-[1px] w-10 bg-[#FAFAFA]/30" />
              <p className="font-mono text-[11px] tracking-[0.3em] text-[#FAFAFA]/50 uppercase">
                AI Engineer · Agent Builder
              </p>
            </motion.div>

            {/* Massive Type Reveal */}
            <div className="flex flex-col gap-2 mb-10 -ml-1">
              <div className="overflow-hidden">
                <motion.h1 
                  custom={2} initial="initial" animate="enter" variants={slideUp}
                  className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium tracking-tight leading-[0.9] text-[#FAFAFA]"
                >
                  I build AI <span className="italic text-white/40">systems</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  custom={3} initial="initial" animate="enter" variants={slideUp}
                  className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium tracking-tight leading-[0.9] text-[#FAFAFA]"
                >
                  that work in production.
                </motion.h1>
              </div>
            </div>

            <motion.p 
              custom={4} initial="initial" animate="enter" variants={fadeUp}
              className="text-lg md:text-2xl text-[#FAFAFA]/50 max-w-xl leading-relaxed font-light mb-16"
            >
              Currently building multi-agent workflows and RAG pipelines at
              Infradock.ai. Shipping infrastructure that handles thousands of
              daily queries with surgical precision.
            </motion.p>

            <motion.div 
              custom={5} initial="initial" animate="enter" variants={fadeUp}
              className="flex flex-wrap items-center gap-8 mb-20"
            >
              <MagneticWrapper>
                <a
                  href="#projects"
                  className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#FAFAFA] text-[#050505] rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </MagneticWrapper>
              
              <MagneticWrapper>
                <a
                  href="#contact"
                  className="px-6 py-4 text-sm font-medium text-[#FAFAFA]/50 hover:text-[#FAFAFA] transition-colors relative group"
                >
                  Contact Me
                  <span className="absolute bottom-2 left-6 w-0 h-[1px] bg-white/50 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:w-[calc(100%-3rem)]" />
                </a>
              </MagneticWrapper>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              custom={6} initial="initial" animate="enter" variants={fadeUp}
              className="flex gap-16 pt-10 border-t border-[#FAFAFA]/10 w-full md:w-auto"
            >
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-medium text-[#FAFAFA] flex items-center tracking-tighter">
                  <NumberTicker value={500} className="text-[#FAFAFA]" />
                  <span className="ml-1 text-blue-400">+</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAFA]/40">
                  Daily Queries
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-medium text-[#FAFAFA] flex items-center tracking-tighter">
                  <NumberTicker value={95} className="text-[#FAFAFA]" />
                  <span className="ml-1 text-blue-400">%</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAFA]/40">
                  RAG Precision
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column — High-End Agent Visualizer */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-end items-center h-full w-full z-30 perspective-1000">
            <motion.div
              custom={5} initial="initial" animate="enter" variants={fadeUp}
              className="w-full relative max-w-[550px]"
            >
              <AgentVisualizer />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
