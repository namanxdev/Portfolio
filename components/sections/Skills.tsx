"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

const skillsData = [
  {
    id: "01",
    category: "AI & Agents",
    textColor: "text-blue-500",
    glowColor: "bg-blue-500",
    items: ["LangChain", "LangGraph", "LlamaIndex", "OpenAI", "Gemini", "Hugging Face", "MCP", "RAG"]
  },
  {
    id: "02",
    category: "Languages",
    textColor: "text-purple-500",
    glowColor: "bg-purple-500",
    items: ["Python", "C++", "TypeScript", "JavaScript", "SQL"]
  },
  {
    id: "03",
    category: "Backend & DB",
    textColor: "text-emerald-500",
    glowColor: "bg-emerald-500",
    items: ["FastAPI", "Node.js", "PostgreSQL", "pgvector", "Redis", "Docker", "AWS"]
  },
  {
    id: "04",
    category: "Frontend",
    textColor: "text-amber-500",
    glowColor: "bg-amber-500",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-24 md:py-32 z-20 overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <BlurFade delay={0.1} offset={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-zinc-700" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  Capabilities & Stack
                </span>
              </div>
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] leading-[0.9] text-[#FAFAFA]">
                Built for <br />
                <span className="text-zinc-600">performance.</span>
              </h2>
            </div>
            <p className="max-w-sm text-zinc-400 font-light leading-relaxed mb-2 md:mb-0">
              I engineer autonomous agents and scalable web infrastructure, shifting seamlessly from logic to visual execution.
            </p>
          </div>
        </BlurFade>

        {/* Agency Interactive Split-Showcase Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative w-full items-start">
          
          {/* LEFT: Accordion/Menu Column */}
          <div className="w-full lg:w-1/2 flex flex-col border-t border-white/[0.05]">
            {skillsData.map((group, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={group.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group relative flex flex-col py-8 lg:py-12 border-b border-white/[0.05] cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className={`font-mono text-sm transition-colors duration-500 ${isActive ? group.textColor : 'text-zinc-600'}`}>
                        [{group.id}]
                      </span>
                      <h3 className={`text-4xl md:text-5xl xl:text-6xl font-medium tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'text-[#FAFAFA] translate-x-4 md:translate-x-8' : 'text-zinc-600'}`}>
                        {group.category}
                      </h3>
                    </div>

                    {/* Arrow Indicator visible on hover/active */}
                    <div className="hidden lg:block overflow-hidden relative w-12 h-12">
                      <motion.div
                        initial={false}
                        animate={{ x: isActive ? 0 : -50, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <ArrowRight className={`size-8 ${group.textColor}`} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile expansion (Stacks show inside the row on smaller screens) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-3 pt-8 pb-2">
                          {group.items.map(item => (
                            <span key={`${group.id}-mob-${item}`} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-light text-zinc-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* RIGHT: Massive Desktop Visualizer */}
          <div className="hidden lg:flex flex-col w-full lg:w-1/2 relative min-h-[500px] xl:min-h-[600px] justify-center items-start pl-8 xl:pl-16">
            
            {/* Dynamic Abstract Glow tied to Active Category */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.15] pointer-events-none overflow-visible">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={`bg-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-[400px] h-[400px] rounded-full blur-[100px] ${skillsData[activeIndex].glowColor}`}
                />
              </AnimatePresence>
            </div>

            {/* Giant Background Number Marker */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-0 select-none pointer-events-none">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`num-${activeIndex}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
                  className="text-[20rem] xl:text-[28rem] font-bold leading-none text-white/[0.02] tracking-tighter"
                >
                  {skillsData[activeIndex].id}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Staggered Entering Badges */}
            <div className="relative z-10 w-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`container-${activeIndex}`} 
                  className="flex flex-wrap gap-4 xl:gap-6 items-start justify-start"
                >
                  {skillsData[activeIndex].items.map((item, i) => (
                    <motion.div
                      key={`badge-${activeIndex}-${item}`}
                      initial={{ opacity: 0, scale: 0.8, y: 40 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ 
                        delay: i * 0.04, 
                        duration: 0.5, 
                        ease: [0.16,1,0.3,1] 
                      }}
                      className="px-6 py-3 xl:px-8 xl:py-4 rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-xl text-xl xl:text-3xl font-light text-[#FAFAFA] shadow-2xl"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
