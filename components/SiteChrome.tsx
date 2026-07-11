"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const { isRtl } = useLanguage();
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={`page-shell text-[#111111]${isLanding ? " landing-shell" : ""}`}>
      <div className="site-grid" />
      <Header />
      <main className={`relative z-10 pb-8${isLanding ? "" : " pt-[104px] md:pt-[116px]"}`}>{children}</main>
      <Footer />
    </div>
  );
}
