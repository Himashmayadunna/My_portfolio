import type { Metadata } from "next";
import ApiGatewayCaseStudy from "@/components/sections/apigateway/ApiGatewayCaseStudy";

export const metadata: Metadata = {
  title: "Microservices API Gateway Case Study — Himash Mayadunna",
  description:
    "Case study of a high-performance backend API gateway featuring rate-limiting, JWT authentication, and Redis memory caching.",
  keywords: [
    "API Gateway",
    "Microservices",
    "Redis",
    "Express.js",
    "Rate Limiting",
    "Token Bucket",
    "Backend Developer",
    "Case Study"
  ],
};

export default function ApiGatewayPage() {
  return <ApiGatewayCaseStudy />;
}
