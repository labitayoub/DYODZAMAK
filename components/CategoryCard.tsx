"use client";

import Link from "next/link";
import { Award, BadgeCheck, Box, KeyRound, Medal, PanelTop, Trophy } from "lucide-react";
import { CategorySlug, categories, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const icons = {
  medal: Medal,
  trophy: Trophy,
  box: Box,
  panel: PanelTop,
  badge: Award,
  key: KeyRound
};

export default function CategoryCard({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const category = categories[slug];
  const Icon = icons[category.icon as keyof typeof icons] ?? BadgeCheck;
  const count = products.filter((product) => product.category === slug).length;

  return (
    <Link href={category.href} className="commerce-card group grid min-h-56 p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#F4F4F4] text-bronze transition group-hover:bg-coal group-hover:text-gold">
          <Icon size={25} />
        </span>
        <span className="rounded-full bg-[#FAF7F2] px-3 py-1.5 text-xs font-black text-bronze">{count} {t.results}</span>
      </div>
      <h3 className="mt-8 text-2xl font-black tracking-[-.02em] text-coal group-hover:text-bronze">{category[lang].title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-coal/65">{category[lang].summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {category[lang].subcategories.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full bg-[#F4F4F4] px-3 py-1.5 text-[11px] font-bold text-coal/60">
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
