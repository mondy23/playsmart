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

// Metadata for SEO, social sharing, etc.
export const metadata: Metadata = {
  title: "Play Smart",
  description: "Safe, educational adventures for curious little minds. No ads, just joy.",
  keywords: ["education", "learning", "kids", "playroom", "play smart"],
  authors: [{ name: "Your Name or Company" }],
  creator: "Your Name or Company",
  openGraph: {
    title: "Play Smart",
    description: "Safe, educational adventures for curious little minds. No ads, just joy.",
    type: "website",
    url: "https://www.yourdomain.com",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Play Smart Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Smart",
    description: "Safe, educational adventures for curious little minds. No ads, just joy.",
    images: ["https://www.yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
