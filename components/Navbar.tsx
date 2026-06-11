"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const scrollPos = window.scrollY + 150; // offset for nav height
      const sections = NAV_LINKS.map((link) => link.href.substring(1));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#05050B]/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-[#7C3AED] select-none"
        >
          {SITE.name.split(" ")[0]}
          <span className="text-[#3B82F6]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <Button
            href={HERO.cta.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            magnetic={true}
            className="px-5 py-2 text-xs uppercase tracking-wider"
          >
            Resume
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-[#05050B]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 font-mono text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-base tracking-wide transition-colors ${
                        isActive ? "text-[#7C3AED] font-bold" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-white/5">
                <Button
                  href={HERO.cta.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full text-center text-xs uppercase tracking-wider py-3"
                  magnetic={false}
                >
                  Download Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
