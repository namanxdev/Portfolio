"use client";

import { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  metric: string;
  href?: string;
  status?: string;
  featured?: boolean;
  image?: string;
  gradientClass?: string;
  icon?: string;
  label?: string;
}

export function ProjectCard({ title, description, tech, metric, href, status, featured, image, gradientClass = "from-zinc-900 to-zinc-800", icon = "🔗", label = "Project" }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const VisualArea = ({ className = "" }: { className?: string }) => (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradientClass} ${className}`}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />
      {/* Project icon/label centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center transition-transform duration-500 group-hover:scale-110">
          <div className="text-4xl mb-2">{icon}</div>
          <span className="text-xs text-zinc-400 font-mono uppercase tracking-widest">
            {label}
          </span>
        </div>
      </div>
      {/* Gradient accent line at bottom/left depending on layout */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent sm:hidden" />
    </div>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950/50 transition-all duration-500 hover:border-white/[0.15] hover:bg-zinc-900/50 ${
        featured ? "sm:flex-row sm:items-stretch" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {featured && <BorderBeam size={200} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />}

      {/* Non-featured visual area (Top) */}
      {!featured && (
        <VisualArea className="h-48 w-full border-b border-white/[0.08]" />
      )}

      {/* Text Content */}
      <div className={`relative flex flex-1 flex-col ${featured ? "p-8 sm:w-1/2" : "p-6"}`}>
        <div className="mb-3 flex items-center gap-2.5">
          <h3 className={`font-semibold text-white ${featured ? "text-lg" : "text-base"}`}>{title}</h3>
          {status && (
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
              {status}
            </span>
          )}
        </div>

        <p className={`mb-4 text-sm leading-relaxed text-zinc-400 ${featured ? "max-w-md" : ""}`}>
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

        <div className="mt-auto pt-2">
          <p className="text-sm font-medium text-blue-400/80">{metric}</p>
        </div>
      </div>

      {/* Featured visual area (Right side) */}
      {featured && (
        <div className="relative hidden sm:block sm:w-1/2 overflow-hidden border-l border-white/[0.08] bg-zinc-900/50">
          <VisualArea className="h-full w-full" />
          
          {/* Arrow icon overlay for featured */}
          <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/50 p-2 text-zinc-500 backdrop-blur-md transition-all group-hover:border-white/20 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      )}
      
      {/* Arrow icon for mobile featured */}
      {featured && (
        <div className="absolute right-6 top-6 sm:hidden rounded-full border border-white/10 bg-black/50 p-2 text-zinc-500 backdrop-blur-md transition-all group-hover:border-white/20 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      )}
      
      {/* Mobile featured visual area (Top) */}
      {featured && (
        <div className="sm:hidden">
          <VisualArea className="h-48 w-full border-t border-white/[0.08]" />
        </div>
      )}
    </a>
  );
}
