"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminMediaPage() {
  const [media, setMedia] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/media").then(r => r.json()).then(d => {
      setMedia(Array.isArray(d) ? d : []);
      setLoading(false);
    });
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/media", { method: "POST", body: formData });
    if (res.ok) {
      const item = await res.json();
      setMedia([item, ...media]);
    }
    setUploading(false);
  }

  function copyPath(path: string) {
    navigator.clipboard.writeText(path);
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Media Library</h1>
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Upload file</span>
            <input type="file" onChange={handleUpload} disabled={uploading} className="mt-2 block w-full text-sm" />
          </label>
          {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
        </div>
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {media.map((m) => (
              <div key={String(m.id)} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  {String(m.mimeType).startsWith("image") ? (
                    <img src={String(m.path)} alt={String(m.alt || "")} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-3xl">📄</span>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-xs text-gray-500 truncate">{String(m.originalName)}</p>
                  <button onClick={() => copyPath(String(m.path))} className="text-xs text-amber-600 hover:underline mt-1">
                    Copy path: {String(m.path)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
