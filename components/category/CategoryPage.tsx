"use client";

import CategoryHero from "@/components/category/CategoryHero";
import CTASection from "@/components/category/CTASection";
import ProductCard from "@/components/category/ProductCard";
import { PrimaryButton } from "@/components/Buttons";
import { useLanguage } from "@/components/LanguageProvider";
import { ProductCategory } from "@/data/product-categories";

export default function CategoryPage({
  category
}: {
  category: ProductCategory;
}) {
  const { lang } = useLanguage();
  const benefits = category.benefits ?? [];
  const applications = category.applications ?? [];
  const placeholders = category.placeholders ?? [];
  const benefitsTitle = category.benefitsTitle ?? { fr: "Pourquoi choisir cette categorie", ar: "Pourquoi choisir cette categorie" };
  const applicationsTitle = category.applicationsTitle ?? { fr: "Applications", ar: "Applications" };
  const applicationsDescription = category.applicationsDescription ?? {
    fr: "Des usages concrets adaptes aux besoins des entreprises, institutions et evenements.",
    ar: "Des usages concrets adaptes aux besoins des entreprises, institutions et evenements."
  };
  const sectionTitle = category.sectionTitle ?? { fr: "Exemples de produits", ar: "Exemples de produits" };
  const sectionText = category.sectionText ?? {
    fr: "Une selection representative pour vous aider a mieux projeter votre demande.",
    ar: "Une selection representative pour vous aider a mieux projeter votre demande."
  };
  const customizationTitle = category.customizationTitle ?? {
    fr: "Une personnalisation pensee pour votre projet",
    ar: "Une personnalisation pensee pour votre projet"
  };
  const customizationText = category.customizationText ?? {
    fr: "Chaque projet peut etre adapte selon vos besoins de forme, finition et quantite.",
    ar: "Chaque projet peut etre adapte selon vos besoins de forme, finition et quantite."
  };

  return (
    <>
      <CategoryHero category={category} lang={lang} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <span className="eyebrow">Avantages</span>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                {benefitsTitle[lang]}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)]">
                {category.heroDescription[lang]}
              </p>
              <div className="mt-8">
                <PrimaryButton href="/devis">Demander un devis</PrimaryButton>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.fr} className="section-surface rounded-[24px] px-5 py-6">
                  <p className="text-sm leading-7 text-[rgba(17,17,17,0.72)]">{benefit[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Applications</span>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                {applicationsTitle[lang]}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(17,17,17,0.62)] md:text-base md:leading-8">
              {applicationsDescription[lang]}
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {applications.map((item) => (
              <div key={item.fr} className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/80 px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">
                  Application
                </p>
                <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-[#111111]">{item[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Collection</span>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                {sectionTitle[lang]}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(17,17,17,0.62)] md:text-base md:leading-8">
              {sectionText[lang]}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {placeholders.map((item) => (
              <ProductCard key={item.title.fr} item={item} lang={lang} categoryName={category.navLabel[lang]} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="eyebrow">Sur mesure</span>
                <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                  {customizationTitle[lang]}
                </h2>
              </div>

              <div className="grid gap-4">
                <p className="text-base leading-8 text-[rgba(17,17,17,0.62)]">{customizationText[lang]}</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {["Forme", "Finition", "Quantite"].map((item) => (
                    <div key={item} className="rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-white/72 px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">{item}</p>
                      <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.64)]">Parametrable selon votre besoin et votre niveau de personnalisation.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
