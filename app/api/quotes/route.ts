import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const quotes = await prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" } });
  return apiSuccess(quotes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const quote = await prisma.quoteRequest.create({ data });
  return apiSuccess(quote, 201);
}
