"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface ShimmerButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function ShimmerButton({
  shimmerColor = "#3b82f6",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius)]">
        <div className="absolute inset-[-100%] animate-spin-slow [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
      </div>
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
      <span className="z-10 flex items-center gap-2 text-sm font-medium">{children}</span>
    </button>
  );
}
