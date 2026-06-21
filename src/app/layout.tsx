import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanmay Mathur — Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years building high-impact React and TypeScript products. I remove friction at scale.",
  keywords: ["Tanmay Mathur", "Senior Software Engineer", "React", "TypeScript", "Next.js", "Houston TX"],
  authors: [{ name: "Tanmay Mathur" }],
  openGraph: {
    title: "Tanmay Mathur — Senior Software Engineer",
    description: "Senior Software Engineer who ships things that move numbers. 65% perf gains. $272M revenue. AI-native.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
