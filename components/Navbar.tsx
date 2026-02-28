"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Honors", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-[5000] flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500",
          scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.05] py-4" : "bg-transparent py-6"
        )}
      >
        {/* Logo */}
        <a href="#hero" className="relative group overflow-hidden z-50">
          <div className="flex flex-col text-xl md:text-2xl font-bold tracking-tighter text-white uppercase leading-none">
            <span className="block transform transition-transform duration-500 group-hover:-translate-y-full">Naman.</span>
            <span className="block absolute top-full transform transition-transform duration-500 group-hover:-translate-y-full text-blue-400">Naman.</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-2 text-sm font-medium tracking-wide text-white/70 uppercase transition-colors hover:text-white"
            >
              {item.name}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-[-1]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        {/* Status indicator / CTA */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full z-50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono uppercase text-white/80">Available</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[5001] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn("block h-[2px] w-6 bg-white transition-transform duration-300", isMenuOpen && "translate-y-[8px] rotate-45")} />
          <span className={cn("block h-[2px] w-6 bg-white transition-opacity duration-300", isMenuOpen && "opacity-0")} />
          <span className={cn("block h-[2px] w-6 bg-white transition-transform duration-300", isMenuOpen && "-translate-y-[8px] -rotate-45")} />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[4999] bg-[#050505] flex items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center px-6 w-full">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white/50 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-12 inset-x-0 flex justify-center">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-mono uppercase text-white/80">Available for work</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
