import { NextRequest } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return apiError("No file uploaded");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${uuid()}.${ext}`;
  const uploadDir = join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const filepath = join(uploadDir, filename);
  await writeFile(filepath, buffer);

  const media = await prisma.media.create({
    data: {
      filename,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      path: `/uploads/${filename}`,
    },
  });

  return apiSuccess(media, 201);
}

export async function GET() {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const media = await prisma.media.findMany({ orderBy: { createdAt: "desc" } });
  return apiSuccess(media);
}
