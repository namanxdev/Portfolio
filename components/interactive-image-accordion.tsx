"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveAccordionItemData {
  id: string;
  label: string;
  title: string;
  description: string;
  meta?: string;
  gradientClass: string;
}

interface InteractiveAccordionProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  items: InteractiveAccordionItemData[];
  defaultActiveIndex?: number;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

function AccordionItem({
  item,
  isActive,
  onMouseEnter,
}: {
  item: InteractiveAccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={cn(
        "group relative h-[420px] cursor-pointer overflow-hidden rounded-[24px] border border-white/10 transition-all duration-700 ease-in-out",
        isActive ? "w-[360px] md:w-[420px]" : "w-[82px] md:w-[96px]",
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", item.gradientClass)} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.68))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />

      {isActive ? (
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              {item.label}
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/55" />
          </div>

          <div>
            <p className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-white/75">{item.description}</p>
            {item.meta ? (
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/55">
                {item.meta}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-sm font-medium tracking-[0.16em] text-white/82 uppercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {item.label}
          </span>
        </div>
      )}
    </div>
  );
}

export function InteractiveAccordion({
  eyebrow,
  heading,
  description,
  items,
  defaultActiveIndex = 0,
  ctaLabel,
  ctaHref = "#contact",
  className,
}: InteractiveAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <section className={cn("w-full", className)}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
            {eyebrow}
          </p>
          <div className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
            {heading}
          </div>
          <p className="mt-6 text-base leading-8 text-white/58">{description}</p>

          {ctaLabel ? (
            <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/82 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ) : null}
        </div>

        <div className="overflow-x-auto">
          <div className="flex items-center gap-3 pb-2">
            {items.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
