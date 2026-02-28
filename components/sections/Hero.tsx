"use client";

import React, { forwardRef, useRef } from "react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Mail,
  FileText,
  Database,
  Code2,
  BrainCircuit,
  Workflow,
  Send,
} from "lucide-react";

// ── Reusable node circle ──────────────────────────────────────────────
const Node = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#111] p-2.5 shadow-[0_0_24px_rgba(59,130,246,0.06)]",
        className
      )}
    >
      {children}
    </div>
    {label && (
      <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 select-none">
        {label}
      </span>
    )}
  </div>
));
Node.displayName = "Node";

// ── Pipeline Beam Graphic ─────────────────────────────────────────────
function AgentPipelineBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#0A0A0A] p-8",
        className
      )}
    >
      <div className="flex size-full max-w-md flex-row items-stretch justify-between gap-8">
        {/* Left column — Input Sources */}
        <div className="flex flex-col justify-center gap-5">
          <Node ref={emailRef} label="Email">
            <Mail className="size-4 text-zinc-400" />
          </Node>
          <Node ref={docsRef} label="Docs">
            <FileText className="size-4 text-zinc-400" />
          </Node>
          <Node ref={dbRef} label="Vector DB">
            <Database className="size-4 text-zinc-400" />
          </Node>
          <Node ref={codeRef} label="API">
            <Code2 className="size-4 text-zinc-400" />
          </Node>
        </div>

        {/* Center — AI Brain */}
        <div className="flex flex-col justify-center">
          <Node
            ref={brainRef}
            className="size-14 border-blue-500/20 bg-[#0f1729] shadow-[0_0_40px_rgba(59,130,246,0.12)]"
            label="LLM"
          >
            <BrainCircuit className="size-6 text-blue-400" />
          </Node>
        </div>

        {/* Right column — Agent + Output */}
        <div className="flex flex-col justify-center gap-5">
          <Node ref={agentRef} label="Agent">
            <Workflow className="size-4 text-zinc-400" />
          </Node>
          <Node ref={outputRef} label="Response">
            <Send className="size-4 text-zinc-400" />
          </Node>
        </div>
      </div>

      {/* Beams: Inputs → Brain */}
      <AnimatedBeam containerRef={containerRef} fromRef={emailRef} toRef={brainRef} curvature={-40} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={docsRef} toRef={brainRef} curvature={-15} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={brainRef} curvature={15} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={codeRef} toRef={brainRef} curvature={40} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />

      {/* Beams: Brain → Outputs */}
      <AnimatedBeam containerRef={containerRef} fromRef={brainRef} toRef={agentRef} curvature={-20} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={brainRef} toRef={outputRef} curvature={20} pathColor="#1e293b" pathOpacity={0.3} gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" />

      {/* Ultra-subtle backglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] rounded-full bg-blue-500/[0.04] blur-[80px] pointer-events-none" />
    </div>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-20 pb-16">
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
                  className="px-6 py-3 text-sm font-medium text-zinc-400 hover:text-[#FAFAFA] transition-colors"
                >
                  Contact Me
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

          {/* Right column — Agent Pipeline Visualization */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-end items-center h-full w-full z-30">
            <BlurFade
              delay={0.6}
              offset={15}
              className="w-full relative max-w-[500px]"
            >
              <AgentPipelineBeam />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
