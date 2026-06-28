import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Trophées 3D personnalisés",
  description: "Trophées 3D personnalisés, logos 3D, formes spéciales et finitions métal. Prix sur devis."
};

export default function Trophees3DPage() {
  return <CategoryPageClient slug="trophees-3d" />;
}
