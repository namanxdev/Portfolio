"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, FolderGit2, Briefcase, Code2, Award, Mail } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", link: "#hero", icon: Home },
  { name: "Projects", link: "#projects", icon: FolderGit2 },
  { name: "Experience", link: "#experience", icon: Briefcase },
  { name: "Skills", link: "#skills", icon: Code2 },
  { name: "Honors", link: "#achievements", icon: Award },
  { name: "Contact", link: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Status indicator / CTA */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full z-50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono uppercase text-white/80">Available</span>
        </div>
      </motion.nav>

      {/* Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[5000]">
        <Dock direction="middle" className="bg-[#111111]/80 backdrop-blur-xl border-[#1e1e1e]">
          {NAV_ITEMS.map((item, idx) => (
            <DockIcon 
              key={item.name} 
              className="relative text-white/60 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={item.link} className="flex h-full w-full items-center justify-center">
                <item.icon className="h-5 w-5" />
              </a>
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1e1e1e] border border-white/10 text-white text-xs rounded-md shadow-xl whitespace-nowrap pointer-events-none"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </>
  );
}
