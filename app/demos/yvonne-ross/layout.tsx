import { SiteShell } from "@/components/SiteShell";

export default function YvonneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
