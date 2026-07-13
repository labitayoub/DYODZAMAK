"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "titleFr", label: "Title (FR)" },
  { key: "titleAr", label: "Title (AR)" },
  { key: "titleEn", label: "Title (EN)" },
  { key: "descFr", label: "Description (FR)", type: "textarea" as const },
  { key: "descAr", label: "Description (AR)", type: "textarea" as const },
  { key: "descEn", label: "Description (EN)", type: "textarea" as const },
  { key: "icon", label: "Icon" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
];

export default function AdminProcessStepsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Process Steps"
        apiBase="/api/process-steps"
        columns={[
          { key: "titleFr", label: "Title (FR)" },
          { key: "titleAr", label: "Title (AR)" },
          { key: "icon", label: "Icon" },
          { key: "sortOrder", label: "Order" },
          { key: "active", label: "Active", render: (i: Record<string, unknown>) => i.active ? "✅" : "❌" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
