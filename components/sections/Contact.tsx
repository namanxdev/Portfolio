"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// Background effects
import { GLSLHills } from "@/components/ui/glsl-hills";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const mousePosRef = useRef({ x: null as number | null, y: null as number | null });
  const animationFrameIdRef = useRef<number | null>(null);

  const x = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springHoverY = useSpring(hoverY, { stiffness: 150, damping: 15, mass: 0.1 });

  // Draw arrow from dynamic-hero
  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !buttonRef.current || !ctxRef.current) return;

    const targetEl = buttonRef.current;
    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    // Get position relative to the section/canvas
    const rect = targetEl.getBoundingClientRect();
    const canvasRect = canvasRef.current.getBoundingClientRect();

    const cx = rect.left - canvasRect.left + rect.width / 2;
    const cy = rect.top - canvasRect.top + rect.height / 2;
    const mx = x0 - canvasRect.left;
    const my = y0 - canvasRect.top;

    const a = Math.atan2(cy - my, cx - mx);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (mx + x1) / 2;
    const midY = (my + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - mx, y1 - my) * 0.5);
    const t = Math.max(-1, Math.min(1, (my - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;

    const r = Math.sqrt((x1 - mx) ** 2 + (y1 - my) ** 2);
    const opacity = Math.min(1.0, Math.max(0, (r - Math.max(rect.width, rect.height) / 2) / 500));

    // Dynamic color arrow depending on how close you are to the button
    const arrowColor = { r: 139, g: 92, b: 246 }; // Purple-ish
    ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
    ctx.lineWidth = 2;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    ctx.restore();

    // Arrow head
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 10 * (ctx.lineWidth / 1.5);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - headLength * Math.cos(angle - Math.PI / 6), y1 - headLength * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - headLength * Math.cos(angle + Math.PI / 6), y1 - headLength * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !buttonRef.current) return;

    ctxRef.current = canvas.getContext("2d");
    const ctx = ctxRef.current;

    const updateCanvasSize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    // Setting initial size slightly after mount to ensure layout is done
    setTimeout(updateCanvasSize, 100);

    const animateLoop = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  const handleMouseMoveButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    { name: "GITHUB", href: "https://github.com/namanxdev", icon: Github },
    { name: "LINKEDIN", href: "https://www.linkedin.com/in/naman411/", icon: Linkedin },
    { name: "X (TWITTER)", href: "https://x.com/Naman_411", icon: Twitter },
    { name: "RESUME", href: "https://drive.google.com/file/d/16KR-Dku2dgBfz6Q6jVrUn4MkbH5tA_gs/view?usp=sharing", icon: FileText },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full min-h-[90vh] bg-[#050505] flex flex-col items-center justify-center overflow-hidden pt-32 pb-28 md:pb-12"
    >
      <div className="absolute inset-0 z-0 opacity-80 md:opacity-100">
        <GLSLHills />
      </div>
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-10 hidden sm:block" 
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col h-full justify-between"
      >
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12 mb-20 md:mb-32 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4 max-w-2xl">
            <h2 className="text-white/50 text-xl md:text-2xl font-medium tracking-wide uppercase">
              // What&apos;s next?
            </h2>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tighter text-white leading-tight md:leading-[0.9]">
              LET&apos;S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                THE FUTURE.
              </span>
            </h1>
          </div>

          <motion.a
            ref={buttonRef}
            href="mailto:namanguptabhopal@gmail.com"
            onMouseMove={handleMouseMoveButton}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springHoverY }}
            className="group relative flex shrink-0 items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 overflow-hidden"
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex flex-col items-center md:items-start">
              <p className="text-white/40 text-sm font-mono uppercase mb-2">Drop a line</p>
              <a href="mailto:namanguptabhopal@gmail.com" className="text-xl md:text-2xl text-white/80 hover:text-white transition-colors relative group">
                namanguptabhopal@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
