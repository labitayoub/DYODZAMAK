"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => ReactNode;
}

interface Field {
  key: string;
  label: string;
  type?: "text" | "textarea" | "select" | "checkbox" | "json" | "number";
  options?: { label: string; value: string }[];
  required?: boolean;
}

interface AdminCrudProps<T> {
  title: string;
  apiBase: string;
  columns: Column<T>[];
  fields: Field[];
  renderForm?: (item: T | null, onSave: (data: Record<string, unknown>) => void, onClose: () => void) => ReactNode;
}

export default function AdminCrud<T extends { id: string }>({
  title,
  apiBase,
  columns,
  fields,
  renderForm,
}: AdminCrudProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<T | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(apiBase);
      if (res.ok) {
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [apiBase]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  function openCreate() {
    setEditing(null);
    const initial: Record<string, unknown> = {};
    fields.forEach((f) => { initial[f.key] = f.type === "checkbox" ? false : f.type === "json" ? "[]" : ""; });
    setFormData(initial);
    setShowForm(true);
  }

  function openEdit(item: T) {
    setEditing(item);
    const data: Record<string, unknown> = {};
    fields.forEach((f) => {
      const val = (item as Record<string, unknown>)[f.key];
      if (f.type === "json") {
        data[f.key] = typeof val === "string" ? val : JSON.stringify(val ?? []);
      } else {
        data[f.key] = val ?? "";
      }
    });
    setFormData(data);
    setShowForm(true);
  }

  async function handleSave(data: Record<string, unknown>) {
    setSaving(true);
    try {
      // Process JSON fields
      const processed: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(data)) {
        const field = fields.find((f) => f.key === key);
        if (field?.type === "json" && typeof value === "string") {
          try { processed[key] = JSON.parse(value); } catch { processed[key] = []; }
        } else {
          processed[key] = value;
        }
      }

      const url = editing ? `${apiBase}/${editing.id}` : apiBase;
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processed),
      });
      if (res.ok) {
        setShowForm(false);
        fetchItems();
      }
    } catch (e) {
      console.error(e);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch(`${apiBase}/${id}`, { method: "DELETE" });
      fetchItems();
    } catch (e) {
      console.error(e);
    }
  }

  function renderCellValue(item: T, col: Column<T>) {
    if (col.render) return col.render(item);
    const val = (item as Record<string, unknown>)[col.key];
    if (typeof val === "boolean") return val ? "✅" : "❌";
    if (typeof val === "object" && val !== null) return JSON.stringify(val).slice(0, 50) + "...";
    return String(val ?? "").slice(0, 80);
  }

  if (showForm) {
    if (renderForm) {
      return (
        <div>
          <button onClick={() => setShowForm(false)} className="mb-4 text-amber-600 hover:underline text-sm">← Back to list</button>
          {renderForm(editing, handleSave, () => setShowForm(false))}
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => setShowForm(false)} className="mb-4 text-amber-600 hover:underline text-sm">← Back to list</button>
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
          <h2 className="text-xl font-bold mb-4">{editing ? `Edit ${title}` : `Create ${title}`}</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); handleSave(formData); }}
            className="space-y-4"
          >
            {fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                {field.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    checked={!!formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.checked })}
                    className="h-4 w-4"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={String(formData[field.key] || "")}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">-- Select --</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : field.type === "textarea" || field.type === "json" ? (
                  <textarea
                    value={String(formData[field.key] || "")}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    rows={field.type === "json" ? 4 : 3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 font-mono text-sm"
                    required={field.required}
                  />
                ) : field.type === "number" ? (
                  <input
                    type="number"
                    value={String(formData[field.key] || "")}
                    onChange={(e) => setFormData({ ...formData, [field.key]: Number(e.target.value) })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required={field.required}
                  />
                ) : (
                  <input
                    type="text"
                    value={String(formData[field.key] || "")}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button onClick={openCreate} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
          + Add New
        </button>
      </div>
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No items found</div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {columns.map((col) => (
                    <th key={col.key} className="px-4 py-3 text-left font-medium text-gray-600">{col.label}</th>
                  ))}
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-3 max-w-xs truncate">{renderCellValue(item, col)}</td>
                    ))}
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => openEdit(item)} className="text-amber-600 hover:underline mr-3">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
