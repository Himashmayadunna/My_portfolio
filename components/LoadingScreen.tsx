"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Custom SVG Icon Assets ─────────────────────────────────────
const ReactIcon = () => (
  <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M149.508 157.52L82.203 71.0667V135H68V45H82.203L135.292 113.326V45H149.508V157.52Z" fill="white" />
  </svg>
);

const NodejsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 0c-1.393 0-2.787.354-4.043 1.063l-5.908 3.41c-2.512 1.45-4.049 4.113-4.049 7.017v6.822c0 2.904 1.537 5.567 4.049 7.017l5.908 3.41C9.213 23.646 10.607 24 12 24c1.393 0 2.787-.354 4.043-1.063l5.908-3.41c2.512-1.45 4.049-4.113 4.049-7.017V11.49c0-2.904-1.537-5.567-4.049-7.017l-5.908-3.41C14.787.354 13.393 0 12 0zm-1 4.797c.414 0 .828.106 1.2.32l5.143 2.97c.754.435 1.215 1.234 1.215 2.105v5.938c0 .87-.461 1.67-1.215 2.105L12.2 21.21c-.372.214-.786.32-1.2.32-.414 0-.828-.106-1.2-.32L4.657 18.24c-.754-.435-1.215-1.234-1.215-2.105V10.2c0-.87.461-1.67 1.215-2.105L9.8 5.117c.372-.214.786-.32 1.2-.32z" fill="#339933" />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <text x="50%" y="65%" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">EX</text>
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
  </svg>
);

const SupabaseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M21.3619 12.1804L13.7853 22.8277C13.2505 23.5794 12.0834 23.2384 12.0287 22.3168L11.5307 13.916H4.25008C3.12517 13.916 2.51862 12.5936 3.25301 11.7408L10.8296 1.09349C11.3644 0.341814 12.5315 0.682784 12.5862 1.6044L13.0842 10.0052H20.3648C21.4897 10.0052 22.0963 11.3276 21.3619 12.1804Z" fill="#3ECF8E" />
  </svg>
);

const JavaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M2 19.5c0 .28.22.5.5.5h16c.28 0 .5-.22.5-.5v-1h-17v1zm14.5-9.5c0-.83-.67-1.5-1.5-1.5h-10c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h10c.83 0 1.5-.67 1.5-1.5v-6zm3-1h-2v4h2c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5zM9 1.5C9.55 1.5 10 2 10 2.5v2c0 .5-.45.9-1 .9s-1-.4-1-.9v-2c0-.5.45-1 1-1zm3.5 0c.55 0 1 .5 1 1v2c0 .5-.45.9-1 .9s-1-.4-1-.9v-2c0-.5.45-1 1-1z" fill="#ED8B00" />
  </svg>
);

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already saw the splash screen during this session
    const hasVisited = sessionStorage.getItem("portfolio_intro_seen");
    if (hasVisited) {
      return;
    }

    setIsVisible(true);

    // Disable scrolling while splash screen is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("portfolio_intro_seen", "true");
    }, 1900);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05050B] overflow-hidden"
        >
          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 -z-10 grid-bg opacity-[0.15] pointer-events-none"
            style={{
              maskImage: "radial-gradient(circle at center, black 10%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 60%)",
            }}
          />

          {/* Hardware-accelerated Mesh Background */}
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none transform-gpu">
            {/* Deep Indigo Mesh Orb */}
            <motion.div
              animate={{
                x: [-15, 15, -15],
                y: [-10, 10, -10],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[120px] mix-blend-screen transform-gpu will-change-transform"
            />
            {/* Deep Blue Mesh Orb */}
            <motion.div
              animate={{
                x: [15, -15, 15],
                y: [10, -10, 10],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-900/15 blur-[130px] mix-blend-screen transform-gpu will-change-transform"
            />
          </div>

          {/* Splash Content Stagger Wrapper */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05,
                },
              },
            }}
            className="flex flex-col items-center px-6 transform-gpu"
          >
            {/* Central Monogram Badge */}
            <motion.div
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-white/[0.015] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.15)] select-none mb-6"
            >
              {/* Slow Rotating Dashed Edge Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 will-change-transform"
              />

              {/* HM Monogram Text */}
              <span className="text-2xl sm:text-3xl font-extrabold tracking-widest bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                HM
              </span>

              {/* Pulsing center glow */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-1.5 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-md -z-10 transform-gpu"
              />
            </motion.div>

            {/* Himash Mayadunna */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2 font-sans select-none text-center"
            >
              Himash Mayadunna
            </motion.h1>

            {/* Software Engineering Undergraduate */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: {
                  opacity: 0.8,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-400 text-center select-none"
            >
              Software Engineering Undergraduate
            </motion.p>

            {/* Tech Icons Row */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="flex items-center justify-center gap-4 sm:gap-5 mt-6 px-4 py-2 rounded-2xl border border-white/5 bg-white/[0.01]"
            >
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="React"><ReactIcon /></div>
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="Next.js"><NextjsIcon /></div>
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="Node.js"><NodejsIcon /></div>
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="Express.js"><ExpressIcon /></div>
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="Supabase"><SupabaseIcon /></div>
              <div className="opacity-60 hover:opacity-100 transition-opacity" title="Java"><JavaIcon /></div>
            </motion.div>
          </motion.div>

          {/* Loading Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 z-[110] transform-gpu will-change-transform"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
