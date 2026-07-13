import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const { id } = await params;
  const data = await req.json();
  const hero = await prisma.heroSection.update({ where: { id }, data });
  return apiSuccess(hero);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const { id } = await params;
  await prisma.heroSection.delete({ where: { id } });
  return apiSuccess({ message: "Deleted" });
}
