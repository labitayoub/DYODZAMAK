import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Medailles et plaques personnalisees",
  description: "Medailles et plaques honorifiques personnalisees au Maroc. Prix sur devis."
};

export default function PlaquesPage() {
  return <CategoryPageClient slug="medailles" />;
}
