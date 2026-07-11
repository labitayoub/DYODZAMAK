"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const ctaCopy = {
  fr: { eyebrow: "Devis", title: "Vous avez un besoin precis, un delai a respecter ou une personnalisation a confirmer ?", text: "Notre equipe vous accompagne avec une reponse claire sur les options, les quantites et la meilleure base de fabrication pour votre projet.", cta: "Demander un devis" },
  ar: { eyebrow: "عرض السعر", title: "هل لديك حاجة محددة أو أجل يجب احترامه أو تخصيص تريد تأكيده؟", text: "فريقنا يرافقك بإجابة واضحة حول الخيارات والكميات وأفضل أساس تصنيع لمشروعك.", cta: "طلب عرض سعر" },
  en: { eyebrow: "Quote", title: "Do you have a specific need, a deadline to meet or a customization to confirm?", text: "Our team supports you with a clear answer on options, quantities and the best production base for your project.", cta: "Request a quote" }
} as const;

export default function CTASection() {
  const { lang } = useLanguage();
  const copy = ctaCopy[lang];
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="section-frame">
        <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">{copy.eyebrow}</span>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)]">
                {copy.text}
              </p>
            </div>

            <Link href="/devis" className="button-primary">
              {copy.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
