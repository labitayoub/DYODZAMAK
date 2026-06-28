"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { categories, categoryRoutes, whatsappNumber } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

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
    const message = [
      "DYODZAMAK - Demande de devis",
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
    <form onSubmit={submit} className={`premium-card grid gap-4 bg-[#EFE3D2]/45 p-5 md:p-8 ${compact ? "" : "md:grid-cols-2"}`}>
      <input className="field" required placeholder={t.form.name} value={form.name} onChange={(e) => field("name", e.target.value)} />
      <input className="field" required placeholder={t.form.phone} value={form.phone} onChange={(e) => field("phone", e.target.value)} />
      <input className="field" required placeholder={t.form.city} value={form.city} onChange={(e) => field("city", e.target.value)} />
      <select className="field" required value={form.product} onChange={(e) => field("product", e.target.value)}>
        <option value="">{t.form.product}</option>
        {categoryRoutes.map((slug) => (
          <option key={slug} value={categories[slug][lang].title}>
            {categories[slug][lang].title}
          </option>
        ))}
      </select>
      <input className="field" required type="number" min="1" placeholder={t.form.quantity} value={form.quantity} onChange={(e) => field("quantity", e.target.value)} />
      <input className="field" placeholder={t.form.finish} value={form.finish} onChange={(e) => field("finish", e.target.value)} />
      <div className="field flex items-center text-sm font-bold text-coal/55 md:col-span-2">{t.form.upload}</div>
      <textarea className="field min-h-28 md:col-span-2" placeholder={t.form.engraving} value={form.engraving} onChange={(e) => field("engraving", e.target.value)} />
      <textarea className="field min-h-32 md:col-span-2" required placeholder={t.form.message} value={form.description} onChange={(e) => field("description", e.target.value)} />
      <button type="submit" className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 font-black text-coal shadow-[0_16px_34px_rgba(37,211,102,.22)] md:col-span-2">
        <MessageCircle size={19} />
        {t.form.button}
      </button>
    </form>
  );
}
