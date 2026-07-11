import Image from "next/image";
import { ProductCategory } from "@/data/product-categories";

export default function ProductCard({
  item,
  lang,
  categoryName
}: {
  item: ProductCategory["placeholders"][number];
  lang: "fr" | "ar" | "en";
  categoryName: string;
}) {
  const label = lang === "fr" ? "Produit" : lang === "ar" ? "المنتج" : "Product";
  return (
    <article className="product-card flex h-full flex-col rounded-[30px] p-3">
      <div className="relative overflow-hidden rounded-[24px]">
        <div className="relative aspect-[1.02] bg-white/5 p-4">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
            className="object-contain p-2"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.4))]" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="w-fit rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/88 backdrop-blur-sm">
            {label}
          </span>
          <div className="rounded-[20px] border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e5bd77]/70">{categoryName}</p>
            <p className="mt-2 text-xl font-medium tracking-[-0.04em] text-white">{item.title[lang]}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
        <p className="text-sm leading-7 text-white/70">{item.description[lang]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.details.map((detail) => (
            <span key={detail.fr} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 bg-white/5">
              {detail[lang]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
