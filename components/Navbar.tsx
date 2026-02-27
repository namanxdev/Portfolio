"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.04] bg-[#09090b]/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-white/90 transition-colors hover:text-white"
        >
          NG
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Component = link.href.startsWith("/") ? Link : "a";
            return (
              <Component
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-[13px] text-[#a1a1aa] transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </Component>
            );
          })}
        </div>

        {/* Mobile */}
        <button
          className="relative h-8 w-8 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 bg-white transition-all duration-200 ${mobileOpen ? "rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-b border-white/[0.04] bg-[#09090b]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => {
                const Component = link.href.startsWith("/") ? Link : "a";
                return (
                  <Component
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/[0.03] py-3 text-[14px] text-[#a1a1aa] transition-colors last:border-0 hover:text-white"
                  >
                    {link.label}
                  </Component>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
