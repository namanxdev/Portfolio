"use client";

import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          naman<span className="text-zinc-500">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const Component = link.href.startsWith("/") ? Link : "a";
            return (
              <Component
                key={link.label}
                href={link.href}
                className="text-[13px] text-zinc-500 transition-colors duration-200 hover:text-zinc-200"
              >
                {link.label}
              </Component>
            );
          })}
        </div>

        <a
          href="mailto:namanguptabhopal@gmail.com"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[13px] text-zinc-300 transition-all duration-200 hover:bg-white/5 hover:text-white md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for work
        </a>

        <button
          className="relative h-8 w-8 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 bg-white transition-all duration-200 ${
              mobileOpen ? "rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 bg-white transition-all duration-200 ${
              mobileOpen ? "-rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="relative border-b border-white/[0.04] bg-black/90 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => {
                const Component = link.href.startsWith("/") ? Link : "a";
                return (
                  <Component
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/[0.04] py-3 text-sm text-zinc-500 transition-colors last:border-0 hover:text-zinc-200"
                  >
                    {link.label}
                  </Component>
                );
              })}
              <a
                href="mailto:namanguptabhopal@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for work
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
