"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function FloatingPaths({
  position,
  strokeClassName,
}: {
  position: number;
  strokeClassName?: string;
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    duration: 18 + i * 0.35,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg className={cn("h-full w-full", strokeClassName)} viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.45 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.55, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

interface BackgroundPathsProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  strokeClassName?: string;
}

export function BackgroundPaths({
  title,
  description,
  children,
  className,
  contentClassName,
  strokeClassName = "text-white/30",
}: BackgroundPathsProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#060606]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} strokeClassName={strokeClassName} />
        <FloatingPaths position={-1} strokeClassName={strokeClassName} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.34),rgba(6,6,6,0.72))]" />

      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-6xl px-6 py-28 lg:px-8",
          contentClassName,
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {title}
          {description ? (
            <div className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              {description}
            </div>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </motion.div>
      </div>
    </div>
  );
}
