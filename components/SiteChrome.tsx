"use client";

import Link from "next/link";
import { FileText, Home, MessageCircle, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { whatsappNumber } from "@/data/site";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const { isRtl, t } = useLanguage();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#f7efe2] text-coal">
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-20 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25d366] text-coal shadow-premium md:grid ${
          isRtl ? "left-5" : "right-5"
        }`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 overflow-hidden rounded-full bg-white/90 shadow-[0_18px_50px_rgba(17,17,17,.18)] backdrop-blur md:hidden">
        <Link href="/" className="grid place-items-center gap-1 py-2.5 text-[10px] font-black">
          <Home size={19} /> {t.nav.home}
        </Link>
        <Link href="/catalogue" className="grid place-items-center gap-1 py-2.5 text-[10px] font-black">
          <Search size={19} /> {t.nav.catalog}
        </Link>
        <Link href="/devis" className="grid place-items-center gap-1 py-2.5 text-[10px] font-black">
          <FileText size={19} /> {t.nav.quote}
        </Link>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="grid place-items-center gap-1 bg-[#25d366] py-2.5 text-[10px] font-black">
          <MessageCircle size={19} /> {t.whatsapp}
        </a>
      </nav>
    </div>
  );
}
