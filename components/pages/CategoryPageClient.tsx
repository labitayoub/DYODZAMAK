"use client";

import Image from "next/image";
import Link from "next/link";
import CatalogClient from "@/components/CatalogClient";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { PrimaryButton } from "@/components/Buttons";
import { CategorySlug, categories, productWhatsAppMessage, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function CategoryPageClient({ slug }: { slug: CategorySlug }) {
  const { lang, t } = useLanguage();
  const category = categories[slug];
  const copy = category[lang];
  const categoryProducts = products.filter((product) => product.category === slug);
  const firstProduct = categoryProducts[0]?.[lang].name ?? copy.title;

  return (
    <>
      <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
        <div className="section-frame">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
              <span className="eyebrow">{t.price}</span>
              <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#111111] md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)] md:text-lg">{copy.summary}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {copy.subcategories.map((item) => (
                  <span key={item} className="rounded-full border border-[rgba(17,17,17,0.08)] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[rgba(17,17,17,0.56)]">
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

            <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[rgba(17,17,17,0.08)] shadow-[0_30px_80px_rgba(17,17,17,0.12)] md:min-h-[620px]">
              <Image src={category.image} alt={copy.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
          <SectionTitle
            eyebrow="Applications"
            title="Des usages concrets pour les entreprises, institutions, equipes et evenements."
            text={copy.summary}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {copy.useCases.map((item) => (
              <div key={item} className="section-surface rounded-[24px] px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Application</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <SectionTitle
            eyebrow="Selection"
            title={lang === "fr" ? "Modeles populaires" : "النماذج المطلوبة"}
            text="Une selection de references pour visualiser rapidement le niveau de finition, le style et le type de personnalisation disponibles."
          />
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
