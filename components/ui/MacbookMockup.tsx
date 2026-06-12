"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Custom high-fidelity SVG Tech Icons for the Laptop Screen
const ScreenIcons = {
  react: () => (
    <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: () => (
    <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 180 180" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M149.508 157.52L82.203 71.0667V135H68V45H82.203L135.292 113.326V45H149.508V157.52Z"
        fill="black"
      />
    </svg>
  ),
  nodejs: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0c-1.393 0-2.787.354-4.043 1.063l-5.908 3.41c-2.512 1.45-4.049 4.113-4.049 7.017v6.822c0 2.904 1.537 5.567 4.049 7.017l5.908 3.41C9.213 23.646 10.607 24 12 24c1.393 0 2.787-.354 4.043-1.063l5.908-3.41c2.512-1.45 4.049-4.113 4.049-7.017V11.49c0-2.904-1.537-5.567-4.049-7.017l-5.908-3.41C14.787.354 13.393 0 12 0zm-1 4.797c.414 0 .828.106 1.2.32l5.143 2.97c.754.435 1.215 1.234 1.215 2.105v5.938c0 .87-.461 1.67-1.215 2.105L12.2 21.21c-.372.214-.786.32-1.2.32-.414 0-.828-.106-1.2-.32L4.657 18.24c-.754-.435-1.215-1.234-1.215-2.105V10.2c0-.87.461-1.67 1.215-2.105L9.8 5.117c.372-.214.786-.32 1.2-.32z"
        fill="#339933"
      />
    </svg>
  ),
  express: () => (
    <svg className="w-5 h-5 rounded border border-white/20 bg-white/5" viewBox="0 0 24 24" fill="none">
      <text
        x="50%"
        y="65%"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        EX
      </text>
    </svg>
  ),
  supabase: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.3619 12.1804L13.7853 22.8277C13.2505 23.5794 12.0834 23.2384 12.0287 22.3168L11.5307 13.916H4.25008C3.12517 13.916 2.51862 12.5936 3.25301 11.7408L10.8296 1.09349C11.3644 0.341814 12.5315 0.682784 12.5862 1.6044L13.0842 10.0052H20.3648C21.4897 10.0052 22.0963 11.3276 21.3619 12.1804Z"
        fill="#3ECF8E"
      />
    </svg>
  ),
  javascript: () => (
    <svg className="w-5 h-5 rounded overflow-hidden" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" fill="#F7DF1E" />
      <path
        d="M12 18.5c0 1-.3 1.6-1.1 1.6-.7 0-1.1-.4-1.1-1v-4h-2.2v4.1c0 2.2 1.3 3.3 3.3 3.3 2 0 3.3-1.1 3.3-3.3v-4.1H12v3.4zm7.3 1c-.3.6-.9 1.1-1.9 1.1-1.2 0-1.8-.6-1.8-1.6h-2.2c0 2.1 1.4 3.4 4 3.4 2.2 0 3.9-1.2 3.9-3.2 0-3.3-3-3.8-3-4.9 0-.5.4-.8.9-.8.6 0 .9.3 1.1.8h2.1c-.2-1.8-1.5-2.8-3.2-2.8-2.2 0-3.8 1.2-3.8 3.2 0 3.3 3 3.8 3 4.9z"
        fill="black"
      />
    </svg>
  ),
  tailwindcss: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6C9.6 6 8.2 7.2 7.8 9.6c.9-1.2 1.95-1.5 3.15-.9.684.342 1.173.586 1.736.868.92.46 2.015 1.008 3.514 1.008 2.4 0 3.8-1.2 4.2-3.6-.9 1.2-1.95 1.5-3.15.9-.684-.342-1.173-.586-1.736-.868C14.595 6.548 13.5 6 12 6zm-4.2 8.4C5.4 14.4 4 15.6 3.6 18c.9-1.2 1.95-1.5 3.15-.9.684.342 1.173.586 1.736.868.92.46 2.015 1.008 3.514 1.008 2.4 0 3.8-1.2 4.2-3.6-.9 1.2-1.95 1.5-3.15.9-.684-.342-1.173-.586-1.736-.868C10.195 14.948 9.1 14.4 7.8 14.4z"
        fill="#06B6D4"
      />
    </svg>
  ),
};

