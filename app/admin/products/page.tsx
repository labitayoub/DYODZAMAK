"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";

function ProductForm({ item, onSave, onClose }: { item: Record<string, unknown> | null; onSave: (data: Record<string, unknown>) => void; onClose: () => void }) {
  const [categories, setCategories] = useState<Array<{ id: string; slug: string; navLabelFr: string }>>([]);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(d => setCategories(Array.isArray(d) ? d : []));
    if (item) {
      const d: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(item)) {
        if (k === "finishes" || k === "usage" || k === "specsFr" || k === "specsAr" || k === "specsEn") {
          d[k] = typeof v === "string" ? v : JSON.stringify(v ?? []);
        } else {
          d[k] = v;
        }
      }
      setData(d);
    }
  }, [item]);

  function submit() {
    const next: Record<string, unknown> = { ...data, categoryId: data.categoryId || null };
    for (const key of ["finishes", "usage", "specsFr", "specsAr", "specsEn"]) {
      if (typeof next[key] !== "string") continue;
      try {
        next[key] = JSON.parse(next[key] as string);
      } catch {
        setError(`${key} must contain valid JSON.`);
        return;
      }
    }
    setError(null);
    onSave(next);
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-3xl">
      <h2 className="text-xl font-bold mb-4">{item ? "Edit Product" : "Create Product"}</h2>
      <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-4">
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
            <input value={String(data.slug || "")} onChange={(e) => setData({...data, slug: e.target.value})} className="w-full border rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select value={String(data.categoryId || "")} onChange={(e) => setData({...data, categoryId: e.target.value})} className="w-full border rounded-lg px-3 py-2">
              <option value="">-- Select --</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.navLabelFr} ({c.slug})</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Badge</label>
            <input value={String(data.badge || "")} onChange={(e) => setData({...data, badge: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input value={String(data.image || "")} onChange={(e) => setData({...data, image: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort order</label>
            <input type="number" value={String(data.sortOrder ?? 0)} onChange={(e) => setData({...data, sortOrder: Number(e.target.value)})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Finishes (JSON)</label>
            <input value={String(data.finishes || "[]")} onChange={(e) => setData({...data, finishes: e.target.value})} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usage (JSON)</label>
            <input value={String(data.usage || "[]")} onChange={(e) => setData({...data, usage: e.target.value})} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-6">
          {["customizable", "is3d", "featured", "newest", "premium", "active"].map(key => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!data[key]} onChange={(e) => setData({...data, [key]: e.target.checked})} className="h-4 w-4" />
              {key}
            </label>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Fr", "Ar", "En"].map(lang => (
            <div key={lang} className="space-y-3">
              <h3 className="font-semibold text-sm border-b pb-1">{lang.toUpperCase()}</h3>
              <div>
                <label className="block text-xs text-gray-600">Name</label>
                <input value={String(data[`name${lang}`] || "")} onChange={(e) => setData({...data, [`name${lang}`]: e.target.value})} className="w-full border rounded px-2 py-1 text-sm" />
              </div>
              <div>
                <label className="block text-xs text-gray-600">Description</label>
                <textarea value={String(data[`desc${lang}`] || "")} onChange={(e) => setData({...data, [`desc${lang}`]: e.target.value})} className="w-full border rounded px-2 py-1 text-sm" rows={2} />
              </div>
              <div>
                <label className="block text-xs text-gray-600">Specs (JSON)</label>
                <textarea value={String(data[`specs${lang}`] || "[]")} onChange={(e) => setData({...data, [`specs${lang}`]: e.target.value})} className="w-full border rounded px-2 py-1 text-sm font-mono" rows={2} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default function AdminProductsPage() {
  return (
    <AdminLayout>
      <AdminCrud
        title="Products"
        apiBase="/api/products"
        columns={[
          { key: "slug", label: "Slug" },
          { key: "nameFr", label: "Name (FR)" },
          { key: "badge", label: "Badge" },
          { key: "featured", label: "Featured", render: (i: Record<string, unknown>) => i.featured ? "⭐" : "" },
          { key: "sortOrder", label: "Order" },
        ]}
        fields={[]}
        renderForm={(item, onSave, onClose) => (
          <ProductForm item={item as Record<string, unknown> | null} onSave={onSave} onClose={onClose} />
        )}
      />
    </AdminLayout>
  );
}
