import type { Metadata } from "next";
import CategoryPage from "@/components/category/CategoryPage";
import { getProductCategory } from "@/data/product-categories";

const category = getProductCategory("boutons");

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription
};

export default function BoutonsPage() {
  return <CategoryPage category={category} />;
}
