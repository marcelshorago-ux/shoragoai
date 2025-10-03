import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://shoragoai.com"),
  title: {
    default: "Shorago AI — Real-Time Ops & Custom AI Tools",
    template: "%s | Shorago AI",
  },
  description:
    "Turn data chaos into intelligence-led operations. Multi-location dashboards, KPI alerts, and custom AI tools that automate your workflows (EN/ES).",
  keywords: [
    "operations",
    "AI",
    "dashboards",
    "multi-location",
    "franchises",
    "gyms",
    "contractors",
    "clinics",
    "Miami",
    "South Florida",
  ],
  openGraph: {
    type: "website",
    url: "https://shoragoai.com/",
    siteName: "Shorago AI",
    title: "Shorago AI — Real-Time Ops & Custom AI Tools",
    description:
      "Run every location in real-time. Optimize execution. Increase value. EN/ES.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shorago AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shorago AI — Real-Time Ops & Custom AI Tools",
    description:
      "Run every location in real-time. Optimize execution. Increase value. EN/ES.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://shoragoai.com/",
  },
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
