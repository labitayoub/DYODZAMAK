"use client";

import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { CategorySlug, categories, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function CategoryPageClient({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const category = categories[slug];
  const categoryCopy = category[lang];
  const categoryProducts = products.filter((product) => product.category === slug);

  return (
    <div className="px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-32">
      <div className="section-frame">
        {/* Header Block */}
        <div className="section-surface rounded-[var(--radius-lg)] p-8 md:p-12 mb-10 text-center flex flex-col items-center">
          <span className="gold-kicker uppercase tracking-[0.18em] text-xs font-semibold mb-3">
            {lang === "fr" ? "Personnalisation sur mesure" : lang === "ar" ? "تخصيص حسب الطلب" : "Bespoke Customization"}
          </span>
          <h1 className="text-4xl font-medium leading-[1.25] tracking-[-0.03em] text-[#fffdf8] md:text-5xl max-w-4xl">
            {lang === "fr" 
              ? `Collection de ${categoryCopy.title} entièrement personnalisables` 
              : lang === "ar" 
              ? `مجموعة ${categoryCopy.title} قابلة للتخصيص بالكامل` 
              : `Fully customizable ${categoryCopy.title} collection`}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.7)]">
            {categoryCopy.summary}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="gold-button">
              {t.quote}
            </Link>
            <Link href="/catalogue" className="outline-button">
              {lang === "fr" ? "Voir le catalogue" : lang === "ar" ? "عرض الكتالوج" : "View the catalog"}
            </Link>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="mt-12">
          <ProductGrid products={categoryProducts} />
        </div>
      </div>
    </div>
  );
}
