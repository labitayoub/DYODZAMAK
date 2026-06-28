"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/site";

export default function ProductGrid({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </div>
  );
}
