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
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-50 transition-colors hover:text-zinc-300">
          Naman Gupta
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Component = link.href.startsWith("/") ? Link : "a";
            return (
              <Component
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {link.label}
              </Component>
            );
          })}
        </div>

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
            className="border-b border-white/5 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => {
                const Component = link.href.startsWith("/") ? Link : "a";
                return (
                  <Component
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/5 py-3 text-sm text-zinc-400 transition-colors last:border-0 hover:text-white"
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
