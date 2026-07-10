import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Plaques honorifiques et gravees",
  description: "Plaques honorifiques, gravees, de remerciement et evenementielles personnalisees au Maroc. Prix sur devis."
};

export default function PlaquesPage() {
  return <CategoryPageClient slug="plaques" />;
}
