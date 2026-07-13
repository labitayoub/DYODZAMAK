"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "titleFr", label: "Title (FR)" },
  { key: "titleAr", label: "Title (AR)" },
  { key: "titleEn", label: "Title (EN)" },
  { key: "textFr", label: "Text (FR)", type: "textarea" as const },
  { key: "textAr", label: "Text (AR)", type: "textarea" as const },
  { key: "textEn", label: "Text (EN)", type: "textarea" as const },
  { key: "image", label: "Image URL" },
  { key: "active", label: "Active", type: "checkbox" as const },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
];

export default function AdminSlidesPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Home Slides"
        apiBase="/api/slides"
        columns={[
          { key: "titleFr", label: "Title (FR)" },
          { key: "titleAr", label: "Title (AR)" },
          { key: "active", label: "Active", render: (i: Record<string, unknown>) => i.active ? "✅" : "❌" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
