import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Polices auto-hébergées (packages npm) plutôt que chargées depuis
// Google Fonts au runtime : rendu garanti identique au mockup, quel que
// soit le réseau (proxy, pare-feu d'école/entreprise, etc.).
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "TshinK — La couture sur-mesure",
  description:
    "TshinK conçoit des vêtements sur-mesure, transforme des pièces existantes et donne vie à des créations uniques, du croquis à la dernière finition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
