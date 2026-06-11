"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor on devices with mouse
    if (typeof window !== "undefined") {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest('[role="button"]') ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[data-cursor='pointer']"))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spotlight Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? "rgba(124, 58, 237, 0.1)" : "rgba(59, 130, 246, 0.03)",
          borderColor: hovered ? "rgba(168, 85, 247, 0.5)" : "rgba(59, 130, 246, 0.25)",
          width: hovered ? 60 : 32,
          height: hovered ? 60 : 32,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-blue-500/20 bg-blue-500/5 mix-blend-screen backdrop-blur-[0.5px] hidden md:block"
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 0.4 : 1,
          backgroundColor: hovered ? "#A855F7" : "#3B82F6",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-50 h-2.5 w-2.5 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] hidden md:block"
      />
    </>
  );
}
