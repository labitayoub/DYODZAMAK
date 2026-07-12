"use client";

import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Categories", href: "/admin/categories", color: "bg-blue-500" },
            { label: "Products", href: "/admin/products", color: "bg-green-500" },
            { label: "Quote Requests", href: "/admin/quotes", color: "bg-amber-500" },
            { label: "Contact Messages", href: "/admin/contacts", color: "bg-red-500" },
            { label: "Gallery Items", href: "/admin/gallery", color: "bg-purple-500" },
            { label: "Settings", href: "/admin/settings", color: "bg-gray-600" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${item.color} text-white rounded-lg p-6 hover:opacity-90 transition-opacity`}
            >
              <div className="text-lg font-semibold">{item.label}</div>
            </a>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Welcome to DYODZAMAK Admin</h2>
          <p className="text-gray-600 text-sm">
            Manage your website content, products, categories, and settings from here.
            All changes are reflected in real-time on the frontend.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}
