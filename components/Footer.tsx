"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { emailDisplay, phoneDisplay, whatsappNumber } from "@/data/site";
import { getProductCategoryLabel, productCategories } from "@/data/product-categories";

const footerCopy = {
  fr: {
    title: "Des pieces de reconnaissance concues pour marquer durablement l'esprit.",
    products: "Produits",
    navigation: "Navigation",
    location: "Maroc"
  },
  ar: {
    title: "قطع تكريم مصممة لتبقى في الذاكرة.",
    products: "المنتجات",
    navigation: "التنقل",
    location: "المغرب"
  },
  en: {
    title: "Recognition pieces designed to leave a lasting impression.",
    products: "Products",
    navigation: "Navigation",
    location: "Morocco"
  }
} as const;

export default function Footer() {
  const { lang, t } = useLanguage();
  const copy = footerCopy[lang];

  return (
    <footer className="px-4 pb-6 pt-16 md:px-6 md:pb-8 md:pt-24">
      <div className="section-dark section-frame overflow-hidden rounded-[42px] border border-white/10 px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
          <div>
            <span className="eyebrow">DYODZAMAK</span>
            <h2 className="mt-6 max-w-xl text-4xl font-medium tracking-[-0.05em] text-[#f7f3ed] md:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[rgba(247,243,237,0.68)]">{t.footer}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.trust.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[rgba(247,243,237,0.68)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(247,243,237,0.48)]">{copy.products}</p>
            <div className="mt-5 grid gap-3">
              {productCategories.map((category) => (
                <Link key={category.slug} href={category.href} className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {getProductCategoryLabel(category.slug, lang)}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(247,243,237,0.48)]">{copy.navigation}</p>
              <div className="mt-5 grid gap-3">
                <Link href="/a-propos" className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {t.nav.about}
                </Link>
                <Link href="/personnalisation" className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {t.nav.customization}
                </Link>
                <Link href="/realisations" className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {t.nav.work}
                </Link>
                <Link href="/contact" className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(247,243,237,0.48)]">{t.nav.contact}</p>
              <div className="mt-5 grid gap-4 text-sm font-medium text-[rgba(247,243,237,0.78)]">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><MessageCircle size={16} /></span>
                  WhatsApp
                </a>
                <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><Phone size={16} /></span>
                  {phoneDisplay}
                </a>
                <a href={`mailto:${emailDisplay}`} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><Mail size={16} /></span>
                  {emailDisplay}
                </a>
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><MapPin size={16} /></span>
                  {copy.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-[rgba(247,243,237,0.42)]">
          © DYODZAMAK. {t.price}.
        </div>
      </div>
    </footer>
  );
}
