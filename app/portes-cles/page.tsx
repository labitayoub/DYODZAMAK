import type { Metadata } from "next";
import CategoryPage from "@/components/category/CategoryPage";
import { getProductCategory } from "@/data/product-categories";

const category = getProductCategory("portes-cles");

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription
};

export default function PortesClesPage() {
  return <CategoryPage category={category} />;
}
