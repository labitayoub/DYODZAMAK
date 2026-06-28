import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Plaques honorifiques et gravées",
  description: "Plaques honorifiques, gravées, de remerciement et événementielles personnalisées au Maroc. Prix sur devis."
};

export default function PlaquesPage() {
  return <CategoryPageClient slug="plaques" />;
}
