import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dyodzamak.ma"),
  title: {
    default: "DYODZAMAK | Medailles, trophees et creations metalliques au Maroc",
    template: "%s | DYODZAMAK"
  },
  description:
    "DYODZAMAK cree des medailles, trophees, plaques, pins, badges et objets metalliques personnalises au Maroc. Prix sur devis et commande via WhatsApp.",
  keywords: [
    "DYODZAMAK",
    "medailles personnalisees Maroc",
    "trophees Maroc",
    "plaques honorifiques",
    "pins metalliques",
    "badges personnalises",
    "prix sur devis"
  ],
  openGraph: {
    title: "DYODZAMAK",
    description: "Medailles, trophees et creations metalliques personnalisees. Prix sur devis.",
    images: ["/images/hero-awards.png"],
    locale: "fr_MA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
