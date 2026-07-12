"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "slug", label: "Slug", required: true },
  { key: "titleFr", label: "Title (FR)" },
  { key: "titleAr", label: "Title (AR)" },
  { key: "titleEn", label: "Title (EN)" },
  { key: "textFr", label: "Text (FR)", type: "textarea" as const },
  { key: "textAr", label: "Text (AR)", type: "textarea" as const },
  { key: "textEn", label: "Text (EN)", type: "textarea" as const },
  { key: "image", label: "Image URL" },
  { key: "video", label: "Video URL" },
  { key: "active", label: "Active", type: "checkbox" as const },
];

export default function AdminHeroSectionsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Hero Sections"
        apiBase="/api/hero-sections"
        columns={[
          { key: "slug", label: "Slug" },
          { key: "titleFr", label: "Title (FR)" },
          { key: "titleAr", label: "Title (AR)" },
          { key: "active", label: "Active", render: (i: Record<string, unknown>) => i.active ? "✅" : "❌" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
