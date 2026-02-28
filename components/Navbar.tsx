"use client";

import { FloatingNav } from "@/components/aceternity/floating-navbar";
import {
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  Trophy,
} from "lucide-react";

const navItems = [
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

export default function Navbar() {
  return (
    <div className="relative">
      <FloatingNav navItems={navItems} />
      
      {/* Available for work badge - positioned on the right */}
      <div className="fixed top-10 right-6 z-[5001] hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-sm font-medium text-neutral-300">Available for work</span>
      </div>
    </div>
  );
}
