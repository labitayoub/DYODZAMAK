"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quotes").then(r => r.json()).then(d => {
      setQuotes(Array.isArray(d) ? d : []);
      setLoading(false);
    });
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/quotes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q));
  }

  async function markRead(id: string) {
    await fetch(`/api/quotes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: true }),
    });
    setQuotes(quotes.map(q => q.id === id ? { ...q, read: true } : q));
  }

  async function deleteQuote(id: string) {
    if (!confirm("Delete this quote?")) return;
    await fetch(`/api/quotes/${id}`, { method: "DELETE" });
    setQuotes(quotes.filter(q => q.id !== id));
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6">Quote Requests</h1>
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : quotes.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No quote requests yet</div>
        ) : (
          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.id as string} className={`bg-white rounded-lg shadow p-4 border-l-4 ${(q.read as boolean) ? "border-gray-300" : "border-amber-500"}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold">{q.name as string}</span>
                      <span className="text-sm text-gray-500">{q.phone as string}</span>
                      {q.city && <span className="text-sm text-gray-400">({q.city as string})</span>}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        q.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                        q.status === "contacted" ? "bg-blue-100 text-blue-800" :
                        q.status === "completed" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>{q.status as string}</span>
                    </div>
                    {q.product && <p className="text-sm text-gray-600">Product: {q.product as string}</p>}
                    {q.quantity && <p className="text-sm text-gray-600">Quantity: {q.quantity as string}</p>}
                    {q.finish && <p className="text-sm text-gray-600">Finish: {q.finish as string}</p>}
                    {q.engraving && <p className="text-sm text-gray-600">Engraving: {q.engraving as string}</p>}
                    {q.message && <p className="text-sm text-gray-700 mt-2 italic">&ldquo;{q.message as string}&rdquo;</p>}
                    <p className="text-xs text-gray-400 mt-2">{new Date(q.createdAt as string).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {!q.read && <button onClick={() => markRead(q.id as string)} className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">Mark Read</button>}
                    <select value={q.status as string} onChange={(e) => updateStatus(q.id as string, e.target.value)} className="text-xs border rounded px-1">
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button onClick={() => deleteQuote(q.id as string)} className="text-xs text-red-600 hover:underline">Delete</button>
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
