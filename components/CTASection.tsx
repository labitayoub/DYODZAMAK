"use client";

import { PrimaryButton, WhatsAppButton } from "@/components/Buttons";
import { FadeIn } from "@/components/Motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTASection({ title }: { title?: string }) {
  const { t } = useLanguage();

  return (
    <section className="metal-bg px-4 py-20 text-ivory md:px-8">
      <FadeIn className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="mb-3 inline-flex text-sm font-black uppercase text-gold">MAD · {t.price}</span>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">{title || t.home.finalTitle}</h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <PrimaryButton href="/devis">{t.quote}</PrimaryButton>
          <WhatsAppButton>{t.whatsapp}</WhatsAppButton>
        </div>
      </FadeIn>
    </section>
  );
}
