"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { Product, productWhatsAppMessage } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const copy = product[lang];

  return (
    <>
      <article className="commerce-card group overflow-hidden">
        <button type="button" onClick={() => setOpen(true)} className="product-stage relative grid aspect-[1.05] w-full place-items-center overflow-hidden rounded-[24px]">
          <span className="absolute left-4 top-4 rounded-full bg-white/82 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-bronze backdrop-blur">
            {product.badge}
          </span>
          <Image src={product.image} alt={copy.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent" />
        </button>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="line-clamp-2 min-h-[48px] text-lg font-black leading-tight tracking-tight text-coal">{copy.name}</h3>
            <button onClick={() => setOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F4F4F4] text-coal transition group-hover:bg-coal group-hover:text-ivory" aria-label={t.quickView}>
              <ArrowUpRight size={18} />
            </button>
          </div>
          {!compact ? <p className="mt-3 line-clamp-2 text-sm leading-6 text-coal/58">{copy.description}</p> : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.finishes.slice(0, 3).map((finish) => (
              <span key={finish} className="rounded-full bg-[#F4F4F4] px-3 py-1.5 text-[11px] font-extrabold text-coal/66">
                {t.finishes[finish]}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-sm font-black uppercase tracking-wide text-bronze">{t.price}</p>
            <a href="/devis" className="rounded-full bg-coal px-4 py-2.5 text-xs font-black text-ivory transition hover:bg-bronze">
              {t.quote}
            </a>
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-coal/40 p-3 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="max-h-[94vh] w-full max-w-5xl overflow-auto rounded-[32px] bg-[#FAF7F2] shadow-[0_28px_90px_rgba(17,17,17,.25)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between p-5 md:p-6">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-bronze">{product.badge}</span>
              <button className="grid h-11 w-11 place-items-center rounded-full bg-white" onClick={() => setOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-7 p-5 pt-0 md:grid-cols-[1.05fr_.95fr] md:p-8 md:pt-0">
              <div className="product-stage relative grid min-h-[360px] place-items-center overflow-hidden rounded-[28px]">
                <Image src={product.image} alt={copy.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">{copy.name}</h2>
                <p className="mt-4 text-xl font-black text-bronze">{t.price}</p>
                <p className="mt-5 text-base leading-8 text-coal/66">{copy.description}</p>
                <div className="mt-6 grid gap-2">
                  {copy.specs.map((spec) => (
                    <div key={spec} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-coal/72">
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.finishes.map((finish) => (
                    <span key={finish} className="rounded-full bg-[#EFE3D2] px-4 py-2 text-xs font-black text-coal">
                      {t.finishes[finish]}
                    </span>
                  ))}
                </div>
                <label className="mt-6 block text-sm font-black">
                  {t.form.quantity}
                  <input className="field mt-2" type="number" min="1" defaultValue="50" />
                </label>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href="/devis" className="btn-dark px-5 py-4 text-center text-sm font-black">
                    {t.quote}
                  </a>
                  <a href={productWhatsAppMessage(copy.name, lang)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-4 text-sm font-black text-coal">
                    <MessageCircle size={18} /> {t.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
