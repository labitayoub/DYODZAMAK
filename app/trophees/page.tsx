import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Trophées classiques et premium",
  description: "Trophées classiques, premium, corporate et sportifs personnalisés au Maroc. Prix sur devis."
};

export default function TropheesPage() {
  return <CategoryPageClient slug="trophees" />;
}
