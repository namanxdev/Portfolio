"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  formatLargeNumbers?: boolean
}

function formatNumber(num: number): string {
  const absNum = Math.abs(num)
  if (absNum >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
  }
  if (absNum >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K"
  }
  return num.toString()
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  className,
  startValue = 0,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  formatLargeNumbers = false,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const [displayValue, setDisplayValue] = useState(
    formatLargeNumbers ? formatNumber(startValue) : startValue.toFixed(decimalPlaces)
  )

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const num = direction === "down" ? value - latest : latest
        if (formatLargeNumbers) {
          setDisplayValue(formatNumber(Math.round(num)))
        } else {
          setDisplayValue(num.toFixed(decimalPlaces))
        }
      }
    })

    return () => unsubscribe()
  }, [springValue, direction, value, decimalPlaces, formatLargeNumbers])

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className
      )}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
