"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { emailDisplay, phoneDisplay, whatsappNumber } from "@/data/site";

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

  const mainProductGroups = [
    { label: lang === "fr" ? "Medailles & Trophees" : lang === "ar" ? "ميداليات وكؤوس" : "Medals & Trophies", href: "/catalogue" },
    { label: lang === "fr" ? "Plaques & Distinctions" : lang === "ar" ? "دروع وتكريم" : "Plaques & Awards", href: "/plaques" },
    { label: lang === "fr" ? "Pins, Badges & Porte-cles" : lang === "ar" ? "دبابيس وشارات وحاملات مفاتيح" : "Pins, Badges & Keychains", href: "/pins-badges" },
    { label: lang === "fr" ? "Personnalisation" : lang === "ar" ? "التخصيص" : "Customization", href: "/personnalisation" }
  ];

  return (
    <footer className="px-4 pb-6 pt-16 md:px-6 md:pb-8 md:pt-20">
      <div className="section-dark section-frame overflow-hidden rounded-[var(--radius-xl)] border border-white/10 px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {/* Produits column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(247,243,237,0.48)]">{copy.products}</p>
            <div className="mt-5 grid gap-3">
              {mainProductGroups.map((group) => (
                <Link key={group.href} href={group.href} className="premium-link w-fit text-sm font-medium text-[rgba(247,243,237,0.78)]">
                  {group.label}
                </Link>
              ))}
            </div>
            <Link href="/catalogue" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e5bd77]/70 transition hover:text-[#e5bd77]">
              {lang === "fr" ? "Voir tout le catalogue" : lang === "ar" ? "عرض كل الكتالوج" : "View full catalog"} →
            </Link>
          </div>

          {/* Navigation column */}
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

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(247,243,237,0.48)]">{t.nav.contact}</p>
            <div className="mt-5 grid gap-4 text-sm font-medium text-[rgba(247,243,237,0.78)]">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><MessageCircle size={16} /></span>
                WhatsApp
              </a>
              <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10"><Phone size={16} /></span>
                {phoneDisplay}
              </a>
              <a href={`mailto:${emailDisplay}`} className="flex items-center gap-3 transition hover:text-white">
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

        <div className="mt-12 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-[rgba(247,243,237,0.42)]">
          © DYODZAMAK. {t.price}.
        </div>
      </div>
    </footer>
  );
}
