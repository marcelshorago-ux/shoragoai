import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata = {
  title: "Shorago AI",
  description: "Turn data chaos into intelligence-led operations.",
  manifest: "/manifest.webmanifest",
  themeColor: "#0b0b0f",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: "/apple-touch-icon.png"
  },
  appleWebApp: {
    capable: true,
    title: "Shorago AI",
    statusBarStyle: "black-translucent"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Calendly popup widget JS */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
