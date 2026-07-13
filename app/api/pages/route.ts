import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const pages = await prisma.pageContent.findMany({ orderBy: { slug: "asc" } });
  return apiSuccess(pages);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const data = await req.json();
  const page = await prisma.pageContent.create({ data });
  return apiSuccess(page, 201);
}
