// ============================================================
// components/ui/GlassCard.tsx
// A reusable glassmorphism card with hover effects
// ============================================================
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Delay for stagger animation (seconds) */
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]",
        className
      )}
    >
      {/* Subtle gradient glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
