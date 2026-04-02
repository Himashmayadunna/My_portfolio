// ============================================================
// components/AnimatedBackground.tsx
// Subtle animated gradient orbs in the background
// ============================================================
"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orb 1 — top right */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]"
      />
      {/* Gradient orb 2 — bottom left */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]"
      />
      {/* Gradient orb 3 — center accent */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/8 blur-[100px]"
      />
    </div>
  );
}
