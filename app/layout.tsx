import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shorago AI — Kill Excel Hell. Run Ops in Real-Time.",
  description: "Shorago AI helps multi-location SMBs replace messy Excel with real-time dashboards and custom AI tools (bilingual, Miami-ready).",
  metadataBase: new URL("https://shoragoai.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
