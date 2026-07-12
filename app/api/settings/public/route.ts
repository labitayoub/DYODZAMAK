import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  if (key) {
    const setting = await prisma.siteSetting.findUnique({ where: { key } });
    return apiSuccess(setting?.value ?? null);
  }

  const settings = await prisma.siteSetting.findMany();
  const grouped: Record<string, Record<string, unknown>> = {};
  for (const s of settings) {
    if (!grouped[s.group]) grouped[s.group] = {};
    grouped[s.group][s.key] = s.value;
  }
  return apiSuccess(grouped);
}
