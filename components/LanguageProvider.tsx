"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Lang, ui } from "@/data/site";

type LanguageContextValue = {
  lang: Lang;
  isRtl: boolean;
  t: (typeof ui)[Lang];
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "fr";
    }
    const saved = window.localStorage.getItem("bestboutons-lang");
    return saved === "fr" || saved === "ar" || saved === "en" ? saved : "fr";
  });

  function setLang(nextLang: Lang) {
    setLangState(nextLang);
    window.localStorage.setItem("bestboutons-lang", nextLang);
  }

  const value = useMemo(() => {
    const isRtl = lang === "ar";
    return {
      lang,
      isRtl,
      t: ui[lang],
      setLang,
      toggleLang: () => setLang(lang === "fr" ? "ar" : lang === "ar" ? "en" : "fr")
    };
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
