"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "value", label: "Value (e.g. 500+)" },
  { key: "labelFr", label: "Label (FR)" },
  { key: "labelAr", label: "Label (AR)" },
  { key: "labelEn", label: "Label (EN)" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
];

export default function AdminStatsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Stats"
        apiBase="/api/stats"
        columns={[
          { key: "value", label: "Value" },
          { key: "labelFr", label: "Label (FR)" },
          { key: "labelAr", label: "Label (AR)" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
