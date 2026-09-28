import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05050B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── SEO metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url || "https://himash.dev"),
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${SITE.name} — Full-Stack Developer Portfolio`,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: `${SITE.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Full-Stack Developer Portfolio`,
    description: SITE.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark custom-cursor-enabled" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05050B] text-white selection:bg-purple-500/30`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
