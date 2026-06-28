"use client";

import Link from "next/link";
import Image from "next/image";
import { FileUp, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import CatalogClient from "@/components/CatalogClient";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import { categories, categoryRoutes, emailDisplay, phoneDisplay, products, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

function PageIntro({ title, text }: { title: string; text: string }) {
  const { lang, t } = useLanguage();
  const heroProduct = products[0];
  return (
    <section className="market-bg px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[36px] bg-coal p-8 text-ivory md:grid-cols-[1fr_.55fr] md:p-12">
        <div>
          <span className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-coal">{t.price}</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.96] tracking-[-.04em] md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ivory/68">{text}</p>
        </div>
        <div className="product-stage relative hidden min-h-72 place-items-center overflow-hidden rounded-[28px] md:grid">
          <Image src={heroProduct.image} alt={heroProduct[lang].name} fill sizes="40vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
  const options = lang === "fr"
    ? ["Logo en relief", "Texte grave", "Ruban personnalise", "Boite cadeau", "Forme speciale", "Finition metal noir", "Serie numerotee", "Maquette avant production"]
    : ["شعار بارز", "نص منقوش", "شريط مخصص", "علبة هدية", "شكل خاص", "تشطيب أسود", "سلسلة مرقمة", "تصميم قبل الإنتاج"];

  return (
    <>
      <PageIntro title={t.pages.customization[0]} text={t.pages.customization[1]} />
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="premium-card p-8">
            <Sparkles className="text-bronze" size={30} />
            <h2 className="mt-5 text-4xl font-black tracking-[-.03em]">{t.nav.customization}</h2>
            <p className="mt-3 leading-7 text-coal/65">{t.pages.customization[1]}</p>
            <div className="mt-6 flex items-center gap-3 rounded-3xl bg-[#F4F4F4] p-5 font-black text-coal">
              <FileUp className="text-bronze" /> {t.form.upload}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {options.map((item) => (
              <div key={item} className="commerce-card p-6 text-lg font-black">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="soft-band px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={products.filter((product) => product.customizable).slice(0, 4)} />
        </div>
      </section>
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
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
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.home.featured} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categoryRoutes.map((slug) => <CategoryCard key={slug} slug={slug} />)}
          </div>
        </div>
      </section>
      <section className="soft-band px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
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
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.7fr_1.3fr]">
          <div className="grid gap-3">
            {t.trust.map((item) => (
              <div key={item} className="premium-card flex items-center gap-4 p-6 font-black">
                <ShieldCheck className="text-bronze" /> {item}
              </div>
            ))}
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export function AboutPageClient() {
  const { lang, t } = useLanguage();
  const stats = lang === "fr"
    ? ["Catalogue multi-categories", "Production sur devis", "Accompagnement maquette", "Livraison Maroc"]
    : ["كتالوج متعدد الفئات", "إنتاج حسب الطلب", "مواكبة التصميم", "توصيل المغرب"];

  return (
    <>
      <PageIntro title={t.pages.about[0]} text={t.pages.about[1]} />
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="premium-card p-8">
            <h2 className="text-5xl font-black tracking-[-.04em]">DYODZAMAK</h2>
            <p className="mt-5 text-lg leading-9 text-coal/68">{t.footer}</p>
            <Link href="/catalogue" className="btn-dark mt-6 inline-flex px-6 py-4 font-black">{t.nav.catalog}</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((item) => (
              <div key={item} className="commerce-card p-6">
                <ShieldCheck className="text-bronze" />
                <h3 className="mt-4 text-xl font-black">{item}</h3>
                <p className="mt-2 text-sm font-bold text-coal/58">{t.price}</p>
              </div>
            ))}
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
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="grid gap-3">
            <a className="premium-card flex items-center gap-4 p-6 font-black" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle className="text-bronze" /> WhatsApp</a>
            <a className="premium-card flex items-center gap-4 p-6 font-black" href={`tel:${phoneDisplay.replace(/\s/g, "")}`}><Phone className="text-bronze" /> {phoneDisplay}</a>
            <a className="premium-card flex items-center gap-4 p-6 font-black" href={`mailto:${emailDisplay}`}><Mail className="text-bronze" /> {emailDisplay}</a>
            <span className="premium-card flex items-center gap-4 p-6 font-black"><MapPin className="text-bronze" /> Maroc</span>
            <div className="premium-card grid min-h-48 place-items-center p-6 text-center font-black text-coal/55">Google Maps placeholder</div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
