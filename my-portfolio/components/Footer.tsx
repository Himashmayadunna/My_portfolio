// ============================================================
// components/Footer.tsx
// Minimal footer with copyright
// ============================================================

import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-neutral-400">Next.js</span>,{" "}
          <span className="text-neutral-400">Tailwind CSS</span> &amp;{" "}
          <span className="text-neutral-400">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
