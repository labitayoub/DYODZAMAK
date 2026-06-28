"use client";

import ProductCard from "@/components/ProductCard";
import { ScaleIn, StaggerIn } from "@/components/Motion";
import { Product } from "@/data/site";

export default function ProductGrid({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return (
    <StaggerIn className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ScaleIn key={product.id}>
          <ProductCard product={product} compact={compact} />
        </ScaleIn>
      ))}
    </StaggerIn>
  );
}