export default function MacbookMockup() {
  // Motion values to track absolute normalized mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag-free rotations
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  // Map mouse positions to rotational angles (tilted slightly up and to the left by default)
  const tiltX = useTransform(springY, [-0.5, 0.5], [16, -2]); // Looking down, rotate up/down
  const tiltY = useTransform(springX, [-0.5, 0.5], [-20, 10]); // Rotates side-to-side

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position normalized between -0.5 and +0.5
      const normalizedX = e.clientX / window.innerWidth - 0.5;
      const normalizedY = e.clientY / window.innerHeight - 0.5;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Float animation configuration
  const floatTransition = {
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut",
  } as const;

  return (
    <div className="relative flex items-center justify-center w-full min-h-[460px] select-none perspective-[1200px] overflow-visible">
      
      {/* 3D Pivot Frame */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [-8, 8, -8] }}
        transition={floatTransition}
        className="relative flex flex-col items-center w-[300px] sm:w-[420px] md:w-[490px] lg:w-[520px] aspect-[16/11] preserve-3d transition-all duration-300 z-10"
      >
        
        {/* ==================== SCREEN LID ==================== */}
        <div
          className="relative w-full aspect-[16/10.2] bg-[#1e2022] rounded-t-2xl border-t border-x border-[#3a3d40] shadow-2xl p-[6px] preserve-3d"
          style={{
            transformOrigin: "bottom center",
            transform: "rotateX(-12deg) translateZ(0px)",
            boxShadow: "0 -10px 40px rgba(0,0,0,0.8), inset 0 2px 2px rgba(255,255,255,0.15)",
          }}
        >
          {/* Inner Black Bezel */}
          <div className="relative w-full h-full bg-[#08080a] rounded-lg p-[8px] md:p-[10px] flex flex-col shadow-inner">
            
            {/* Camera dot & notch */}
            <div className="absolute top-[3px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              <div className="w-[3px] h-[3px] rounded-full bg-blue-500/40 opacity-70" />
              <div className="w-[1.5px] h-[1.5px] rounded-full bg-green-500/60 opacity-60" />
            </div>

            {/* Display / Portfolio Screen Content */}
            <div className="relative flex-1 w-full h-full rounded-sm overflow-hidden bg-[#05050b] border border-white/5 flex flex-col text-left">
              
              {/* Screen grid & glow backgrounds */}
              <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
              <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/10 blur-[50px] pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600/10 blur-[50px] pointer-events-none" />

              {/* Top Mini Navigation Bar */}
              <header className="relative z-10 flex items-center justify-between border-b border-white/5 bg-[#05050B]/60 backdrop-blur-md px-3 py-1.5">
                <span className="text-[10px] font-bold tracking-tight text-white select-none">
                  Himash<span className="text-[#3B82F6]">.</span>
                </span>
                
                {/* Fake Navigation items */}
                <div className="flex gap-2.5 text-[7px] text-neutral-400 font-semibold uppercase tracking-wider">
                  <span>Home</span>
                  <span>About</span>
                  <span>Skills</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </div>

                {/* Dummy tiny action */}
                <div className="h-3.5 px-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-[6px] text-white flex items-center font-bold font-mono">
                  HIRE
                </div>
              </header>

              {/* Main Landing Screen Mock UI */}
              <main className="relative flex-1 flex flex-col justify-center px-4 md:px-6 py-2 select-none overflow-hidden">
                
                {/* Developer intro tag */}
                <div className="inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/5 px-2 py-0.5 w-max mb-1">
                  <span className="h-1 w-1 rounded-full bg-purple-400 animate-ping" />
                  <span className="text-[6px] tracking-wider uppercase font-semibold text-purple-300">
                    Active & Available
                  </span>
                </div>

                {/* Main Heading Text */}
                <h1 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-white leading-none mb-0.5">
                  Himash Mayadunna
                </h1>
                
                <h2 className="text-[8px] sm:text-[10px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Full Stack Software Engineer
                </h2>

                <p className="max-w-[220px] sm:max-w-[280px] text-[7px] sm:text-[8px] leading-relaxed text-neutral-400 mb-3">
                  Crafting highly responsive web apps, interactive 3D frontend interfaces, and scalable backend services.
                </p>

                {/* Tiny CTA Buttons */}
                <div className="flex gap-2 mb-3.5">
                  <div className="px-2.5 py-1 text-[6px] font-bold text-white bg-blue-500 rounded hover:bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.3)] cursor-pointer">
                    View Projects
                  </div>
                  <div className="px-2.5 py-1 text-[6px] font-bold text-neutral-300 border border-white/10 rounded hover:text-white hover:bg-white/5 cursor-pointer">
                    Get Resume
                  </div>
                </div>

                {/* Laptop Display Tech Stack Grid */}
                <div className="border-t border-white/5 pt-2 flex flex-col gap-1">
                  <span className="text-[6px] font-bold uppercase tracking-widest text-neutral-500">
                    Primary Technologies
                  </span>
                  
                  {/* Grid of tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(ScreenIcons).map(([key, IconComponent]) => (
                      <div
                        key={key}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.02] border border-white/5"
                      >
                        <div className="w-2.5 h-2.5 flex items-center justify-center shrink-0">
                          <IconComponent />
                        </div>
                        <span className="text-[5px] text-neutral-400 capitalize font-mono font-medium">
                          {key === "nodejs" ? "Node.js" : key === "tailwindcss" ? "Tailwind" : key}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>

            {/* Screen reflection/sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none rounded-lg z-15" />
          </div>
        </div>

        {/* ==================== LAPTOP BASE (KEYBOARD BODY) ==================== */}
        <div
          className="relative w-[101%] aspect-[16/1.4] bg-[#2d3135] rounded-b-xl border-b-[5px] border-x border-[#1c1d1f] shadow-2xl preserve-3d"
          style={{
            transformOrigin: "top center",
            transform: "rotateX(72deg) translateZ(-0.5px)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.9)",
          }}
        >
          {/* Base Aluminum Surface */}
          <div className="absolute inset-0 px-[20px] pt-[2px] bg-gradient-to-b from-[#25282a] to-[#2d3135]">
            
            {/* Keyboard Well / Dark Area */}
            <div className="w-full h-[60%] bg-[#121314] rounded-sm border border-[#1d1f21] px-4 py-[1.5px] flex flex-col gap-[1px]">
              
              {/* Stylized keyboard rows */}
              <div className="flex justify-between w-full h-[15%]">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                ))}
              </div>
              <div className="flex justify-between w-full h-[15%] gap-[0.5px]">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                ))}
              </div>
              <div className="flex justify-between w-full h-[15%] gap-[0.5px]">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                ))}
              </div>
              <div className="flex justify-between w-full h-[15%] gap-[0.5px]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                ))}
              </div>
              <div className="flex justify-between w-full h-[15%] gap-[0.5px]">
                <div className="w-[10%] bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                <div className="w-[60%] bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
                <div className="w-[30%] bg-[#202123] rounded-[0.5px] border-[0.2px] border-black/50" />
              </div>
            </div>

            {/* Trackpad Indent */}
            <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[30%] h-[32%] rounded-t bg-[#26292b] border border-black/20" />
            
            {/* Front Lip / Lid Indent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[14%] h-[12%] rounded-t-sm bg-black/45" />
          </div>
        </div>

        {/* ==================== SOFT REFLECTION ==================== */}
        <div
          className="absolute top-[102%] w-[98%] aspect-[16/6] pointer-events-none -z-20 overflow-hidden"
          style={{
            transform: "rotateX(60deg) scaleY(0.7)",
            opacity: 0.28,
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        >
          {/* Mirrored Lid Reflection */}
          <div className="w-full h-full bg-[#1e2022] rounded-b-2xl border-b border-x border-[#3a3d40] opacity-40 blur-[2px] flex items-end p-2">
            <div className="w-full h-[80%] bg-[#08080a] rounded-lg p-2">
              <div className="w-full h-full bg-gradient-to-r from-purple-800/20 via-blue-800/20 to-indigo-800/20 rounded" />
            </div>
          </div>
        </div>

      </motion.div>

      {/* ==================== DYNAMIC FLOATING SHADOW ==================== */}
      <motion.div
        animate={{
          scale: [0.93, 1.05, 0.93],
          opacity: [0.42, 0.62, 0.42],
        }}
        transition={floatTransition}
        className="absolute bottom-[-15px] left-1/2 h-10 w-[70%] sm:w-[62%] md:w-[54%] lg:w-[48%] -translate-x-1/2 rounded-full bg-black/85 blur-[16px] pointer-events-none z-0"
      />
      
    </div>
  );
}
