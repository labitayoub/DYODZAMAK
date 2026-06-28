import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Porte-cles personnalises",
  description:
    "Porte-cles metalliques personnalises au Maroc: logos, formes speciales, finitions dorees, argentees, bronze et metal noir. Prix sur devis."
};

export default function PorteClesPage() {
  return <CategoryPageClient slug="porte-cles" />;
}
