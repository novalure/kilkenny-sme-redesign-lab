import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Yvonne Ross Jewellery — Website Redesign Concept",
  description:
    "An unofficial website redesign concept for Yvonne Ross Jewellery in Kilkenny.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
