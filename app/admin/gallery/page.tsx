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
  { key: "image", label: "Image URL" },
  { key: "categorySlug", label: "Category Slug" },
  { key: "sortOrder", label: "Sort Order", type: "number" as const },
  { key: "active", label: "Active", type: "checkbox" as const },
];

export default function AdminGalleryPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Gallery Items"
        apiBase="/api/gallery"
        columns={[
          { key: "titleFr", label: "Title (FR)" },
          { key: "categorySlug", label: "Category" },
          { key: "image", label: "Image" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={fields}
      />
    </AdminLayout>
  );
}
