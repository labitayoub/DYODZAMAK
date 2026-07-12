import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET() {
  const stats = await prisma.stat.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });
  return apiSuccess(stats);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const stat = await prisma.stat.create({ data });
  return apiSuccess(stat, 201);
}
