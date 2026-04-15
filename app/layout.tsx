import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = { title: siteConfig.name, description: siteConfig.description };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><header className="header"><div className="container nav"><Link href="/" className="brand">{siteConfig.name}</Link><nav className="nav-links"><Link href="/rent">Loue une voiture</Link><Link href="/choose-car">Choisis ta voiture</Link><Link href="/transport">Besoin d’un transport</Link><Link href="/claim">Gestion de ton sinistre</Link></nav></div></header>{children}</body></html>;
}
