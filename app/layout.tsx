import type { Metadata, Viewport } from "next";
import { Bungee, Climate_Crisis, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Climate_Crisis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-src",
});

const heading = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading-src",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body-src",
});

export const metadata: Metadata = {
  title: "OCd — OverclockedDevs",
  description: "OCd — OverclockedDevs. Build. Break. Fork. Fix.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${heading.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
