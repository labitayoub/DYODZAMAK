"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import { CategorySlug, Finish, Usage, categories, categoryRoutes, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

type FilterState = {
  category: "all" | CategorySlug;
  finish: "all" | Finish;
  usage: "all" | Usage;
  type: "all" | "custom" | "3d" | "classic";
};

const finishes: Finish[] = ["bronze", "gold", "silver", "black"];
const usages: Usage[] = ["sport", "corporate", "event", "school", "association"];

export default function CatalogClient({ initialCategory = "all" }: { initialCategory?: "all" | CategorySlug }) {
  const { lang, t } = useLanguage();
  const [filters, setFilters] = useState<FilterState>({ category: initialCategory, finish: "all", usage: "all", type: "all" });
  const [drawer, setDrawer] = useState(false);

  const visible = useMemo(() => {
    return products.filter((product) => {
      if (filters.category !== "all" && product.category !== filters.category) return false;
      if (filters.finish !== "all" && !product.finishes.includes(filters.finish)) return false;
      if (filters.usage !== "all" && !product.usage.includes(filters.usage)) return false;
      if (filters.type === "custom" && !product.customizable) return false;
      if (filters.type === "3d" && !product.is3d) return false;
      if (filters.type === "classic" && product.is3d) return false;
      return true;
    });
  }, [filters]);

  return (
    <section className="px-4 py-14 md:px-6 md:py-20">
      <div className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="section-surface hidden h-fit rounded-[30px] p-6 lg:block">
            <span className="eyebrow">{t.filters}</span>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] text-[#111111]">{filters.category === "all" ? t.nav.catalog : categories[filters.category][lang].title}</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(17,17,17,0.62)]">
              {visible.length} {t.results}
            </p>

            <div className="mt-8 grid gap-7">
              <FilterGroup title={t.nav.catalog}>
                <FilterChip active={filters.category === "all"} onClick={() => setFilters({ ...filters, category: "all" })}>
                  {t.all}
                </FilterChip>
                {categoryRoutes.map((slug) => (
                  <FilterChip key={slug} active={filters.category === slug} onClick={() => setFilters({ ...filters, category: slug })}>
                    {categories[slug][lang].title}
                  </FilterChip>
                ))}
              </FilterGroup>

              <FilterGroup title={lang === "fr" ? "Finition" : "التشطيب"}>
                <FilterChip active={filters.finish === "all"} onClick={() => setFilters({ ...filters, finish: "all" })}>
                  {t.all}
                </FilterChip>
                {finishes.map((finish) => (
                  <FilterChip key={finish} active={filters.finish === finish} onClick={() => setFilters({ ...filters, finish })}>
                    {t.finishes[finish]}
                  </FilterChip>
                ))}
              </FilterGroup>

              <FilterGroup title={lang === "fr" ? "Usage" : "الاستعمال"}>
                <FilterChip active={filters.usage === "all"} onClick={() => setFilters({ ...filters, usage: "all" })}>
                  {t.all}
                </FilterChip>
                {usages.map((usage) => (
                  <FilterChip key={usage} active={filters.usage === usage} onClick={() => setFilters({ ...filters, usage })}>
                    {t.usages[usage]}
                  </FilterChip>
                ))}
              </FilterGroup>

              <FilterGroup title={lang === "fr" ? "Type" : "النوع"}>
                <FilterChip active={filters.type === "all"} onClick={() => setFilters({ ...filters, type: "all" })}>
                  {t.all}
                </FilterChip>
                {(["custom", "3d", "classic"] as const).map((type) => (
                  <FilterChip key={type} active={filters.type === type} onClick={() => setFilters({ ...filters, type })}>
                    {type === "custom" ? t.custom : type === "3d" ? t.model3d : t.classic}
                  </FilterChip>
                ))}
              </FilterGroup>
            </div>
          </aside>

          <div>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">{t.nav.catalog}</span>
                <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                  {filters.category === "all" ? t.nav.catalog : categories[filters.category][lang].title}
                </h2>
              </div>
              <button type="button" className="button-secondary lg:hidden" onClick={() => setDrawer(true)}>
                <SlidersHorizontal size={16} />
                {t.filters}
              </button>
            </div>

            <ProductGrid products={visible} />
          </div>
        </div>
      </div>

      {drawer ? (
        <div className="fixed inset-0 z-[65] bg-black/35 p-4 backdrop-blur-sm lg:hidden" onClick={() => setDrawer(false)}>
          <div className="section-surface h-full overflow-auto rounded-[28px] p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="eyebrow">{t.filters}</span>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[#111111]">{t.nav.catalog}</h3>
              </div>
              <button type="button" className="button-secondary" onClick={() => setDrawer(false)}>
                OK
              </button>
            </div>

            <div className="mt-8 grid gap-7">
              <FilterGroup title={t.nav.catalog}>
                <FilterChip active={filters.category === "all"} onClick={() => setFilters({ ...filters, category: "all" })}>
                  {t.all}
                </FilterChip>
                {categoryRoutes.map((slug) => (
                  <FilterChip key={slug} active={filters.category === slug} onClick={() => setFilters({ ...filters, category: slug })}>
                    {categories[slug][lang].title}
                  </FilterChip>
                ))}
              </FilterGroup>

              <FilterGroup title={lang === "fr" ? "Finition" : "التشطيب"}>
                <FilterChip active={filters.finish === "all"} onClick={() => setFilters({ ...filters, finish: "all" })}>
                  {t.all}
                </FilterChip>
                {finishes.map((finish) => (
                  <FilterChip key={finish} active={filters.finish === finish} onClick={() => setFilters({ ...filters, finish })}>
                    {t.finishes[finish]}
                  </FilterChip>
                ))}
              </FilterGroup>

              <FilterGroup title={lang === "fr" ? "Usage" : "الاستعمال"}>
                <FilterChip active={filters.usage === "all"} onClick={() => setFilters({ ...filters, usage: "all" })}>
                  {t.all}
                </FilterChip>
                {usages.map((usage) => (
                  <FilterChip key={usage} active={filters.usage === usage} onClick={() => setFilters({ ...filters, usage })}>
                    {t.usages[usage]}
                  </FilterChip>
                ))}
              </FilterGroup>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-[#111111] bg-[#111111] text-[#f7f3ed]"
          : "border-[rgba(17,17,17,0.08)] bg-white/70 text-[rgba(17,17,17,0.68)] hover:border-[rgba(17,17,17,0.18)] hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}
