// ============================================================
// components/AnimatedBackground.tsx
// Subtle animated gradient orbs in the background
// ============================================================
"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden hidden lg:block transform-gpu">
      {/* Gradient orb 1 — top right */}
      <motion.div
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -30, 15, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[120px] transform-gpu will-change-transform"
      />
      {/* Gradient orb 2 — bottom left */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px] transform-gpu will-change-transform"
      />
      {/* Gradient orb 3 — center accent */}
      <motion.div
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px] transform-gpu will-change-transform"
      />
    </div>
  );
}
