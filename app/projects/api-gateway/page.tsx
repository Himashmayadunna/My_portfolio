import type { Metadata } from "next";
import ApiGatewayCaseStudy from "@/components/sections/apigateway/ApiGatewayCaseStudy";

export const metadata: Metadata = {
  title: "API Gateway Microservices Case Study — Himash Mayadunna",
  description:
    "Architectural case study of a resilient, secure API Gateway and Microservices system with rate-limiting, authentication, and service discovery.",
  keywords: [
    "API Gateway",
    "Microservices",
    "Node.js",
    "Express.js",
    "Reverse Proxy",
    "Case Study"
  ],
};

export default function ApiGatewayPage() {
  return <ApiGatewayCaseStudy />;
}
