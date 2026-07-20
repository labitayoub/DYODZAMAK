import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

const PRODUCT_FIELDS = [
  "slug", "badge", "image", "finishes", "usage", "customizable", "is3d", "featured", "newest", "premium", "active",
  "nameFr", "nameAr", "nameEn", "descFr", "descAr", "descEn", "specsFr", "specsAr", "specsEn",
  "categoryId", "categorySlug",
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

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
  if (!product) return apiError("Not found", 404);
  return apiSuccess(product);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  try {
    const { id } = await params;
    const data = await req.json();
    if (data.categorySlug) {
      let cat = await prisma.category.findUnique({ where: { slug: data.categorySlug } });
      if (!cat) {
        cat = await prisma.category.create({
          data: {
            slug: data.categorySlug,
            href: `/${data.categorySlug}`,
            icon: "circle",
            image: "",
            navLabelFr: data.categorySlug,
            navLabelAr: data.categorySlug,
            navLabelEn: data.categorySlug,
            active: true,
            sortOrder: 0,
          },
        });
      }
      data.categoryId = cat.id;
    }
    delete data.categorySlug;
    const filteredData = pickProductFields(data);
    const product = await prisma.product.update({ where: { id }, data: filteredData as any });
    return apiSuccess(product);
  } catch (error) {
    console.error("Error updating product:", error);
    return apiError("Error updating product", 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  try {
    const { id } = await params;
    await prisma.product.delete({ where: { id } });
    return apiSuccess({ message: "Deleted" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return apiError("Error deleting product", 500);
  }
}
