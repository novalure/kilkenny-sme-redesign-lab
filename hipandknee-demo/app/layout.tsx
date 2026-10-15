import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://hipandknee-kilkenny-redesign-demo.vercel.app"),
  title: { default: "Orthopaedic care in Kilkenny | Stuart Edwards — Redesign Demo", template: "%s | Stuart Edwards — Redesign Demo" },
  description: "An independent redesign concept for information on hip and knee orthopaedic care in Kilkenny.",
  robots: { index: false, follow: false },
  openGraph: { type: "website", locale: "en_IE", siteName: "Stuart Edwards Orthopaedic Surgery — Redesign Demo", title: "Orthopaedic care in Kilkenny | Redesign Demo", description: "Clearer paths to hip and knee information and practice contact.", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Stuart Edwards Orthopaedic Surgery redesign concept" }] },
  twitter: { card: "summary_large_image", title: "Stuart Edwards Orthopaedic Surgery — Redesign Demo", images: ["/social-card.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
