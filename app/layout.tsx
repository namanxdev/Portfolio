import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Preloader } from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Gupta — AI Engineer & Agent Builder",
  description:
    "AI Engineer building agent infrastructure, RAG pipelines, and multi-agent workflows. Currently at Infradock.ai.",
  icons: {
    icon: "/images/Logo.jpg",
    shortcut: "/images/Logo.jpg",
    apple: "/images/Logo.jpg",
  },
  openGraph: {
    title: "Naman Gupta — AI Engineer & Agent Builder",
    description:
      "AI Engineer building agent infrastructure, RAG pipelines, and multi-agent workflows. Currently at Infradock.ai.",
    url: "https://namangupta.dev",
    type: "website",
    locale: "en_US",
    // opengraph-image.tsx auto-injects the dynamic OG image — no manual images needed
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Gupta — AI Engineer & Agent Builder",
    description:
      "AI Engineer building agent infrastructure, RAG pipelines, and multi-agent workflows. Currently at Infradock.ai.",
    images: [{ url: "/og-image.png", alt: "Naman Gupta — AI Engineer & Agent Builder" }],
  },
  metadataBase: new URL("https://namangupta.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-[#ededed] selection:bg-blue-500/30`}>
        <Preloader />
        <div className="fixed inset-0 z-[-1] bg-[#050505]" />
        <BackgroundPattern />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
