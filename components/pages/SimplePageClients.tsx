"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import CatalogClient from "@/components/CatalogClient";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import { PrimaryButton, SecondaryButton, WhatsAppButton } from "@/components/Buttons";
import { categories, categoryRoutes, emailDisplay, phoneDisplay, products, whatsappNumber } from "@/data/site";
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
            <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#111111] md:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)] md:text-lg">{text}</p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-[rgba(17,17,17,0.08)] shadow-[0_30px_80px_rgba(17,17,17,0.12)] md:min-h-[520px]">
            <Image src={heroProduct.image} alt={heroProduct[lang].name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
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
      ? ["Logo en relief", "Texte grave", "Ruban personnalise", "Boite cadeau", "Forme speciale", "Finition metal noir", "Serie numerotee", "Maquette avant production"]
      : ["شعار بارز", "نص منقوش", "شريط مخصص", "علبة هدية", "شكل خاص", "تشطيب أسود", "سلسلة مرقمة", "تصميم قبل الإنتاج"];

  return (
    <>
      <PageIntro title={t.pages.customization[0]} text={t.pages.customization[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionTitle
            eyebrow="Customization"
            title="Every option exists to support the object, not distract from it."
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
          <ProductGrid products={products.filter((product) => product.customizable).slice(0, 4)} compact />
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
          <SectionTitle eyebrow="Families" title="A premium catalogue needs range without losing coherence." text={t.pages.gallery[1]} />
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
            <SectionTitle eyebrow="Assurance" title="The quote request should feel direct, calm, and trustworthy." text={t.pages.quote[1]} />
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
      ? ["Catalogue multi-categories", "Production sur devis", "Accompagnement maquette", "Livraison Maroc"]
      : ["كتالوج متعدد الفئات", "إنتاج حسب الطلب", "مواكبة التصميم", "توصيل المغرب"];

  return (
    <>
      <PageIntro title={t.pages.about[0]} text={t.pages.about[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle eyebrow="Studio" title="DYODZAMAK is positioned more like a design-led atelier than a commodity catalogue." text={t.footer} />
          <div className="grid gap-3 md:grid-cols-2">
            {statements.map((item) => (
              <div key={item} className="section-surface rounded-[24px] px-5 py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Principle</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-dark mt-8 overflow-hidden rounded-[38px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Next</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-[#f7f3ed] md:text-5xl">
                Move from inspiration to a custom brief with a cleaner path.
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
  const { t } = useLanguage();

  return (
    <>
      <PageIntro title={t.pages.contact[0]} text={t.pages.contact[1]} />

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">WhatsApp</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">WhatsApp</p>
            </a>
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Phone</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{phoneDisplay}</p>
            </a>
            <a href={`mailto:${emailDisplay}`} className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Email</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">{emailDisplay}</p>
            </a>
            <div className="section-surface rounded-[24px] px-5 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Location</p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#111111]">Maroc</p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
