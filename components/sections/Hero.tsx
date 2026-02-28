"use client";

import { Spotlight } from "@/components/aceternity/spotlight";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-20 pb-16">
      {/* Muted background spotlight - elegant, no laser beams */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-0"
        fill="#ffffff"
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left column - Strict Top-Left aligned typography */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-20">
            
            {/* Minimal Subhead/Eyebrow */}
            <BlurFade delay={0.1} offset={10}>
              <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-8 bg-zinc-600"></div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
                  AI Engineer • Agent Builder
                </p>
              </div>
            </BlurFade>

            {/* Massive Heading - Clean, no text generators, just cinematic fade */}
            <BlurFade delay={0.2} offset={15}>
              <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-semibold tracking-[-0.03em] leading-[0.95] text-[#FAFAFA] mb-8">
                I build AI systems<br />
                <span className="text-zinc-600">that work in production.</span>
              </h1>
            </BlurFade>

            {/* Minimalist Subtext */}
            <BlurFade delay={0.3} offset={15}>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light mb-12">
                Currently building multi-agent workflows and RAG pipelines at Infradock.ai. Shipping infrastructure that handles thousands of daily queries.
              </p>
            </BlurFade>

            {/* Premium minimal buttons */}
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
            
            {/* Clean numeric stats */}
            <BlurFade delay={0.5} offset={15}>
              <div className="flex gap-12 mt-16 pt-8 border-t border-white/[0.05]">
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold text-[#FAFAFA] flex items-center tracking-tight">
                    <NumberTicker value={500} className="text-[#FAFAFA]" />
                    <span className="ml-1 text-zinc-500">+</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-left">Daily Queries</div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold text-[#FAFAFA] flex items-center tracking-tight">
                    <NumberTicker value={95} className="text-[#FAFAFA]" />
                    <span className="ml-1 text-zinc-500">%</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-left">RAG Precision</div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right column - Terminal (Zero 3D skew, purely flat, minimal) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-end items-center h-full w-full z-30">
            <BlurFade delay={0.6} offset={15} className="w-full relative max-w-[500px]">
                
              {/* Premium completely flat UI terminal */}
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] shadow-2xl">
                {/* Thin minimal header */}
                <div className="flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#111111]">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                   </div>
                   <p className="font-mono text-[10px] text-zinc-500 mx-auto tracking-widest uppercase">reasonflow.js</p>
                </div>
                
                <Terminal sequence={true} className="rounded-none border-none bg-transparent min-h-[320px] p-6 text-[13px] font-mono shadow-none h-full">
                  <TypingAnimation delay={800} className="text-zinc-400">
                    $ init_pipeline --model=reasonflow
                  </TypingAnimation>
                  
                  <AnimatedSpan delay={1400} className="text-zinc-500 mt-2 block">
                    [0.08s] Retrieving vector embeddings...
                  </AnimatedSpan>
                  
                  <AnimatedSpan delay={2000} className="text-zinc-300 mt-2 block">
                    &gt; 3,402 contexts matched against query
                  </AnimatedSpan>
                  
                  <AnimatedSpan delay={2800} className="text-zinc-500 mt-2 block">
                    [0.45s] Applying cross-encoder reranking
                  </AnimatedSpan>
                  
                  <AnimatedSpan delay={3600} className="text-white mt-4 block leading-relaxed">
                    Response generated with <span className="underline decoration-zinc-700 underline-offset-4">98.4%</span> confidence threshold.
                  </AnimatedSpan>
                </Terminal>
              </div>
            </BlurFade>
            
            {/* The single, ultra-subtle, minimal backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none mix-blend-screen"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
