import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./v3.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-main" });

export const metadata: Metadata = {
  title: "Yvonne Ross Jewellery — Website Redesign Concept",
  description: "An unofficial website redesign concept for Yvonne Ross Jewellery in Kilkenny.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={geist.variable}>{children}</body></html>;
}
