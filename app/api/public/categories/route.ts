import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess } from "@/lib/api-utils";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const category = await prisma.category.findUnique({
      where: { slug },
      include: { products: { where: { active: true }, orderBy: { sortOrder: "asc" } } },
    });
    return apiSuccess(category);
  }

  const categories = await prisma.category.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });
  return apiSuccess(categories);
}
