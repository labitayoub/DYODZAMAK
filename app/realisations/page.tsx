import type { Metadata } from "next";
import { RealisationsPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Galerie premium DYODZAMAK de médailles, trophées, plaques, pins, badges et créations métalliques personnalisées."
};

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
