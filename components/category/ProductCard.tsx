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
        <div className="relative aspect-[1.02]">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.06),rgba(10,10,10,0.5))]" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="w-fit rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/88 backdrop-blur-sm">
            {label}
          </span>
          <div className="rounded-[20px] border border-white/25 bg-white/82 p-4 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">{categoryName}</p>
            <p className="mt-2 text-xl font-medium tracking-[-0.04em] text-[#111111]">{item.title[lang]}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
        <p className="text-sm leading-7 text-[rgba(17,17,17,0.64)]">{item.description[lang]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.details.map((detail) => (
            <span key={detail.fr} className="rounded-full border border-[rgba(17,17,17,0.08)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[rgba(17,17,17,0.55)]">
              {detail[lang]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
