"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { Product, productWhatsAppMessage } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const copy = product[lang];
  const closeLabel = lang === "fr" ? "Fermer" : lang === "ar" ? "إغلاق" : "Close";
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const closeModal = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    modalCloseRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeModal]);

  return (
    <>
      <article className="product-card group flex h-full flex-col rounded-[30px] p-3">
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className="relative aspect-[0.96] overflow-hidden rounded-[24px] text-left bg-[#fcfbf9]/60 p-4">
          <Image
            src={product.image}
            alt={copy.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 34vw, 100vw"
            className="object-contain p-2 transition duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            {product.badge}
          </div>
        </button>

        <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e5bd77]/70">{t.price}</p>
              <h3 className="mt-2 line-clamp-2 text-[1.24rem] font-medium leading-[1.02] tracking-[-0.04em] text-[#f7f3ed] md:text-[1.38rem]">
                {copy.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#07111a]"
              aria-label={t.quickView}
            >
              <ArrowUpRight size={17} />
            </button>
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/70">
            {compact ? copy.specs.join(" - ") : copy.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.finishes.slice(0, 3).map((finish) => (
              <span key={finish} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 bg-white/5">
                {t.finishes[finish]}
              </span>
            ))}
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/45 p-4 backdrop-blur-md" onClick={closeModal}>
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={copy.name}
            className="section-surface max-h-[92vh] w-full max-w-6xl overflow-auto rounded-[34px] p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e5bd77]/70">{product.badge}</span>
                <h2 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-white md:text-5xl">{copy.name}</h2>
              </div>
              <button
                ref={modalCloseRef}
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(17,17,17,0.08)] bg-white"
                onClick={closeModal}
                aria-label={closeLabel}
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[28px] md:min-h-[620px] bg-stone-50/60 p-6">
                <Image src={product.image} alt={copy.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-4" />
              </div>

              <div className="flex flex-col justify-center py-2">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e5bd77]/70">{t.price}</p>
                <p className="mt-4 text-base leading-8 text-white/70">{copy.description}</p>

                <div className="mt-8 grid gap-3">
                  {copy.specs.map((spec) => (
                    <div key={spec} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/80">
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {product.finishes.map((finish) => (
                    <span key={finish} className="rounded-full bg-[#e5bd77]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e5bd77]">
                      {t.finishes[finish]}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a href="/devis" className="button-primary">
                    {t.quote}
                  </a>
                  <a href={productWhatsAppMessage(copy.name, lang)} target="_blank" rel="noreferrer" className="button-whatsapp">
                    <WhatsAppIcon size={17} />
                    {t.whatsapp}
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
