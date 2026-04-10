"use client";

import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import {
  InteractiveAccordion,
  type InteractiveAccordionItemData,
} from "@/components/interactive-image-accordion";

const EXPERIENCE_ITEMS: InteractiveAccordionItemData[] = [
  {
    id: "infradock",
    label: "Infradock.ai",
    title: "AI Engineer Intern",
    description:
      "Building multi-agent workflows and RAG pipelines for enterprise clients, with retrieval quality pushed through semantic chunking and cross-encoder reranking.",
    meta: "Jan 2026 - Present / 95%+ retrieval precision",
    gradientClass: "from-[#0b1d3b] via-[#08111f] to-[#050505]",
  },
  {
    id: "oldowan",
    label: "Oldowan",
    title: "Software Developer Intern",
    description:
      "Engineered recommendation and notification systems processing 10,000+ daily events with sub-50ms latency in real production traffic.",
    meta: "Oct 2025 - Present / sub-50ms latency",
    gradientClass: "from-[#05211b] via-[#071310] to-[#050505]",
  },
  {
    id: "yantram",
    label: "Yantram",
    title: "Software Engineer Intern",
    description:
      "Built healthcare microservices with JWT-based RBAC and reduced database latency through targeted indexing and API performance work.",
    meta: "Jul 2025 - Oct 2025 / 25% latency reduction",
    gradientClass: "from-[#111c39] via-[#0b1020] to-[#050505]",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <InteractiveAccordion
          eyebrow="Experience"
          heading={
            <>
              Built inside{" "}
              <AnimatedTextCycle
                words={["AI teams", "real-time systems", "production backends"]}
                interval={2200}
                className="text-white"
              />
              .
            </>
          }
          description="The common thread across these roles is shipping systems that have to hold up under real usage, not just look good in a demo video."
          items={EXPERIENCE_ITEMS}
          defaultActiveIndex={0}
          ctaLabel="Get in touch"
          ctaHref="#contact"
        />
      </div>
    </section>
  );
}
