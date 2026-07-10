import type { Metadata } from "next";
import { RealisationsPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Realisations",
  description: "Galerie premium DYODZAMAK de medailles, trophees, plaques, pins, badges et creations metalliques personnalisees."
};

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
