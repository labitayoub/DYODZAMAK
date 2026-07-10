import type { Metadata } from "next";
import CategoryPage from "@/components/category/CategoryPage";
import { getProductCategory } from "@/data/product-categories";

const category = getProductCategory("resine");

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription
};

export default function ResinePage() {
  return <CategoryPage category={category} />;
}
