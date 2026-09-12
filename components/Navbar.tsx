"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scroll handler for both mobile & desktop
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      if (href.startsWith("#")) {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 72;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Update URL hash without jumping
          window.history.pushState(null, "", href);
        }
      } else {
        window.location.href = href;
      }
    },
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Auto close mobile menu on screen resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    // Section tracking using IntersectionObserver
    const sections = NAV_LINKS.map((link) => link.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-white/10 bg-[#05050B]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-lg sm:text-xl font-bold tracking-tight text-white transition-colors hover:text-[#7C3AED] select-none touch-manipulation"
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs uppercase tracking-wider font-semibold transition-all duration-300 py-1 ${
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

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors active:bg-white/10 lg:hidden z-50 touch-manipulation cursor-pointer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <div className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-out origin-center ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition-all duration-200 ease-out ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-out origin-center ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-[#05050B] backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-2 px-5 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium tracking-wide transition-all touch-manipulation active:scale-[0.98] ${
                            isActive
                              ? "bg-purple-500/15 text-[#A855F7] border border-purple-500/30 font-semibold"
                              : "text-neutral-300 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-3 mt-1 border-t border-white/10">
                  <Button
                    href={HERO.cta.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full text-center text-xs uppercase tracking-wider py-3.5"
                    magnetic={false}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
