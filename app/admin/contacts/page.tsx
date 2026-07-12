"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminContactsPage() {
  const [messages, setMessages] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contacts").then(r => r.json()).then(d => {
      setMessages(Array.isArray(d) ? d : []);
      setLoading(false);
    });
  }, []);

  async function markRead(id: string) {
    await fetch(`/api/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: true }),
    });
    setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m));
  }

  async function deleteMessage(id: string) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    setMessages(messages.filter(m => m.id !== id));
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No messages yet</div>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id as string} className={`bg-white rounded-lg shadow p-4 border-l-4 ${(m.read as boolean) ? "border-gray-300" : "border-blue-500"}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold">{m.name as string}</span>
                      {m.email && <span className="text-sm text-gray-500">{m.email as string}</span>}
                      {m.phone && <span className="text-sm text-gray-400">{m.phone as string}</span>}
                    </div>
                    {m.subject && <p className="text-sm font-medium text-gray-700">{m.subject as string}</p>}
                    <p className="text-sm text-gray-600 mt-1">{m.message as string}</p>
                    <p className="text-xs text-gray-400 mt-2">{new Date(m.createdAt as string).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {!m.read && <button onClick={() => markRead(m.id as string)} className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">Mark Read</button>}
                    <button onClick={() => deleteMessage(m.id as string)} className="text-xs text-red-600 hover:underline">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
