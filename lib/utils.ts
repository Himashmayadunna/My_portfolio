// ============================================================
// lib/utils.ts — Utility helpers
// ============================================================

import { type ClassValue, clsx } from "clsx";

/** Merge Tailwind classes safely (handles conflicts) */
export function cn(...inputs: ClassValue[]) {
  // clsx is lightweight — no need for tailwind-merge in a portfolio
  return clsx(inputs);
}
