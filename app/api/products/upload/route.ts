import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuid } from "uuid";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const extensionByMimeType: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const formData = await request.formData();
  const file = formData.get("image");
  if (!(file instanceof File)) return apiError("Please select an image.");
  if (!extensionByMimeType[file.type]) return apiError("Only JPG, PNG, WEBP and GIF images are allowed.");
  if (file.size > MAX_FILE_SIZE) return apiError("The image must be 5 MB or smaller.");

  const filename = `${uuid()}.${extensionByMimeType[file.type]}`;
  const directory = join(process.cwd(), "public", "uploads", "products");
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, filename), Buffer.from(await file.arrayBuffer()));

  return apiSuccess({ url: `/uploads/products/${filename}` }, 201);
}
