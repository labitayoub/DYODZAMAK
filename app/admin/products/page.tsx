"use client";

import { useEffect, useRef, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminCrud from "@/components/admin/AdminCrud";
import { showToast } from "@/lib/notifications";

const finishOptions = ["gold", "silver", "bronze", "black"];
const usageOptions = ["corporate", "event", "association", "sport", "school"];
const languageLabels = { Fr: "Français", Ar: "العربية", En: "English" } as const;

function asList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  return [];
}

function ProductForm({ item, onSave, onClose }: { item: Record<string, unknown> | null; onSave: (data: Record<string, unknown>) => void; onClose: () => void }) {
  const [categories, setCategories] = useState<Array<{ id: string; slug: string; navLabelFr: string }>>([]);
  const [data, setData] = useState<Record<string, unknown>>(() => {
    if (!item) return { active: true, customizable: true, finishes: [], usage: [], image: "" };
    return {
      ...item,
      active: true, customizable: true, image: "",
      finishes: asList(item.finishes),
      usage: asList(item.usage),
      specsFr: asList(item.specsFr),
      specsAr: asList(item.specsAr),
      specsEn: asList(item.specsEn),
    };
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/categories").then((response) => response.json()).then((result) => setCategories(Array.isArray(result) ? result : []));
  }, []);

  const prevItemRef = useRef(item);
  useEffect(() => {
    if (item && item !== prevItemRef.current) {
      setData({
        ...item,
        finishes: asList(item.finishes),
        usage: asList(item.usage),
        specsFr: asList(item.specsFr),
        specsAr: asList(item.specsAr),
        specsEn: asList(item.specsEn),
      });
    }
    prevItemRef.current = item;
  }, [item]);

  function update(key: string, value: unknown) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function toggleList(key: "finishes" | "usage", value: string) {
    const current = asList(data[key]);
    update(key, current.includes(value) ? current.filter((entry) => entry !== value) : [...current, value]);
  }

  async function uploadImage() {
    if (!selectedImage) {
      showToast("Select an image before uploading.", "error");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("/api/products/upload", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) {
        showToast(result?.error || "Unable to upload the image.", "error");
        return;
      }
      update("image", result.url);
      setSelectedImage(null);
      showToast("Product image uploaded.");
    } catch {
      showToast("Unable to upload the image.", "error");
    } finally {
      setUploading(false);
    }
  }

  function submit() {
    const { id, category, createdAt, updatedAt, ...rest } = data as Record<string, unknown>;
    const next = {
      ...rest,
      categoryId: rest.categoryId || null,
      finishes: asList(rest.finishes),
      usage: asList(rest.usage),
      specsFr: asList(rest.specsFr),
      specsAr: asList(rest.specsAr),
      specsEn: asList(rest.specsEn),
    };
    onSave(next);
  }

  return (
    <div className="max-w-5xl rounded-2xl bg-white p-6 shadow sm:p-8">
      <h2 className="mb-6 text-2xl font-bold">{item ? "Edit product" : "Create product"}</h2>
      <form onSubmit={(event) => { event.preventDefault(); submit(); }} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Slug *</label>
            <input value={String(data.slug || "")} onChange={(event) => update("slug", event.target.value)} className="w-full rounded-lg border px-3 py-2" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Category</label>
            <select value={String(data.categoryId || "")} onChange={(event) => update("categoryId", event.target.value)} className="w-full rounded-lg border px-3 py-2">
              <option value="">Select a category</option>
              {categories.map((category) => <option key={category.id} value={category.id}>{category.navLabelFr} ({category.slug})</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Badge</label>
            <input value={String(data.badge || "")} onChange={(event) => update("badge", event.target.value)} className="w-full rounded-lg border px-3 py-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Display order</label>
            <input type="number" value={String(data.sortOrder ?? 0)} onChange={(event) => update("sortOrder", Number(event.target.value))} className="w-full rounded-lg border px-3 py-2" />
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">Product image</label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => setSelectedImage(event.target.files?.[0] || null)} className="block w-full text-sm" />
            <button type="button" onClick={uploadImage} disabled={!selectedImage || uploading} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50">
              {uploading ? "Uploading..." : "Upload image"}
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">JPG, PNG, WEBP or GIF — maximum 5 MB.</p>
          {data.image ? <p className="mt-2 text-sm text-green-700">Image saved: {String(data.image)}</p> : null}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-gray-700">Finishes</legend>
            <div className="flex flex-wrap gap-3">
              {finishOptions.map((finish) => <label key={finish} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={asList(data.finishes).includes(finish)} onChange={() => toggleList("finishes", finish)} />{finish}</label>)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-gray-700">Usage</legend>
            <div className="flex flex-wrap gap-3">
              {usageOptions.map((usage) => <label key={usage} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={asList(data.usage).includes(usage)} onChange={() => toggleList("usage", usage)} />{usage}</label>)}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {[["customizable", "Customizable"], ["is3d", "3D"], ["featured", "Featured"], ["newest", "New"], ["premium", "Premium"], ["active", "Visible"]].map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={Boolean(data[key])} onChange={(event) => update(key, event.target.checked)} />{label}</label>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {(Object.keys(languageLabels) as Array<keyof typeof languageLabels>).map((language) => (
            <section key={language} className="space-y-3 rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold">{languageLabels[language]}</h3>
              <div><label className="mb-1 block text-xs text-gray-600">Name</label><input value={String(data[`name${language}`] || "")} onChange={(event) => update(`name${language}`, event.target.value)} className="w-full rounded border px-2 py-1.5 text-sm" /></div>
              <div><label className="mb-1 block text-xs text-gray-600">Description</label><textarea value={String(data[`desc${language}`] || "")} onChange={(event) => update(`desc${language}`, event.target.value)} className="w-full rounded border px-2 py-1.5 text-sm" rows={3} /></div>
              <div><label className="mb-1 block text-xs text-gray-600">Characteristics — one per line</label><textarea value={asList(data[`specs${language}`]).join("\n")} onChange={(event) => update(`specs${language}`, event.target.value.split("\n").map((entry) => entry.trim()).filter(Boolean))} className="w-full rounded border px-2 py-1.5 text-sm" rows={4} /></div>
            </section>
          ))}
        </div>

        <div className="flex gap-3"><button type="submit" className="rounded-lg bg-amber-600 px-6 py-2 font-medium text-white hover:bg-amber-700">Save product</button><button type="button" onClick={onClose} className="rounded-lg bg-gray-200 px-6 py-2">Cancel</button></div>
      </form>
    </div>
  );
}

export default function AdminProductsPage() {
  return <AdminLayout><AdminCrud title="Products" apiBase="/api/products" columns={[{ key: "slug", label: "Slug" }, { key: "nameFr", label: "Name (FR)" }, { key: "badge", label: "Badge" }, { key: "featured", label: "Featured", render: (item: Record<string, unknown>) => item.featured ? "Yes" : "" }, { key: "sortOrder", label: "Order" }]} fields={[]} renderForm={(item, onSave, onClose) => <ProductForm item={item as Record<string, unknown> | null} onSave={onSave} onClose={onClose} />} /></AdminLayout>;
}
