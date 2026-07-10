import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCategory } from "@/data/product-categories";

export default function CategoryHero({
  category,
  lang
}: {
  category: ProductCategory;
  lang: "fr" | "ar";
}) {
  return (
    <section className="px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
      <div className="section-frame">
        <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="eyebrow">Produits</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-[#111111] md:text-7xl">
                {category.heroTitle[lang]}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(17,17,17,0.62)] md:text-lg">
                {category.heroDescription[lang]}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/70 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">
                  Atout
                </p>
                <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[#111111]">{category.benefits[0][lang]}</p>
              </div>
              <div className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-[rgba(166,107,44,0.08)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">
                  Conseil
                </p>
                <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-[#111111]">
                  Demandez un devis adapte a vos quantites et a votre personnalisation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/devis" className="button-primary">
              Demander un devis
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/catalogue" className="button-secondary">
              Voir le catalogue
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
