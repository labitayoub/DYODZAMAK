"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "slug", label: "Slug", required: true },
  { key: "href", label: "URL Path", required: true },
  { key: "icon", label: "Icon" },
  { key: "image", label: "Image URL" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
  { key: "navLabelFr", label: "Nav Label (FR)" },
  { key: "navLabelAr", label: "Nav Label (AR)" },
  { key: "navLabelEn", label: "Nav Label (EN)" },
  { key: "heroTitleFr", label: "Hero Title (FR)" },
  { key: "heroTitleAr", label: "Hero Title (AR)" },
  { key: "heroTitleEn", label: "Hero Title (EN)" },
  { key: "heroDescFr", label: "Hero Desc (FR)", type: "textarea" as const },
  { key: "heroDescAr", label: "Hero Desc (AR)", type: "textarea" as const },
  { key: "heroDescEn", label: "Hero Desc (EN)", type: "textarea" as const },
  { key: "summaryFr", label: "Summary (FR)", type: "textarea" as const },
  { key: "summaryAr", label: "Summary (AR)", type: "textarea" as const },
  { key: "summaryEn", label: "Summary (EN)", type: "textarea" as const },
  { key: "subcategoriesFr", label: "Subcategories (FR)", type: "json" as const },
  { key: "subcategoriesAr", label: "Subcategories (AR)", type: "json" as const },
  { key: "subcategoriesEn", label: "Subcategories (EN)", type: "json" as const },
  { key: "useCasesFr", label: "Use Cases (FR)", type: "json" as const },
  { key: "useCasesAr", label: "Use Cases (AR)", type: "json" as const },
  { key: "useCasesEn", label: "Use Cases (EN)", type: "json" as const },
  { key: "metaTitle", label: "Meta Title" },
  { key: "metaDescription", label: "Meta Description", type: "textarea" as const },
];

export default function AdminCategoriesPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Categories"
        apiBase="/api/categories"
        columns={[
          { key: "slug", label: "Slug" },
          { key: "navLabelFr", label: "FR" },
          { key: "navLabelAr", label: "AR" },
          { key: "navLabelEn", label: "EN" },
          { key: "sortOrder", label: "Order" },
          { key: "active", label: "Active", render: (item: Record<string, unknown>) => item.active ? "✅" : "❌" },
          { key: "_count", label: "Products", render: (item: Record<string, unknown>) => {
            const count = item._count as { products: number } | undefined;
            return count?.products ?? 0;
          }},
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
