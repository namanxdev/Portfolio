"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// To fix the TypeScript error we need to assert the exact type of ease
// as framer-motion expects an explicit tuple [number, number, number, number]
const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100vh",
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] as const, 
      delay: 0.2 
    }
  }
};

const words = [
  "Hello", // English
  "Namaste", // Hindi
  "こんにちは", // Japanese
  "Hola", // Spanish
  "Ciao", // Italian
  "Hallo", // German
  "Bonjour", // French
];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Lock scroll instantly
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    document.body.style.cursor = "wait";

    if (index === words.length - 1) {
      // Auto-unlock scroll when it finishes
      setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.cursor = "default";
      }, 800);
      return;
    }

    // Sequence timing
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }
    }
  };

  const isCompleted = index === words.length - 1;

  return (
    <AnimatePresence mode="wait">
      {!isCompleted && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          onAnimationComplete={() => {
            document.body.style.overflow = "";
            document.body.style.cursor = "default";
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          {dimension.width > 0 && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // Smooth crossfade out
                exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                className="flex items-center gap-4 text-[#FAFAFA] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight absolute z-10"
              >
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-white/80" />
                <span className="w-48 md:w-56 text-left">{words[index]}</span>
              </motion.p>
              
              {/* Dennis Snellenberg's smooth curved bottom svg effect */}
              <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                  fill="#050505"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
