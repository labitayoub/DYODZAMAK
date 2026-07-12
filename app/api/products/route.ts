import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const session = await getSession();
  const where: Record<string, unknown> = session ? {} : { active: true };

  const categoryId = searchParams.get("categoryId");
  if (categoryId) where.categoryId = categoryId;

  const category = searchParams.get("category");
  if (category) {
    const cat = await prisma.category.findUnique({ where: { slug: category } });
    if (cat) where.categoryId = cat.id;
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: { sortOrder: "asc" },
    include: { category: true },
  });
  return apiSuccess(products);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const product = await prisma.product.create({ data });
  return apiSuccess(product, 201);
}
