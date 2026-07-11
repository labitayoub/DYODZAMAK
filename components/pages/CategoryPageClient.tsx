"use client";

import Image from "next/image";
import Link from "next/link";
import CatalogClient from "@/components/CatalogClient";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/Buttons";
import { CategorySlug, categories, productWhatsAppMessage, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const categoryPageCopy = {
  fr: {
    applicationsEyebrow: "Applications",
    applicationsTitle: "Des usages concrets pour les entreprises, institutions, equipes et evenements.",
    selectionEyebrow: "Selection",
    selectionTitle: "Modeles populaires",
    selectionText: "Une selection de references pour visualiser rapidement le niveau de finition, le style et le type de personnalisation disponibles."
  },
  ar: {
    applicationsEyebrow: "التطبيقات",
    applicationsTitle: "استعمالات عملية للشركات والمؤسسات والفرق والفعاليات.",
    selectionEyebrow: "الاختيار",
    selectionTitle: "النماذج المطلوبة",
    selectionText: "مجموعة مرجعية تساعدك على تصور مستوى التشطيب والأسلوب ونوع التخصيص المتاح بسرعة."
  },
  en: {
    applicationsEyebrow: "Applications",
    applicationsTitle: "Practical uses for businesses, institutions, teams and events.",
    selectionEyebrow: "Selection",
    selectionTitle: "Popular models",
    selectionText: "A reference selection to quickly visualize the finish level, style and customization options available."
  }
} as const;

export default function CategoryPageClient({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const pageCopy = categoryPageCopy[lang];
  const category = categories[slug];
  const categoryCopy = category[lang];
  const categoryProducts = products.filter((product) => product.category === slug);
  const firstProduct = categoryProducts[0]?.[lang].name ?? categoryCopy.title;
  const applicationLabel = lang === "ar" ? "تطبيق" : "Application";

  return (
    <>
      <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
        <div className="section-frame">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
              <span className="eyebrow">{t.price}</span>
              <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-7xl">
                {categoryCopy.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{categoryCopy.summary}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {categoryCopy.subcategories.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 bg-white/5">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/devis">{t.quote}</PrimaryButton>
                <a href={productWhatsAppMessage(firstProduct, lang)} target="_blank" rel="noreferrer" className="button-whatsapp">
                  {t.whatsapp}
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[rgba(17,17,17,0.08)] shadow-[0_30px_80px_rgba(17,17,17,0.12)] md:min-h-[620px] bg-[#fcfbf9]/60 p-8">
              <Image src={category.image} alt={categoryCopy.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
          <SectionTitle
            eyebrow={pageCopy.applicationsEyebrow}
            title={pageCopy.applicationsTitle}
            text={categoryCopy.summary}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {categoryCopy.useCases.map((item) => (
              <div key={item} className="section-surface rounded-[24px] px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e5bd77]/70">{applicationLabel}</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <SectionTitle eyebrow={pageCopy.selectionEyebrow} title={pageCopy.selectionTitle} text={pageCopy.selectionText} />
          <div className="mt-10">
            <ProductGrid products={categoryProducts.slice(0, 6)} compact />
          </div>
          <div className="mt-8 flex justify-end">
            <Link href="/catalogue" className="button-secondary">
              {t.nav.catalog}
            </Link>
          </div>
        </div>
      </section>

      <CatalogClient initialCategory={slug} />
    </>
  );
}
