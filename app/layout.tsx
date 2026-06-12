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

export const metadata: Metadata = {
  title: "SoundLift - Music Promotion",
  description: "Your music. Heard worldwide. Real playlist pitching, real growth, real fans.",

  // SEO
  keywords: [
    "music promotion",
    "spotify playlist pitching",
    "music marketing",
    "Instagram promotion",
    "YouTube promotion",
    "TikTok campaign",
    "social media marketing",
    "artist promotion",
  ],

  // Open Graph (for Facebook, WhatsApp, etc.)
  openGraph: {
    title: "SoundLift - Music Promotion",
    description: "Get your music heard worldwide with real promotion campaigns.",
    url: "https://mohibullahmohim.com",
    siteName: "SoundLift",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SoundLift - Music Promotion",
    description: "Real music promotion for independent artists.",
  },

  // 👇 Your social links (NOT part of SEO, but useful for reference / reuse)
  other: {
    github: "https://www.github.com/developerMohib",
    linkedin: "https://www.linkedin.com/in/mohibullah-mohim",
    facebook: "https://www.facebook.com/mohibullah.jubileean",
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
      <body>{children}</body>
    </html>
  );
}
