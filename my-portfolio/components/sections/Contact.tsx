// ============================================================
// components/sections/Contact.tsx
// Contact section with links
// ============================================================
"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to new opportunities and conversations"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-base leading-relaxed text-neutral-400"
        >
          Whether you have an internship opportunity, a project idea, or just
          want to say hello — my inbox is always open. I&apos;ll do my best to
          get back to you as soon as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            href={`mailto:${CONTACT.email}`}
            variant="primary"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email Me
          </Button>
          <Button
            href={CONTACT.linkedin}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            href={CONTACT.github}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
