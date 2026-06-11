"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { DEVELOPMENT_JOURNEY } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { Globe, Smartphone, Database, ExternalLink } from "lucide-react";

const icons = {
  web: Globe,
  mobile: Smartphone,
  database: Database,
};

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Development Journey"
          subtitle="Building practical software solutions through continuous learning and hands-on projects."
        />

        <div ref={containerRef} className="relative mt-16 pb-12">
          {/* Timeline center line background */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/5 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated Timeline fill line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#3B82F6] to-[#A855F7] origin-top md:left-1/2 md:-translate-x-1/2 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />

          <div className="space-y-12">
            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = icons[item.iconType];

              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline Pin Node */}
                  <div className="absolute left-4 md:left-1/2 h-8 w-8 -translate-x-[15px] md:-translate-x-1/2 rounded-full border border-white/10 bg-[#05050B] z-20 flex items-center justify-center text-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.35)] select-none">
                    <IconComponent className="h-4 w-4" />
                  </div>

                  {/* Left Column Content */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <GlassCard hoverEffect={true} className="p-6">
                        {/* Meta information */}
                        <div className={`space-y-1 flex flex-col ${
                          isEven ? "md:items-end" : "items-start"
                        }`}>
                          <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-white tracking-wide">
                            {item.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className={`mt-3 text-sm text-neutral-400 leading-relaxed text-left ${
                          isEven ? "md:text-right" : "text-left"
                        }`}>
                          {item.description}
                        </p>

                        {/* Technology Badges */}
                        <div className={`mt-4 flex flex-wrap gap-1.5 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}>
                          {item.techStack.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>

                        {/* Links */}
                        <div className={`mt-6 pt-4 border-t border-white/5 flex items-center gap-4 select-none text-xs ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}>
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          )}
                          {item.demo && (
                            <a
                              href={item.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[#3B82F6] hover:text-[#6366F1] transition-colors font-semibold cursor-pointer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>

                  {/* Dummy columns to retain grid spacing on md/lg */}
                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
