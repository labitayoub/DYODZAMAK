import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const settings = await prisma.siteSetting.findMany({ orderBy: { group: "asc" } });
  const grouped: Record<string, Record<string, unknown>> = {};
  for (const s of settings) {
    if (!grouped[s.group]) grouped[s.group] = {};
    grouped[s.group][s.key] = s.value;
  }
  return apiSuccess(grouped);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const { settings } = await req.json();
  if (!Array.isArray(settings)) return apiError("settings array required");

  for (const s of settings) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value, group: s.group || "general" },
      create: { key: s.key, value: s.value, group: s.group || "general" },
    });
  }
  return apiSuccess({ message: "Settings saved" });
}
