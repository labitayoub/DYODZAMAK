"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { navItems, whatsappNumber } from "@/data/site";
import { productCategories } from "@/data/product-categories";

export default function Header() {
  const { lang, t, toggleLang, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="glass-nav shell-container rounded-[30px] px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-[16px] border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <Image src="/images/logo.png" alt="DYODZAMAK logo" fill sizes="48px" className="object-contain p-2" />
            </div>
            <div>
              <span className="block text-[1.02rem] font-semibold tracking-[-0.05em] text-[#111111] md:text-[1.2rem]">DYODZAMAK</span>
              <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em] text-[rgba(17,17,17,0.46)]">Custom recognition atelier</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link href="/catalogue" className="premium-link text-sm font-medium text-[rgba(17,17,17,0.72)]">
              {t.nav.catalog}
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(17,17,17,0.72)] transition hover:text-[#111111]"
              >
                {t.nav.products ?? "Produits"}
                <ChevronDown size={16} className="transition group-hover:translate-y-[1px]" />
              </button>

              <div className="pointer-events-none absolute left-0 top-full z-50 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="soft-panel min-w-[620px] rounded-[30px] p-4 shadow-[0_28px_90px_rgba(17,17,17,0.14)]">
                  <div className="mb-3 px-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(17,17,17,0.42)]">Categories</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {productCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={category.href}
                        className="rounded-[20px] border border-transparent px-4 py-4 text-sm font-medium text-[rgba(17,17,17,0.72)] transition hover:border-[rgba(17,17,17,0.08)] hover:bg-white/85 hover:text-[#111111]"
                      >
                        {category.navLabel[lang]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navItems.slice(6, 7).map((item) => (
              <Link key={item.href} href={item.href} className="premium-link text-sm font-medium text-[rgba(17,17,17,0.72)]">
                {t.nav[item.key]}
              </Link>
            ))}

            <Link href="/contact" className="premium-link text-sm font-medium text-[rgba(17,17,17,0.72)]">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-[rgba(17,17,17,0.1)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[rgba(17,17,17,0.76)] transition hover:border-[rgba(17,17,17,0.2)] hover:bg-white"
            >
              {lang === "fr" ? "AR" : "FR"}
            </button>
            <Link href="/devis" className="button-primary">
              {t.quote}
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(17,17,17,0.1)] bg-white/70 text-[#111111] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/30 px-4 py-4 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <div
            className={`soft-panel ml-auto flex h-full w-full max-w-sm flex-col rounded-[30px] p-6 ${isRtl ? "mr-auto ml-0" : ""}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-[18px] border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                  <Image src="/images/logo.png" alt="DYODZAMAK logo" fill sizes="56px" className="object-contain p-2" />
                </div>
                <div>
                  <span className="block text-2xl font-semibold tracking-[-0.05em] text-[#111111]">DYODZAMAK</span>
                  <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.24em] text-[rgba(17,17,17,0.52)]">Metal atelier</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(17,17,17,0.08)] bg-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 grid gap-5">
              <Link onClick={() => setOpen(false)} href="/" className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">
                {t.nav.home}
              </Link>
              <Link onClick={() => setOpen(false)} href="/catalogue" className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">
                {t.nav.catalog}
              </Link>

              <div className="grid gap-3 rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/72 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.45)]">{t.nav.products ?? "Produits"}</p>
                {productCategories.map((category) => (
                  <Link
                    key={category.slug}
                    onClick={() => setOpen(false)}
                    href={category.href}
                    className="text-lg font-medium tracking-[-0.03em] text-[#111111]"
                  >
                    {category.navLabel[lang]}
                  </Link>
                ))}
              </div>

              {navItems.slice(6).map((item) => (
                <Link key={item.href} onClick={() => setOpen(false)} href={item.href} className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">
                  {t.nav[item.key]}
                </Link>
              ))}

              <Link onClick={() => setOpen(false)} href="/contact" className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">
                {t.nav.contact}
              </Link>
            </div>

            <div className="mt-auto grid gap-3 pt-8">
              <button type="button" onClick={toggleLang} className="button-secondary w-full">
                {lang === "fr" ? "العربية" : "Francais"}
              </button>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="button-whatsapp w-full">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
