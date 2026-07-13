import type { Metadata } from "next";
import CarRentCaseStudy from "@/components/sections/carrent/CarRentCaseStudy";

export const metadata: Metadata = {
  title: "Car Renting System Case Study — Himash Mayadunna",
  description:
    "Case study of a mobile car rental reservation system built with Flutter, Dart, and Firebase.",
  keywords: [
    "Car Renting System",
    "Flutter",
    "Dart",
    "Firebase",
    "Mobile App Development",
    "Case Study"
  ],
};

export default function CarRentPage() {
  return <CarRentCaseStudy />;
}
