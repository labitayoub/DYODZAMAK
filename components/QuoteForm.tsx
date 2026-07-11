"use client";

import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { getProductCategoryLabel, productCategories } from "@/data/product-categories";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    product: "",
    quantity: "",
    finish: "",
    engraving: "",
    description: ""
  });

  function field(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const f = t.form;
    const intro = lang === "fr" ? "DYODZAMAK - Demande de devis" : lang === "ar" ? "DYODZAMAK - طلب عرض سعر" : "DYODZAMAK - Quote request";
    const message = [
      intro,
      `${f.name}: ${form.name}`,
      `${f.phone}: ${form.phone}`,
      `${f.city}: ${form.city}`,
      `${f.product}: ${form.product}`,
      `${f.quantity}: ${form.quantity}`,
      `${f.finish}: ${form.finish}`,
      `${f.engraving}: ${form.engraving}`,
      `${f.message}: ${form.description}`,
      t.price
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className={`section-surface rounded-[32px] p-5 md:p-8 ${compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}`}>
      <div className={compact ? "" : "md:col-span-2"}>
        <span className="eyebrow">{t.price}</span>
        <h2 className="mt-5 text-3xl font-medium tracking-[-0.02em] text-[#111111] md:text-4xl">{t.pages.quote[0]}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(17,17,17,0.62)]">{t.pages.quote[1]}</p>
      </div>

      <input className="field" required placeholder={t.form.name} value={form.name} onChange={(e) => field("name", e.target.value)} />
      <input className="field" required placeholder={t.form.phone} value={form.phone} onChange={(e) => field("phone", e.target.value)} />
      <input className="field" required placeholder={t.form.city} value={form.city} onChange={(e) => field("city", e.target.value)} />

      <select className="field" required value={form.product} onChange={(e) => field("product", e.target.value)}>
        <option value="">{t.form.product}</option>
        {productCategories.map((category) => (
          <option key={category.slug} value={getProductCategoryLabel(category.slug, lang)}>
            {getProductCategoryLabel(category.slug, lang)}
          </option>
        ))}
      </select>

      <input className="field" required type="number" min="1" placeholder={t.form.quantity} value={form.quantity} onChange={(e) => field("quantity", e.target.value)} />
      <input className="field" placeholder={t.form.finish} value={form.finish} onChange={(e) => field("finish", e.target.value)} />
      <textarea className={`field min-h-28 ${compact ? "" : "md:col-span-2"}`} placeholder={t.form.engraving} value={form.engraving} onChange={(e) => field("engraving", e.target.value)} />
      <textarea className={`field min-h-36 ${compact ? "" : "md:col-span-2"}`} required placeholder={t.form.message} value={form.description} onChange={(e) => field("description", e.target.value)} />

      <button type="submit" className={`button-whatsapp ${compact ? "" : "md:col-span-2"}`}>
        <WhatsAppIcon size={18} />
        {t.form.button}
      </button>
    </form>
  );
}
