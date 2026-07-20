import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export const dynamic = "force-dynamic";

const PRODUCT_FIELDS = [
  "slug", "badge", "image", "finishes", "usage", "customizable", "is3d", "featured", "newest", "premium", "active",
  "nameFr", "nameAr", "nameEn", "descFr", "descAr", "descEn", "specsFr", "specsAr", "specsEn",
  "categoryId",
];

function pickProductFields(data: Record<string, unknown>) {
  const result: Record<string, unknown> = {};
  for (const key of PRODUCT_FIELDS) {
    if (key in data) {
      result[key] = data[key];
    }
  }
  return result;
}

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
    orderBy: { nameFr: "asc" },
    include: { category: true },
  });
  return apiSuccess(products);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  try {
    const data = await req.json();
    const filteredData = pickProductFields(data);
    const product = await prisma.product.create({ data: filteredData as any });
    return apiSuccess(product, 201);
  } catch (error) {
    console.error("Error creating product:", error);
    return apiError("Error creating product", 500);
  }
}
