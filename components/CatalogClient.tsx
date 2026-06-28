"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
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
    <section className="market-bg px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[.22em] text-bronze">{visible.length} {t.results}</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
              {filters.category === "all" ? t.nav.catalog : categories[filters.category][lang].title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <label className="hidden min-h-[52px] min-w-[300px] items-center gap-3 rounded-full bg-white px-5 shadow-[inset_0_0_0_1px_rgba(17,17,17,.06)] md:flex">
              <Search size={18} className="text-bronze" />
              <input className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none" placeholder={t.search} />
            </label>
            <select className="field hidden max-w-48 rounded-full text-sm md:block" defaultValue="recommended" aria-label={t.sort}>
              <option value="recommended">{t.sort}</option>
              <option value="new">{t.home.new}</option>
              <option value="premium">{t.home.premium}</option>
            </select>
            <button className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-coal px-5 py-4 text-sm font-black text-ivory md:hidden" onClick={() => setDrawer(true)}>
              <SlidersHorizontal size={18} /> {t.filters}
            </button>
          </div>
        </div>

        <div className="mb-10 hidden gap-3 md:grid">
          <ChipRow label={t.nav.catalog}>
            <FilterChip active={filters.category === "all"} onClick={() => setFilters({ ...filters, category: "all" })}>{t.all}</FilterChip>
            {categoryRoutes.map((slug) => (
              <FilterChip key={slug} active={filters.category === slug} onClick={() => setFilters({ ...filters, category: slug })}>
                {categories[slug][lang].title}
              </FilterChip>
            ))}
          </ChipRow>
          <ChipRow label={lang === "fr" ? "Finition" : "التشطيب"}>
            <FilterChip active={filters.finish === "all"} onClick={() => setFilters({ ...filters, finish: "all" })}>{t.all}</FilterChip>
            {finishes.map((finish) => (
              <FilterChip key={finish} active={filters.finish === finish} onClick={() => setFilters({ ...filters, finish })}>
                {t.finishes[finish]}
              </FilterChip>
            ))}
          </ChipRow>
          <ChipRow label={lang === "fr" ? "Usage" : "الاستعمال"}>
            <FilterChip active={filters.usage === "all"} onClick={() => setFilters({ ...filters, usage: "all" })}>{t.all}</FilterChip>
            {usages.map((usage) => (
              <FilterChip key={usage} active={filters.usage === usage} onClick={() => setFilters({ ...filters, usage })}>
                {t.usages[usage]}
              </FilterChip>
            ))}
            {(["custom", "3d", "classic"] as const).map((type) => (
              <FilterChip key={type} active={filters.type === type} onClick={() => setFilters({ ...filters, type })}>
                {type === "custom" ? t.custom : type === "3d" ? t.model3d : t.classic}
              </FilterChip>
            ))}
          </ChipRow>
        </div>

        <ProductGrid products={visible} />
      </div>

      {drawer ? (
        <div className="fixed inset-0 z-[65] bg-coal/35 p-3 backdrop-blur-sm md:hidden" onClick={() => setDrawer(false)}>
          <div className="h-full overflow-auto rounded-[28px] bg-[#FAF7F2] p-5 shadow-[0_28px_90px_rgba(17,17,17,.25)]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-black">{t.filters}</h3>
              <button className="rounded-full bg-white px-5 py-3 text-sm font-black text-bronze" onClick={() => setDrawer(false)}>
                OK
              </button>
            </div>
            <div className="grid gap-5">
              <DrawerGroup title={t.nav.catalog}>
                <FilterChip active={filters.category === "all"} onClick={() => setFilters({ ...filters, category: "all" })}>{t.all}</FilterChip>
                {categoryRoutes.map((slug) => (
                  <FilterChip key={slug} active={filters.category === slug} onClick={() => setFilters({ ...filters, category: slug })}>
                    {categories[slug][lang].title}
                  </FilterChip>
                ))}
              </DrawerGroup>
              <DrawerGroup title={lang === "fr" ? "Finition" : "التشطيب"}>
                {finishes.map((finish) => (
                  <FilterChip key={finish} active={filters.finish === finish} onClick={() => setFilters({ ...filters, finish })}>
                    {t.finishes[finish]}
                  </FilterChip>
                ))}
              </DrawerGroup>
              <DrawerGroup title={lang === "fr" ? "Usage" : "الاستعمال"}>
                {usages.map((usage) => (
                  <FilterChip key={usage} active={filters.usage === usage} onClick={() => setFilters({ ...filters, usage })}>
                    {t.usages[usage]}
                  </FilterChip>
                ))}
              </DrawerGroup>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ChipRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-xs font-black uppercase tracking-[.18em] text-coal/45">{label}</span>
      {children}
    </div>
  );
}

function DrawerGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-black uppercase tracking-[.18em] text-coal/48">{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2.5 text-sm font-black transition ${
        active ? "bg-coal text-ivory shadow-[0_12px_28px_rgba(17,17,17,.16)]" : "bg-white text-coal/64 hover:text-coal"
      }`}
    >
      {children}
    </button>
  );
}
