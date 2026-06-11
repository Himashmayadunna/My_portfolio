"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Delay for stagger animation (seconds) */
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.015] p-6 backdrop-blur-xl transition-all duration-300",
        hoverEffect && "hover:border-white/10 hover:bg-white/[0.03] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* Interactive spotlight glow */}
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(124, 58, 237, 0.08),
                transparent 80%
              )
            `,
          }}
        />
      )}

      {/* Decorative gradient border outline */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border-mask" />

      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
