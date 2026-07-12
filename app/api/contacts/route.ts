import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
  return apiSuccess(messages);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const message = await prisma.contactMessage.create({ data });
  return apiSuccess(message, 201);
}
