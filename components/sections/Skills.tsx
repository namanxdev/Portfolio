"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const col1 = [
  "LangChain", "TypeScript", "FastAPI", "Docker", "React", "LlamaIndex", "Redis", "Next.js", "SQL", "pgvector"
];
const col2 = [
  "Python", "AWS", "LangGraph", "Node.js", "C++", "Tailwind", "PostgreSQL", "OpenAI", "Framer", "Gemini"
];

const capabilities = [
  { label: "AI & Agents", value: "LangChain, LangGraph, LlamaIndex, OpenAI, Gemini, Hugging Face, MCP, RAG" },
  { label: "Languages", value: "Python, C++, TypeScript, JavaScript, SQL" },
  { label: "Backend & Cloud", value: "FastAPI, Node.js, PostgreSQL, pgvector, Redis, Docker, AWS" },
  { label: "Frontend", value: "React, Next.js, Tailwind CSS, Framer Motion" }
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-24 md:py-32 z-20 overflow-hidden">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Strict 2-Column Grid Layout to prevent any text displacement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full min-h-[60vh]">
          
          {/* LEFT COLUMN: Clean Structural Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <BlurFade delay={0.1} offset={20}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-zinc-700" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  Capabilities & Stack
                </span>
              </div>
              
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[0.9] text-[#FAFAFA] mb-8">
                Built for <br />
                <span className="text-zinc-600">performance.</span>
              </h2>

              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12 max-w-md">
                I engineer autonomous agents and scalable web infrastructure using modern frameworks and precise data pipelines.
              </p>

              {/* Data Table */}
              <div className="flex flex-col w-full border-t border-white/[0.05]">
                {capabilities.map((cap, i) => (
                  <div key={cap.label} className="group border-b border-white/[0.05] flex flex-col sm:flex-row gap-2 sm:gap-6 py-4 transition-colors hover:bg-white/[0.01]">
                    <span className="w-[140px] shrink-0 font-mono text-[10px] uppercase text-zinc-500 tracking-widest pt-1">
                      [0{i + 1}] {cap.label}
                    </span>
                    <span className="block flex-1 text-sm md:text-base text-zinc-300 font-light leading-snug group-hover:text-white transition-colors duration-300">
                      {cap.value}
                    </span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* RIGHT COLUMN: Avant-Garde Text Marquee (Str8fire/Base Create style) */}
          <div className="lg:col-span-7 h-[500px] md:h-[700px] relative flex justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            
            <BlurFade delay={0.3} offset={20} className="w-full h-full flex justify-center gap-4 md:gap-8">
              
              {/* Marquee Vertical Left */}
              <Marquee vertical pauseOnHover className="[--duration:40s] [--gap:2rem] overflow-visible w-1/2 items-end pr-4">
                {col1.map((name) => (
                  <div 
                    key={`left-${name}`} 
                    className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-[-0.04em] text-[#141414] hover:text-blue-500 transition-colors duration-500 text-right cursor-crosshair select-none"
                  >
                    {name}
                  </div>
                ))}
              </Marquee>

              {/* Marquee Vertical Right (Reverse) */}
              <Marquee vertical pauseOnHover reverse className="[--duration:35s] [--gap:2rem] overflow-visible w-1/2 items-start pt-32 pl-4">
                {col2.map((name) => (
                  <div 
                    key={`right-${name}`} 
                    className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-[-0.04em] text-[#141414] hover:text-emerald-500 transition-colors duration-500 text-left cursor-crosshair select-none"
                  >
                    {name}
                  </div>
                ))}
              </Marquee>

            </BlurFade>

          </div>

        </div>
      </div>
    </section>
  );
}
