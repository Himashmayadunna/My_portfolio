import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Your Name — Full-Stack Developer Portfolio",
  description:
    "Full-stack developer specializing in React, Next.js, Node.js, Flutter, Java, and C#. Explore my projects, tech stack, and engineering challenges.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Portfolio",
    "TypeScript",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Developer Portfolio",
    description:
      "Full-stack developer building performant web & mobile applications.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
