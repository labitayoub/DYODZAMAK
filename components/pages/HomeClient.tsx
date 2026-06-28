"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import QuoteForm from "@/components/QuoteForm";
import SectionTitle from "@/components/SectionTitle";
import { FadeIn, ScaleIn, StaggerIn } from "@/components/Motion";
import { PrimaryButton, SecondaryButton, WhatsAppButton } from "@/components/Buttons";
import { categories, categoryRoutes, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomeClient() {
  const { lang, t } = useLanguage();
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const premium = products.filter((product) => product.premium).slice(0, 4);
  const leadCategory = categories[categoryRoutes[0]];

  return (
    <>
      <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
        <div className="section-frame">
          <div className="hero-panel rounded-[40px] px-6 py-8 md:px-10 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <FadeIn className="relative z-10 flex flex-col justify-between">
                <div>
                  <span className="eyebrow text-[rgba(247,243,237,0.72)] before:bg-white/20">{t.price}</span>
                  <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#f7f3ed] md:text-7xl lg:text-[5.9rem]">
                    DYODZAMAK shapes recognition into objects worth keeping.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(247,243,237,0.7)] md:text-xl">
                    {t.home.intro}
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-4 md:flex-row">
                  <PrimaryButton href="/catalogue">{t.nav.catalog}</PrimaryButton>
                  <WhatsAppButton>{t.whatsapp}</WhatsAppButton>
                </div>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
                  {t.trust.slice(0, 3).map((item) => (
                    <div key={item}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(247,243,237,0.42)]">Detail</p>
                      <p className="mt-2 text-sm leading-6 text-[rgba(247,243,237,0.76)]">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <ScaleIn className="relative">
                <div className="grid gap-4 md:grid-cols-[0.86fr_1.14fr]">
                  <div className="section-surface relative min-h-[280px] overflow-hidden rounded-[28px] border-white/10 bg-white/6 md:min-h-[420px]">
                    <Image
                      src={leadCategory.image}
                      alt={leadCategory[lang].title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">{leadCategory[lang].title}</p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-white/86">{leadCategory[lang].summary}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="section-surface rounded-[28px] border-white/10 bg-white/6 p-5 text-[#f7f3ed]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48">Approach</p>
                      <p className="mt-5 text-3xl font-medium leading-[1] tracking-[-0.05em]">
                        Custom medals, trophies, plaques, pins, and keychains with a studio-level presentation.
                      </p>
                    </div>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/18 p-5">
                      <div className="grid grid-cols-2 gap-4">
                        {featured.slice(0, 2).map((product) => (
                          <div key={product.id} className="relative min-h-[165px] overflow-hidden rounded-[20px]">
                            <Image
                              src={product.image}
                              alt={product[lang].name}
                              fill
                              sizes="(min-width: 1024px) 20vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-white">
                        <p className="text-sm font-medium tracking-[-0.02em]">{t.home.bannerText}</p>
                        <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-medium text-white/82">
                          {t.nav.work} <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <SectionTitle
            eyebrow="Collections"
            title="An edited catalogue, not a noisy grid."
            text="Each category is positioned as a distinct product family with its own use cases, finish language, and presentation style."
          />
          <StaggerIn className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryRoutes.slice(0, 4).map((slug) => (
              <ScaleIn key={slug}>
                <CategoryCard slug={slug} />
              </ScaleIn>
            ))}
          </StaggerIn>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="section-surface rounded-[32px] p-6 md:p-8">
              <span className="eyebrow">Craft</span>
              <h3 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                Premium feel comes from restraint, finish control, and proportion.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)]">
                The work needs to feel ceremonial without becoming ornamental. That means tighter typography, better image framing, and product-first storytelling.
              </p>
            </div>

            <div className="grid gap-3">
              {categoryRoutes.slice(4).map((slug) => (
                <Link
                  key={slug}
                  href={categories[slug].href}
                  className="section-surface flex items-center justify-between rounded-[24px] px-5 py-5 transition hover:translate-x-1"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Collection</p>
                    <p className="mt-2 text-xl font-medium tracking-[-0.04em] text-[#111111]">{categories[slug][lang].title}</p>
                  </div>
                  <ChevronRight size={18} className="text-[rgba(17,17,17,0.44)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionTitle
              eyebrow="Signature pieces"
              title="Products presented with the cadence of a premium brand."
              text="Instead of six identical blocks, the site now alternates density, photography, and copy rhythm to feel more intentional."
            />
            <div className="section-surface overflow-hidden rounded-[34px] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[420px] overflow-hidden rounded-[26px]">
                  <Image src={premium[0].image} alt={premium[0][lang].name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  {premium.slice(1, 3).map((product) => (
                    <div key={product.id} className="section-surface rounded-[24px] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">{product.badge}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-[-0.045em] text-[#111111]">{product[lang].name}</h3>
                      <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.62)]">{product[lang].description}</p>
                    </div>
                  ))}
                  <div className="rounded-[24px] border border-[rgba(17,17,17,0.08)] px-5 py-4">
                    <Link href="/catalogue" className="inline-flex items-center gap-2 text-sm font-medium text-[#111111]">
                      Explore the full catalogue <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ProductGrid products={featured} compact />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-dark section-frame overflow-hidden rounded-[40px] px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionTitle
                eyebrow="Process"
                title="Clear, short, and confidence-building."
                text="The experience reduces friction: choose a direction, send the essentials, approve the mockup, then production begins."
                dark
              />
            </div>
            <StaggerIn className="grid gap-4">
              {t.steps.map((step, index) => (
                <ScaleIn key={step}>
                  <div className="flex items-start gap-5 border-t border-white/10 py-5 first:border-t-0">
                    <span className="font-display text-5xl leading-none text-[rgba(201,158,99,0.9)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="max-w-md text-lg leading-8 text-[rgba(247,243,237,0.78)]">{step}</p>
                  </div>
                </ScaleIn>
              ))}
            </StaggerIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-20">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="section-surface rounded-[32px] p-6 md:p-8">
            <span className="eyebrow">Commission</span>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
              The quote flow should feel as considered as the products.
            </h2>
            <p className="mt-4 text-base leading-8 text-[rgba(17,17,17,0.62)]">
              No clutter, no fake urgency, no decorative noise. Just the information needed to move from interest to a credible quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SecondaryButton href="/personnalisation">{t.nav.customization}</SecondaryButton>
              <Link href="/contact" className="button-secondary">
                {t.nav.contact}
              </Link>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
