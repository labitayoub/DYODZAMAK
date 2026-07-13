"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "textFr", label: "Text (FR)" },
  { key: "textAr", label: "Text (AR)" },
  { key: "textEn", label: "Text (EN)" },
  { key: "icon", label: "Icon" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
];

export default function AdminTrustPointsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Trust Points"
        apiBase="/api/trust-points"
        columns={[
          { key: "textFr", label: "Text (FR)" },
          { key: "textAr", label: "Text (AR)" },
          { key: "icon", label: "Icon" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
