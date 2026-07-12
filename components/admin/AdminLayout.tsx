"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "./AdminAuthProvider";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/categories", label: "Categories", icon: "📁" },
  { href: "/admin/products", label: "Products", icon: "📦" },
  { href: "/admin/slides", label: "Home Slides", icon: "🖼️" },
  { href: "/admin/pages", label: "Pages Content", icon: "📄" },
  { href: "/admin/process-steps", label: "Process Steps", icon: "⚙️" },
  { href: "/admin/trust-points", label: "Trust Points", icon: "✅" },
  { href: "/admin/stats", label: "Stats", icon: "📈" },
  { href: "/admin/nav-items", label: "Navigation", icon: "🧭" },
  { href: "/admin/hero-sections", label: "Hero Sections", icon: "🎬" },
  { href: "/admin/gallery", label: "Gallery", icon: "🖼️" },
  { href: "/admin/quotes", label: "Quote Requests", icon: "📋" },
  { href: "/admin/contacts", label: "Contact Messages", icon: "✉️" },
  { href: "/admin/media", label: "Media Library", icon: "💾" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  return (
    <aside className={`bg-gray-900 text-white min-h-screen transition-all ${collapsed ? "w-16" : "w-64"} flex flex-col`}>
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        {!collapsed && <span className="font-bold text-lg">DYODZAMAK</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white p-1">
          {collapsed ? "→" : "←"}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-2">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
              pathname === link.href
                ? "bg-amber-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        {!collapsed && <p className="text-xs text-gray-400 mb-2">{user.email}</p>}
        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded transition-colors"
        >
          {collapsed ? "🚪" : "Logout"}
        </button>
      </div>
    </aside>
  );
}

function AdminShell({ children }: { children: ReactNode }) {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user && pathname !== "/admin/login") return null;

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
