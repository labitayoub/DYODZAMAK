"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "@/components/ProductGrid";
import { CategorySlug, Product, categories } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { usePublicProducts } from "@/lib/hooks";

function mapApiProduct(raw: Record<string, unknown>): Product {
  const cat = raw.category as Record<string, unknown> | undefined;
  return {
    id: String(raw.id),
    category: (cat?.slug as CategorySlug) ?? "medailles",
    badge: String(raw.badge ?? ""),
    image: String(raw.image ?? ""),
    finishes: (raw.finishes as Product["finishes"]) ?? [],
    usage: (raw.usage as Product["usage"]) ?? [],
    customizable: Boolean(raw.customizable),
    is3d: Boolean(raw.is3d),
    featured: Boolean(raw.featured),
    newest: Boolean(raw.newest),
    premium: Boolean(raw.premium),
    fr: {
      name: String(raw.nameFr ?? ""),
      specs: Array.isArray(raw.specsFr) ? (raw.specsFr as string[]) : [],
      description: String(raw.descFr ?? ""),
    },
    ar: {
      name: String(raw.nameAr ?? ""),
      specs: Array.isArray(raw.specsAr) ? (raw.specsAr as string[]) : [],
      description: String(raw.descAr ?? ""),
    },
    en: {
      name: String(raw.nameEn ?? ""),
      specs: Array.isArray(raw.specsEn) ? (raw.specsEn as string[]) : [],
      description: String(raw.descEn ?? ""),
    },
  };
}

export default function CategoryPageClient({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const category = categories[slug];
  const categoryCopy = category[lang];
  const { products: apiProducts } = usePublicProducts(slug);

  const categoryProducts = useMemo(() => {
    return Array.isArray(apiProducts) ? apiProducts.map(mapApiProduct) : [];
  }, [apiProducts]);

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
