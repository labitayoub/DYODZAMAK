"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { navItems, whatsappNumber } from "@/data/site";

export default function Header() {
  const { lang, t, toggleLang, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="section-surface shell-container rounded-[28px] px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
              <Image src="/images/logo.png" alt="DYODZAMAK logo" fill sizes="48px" className="object-contain p-1.5" />
            </div>
            <div>
              <span className="block text-[1.1rem] font-semibold tracking-[-0.05em] text-[#111111] md:text-[1.4rem]">DYODZAMAK</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.26em] text-[rgba(17,17,17,0.52)]">Metal atelier</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/catalogue" className="premium-link text-sm font-medium text-[rgba(17,17,17,0.7)]">
              {t.nav.catalog}
            </Link>
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="premium-link text-sm font-medium text-[rgba(17,17,17,0.7)]">
                {t.nav[item.key]}
              </Link>
            ))}
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
            className={`section-surface ml-auto flex h-full w-full max-w-sm flex-col rounded-[28px] p-6 ${isRtl ? "mr-auto ml-0" : ""}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
                  <Image src="/images/logo.png" alt="DYODZAMAK logo" fill sizes="56px" className="object-contain p-1.5" />
                </div>
                <div>
                  <span className="block text-2xl font-semibold tracking-[-0.05em] text-[#111111]">DYODZAMAK</span>
                  <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.24em] text-[rgba(17,17,17,0.52)]">Custom metal pieces</span>
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
              {navItems.map((item) => (
                <Link key={item.href} onClick={() => setOpen(false)} href={item.href} className="text-2xl font-medium tracking-[-0.04em] text-[#111111]">
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>

            <div className="mt-auto grid gap-3 pt-8">
              <button
                type="button"
                onClick={toggleLang}
                className="button-secondary w-full"
              >
                {lang === "fr" ? "العربية" : "Français"}
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
