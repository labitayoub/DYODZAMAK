import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const points = await prisma.trustPoint.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });
  return apiSuccess(points);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const point = await prisma.trustPoint.create({ data });
  return apiSuccess(point, 201);
}
