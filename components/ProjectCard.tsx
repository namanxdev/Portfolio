"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  metric: string;
  href?: string;
  status?: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, tech, metric, href, status, featured }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex overflow-hidden rounded-xl border border-white/[0.06] transition-all duration-500 hover:border-white/[0.1] ${
        featured
          ? "flex-col gap-6 bg-gradient-to-br from-[#0f0f14] to-[#0c0c0e] p-8 sm:flex-row sm:items-start"
          : "h-full flex-col bg-[#0c0c0e] p-6"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <BorderBeam size={featured ? 200 : 120} duration={6} colorFrom="#3b82f6" colorTo="#7c3aed" />}

      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-3 flex items-center gap-2.5">
          <h3 className={`font-semibold tracking-tight text-white ${featured ? "text-[18px]" : "text-[15px]"}`}>{title}</h3>
          {status && (
            <span className="rounded-full bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium text-[#3b82f6]">
              {status}
            </span>
          )}
        </div>

        <p className={`mb-5 flex-1 leading-[1.7] text-white/35 ${featured ? "text-[14px] max-w-lg" : "text-[13px]"}`}>
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/30 transition-colors group-hover:text-white/45"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-[13px] font-medium text-[#3b82f6]/80">{metric}</p>
      </div>

      {/* Featured: arrow */}
      {featured && (
        <div className="hidden shrink-0 self-start pt-1 sm:block">
          <div className="rounded-full border border-white/[0.06] p-2 text-white/20 transition-all group-hover:border-white/[0.12] group-hover:text-white/50">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      )}
    </a>
  );
}
