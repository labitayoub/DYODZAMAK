import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Médailles personnalisées",
  description: "Médailles personnalisées, sportives, événementielles et commémoratives au Maroc. Bronze, doré, argent et finitions spéciales. Prix sur devis."
};

export default function MedaillesPage() {
  return <CategoryPageClient slug="medailles" />;
}
