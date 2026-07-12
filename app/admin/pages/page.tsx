"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "slug", label: "Slug", required: true },
  { key: "titleFr", label: "Title (FR)" },
  { key: "titleAr", label: "Title (AR)" },
  { key: "titleEn", label: "Title (EN)" },
  { key: "subtitleFr", label: "Subtitle (FR)", type: "textarea" as const },
  { key: "subtitleAr", label: "Subtitle (AR)", type: "textarea" as const },
  { key: "subtitleEn", label: "Subtitle (EN)", type: "textarea" as const },
  { key: "bodyFr", label: "Content (FR)", type: "json" as const },
  { key: "bodyAr", label: "Content (AR)", type: "json" as const },
  { key: "bodyEn", label: "Content (EN)", type: "json" as const },
];

export default function AdminPagesPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Pages Content"
        apiBase="/api/pages"
        columns={[
          { key: "slug", label: "Slug" },
          { key: "titleFr", label: "Title (FR)" },
          { key: "titleAr", label: "Title (AR)" },
          { key: "titleEn", label: "Title (EN)" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
