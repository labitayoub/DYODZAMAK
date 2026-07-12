import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET() {
  const slides = await prisma.homeSlide.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });
  return apiSuccess(slides);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const slide = await prisma.homeSlide.create({ data });
  return apiSuccess(slide, 201);
}
