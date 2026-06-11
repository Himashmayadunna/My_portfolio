"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  magnetic?: boolean;
}

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Attract 25% of distance, capped at 15px max
    const factor = 0.25;
    const x = Math.max(-15, Math.min(15, distanceX * factor));
    const y = Math.max(-15, Math.min(15, distanceY * factor));
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Button({
  variant = "primary",
  href,
  target,
  rel,
  children,
  className,
  magnetic = true,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 select-none cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-purple-500/20",
    secondary:
      "bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white hover:opacity-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] border border-blue-500/20",
    outline:
      "border border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white backdrop-blur-md",
  };

  const innerContent = (
    <span className="flex items-center gap-2">
      {children}
    </span>
  );

  const buttonElement = href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(baseClasses, variants[variant], className)}
    >
      {innerContent}
    </a>
  ) : (
    <button
      {...props}
      className={cn(baseClasses, variants[variant], className)}
    >
      {innerContent}
    </button>
  );

  if (magnetic) {
    return <Magnetic>{buttonElement}</Magnetic>;
  }

  return buttonElement;
}
