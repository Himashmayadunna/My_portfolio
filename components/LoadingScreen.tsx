"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const logs = [
    "Initializing dev environment...",
    "Mounting React 19 & Next.js routes...",
    "Injecting Framer Motion physics...",
    "Loading Tailwind CSS variables...",
    "Compiling premium UI layouts...",
    "System hydrated. Launching portfolio...",
  ];

  useEffect(() => {
    const duration = 1800;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const idx = Math.min(Math.floor((progress / 100) * logs.length), logs.length - 1);
  const terminalText = logs[idx];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05050B] font-mono text-xs text-neutral-400 px-6"
        >
          <div className="w-full max-w-md space-y-4">
            {/* Header info */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500">
              <span>HIMASHMAYADUNNA_ENGINE_V1.2.0</span>
              <span>CONNECTED</span>
            </div>

            {/* Simulated terminal logs */}
            <div className="h-10 select-none border border-white/5 bg-black/40 px-3 py-2 text-neutral-300 rounded-md">
              <span className="text-blue-400">&gt; </span>
              <span>{terminalText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-neutral-300 ml-1"
              />
            </div>

            {/* Progress Bar */}
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#A855F7]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage indicator */}
            <div className="flex justify-between font-bold text-xs uppercase tracking-wider">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Loading Environment
              </span>
              <span className="text-white">{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
