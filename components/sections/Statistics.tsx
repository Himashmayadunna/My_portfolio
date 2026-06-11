"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

interface CounterProps {
  value: number;
}

function CounterNumber({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 60,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} className="font-extrabold text-white text-4xl sm:text-5xl" />;
}

export default function Statistics() {
  const stats = [
    { value: 120, suffix: "+", label: "Projects Completed" },
    { value: 40, suffix: "+", label: "Happy Clients" },
    { value: 5000, suffix: "+", label: "GitHub Contributions" },
  ];

  return (
    <section id="statistics" className="px-6 py-12 relative">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <GlassCard key={i} delay={i * 0.08} className="text-center py-8">
              <div className="flex items-center justify-center gap-0.5">
                <CounterNumber value={stat.value} />
                <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest font-mono text-neutral-500 font-bold">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
