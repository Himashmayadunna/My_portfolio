import type { Metadata } from "next";
import LKTravelMateCaseStudy from "@/components/sections/lktravelmate/LKTravelMateCaseStudy";

export const metadata: Metadata = {
  title: "LK TravelMate Case Study — Himash Mayadunna",
  description:
    "Case study of LK TravelMate, an AI-powered mobile travel assistant designed specifically for exploring Sri Lanka.",
  keywords: [
    "LK TravelMate",
    "Flutter",
    "Dart",
    "Firebase",
    "Gemini AI",
    "Google Maps API",
    "Mobile App Development",
    "Case Study",
    "Sri Lanka"
  ],
};

export default function LKTravelMatePage() {
  return <LKTravelMateCaseStudy />;
}
