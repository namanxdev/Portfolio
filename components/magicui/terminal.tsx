"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Terminal({ children, className, title = "terminal" }: TerminalProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c0e] shadow-2xl shadow-black/50", className)}>
      <div className="flex items-center gap-2 border-b border-white/[0.04] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <span className="ml-2 text-[11px] text-white/20">{title}</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-[1.7]">{children}</div>
    </div>
  );
}

interface TypingAnimationProps {
  lines: { text: string; className?: string }[];
  typingSpeed?: number;
  lineDelay?: number;
}

export function TypingAnimation({
  lines,
  typingSpeed = 30,
  lineDelay = 500,
}: TypingAnimationProps) {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; className?: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (currentChar === 0 && currentLine > 0) {
      const timeout = setTimeout(() => {
        setCurrentChar(1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }

    if (currentChar <= lines[currentLine].text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = {
            text: lines[currentLine].text.slice(0, currentChar),
            className: lines[currentLine].className,
          };
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed, lineDelay]);

  return (
    <div className="space-y-0">
      {displayedLines.map((line, i) => (
        <div key={i} className={cn("min-h-[1.7em]", line?.className ?? "")}>
          {line?.text ?? ""}
          {i === currentLine && currentLine < lines.length && currentChar <= lines[currentLine].text.length && (
            <span className="animate-pulse text-white/40">▋</span>
          )}
        </div>
      ))}
    </div>
  );
}
