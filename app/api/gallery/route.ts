import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const items = await prisma.galleryItem.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return apiSuccess(items);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const item = await prisma.galleryItem.create({ data });
  return apiSuccess(item, 201);
}
