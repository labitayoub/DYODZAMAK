import type { Metadata } from "next";
import { CatalogPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Catalogue DYODZAMAK: médailles, trophées, trophées 3D, plaques, pins, badges et créations métalliques. Prix sur devis."
};

export default function CataloguePage() {
  return <CatalogPageClient />;
}
