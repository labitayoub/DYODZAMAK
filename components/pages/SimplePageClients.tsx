"use client";

import Image from "next/image";
import CatalogClient from "@/components/CatalogClient";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import { PrimaryButton, WhatsAppButton } from "@/components/Buttons";
import { categoryRoutes, emailDisplay, phoneDisplay, products, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

function PageIntro({ title, text }: { title: string; text: string }) {
  const { lang } = useLanguage();
  const heroProduct = products[0];

  return (
    <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
      <div className="section-frame">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
            <span className="eyebrow">DYODZAMAK</span>
            <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)] md:text-lg">{text}</p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-[rgba(17,17,17,0.08)] shadow-[0_30px_80px_rgba(17,17,17,0.12)] md:min-h-[520px] bg-[#fcfbf9]/60 p-8">
            <Image src={heroProduct.image} alt={heroProduct[lang].name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/6 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CatalogPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageIntro title={t.pages.catalog[0]} text={t.pages.catalog[1]} />
      <CatalogClient />
    </>
  );
}

export function CustomizationPageClient() {
  const { lang, t } = useLanguage();
  const options =
    lang === "fr"
      ? [
          "Logo en relief ou grave",
          "Texte, date et nom d'evenement",
          "Choix de finitions metalliques",
          "Forme speciale ou decoupe sur mesure",
          "Ruban, attache ou support adaptes",
          "Boite cadeau et presentation premium",
          "Serie numerotee ou edition limitee",
          "Maquette avant production"
        ]
      : [
          "شعار بارز أو منقوش",
          "نص وتاريخ واسم المناسبة",
          "اختيار التشطيبات المعدنية",
          "شكل خاص أو قص حسب الطلب",
          "شريط أو تثبيت أو حامل مناسب",
          "علبة هدية وعرض راق",
          "سلسلة مرقمة أو إصدار محدود",
          "معاينة التصميم قبل الإنتاج"
        ];

  return (
    <>
      <PageIntro title={t.pages.customization[0]} text={t.pages.customization[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionTitle
            eyebrow="Personnalisation"
            title="Chaque detail de personnalisation est la pour renforcer la valeur percue du produit."
            text={t.pages.customization[1]}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {options.map((item) => (
              <div key={item} className="section-surface rounded-[24px] px-5 py-6">
                <p className="text-xl font-medium tracking-[-0.04em] text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <ProductGrid products={products.filter((product) => product.customizable).slice(0, 6)} compact />
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export function RealisationsPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageIntro title={t.pages.gallery[0]} text={t.pages.gallery[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <SectionTitle eyebrow="Collections" title="Une gamme large, mais presentee avec coherence et exigence." text={t.pages.gallery[1]} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryRoutes.slice(0, 4).map((slug) => (
              <CategoryCard key={slug} slug={slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}

export function QuotePageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageIntro title={t.pages.quote[0]} text={t.pages.quote[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="section-surface rounded-[32px] p-6 md:p-8">
            <SectionTitle eyebrow="Devis" title="La demande doit etre simple, rassurante et directement exploitable." text={t.pages.quote[1]} />
            <div className="mt-8 grid gap-3">
              {t.trust.map((item) => (
                <div key={item} className="rounded-[20px] border border-[rgba(17,17,17,0.08)] bg-white/68 px-4 py-4 text-sm font-medium text-[rgba(17,17,17,0.72)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export function AboutPageClient() {
  const { lang, t } = useLanguage();
  const statements =
    lang === "fr"
      ? ["Catalogue multi-categories", "Production sur devis", "Accompagnement maquette", "Livraison partout au Maroc"]
      : [
          "كتالوج متعدد الفئات",
          "إنتاج حسب الطلب",
          "مواكبة التصميم",
          "توصيل في جميع أنحاء المغرب"
        ];

  return (
    <>
      <PageIntro title={t.pages.about[0]} text={t.pages.about[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle eyebrow="Atelier" title="DYODZAMAK se positionne comme un atelier de fabrication personnalisee, pas comme un simple catalogue." text={t.footer} />
          <div className="grid gap-3 md:grid-cols-2">
            {statements.map((item) => (
              <div key={item} className="section-surface rounded-[24px] px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Repere</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-surface mt-8 rounded-[38px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Suite</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                Passez de l&apos;inspiration a une demande claire, rapide et bien cadree.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/catalogue">{t.nav.catalog}</PrimaryButton>
              <WhatsAppButton>{t.whatsapp}</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPageClient() {
  return (
    <>
      <PageIntro title="Contact" text="WhatsApp reste le canal le plus rapide pour demander un devis, envoyer un logo ou preciser votre besoin." />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">WhatsApp</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">WhatsApp</p>
            </a>
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Telephone</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{phoneDisplay}</p>
            </a>
            <a href={`mailto:${emailDisplay}`} className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Email</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{emailDisplay}</p>
            </a>
            <div className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Localisation</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">Maroc</p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
