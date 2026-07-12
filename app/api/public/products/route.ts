import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const where: Record<string, unknown> = { active: true };

  const categorySlug = searchParams.get("category");
  if (categorySlug) {
    const cat = await prisma.category.findUnique({ where: { slug: categorySlug } });
    if (cat) where.categoryId = cat.id;
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: { sortOrder: "asc" },
    include: { category: true },
  });
  return apiSuccess(products);
}
