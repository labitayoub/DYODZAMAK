"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { showToast } from "@/lib/notifications";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/settings").then(r => r.json()).then(d => {
      setSettings(d || {});
      setLoading(false);
    });
  }, []);

  function updateSetting(group: string, key: string, value: string) {
    setSettings({
      ...settings,
      [group]: {
        ...(settings[group] as Record<string, unknown> || {}),
        [key]: value,
      },
    });
  }

  async function handleSave() {
    setSaving(true);
    const settingsArray: Array<{ key: string; value: string; group: string }> = [];
    for (const [group, values] of Object.entries(settings)) {
      if (typeof values === "object" && values !== null) {
        for (const [key, value] of Object.entries(values as Record<string, unknown>)) {
          settingsArray.push({ key, value: String(value), group });
        }
      }
    }
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ settings: settingsArray }),
    });
    if (res.ok) showToast("Settings saved successfully.");
    else showToast("Unable to save settings.", "error");
    setSaving(false);
  }

  if (loading) return <AdminLayout><div className="text-center py-12 text-gray-500">Loading...</div></AdminLayout>;

  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Site Settings</h1>
        {/* Contact Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            {["whatsapp_number", "phone_display", "email", "location_fr", "location_ar", "location_en"].map(key => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</label>
                <input
                  value={String((settings.contact as Record<string, unknown>)?.[key] || "")}
                  onChange={(e) => updateSetting("contact", key, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">General</h2>
          <div className="space-y-4">
            {["site_name"].map(key => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</label>
                <input
                  value={String((settings.general as Record<string, unknown>)?.[key] || "")}
                  onChange={(e) => updateSetting("general", key, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Footer & Texts</h2>
          <div className="space-y-4">
            {["footer_text_fr", "footer_text_ar", "footer_text_en"].map(key => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</label>
                <textarea
                  value={String((settings.texts as Record<string, unknown>)?.[key] || "")}
                  onChange={(e) => updateSetting("texts", key, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  rows={2}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save All Settings"}
        </button>
      </div>
    </AdminLayout>
  );
}
