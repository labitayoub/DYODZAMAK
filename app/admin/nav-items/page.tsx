"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

const fields = [
  { key: "href", label: "URL Path", required: true },
  { key: "labelFr", label: "Label (FR)" },
  { key: "labelAr", label: "Label (AR)" },
  { key: "labelEn", label: "Label (EN)" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
  { key: "group", label: "Group", type: "select" as const, options: [
    { label: "Main", value: "main" },
    { label: "Footer", value: "footer" },
    { label: "Mobile", value: "mobile" },
  ]},
];

export default function AdminNavItemsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Navigation Items"
        apiBase="/api/nav-items"
        columns={[
          { key: "href", label: "Path" },
          { key: "labelFr", label: "Label (FR)" },
          { key: "labelAr", label: "Label (AR)" },
          { key: "group", label: "Group" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
