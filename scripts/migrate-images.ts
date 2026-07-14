import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter });
}

const prisma = createPrismaClient();

async function uploadToCloudinary(filePath: string): Promise<string | null> {
  if (!existsSync(filePath)) {
    console.log(`  Fichier introuvable: ${filePath}`);
    return null;
  }

  try {
    const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "dyodzamak/products" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as { secure_url: string });
        }
      );
      uploadStream.end(readFileSync(filePath));
    });
    console.log(`  Uploadé: ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`  Erreur upload ${filePath}:`, err);
    return null;
  }
}

async function migrate() {
  console.log("Migration des images vers Cloudinary...\n");

  const products = await prisma.product.findMany({ where: { image: { not: null } } });
  const categories = await prisma.category.findMany({ where: { image: { not: null } } });
  const slides = await prisma.homeSlide.findMany({ where: { image: { not: null } } });
  const gallery = await prisma.galleryItem.findMany({ where: { image: { not: null } } });
  const media = await prisma.media.findMany();

  const allRecords = [
    ...products.map((r) => ({ type: "Product", id: r.id, image: r.image!, update: (url: string) => prisma.product.update({ where: { id: r.id }, data: { image: url } }) })),
    ...categories.map((r) => ({ type: "Category", id: r.id, image: r.image!, update: (url: string) => prisma.category.update({ where: { id: r.id }, data: { image: url } }) })),
    ...slides.map((r) => ({ type: "HomeSlide", id: r.id, image: r.image!, update: (url: string) => prisma.homeSlide.update({ where: { id: r.id }, data: { image: url } }) })),
    ...gallery.map((r) => ({ type: "GalleryItem", id: r.id, image: r.image!, update: (url: string) => prisma.galleryItem.update({ where: { id: r.id }, data: { image: url } }) })),
    ...media.map((r) => ({ type: "Media", id: r.id, image: r.path, update: (url: string) => prisma.media.update({ where: { id: r.id }, data: { path: url } }) })),
  ];

  const publicDir = join(process.cwd(), "public");
  let migrated = 0;
  let skipped = 0;

  for (const record of allRecords) {
    const oldPath = record.image;
    // skip already cloudinary URLs
    if (oldPath.startsWith("http")) {
      skipped++;
      continue;
    }

    const localPath = join(publicDir, oldPath.replace(/^\//, ""));
    console.log(`[${record.type} ${record.id}] Source: ${oldPath}`);

    const cloudinaryUrl = await uploadToCloudinary(localPath);
    if (cloudinaryUrl) {
      await record.update(cloudinaryUrl);
      migrated++;
    } else {
      console.log(`  Aucun fichier local trouvé pour ${oldPath}`);
      skipped++;
    }
  }

  console.log(`\nTerminé: ${migrated} images migrées, ${skipped} ignorées.`);
  await prisma.$disconnect();
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
