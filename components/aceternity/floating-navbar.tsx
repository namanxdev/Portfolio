"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      // Always visible at top, hide when scrolling down past 5%, show when scrolling up
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-black/50 px-2 sm:px-4 py-1.5 sm:py-2 shadow-lg shadow-black/10 backdrop-blur-xl">
          {/* Logo element mapping to #hero */}
          <a
            href="#hero"
            className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/5 text-sm sm:text-base font-bold text-white hover:bg-white/10 transition-colors"
          >
            NG
          </a>
          
          <div className="h-4 w-px bg-white/10 mx-1 sm:mx-2 hidden sm:block"></div>

          {/* Nav items container */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 text-neutral-300 hover:text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
