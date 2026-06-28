"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { categories, categoryRoutes, emailDisplay, phoneDisplay, ui, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t border-coal/10 bg-coal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr] md:px-6">
        <div>
          <h2 className="text-3xl font-black text-gold">DYODZAMAK</h2>
          <p className="mt-4 max-w-sm leading-7 text-ivory/72">{t.footer}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.trust.map((item) => (
              <span key={item} className="rounded-full border border-ivory/15 px-3 py-1 text-xs font-bold text-ivory/80">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black text-gold">{t.nav.catalog}</h3>
          <div className="grid gap-2">
            {categoryRoutes.map((slug) => (
              <Link key={slug} href={categories[slug].href} className="text-sm font-bold text-ivory/75 hover:text-gold">
                {categories[slug][lang].title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black text-gold">DYODZAMAK</h3>
          <div className="grid gap-2">
            <Link href="/personnalisation" className="text-sm font-bold text-ivory/75 hover:text-gold">{t.nav.customization}</Link>
            <Link href="/realisations" className="text-sm font-bold text-ivory/75 hover:text-gold">{t.nav.work}</Link>
            <Link href="/a-propos" className="text-sm font-bold text-ivory/75 hover:text-gold">{t.nav.about}</Link>
            <Link href="/contact" className="text-sm font-bold text-ivory/75 hover:text-gold">{t.nav.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black text-gold">{t.nav.contact}</h3>
          <div className="grid gap-3 text-sm font-bold text-ivory/78">
            <a className="flex items-center gap-2" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a className="flex items-center gap-2" href={`tel:${phoneDisplay.replace(/\s/g, "")}`}>
              <Phone size={17} /> {phoneDisplay}
            </a>
            <a className="flex items-center gap-2" href={`mailto:${emailDisplay}`}>
              <Mail size={17} /> {emailDisplay}
            </a>
            <span className="flex items-center gap-2"><MapPin size={17} /> Maroc</span>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-4 py-4 text-center text-xs font-bold text-ivory/55">
        © DYODZAMAK. {ui.fr.price}.
      </div>
    </footer>
  );
}
