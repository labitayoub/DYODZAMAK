"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, MessageCircle } from "lucide-react";
import CatalogClient from "@/components/CatalogClient";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
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
      <section className="market-bg px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_.82fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-bronze">{t.price}</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-[-.04em] md:text-7xl">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-coal/64">{copy.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {copy.subcategories.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-black text-coal/68">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/devis" className="btn-dark px-6 py-4 text-center text-sm font-black">{t.quote}</Link>
              <a href={productWhatsAppMessage(firstProduct, lang)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 text-sm font-black text-coal">
                <MessageCircle size={18} /> {t.whatsapp}
              </a>
            </div>
          </div>
          <div className="product-stage relative grid min-h-[360px] place-items-center overflow-hidden rounded-[36px] shadow-[0_30px_90px_rgba(17,17,17,.10)] md:min-h-[500px]">
            <Image src={category.image} alt={copy.title} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={lang === "fr" ? "Modeles populaires" : "النماذج المطلوبة"} text={copy.summary} />
          <ProductGrid products={categoryProducts} />
        </div>
      </section>

      <section className="soft-band px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.22em] text-bronze">{copy.title}</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-.03em] md:text-5xl">{lang === "fr" ? "Usages frequents" : "استعمالات شائعة"}</h2>
            <p className="mt-4 leading-8 text-coal/64">{copy.summary}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.useCases.map((item) => (
              <div key={item} className="premium-card flex items-center gap-4 p-6">
                <CheckCircle className="text-bronze" />
                <span className="font-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CatalogClient initialCategory={slug} />
    </>
  );
}
