"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const { isRtl } = useLanguage();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="page-shell text-[#111111]">
      <div className="site-grid" />
      <Header />
      <main className="relative z-10 pb-8">{children}</main>
      <Footer />
    </div>
  );
}
