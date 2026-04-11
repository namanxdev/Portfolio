"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, FolderGit2, Briefcase, Code2, Award, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    { title: "Home", href: "#hero", icon: <Home className="h-full w-full" /> },
    { title: "Projects", href: "#projects", icon: <FolderGit2 className="h-full w-full" /> },
    { title: "Experience", href: "#experience", icon: <Briefcase className="h-full w-full" /> },
    { title: "Skills", href: "#skills", icon: <Code2 className="h-full w-full" /> },
    { title: "Honors", href: "#achievements", icon: <Award className="h-full w-full" /> },
    { title: "Contact", href: "#contact", icon: <Mail className="h-full w-full" /> },
  ];

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

      <div className="fixed bottom-6 right-6 z-[6000] md:right-auto md:left-1/2 md:-translate-x-1/2">
        <FloatingDock items={dockItems} />
      </div>
    </>
  );
}
