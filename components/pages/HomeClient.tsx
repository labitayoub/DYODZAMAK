"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, MessageCircle, PackageCheck, Sparkles, Truck } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { Product, categories, categoryRoutes, products, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomeClient() {
  const { lang, t, isRtl } = useLanguage();
  const featured = products.filter((product) => product.featured);
  const newest = products.filter((product) => product.newest);
  const premium = products.filter((product) => product.premium);
  const medals = products.filter((product) => product.category === "medailles");
  const pins = products.filter((product) => product.category === "pins-badges");
  const accessories = products.filter((product) => product.category === "pins-badges" || product.category === "porte-cles");
  const miniCards = [
    { icon: MessageCircle, title: lang === "fr" ? "Devis rapide" : "عرض سريع", text: t.whatsapp },
    { icon: Sparkles, title: lang === "fr" ? "Personnalisation" : "تخصيص", text: lang === "fr" ? "Logo, texte, finition" : "شعار، نص، تشطيب" },
    { icon: Truck, title: lang === "fr" ? "Livraison Maroc" : "توصيل المغرب", text: lang === "fr" ? "Toutes les villes" : "كل المدن" }
  ];

  return (
    <>
      <section className="market-bg px-4 pb-12 pt-10 md:px-6 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.24em] text-bronze shadow-[inset_0_0_0_1px_rgba(17,17,17,.06)]">
              {t.price}
            </span>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.04em] text-coal md:text-7xl lg:text-8xl">
              {t.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-.02em] text-coal md:text-3xl">{t.home.subtitle}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-coal/62 md:text-lg">{t.home.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/catalogue" className="btn-dark inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black">
                {t.nav.catalog} <ArrowRight className={isRtl ? "rotate-180" : ""} size={18} />
              </Link>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 text-sm font-black text-coal">
                <MessageCircle size={19} /> {t.whatsapp}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {categoryRoutes.map((slug) => (
                <Link key={slug} href={categories[slug].href} className="rounded-full bg-white px-4 py-2 text-sm font-black text-coal/70 transition hover:text-bronze">
                  {categories[slug][lang].title}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="product-stage relative grid min-h-[420px] place-items-center overflow-hidden rounded-[36px] shadow-[0_30px_90px_rgba(17,17,17,.10)] md:min-h-[560px]">
              <Image src={products[0].image} alt={products[0][lang].name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              {miniCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="glass-panel rounded-3xl p-4 shadow-[0_18px_50px_rgba(17,17,17,.10)]">
                    <Icon className="text-bronze" size={22} />
                    <h3 className="mt-3 text-sm font-black">{card.title}</h3>
                    <p className="mt-1 text-xs font-bold text-coal/56">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Premium catalogue" title={t.home.featured} text={t.home.bannerText} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categoryRoutes.map((slug) => (
              <CategoryCard key={slug} slug={slug} />
            ))}
          </div>
        </div>
      </section>

      <ProductRail title={t.home.best} products={featured} />
      <ProductRail title={t.home.new} products={newest} muted />
      <ProductRail title={t.home.premium} products={premium} />
      <ProductRail title={t.home.medals} products={medals} muted />
      <ProductRail title={t.home.pins} products={accessories.length ? accessories : pins} />

      <section className="soft-band px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.home.how} />
          <div className="grid gap-4 md:grid-cols-5">
            {t.steps.map((step, index) => (
              <div key={step} className="premium-card p-6">
                <span className="text-sm font-black uppercase tracking-[.22em] text-bronze">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-8 text-lg font-black leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {t.trust.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-full bg-white px-5 py-4 shadow-[inset_0_0_0_1px_rgba(17,17,17,.05)]">
              <BadgeCheck className="text-bronze" />
              <span className="text-sm font-black">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[36px] bg-coal p-8 text-ivory md:flex-row md:items-center md:p-12">
          <div>
            <PackageCheck className="mb-5 text-gold" />
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-.03em] md:text-6xl">{t.home.finalTitle}</h2>
            <p className="mt-4 max-w-2xl text-ivory/66">{t.home.bannerText}</p>
          </div>
          <Link href="/devis" className="rounded-full bg-gold px-7 py-4 font-black text-coal">
            {t.quote}
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductRail({ title, products, muted = false }: { title: string; products: Product[]; muted?: boolean }) {
  return (
    <section className={`px-4 py-16 md:px-6 md:py-20 ${muted ? "soft-band" : "bg-[#FAF7F2]"}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black tracking-[-.03em] md:text-5xl">{title}</h2>
          <Link href="/catalogue" className="rounded-full bg-white px-4 py-2 text-sm font-black text-bronze">
            Catalogue
          </Link>
        </div>
        <ProductGrid products={products} compact />
      </div>
    </section>
  );
}
