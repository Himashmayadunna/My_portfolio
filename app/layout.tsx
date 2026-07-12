import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── SEO metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: `${SITE.name} — Full-Stack Developer Portfolio`,
  description: SITE.description,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Portfolio",
    "TypeScript",
    "NSBM Green University",
    "Sri Lanka"
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — Full-Stack Developer Portfolio`,
    description: SITE.description,
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark custom-cursor-enabled">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05050B] text-white selection:bg-purple-500/30`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
