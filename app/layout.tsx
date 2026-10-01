import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import "./editorial.css";
import "./editorial-v2.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-main" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Yvonne Ross Jewellery — Website Redesign Concept",
  description: "An unofficial website redesign concept for Yvonne Ross Jewellery in Kilkenny.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={`${geist.variable} ${cormorant.variable}`}>{children}</body></html>;
}
