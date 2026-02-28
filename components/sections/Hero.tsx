"use client";

import React, { useState, useEffect, useRef } from "react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Workflow, Database, Terminal, Cpu, CheckCircle2 } from "lucide-react";

// ── High-End Agent Visualizer ──────────────────────────────────────────────
const AgentVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

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
    { id: 0, title: "Query Routing", icon: <Workflow className="w-3 h-3" />, status: "Analyzing intent..." },
    { id: 1, title: "Vector Search", icon: <Database className="w-3 h-3" />, status: "Querying pgvector..." },
    { id: 2, title: "Agent Execution", icon: <Cpu className="w-3 h-3" />, status: "Thinking & drafting..." },
    { id: 3, title: "Response", icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />, status: "Task completed." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [STEPS.length]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-[480px] aspect-[4/3] rounded-[24px] border border-white/[0.08] bg-[#050505]/80 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden group"
    >
      {/* Subtle animated background glow behind UI */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px]">
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"
        />
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
        <div className="flex flex-col gap-1">
          <h3 className="text-white/80 font-medium text-sm flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            Agentic Core
          </h3>
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-wider">Mission Control // Live</p>
        </div>
        <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-2.5 py-1 backdrop-blur-sm">
          <div className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </div>
          <span className="text-[9px] font-mono uppercase text-emerald-400/80">99.9% Uptime</span>
        </div>
      </div>

      {/* Main Flow Representation */}
      <div className="relative z-10 flex flex-col gap-3 mt-4" style={{ transform: "translateZ(30px)" }}>
        {STEPS.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div 
              key={step.id} 
              className={`relative flex items-center gap-4 p-3 rounded-xl border transition-all duration-500 ${
                isActive 
                  ? "border-blue-500/30 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                  : isPast 
                    ? "border-white/5 bg-white/5 opacity-50" 
                    : "border-white/5 bg-transparent opacity-30"
              }`}
            >
              {/* Connecting Line */}
              {index !== STEPS.length - 1 && (
                <div className={`absolute left-[21px] top-[34px] w-[1px] h-4 ${isPast ? 'bg-blue-500/50' : 'bg-white/10'} transition-colors duration-500`} />
              )}
              
              <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-500 ${
                isActive ? "bg-blue-500 text-white" : isPast ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-white/50"
              }`}>
                {step.icon}
              </div>
              
              <div className="flex flex-col">
                <span className={`text-xs font-semibold ${isActive ? "text-white" : "text-white/60"}`}>
                  {step.title}
                </span>
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span 
                      key="active"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] font-mono text-blue-300"
                    >
                      {step.status}
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="inactive"
                      className="text-[10px] font-mono text-transparent select-none"
                    >
                      Waiting...
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              
              {isActive && (
                <motion.div 
                  layoutId="pulse"
                  className="ml-auto w-1 h-1 bg-blue-400 rounded-full animate-ping"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Data Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 mt-4" style={{ transform: "translateZ(10px)" }}>
        <div className="flex flex-col">
          <span className="text-[9px] font-mono text-white/30 uppercase">Avg Latency</span>
          <span className="text-xs font-medium text-white/80">112ms</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[9px] font-mono text-white/30 uppercase">Precision</span>
          <span className="text-xs font-medium text-emerald-400">95.4%</span>
        </div>
      </div>
    </motion.div>
  );
};

// ── Hero Section ──────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-20 pb-16">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-0"
        fill="#ffffff"
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left column — Typography */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-20">
            <BlurFade delay={0.1} offset={10}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-zinc-600" />
                <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
                  AI Engineer · Agent Builder
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} offset={15}>
              <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-semibold tracking-[-0.03em] leading-[0.95] text-[#FAFAFA] mb-8">
                I build AI systems
                <br />
                <span className="text-zinc-600">that work in production.</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} offset={15}>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light mb-12">
                Currently building multi-agent workflows and RAG pipelines at
                Infradock.ai. Shipping infrastructure that handles thousands of
                daily queries.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} offset={15}>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#projects"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#FAFAFA] text-[#050505] rounded-full text-sm font-medium hover:bg-white transition-colors"
                >
                  Explore Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 text-sm font-medium text-zinc-400 hover:text-[#FAFAFA] transition-colors relative group"
                >
                  Contact Me
                  <span className="absolute bottom-2 left-6 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-[calc(100%-3rem)]" />
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} offset={15}>
              <div className="flex gap-12 mt-16 pt-8 border-t border-white/[0.05]">
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold text-[#FAFAFA] flex items-center tracking-tight">
                    <NumberTicker value={500} className="text-[#FAFAFA]" />
                    <span className="ml-1 text-zinc-500">+</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-left">
                    Daily Queries
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold text-[#FAFAFA] flex items-center tracking-tight">
                    <NumberTicker value={95} className="text-[#FAFAFA]" />
                    <span className="ml-1 text-zinc-500">%</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-left">
                    RAG Precision
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right column — High-End Agent Visualizer */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-end items-center h-full w-full z-30 perspective-1000">
            <BlurFade
              delay={0.6}
              offset={15}
              className="w-full relative max-w-[500px]"
            >
              <AgentVisualizer />
            </BlurFade>
          </div>

        </div>
      </div>
    </section>
  );
}
