"use client";

import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { BlurFade } from "@/components/ui/blur-fade";
import { Trophy } from "lucide-react";

const achievements = [
  {
    quote: "Winner (Top 1% Global)",
    name: "NASA Space Apps Challenge 2025",
    title: "",
  },
  {
    quote: "Finalist, Top 1% of 10,000+",
    name: "CodeSlayer 2025 (NIT Delhi)",
    title: "",
  },
  {
    quote: "Finalist, Finance Tech Track",
    name: "MumbaiHacks 2025",
    title: "",
  },
  {
    quote: "Finalist, Top 5% nationwide",
    name: "Smart India Hackathon 2024",
    title: "",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full py-24 px-6 md:px-8 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <BlurFade inView direction="up" offset={20}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] tracking-tight mb-3">
              Achievements
            </h2>
            <p className="text-[#888888] text-base max-w-lg">
              Recognition from hackathons and competitions
            </p>
          </div>
        </BlurFade>

        {/* Infinite Moving Cards */}
        <BlurFade inView direction="up" offset={20} delay={0.1}>
          <div className="relative">
            <InfiniteMovingCards
              items={achievements}
              direction="left"
              speed="fast"
              pauseOnHover={true}
              className="py-2"
            />
          </div>
        </BlurFade>
      </div>

      {/* Custom styling override for dark theme cards */}
      <style jsx global>{`
        .scroller li {
          background: linear-gradient(180deg, #111111, #0a0a0a) !important;
          border: 1px solid #1e1e1e !important;
          transition: all 0.3s ease;
        }
        
        .scroller li:hover {
          border-color: rgba(59, 130, 246, 0.3) !important;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.08);
        }

        .scroller li span.text-gray-100 {
          color: #ededed !important;
          font-weight: 500;
        }

        .scroller li span.text-gray-400 {
          color: #888888 !important;
        }

        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </section>
  );
}
