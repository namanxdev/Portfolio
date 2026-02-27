"use client";

import { Spotlight } from "@/components/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight background effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#3b82f6"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content (60% on desktop) */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.1}>
              {/* Status pill badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[13px] text-zinc-300">
                  Building at Infradock.ai
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-[13px] text-emerald-400">Available for work</span>
              </div>
            </BlurFade>

            {/* Headline with TextGenerateEffect */}
            <BlurFade delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                <TextGenerateEffect
                  words="I build AI that actually ships."
                  className="text-white"
                  duration={0.8}
                />
              </h1>
            </BlurFade>

            {/* Subheadline */}
            <BlurFade delay={0.4}>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-8">
                AI Engineer specializing in agent infrastructure, RAG pipelines, 
                and multi-agent workflows.
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a href="#projects">
                  <ShimmerButton
                    className="px-6 py-3 text-sm font-medium"
                    background="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                    shimmerColor="#ffffff"
                  >
                    View Projects
                  </ShimmerButton>
                </a>
                
                <a
                  href="https://github.com/namanxdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/naman411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </BlurFade>

            {/* Stats row with NumberTicker */}
            <BlurFade delay={0.6}>
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <NumberTicker 
                      value={500} 
                      suffix="+" 
                      className="text-white"
                    />
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">queries automated</div>
                </div>
                
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <NumberTicker 
                      value={95} 
                      suffix="%" 
                      className="text-white"
                    />
                    <span className="text-white">+</span>
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">RAG precision</div>
                </div>
                
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-zinc-500">~</span>
                    <NumberTicker 
                      value={60} 
                      suffix="%" 
                      className="text-white"
                    />
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">automation rate</div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right column - Terminal (40% on desktop) */}
          <div className="lg:col-span-5">
            <BlurFade delay={0.7} direction="left">
              <Terminal className="border-zinc-800/50 bg-zinc-950/80 shadow-2xl shadow-blue-500/[0.05]">
                <TypingAnimation
                  duration={40}
                  className="text-zinc-400"
                >
                  $ npx reasonflow --classify --draft --send
                </TypingAnimation>
                
                <AnimatedSpan delay={800} className="text-emerald-400">
                  <span className="text-emerald-500">✓</span> Email classified: partnership inquiry
                </AnimatedSpan>
                
                <AnimatedSpan delay={400} className="text-emerald-400">
                  <span className="text-emerald-500">✓</span> Context retrieved: 3 relevant threads (0.8s)
                </AnimatedSpan>
                
                <AnimatedSpan delay={400} className="text-emerald-400">
                  <span className="text-emerald-500">✓</span> Draft generated with 94% confidence
                </AnimatedSpan>
                
                <AnimatedSpan delay={400} className="text-emerald-400">
                  <span className="text-emerald-500">✓</span> Routed to outbox
                </AnimatedSpan>
              </Terminal>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Subtle gradient orbs for depth */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[150px]" />
    </section>
  );
}
