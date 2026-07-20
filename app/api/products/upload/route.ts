import { v2 as cloudinary } from "cloudinary";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return apiError("Unauthorized", 401);

  const formData = await request.formData();
  const file = formData.get("image");
  if (!(file instanceof File)) return apiError("Please select an image.");
  if (!ALLOWED_MIME_TYPES.includes(file.type)) return apiError("Only JPG, PNG, WEBP and GIF images are allowed.");
  if (file.size > MAX_FILE_SIZE) return apiError("The image must be 5 MB or smaller.");

  const buffer = Buffer.from(await file.arrayBuffer());

  const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "bestboutons/products" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result as { secure_url: string });
      }
    );
    uploadStream.end(buffer);
  });

  return apiSuccess({ url: result.secure_url }, 201);
}
