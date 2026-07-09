import type { Metadata } from "next";
import MedilexCaseStudy from "@/components/sections/medilex/MedilexCaseStudy";

export const metadata: Metadata = {
  title: "MediLex – Healthcare & Inventory Management System Case Study",
  description:
    "Case study of MediLex, a flagship Full-Stack Healthcare ERP & Inventory Management platform built with React, Node.js, Express, and Microsoft SQL Server.",
  keywords: [
    "Healthcare Management System",
    "Inventory Management System",
    "React",
    "Express.js",
    "Microsoft SQL Server",
    "Full Stack Developer",
    "Advanced Database Management System",
    "Healthcare ERP",
    "Case Study"
  ],
};

export default function MediLexPage() {
  return <MedilexCaseStudy />;
}
