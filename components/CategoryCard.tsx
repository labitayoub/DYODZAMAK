"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CategorySlug, categories, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function CategoryCard({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const category = categories[slug];
  const count = products.filter((product) => product.category === slug).length;

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="h-full">
      <Link href={category.href} className="product-card block h-full rounded-[28px] p-3">
        <div className="relative aspect-[1.08] overflow-hidden rounded-[22px] bg-stone-50/60 p-4">
          <Image
            src={category.image}
            alt={category[lang].title}
            fill
            sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 100vw"
            className="object-contain p-2 transition duration-700 ease-out hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
            <span className="rounded-full border border-white/18 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm">
              {count} {t.results}
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur-sm">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
        <div className="px-2 pb-2 pt-5">
          <h3 className="text-[1.45rem] font-medium leading-none tracking-[-0.045em] text-white">
            {category[lang].title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/70">{category[lang].summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category[lang].subcategories.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 bg-white/5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
