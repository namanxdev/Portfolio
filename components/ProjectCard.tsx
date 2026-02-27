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
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/10 p-6 transition-all duration-500 hover:border-white/[0.15] hover:bg-zinc-900/30 ${
        featured ? "sm:flex-row sm:items-start sm:gap-6 sm:p-8" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {featured && <BorderBeam size={200} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />}

      <div className="relative flex flex-1 flex-col">
        <div className="mb-3 flex items-center gap-2.5">
          <h3 className={`font-semibold text-white ${featured ? "text-lg" : "text-base"}`}>{title}</h3>
          {status && (
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
              {status}
            </span>
          )}
        </div>

        <p className={`mb-4 text-sm leading-relaxed text-zinc-400 ${featured ? "max-w-lg" : ""}`}>
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-xs text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm font-medium text-blue-400/80">{metric}</p>
      </div>

      {featured && (
        <div className="hidden shrink-0 self-start pt-1 sm:block">
          <div className="rounded-full border border-white/10 p-2 text-zinc-500 transition-all group-hover:border-white/20 group-hover:text-white">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      )}
    </a>
  );
}
