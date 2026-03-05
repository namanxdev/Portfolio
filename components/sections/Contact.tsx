"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { ArrowUpRight, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on the footer content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  // Magnetic button state for the email
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springHoverY = useSpring(hoverY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: e.clientX - center.x, y: e.clientY - center.y };
    // Move up to 20px in any direction
    x.set(distance.x * 0.2);
    hoverY.set(distance.y * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    hoverY.set(0);
  };

  const SOCIAL_LINKS = [
    { name: "GITHUB", href: "https://github.com", icon: Github },
    { name: "LINKEDIN", href: "https://linkedin.com", icon: Linkedin },
    { name: "X (TWITTER)", href: "https://twitter.com", icon: Twitter },
    { name: "RESUME", href: "https://drive.google.com/file/d/1g7Yrref0xSS-6vMBJTff0Kx4mxP1o_jp/view?usp=sharing", icon: FileText },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full min-h-[90vh] bg-[#050505] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeams className="opacity-30 mix-blend-screen" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col h-full justify-between"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-20 md:mb-32">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-white/50 text-xl md:text-2xl font-medium tracking-wide uppercase">
              // What&apos;s next?
            </h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              LET&apos;S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                THE FUTURE.
              </span>
            </h1>
          </div>

          <motion.a
            ref={buttonRef}
            href="mailto:namanguptabhopal@gmail.com"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springHoverY }}
            className="group relative flex items-center justify-center w-40 h-40 md:w-52 md:h-52 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 overflow-hidden"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative z-10 flex flex-col items-center gap-2 text-white group-hover:text-blue-200 transition-colors">
              <span className="font-semibold tracking-tight text-lg md:text-xl">Get in touch</span>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 45 }}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.a>
        </div>

        {/* Bottom Social / Footer Row */}
        <div className="w-full flex flex-col mt-auto pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="flex flex-col">
              <p className="text-white/40 text-sm font-mono uppercase mb-2">Drop a line</p>
              <a href="mailto:namanguptabhopal@gmail.com" className="text-xl md:text-2xl text-white/80 hover:text-white transition-colors relative group">
                namanguptabhopal@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
                >
                  <span className="relative overflow-hidden flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                    <link.icon className="w-5 h-5 relative z-10" />
                  </span>
                  <span className="text-xs font-mono tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-white/30 text-xs md:text-sm font-mono">
            <p>© {new Date().getFullYear()} Naman Gupta. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Engineered with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-red-500">♥</motion.span> in India
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
