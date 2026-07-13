import type { Metadata } from "next";
import BordlankaCaseStudy from "@/components/sections/bordlanka/BordlankaCaseStudy";

export const metadata: Metadata = {
  title: "BordLanka Property Marketplace Case Study — Himash Mayadunna",
  description:
    "Case study of BordLanka, a property marketplace web application designed with Next.js, Node.js, and MongoDB.",
  keywords: [
    "BordLanka",
    "Real Estate Marketplace",
    "Next.js",
    "MongoDB",
    "Node.js",
    "Full Stack",
    "Case Study"
  ],
};

export default function BordlankaPage() {
  return <BordlankaCaseStudy />;
}
