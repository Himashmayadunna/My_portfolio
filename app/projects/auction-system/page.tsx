import type { Metadata } from "next";
import AuctionCaseStudy from "@/components/sections/auction/AuctionCaseStudy";

export const metadata: Metadata = {
  title: "Auction Management System Case Study — Himash Mayadunna",
  description:
    "Case study of the Auction Management System, a real-world bidding platform built with C# backend services and a Next.js frontend.",
  keywords: [
    "Auction Management System",
    "ASP.NET Core",
    "C#",
    "Next.js",
    "TypeScript",
    "Bidding System",
    "Web Development",
    "Case Study"
  ],
};

export default function AuctionPage() {
  return <AuctionCaseStudy />;
}
