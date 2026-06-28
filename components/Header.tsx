"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import { navItems, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { lang, t, toggleLang, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-6">
      <div className="glass-panel mx-auto max-w-7xl rounded-full px-4 py-3 shadow-[0_18px_60px_rgba(17,17,17,.08)] md:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 leading-none">
            <span className="block text-xl font-black tracking-tight text-coal md:text-2xl">DYODZAMAK</span>
            <span className="hidden text-[10px] font-extrabold uppercase tracking-[.26em] text-bronze sm:block">Premium metal</span>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            <Link href="/catalogue" className="rounded-full px-4 py-2 text-sm font-extrabold text-coal/72 transition hover:bg-white hover:text-coal">
              {t.nav.catalog}
            </Link>
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-extrabold text-coal/72 transition hover:bg-white hover:text-coal">
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden min-w-0 flex-1 justify-center md:flex lg:max-w-xs">
            <Link href="/catalogue" className="flex h-11 w-full items-center gap-3 rounded-full bg-white px-4 text-sm font-bold text-coal/48 shadow-[inset_0_0_0_1px_rgba(17,17,17,.05)] transition hover:text-coal">
              <Search size={18} className="text-bronze" />
              <span className="truncate">{t.search}</span>
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button onClick={toggleLang} className="hidden h-11 min-w-11 rounded-full bg-white px-4 text-sm font-black text-coal shadow-[inset_0_0_0_1px_rgba(17,17,17,.05)] md:block">
              {t.language}
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center gap-2 rounded-full bg-coal px-5 text-sm font-black text-ivory shadow-[0_14px_34px_rgba(17,17,17,.18)] md:inline-flex"
            >
              <MessageCircle size={18} /> {t.whatsapp}
            </a>
            <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-coal shadow-[inset_0_0_0_1px_rgba(17,17,17,.06)] lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-coal/30 p-3 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <aside
            className={`h-full w-[88vw] max-w-sm rounded-[28px] bg-[#FAF7F2] p-5 shadow-[0_28px_90px_rgba(17,17,17,.24)] ${isRtl ? "mr-auto" : "ml-auto"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <span className="text-2xl font-black tracking-tight">DYODZAMAK</span>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-bronze">Premium metal</p>
              </div>
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-white" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <Link onClick={() => setOpen(false)} href="/catalogue" className="mb-4 flex min-h-[52px] items-center gap-3 rounded-full bg-white px-4 py-4 text-sm font-bold text-coal/55">
              <Search size={18} className="text-bronze" /> {t.search}
            </Link>
            <div className="grid gap-2">
              <MobileLink href="/" onClick={() => setOpen(false)} label={t.nav.home} />
              <MobileLink href="/catalogue" onClick={() => setOpen(false)} label={t.nav.catalog} />
              {navItems.map((item) => (
                <MobileLink key={item.href} href={item.href} onClick={() => setOpen(false)} label={t.nav[item.key]} />
              ))}
              <button onClick={toggleLang} className="mt-2 rounded-full bg-white px-5 py-4 text-start text-sm font-black text-bronze">
                {lang === "fr" ? "العربية" : "Français"}
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link onClick={onClick} href={href} className="rounded-full px-5 py-4 text-lg font-black text-coal transition hover:bg-white">
      {label}
    </Link>
  );
}
