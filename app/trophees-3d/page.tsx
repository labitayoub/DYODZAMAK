import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Trophees personnalises",
  description: "Trophees personnalises, logos 3D, formes speciales et finitions metal. Prix sur devis."
};

export default function Trophees3DPage() {
  return <CategoryPageClient slug="trophees" />;
}
