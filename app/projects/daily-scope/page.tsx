import type { Metadata } from "next";
import DailyscopeCaseStudy from "@/components/sections/dailyscope/DailyscopeCaseStudy";

export const metadata: Metadata = {
  title: "Daily-scope News Platform Case Study — Himash Mayadunna",
  description:
    "Case study of Daily-scope, a modern news portal with category reporting, dynamic server rendering, and high-performance caching in Next.js.",
  keywords: [
    "Daily-scope",
    "News Platform",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Incremental Static Regeneration",
    "Case Study"
  ],
};

export default function DailyscopePage() {
  return <DailyscopeCaseStudy />;
}
