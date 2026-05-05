import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Peps Caasi | Developer Portfolio",
  description:
    "Portfolio of Christian Peps Caasi - Mobile & Web Developer with experience in Flutter, React, and Blockchain systems",
  keywords:
    "developer, portfolio, mobile development, web development, blockchain",
  authors: [{ name: "Christian Peps Caasi" }],
  openGraph: {
    title: "Christian Peps Caasi | Developer Portfolio",
    description:
      "Portfolio showcasing projects and experience in mobile and web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-dark text-accent-light">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
