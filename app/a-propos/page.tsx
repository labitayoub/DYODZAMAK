import type { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation de DYODZAMAK, entreprise marocaine spécialisée en médailles, trophées et créations métalliques personnalisées."
};

export default function AProposPage() {
  return <AboutPageClient />;
}
