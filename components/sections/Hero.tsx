"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { LiquidButton } from "@/components/liquid-glass-button";
import { WebGLShader } from "@/components/web-gl-shader";

const HERO_WORDS = [
  "agent systems",
  "RAG pipelines",
  "MCP tooling",
  "workflows",
];

const METRICS = [
  { value: "95%+", label: "retrieval precision on enterprise RAG workloads" },
  { value: "10k+", label: "daily events in real-time recommendation systems" },
  { value: "25%", label: "database latency reduction on healthcare APIs" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-28 lg:px-8"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <WebGLShader className="pointer-events-none" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.12)_58%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.18))]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <BlurFade>
          <div className="border border-white/10 bg-black/20 p-2 shadow-[0_40px_140px_rgba(0,0,0,0.38)] backdrop-blur-[6px]">
            <div className="border border-white/10 px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <Badge
                  variant="outline"
                  className="w-fit rounded-full border-white/15 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/70"
                >
                  AI Engineer / Agent Builder / Open Source
                </Badge>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
                  Available for select builds
                </div>
              </div>

              <div className="mt-10 max-w-5xl">
                <p className="text-sm uppercase tracking-[0.24em] text-white/38">
                  Naman Gupta builds
                </p>

                <div className="mt-4 flex min-h-[5.5rem] items-center md:min-h-[8rem]">
                  <GooeyText
                    texts={HERO_WORDS}
                    morphTime={0.9}
                    cooldownTime={0.32}
                    className="h-full w-full"
                    textClassName="text-[clamp(3rem,9vw,7rem)] font-semibold tracking-[-0.08em] text-white"
                  />
                </div>

                <h1 className="max-w-4xl text-[clamp(2rem,4.2vw,3.7rem)] font-semibold tracking-[-0.06em] text-white">
                  that work in production.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                  Currently shipping RAG pipelines and multi-agent workflows at
                  Infradock.ai. Previously built real-time systems at Oldowan
                  Innovations and healthcare APIs at Yantram Medtech.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <LiquidButton
                    onClick={scrollToProjects}
                    size="xl"
                    className="rounded-full px-7 text-white"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </LiquidButton>

                  <Link
                    href="/blog"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-medium text-white/80 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    Read Blog
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/52">
                  <a
                    href="https://github.com/namanxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naman411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:namanguptabhopal@gmail.com"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </div>
              </div>

              <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                      {metric.value}
                    </div>
                    <p className="mt-2 max-w-[24ch] text-sm leading-6 text-white/52">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
