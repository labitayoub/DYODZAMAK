import type { Metadata } from "next";
import { CatalogPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Catalogue DYODZAMAK: medailles, trophees, trophees 3D, plaques, pins, badges et creations metalliques. Prix sur devis."
};

export default function CataloguePage() {
  return <CatalogPageClient />;
}
