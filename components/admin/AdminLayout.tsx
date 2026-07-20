"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3, ChevronLeft, ChevronRight, FileText, FolderKanban, Image,
  LayoutDashboard, Mail, Package, Settings, Tags, Users,
} from "lucide-react";
import { useAdminAuth } from "./AdminAuthProvider";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/categories", label: "Categories", icon: Tags },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/slides", label: "Home Slides", icon: Image },
  { href: "/admin/pages", label: "Pages Content", icon: FileText },
  { href: "/admin/process-steps", label: "Process Steps", icon: Settings },
  { href: "/admin/trust-points", label: "Trust Points", icon: Users },
  { href: "/admin/stats", label: "Stats", icon: BarChart3 },
  { href: "/admin/nav-items", label: "Navigation", icon: FolderKanban },
  { href: "/admin/gallery", label: "Gallery", icon: Image },
  { href: "/admin/contacts", label: "Contact Messages", icon: Mail },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

function AdminSidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  const sidebar = (
    <aside className={`flex h-screen shrink-0 flex-col bg-slate-950 text-white transition-all ${collapsed ? "w-[76px]" : "w-64 max-w-[75vw]"}`}>
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        {!collapsed && <span className="font-bold tracking-wide">Best Boutons</span>}
        <button onClick={() => setCollapsed((value) => !value)} className="rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Toggle sidebar">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {sidebarLinks.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} onClick={onClose} title={collapsed ? label : undefined} className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${pathname === href ? "bg-amber-500 text-slate-950 font-semibold" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
            <Icon size={18} className="shrink-0" />
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
      <div className="border-t border-white/10 p-3">
        {!collapsed && <p className="mb-3 truncate text-xs text-slate-400">{user.email}</p>}
        <button onClick={logout} className="w-full rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-500">
          {collapsed ? "↪" : "Logout"}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">{sidebar}</div>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} />
          <div className="relative z-10">{sidebar}</div>
        </div>
      )}
    </>
  );
}

function AdminShell({ children }: { children: ReactNode }) {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileSidebar, setMobileSidebar] = useState(false);

  useEffect(() => {
    if (!loading && !user && pathname !== "/admin/login") router.replace("/admin/login");
  }, [user, loading, router, pathname]);

  useEffect(() => { setMobileSidebar(false); }, [pathname]);

  if (loading) return <div className="grid min-h-screen place-items-center bg-slate-100 text-slate-500">Loading...</div>;
  if (!user && pathname !== "/admin/login") return null;
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <AdminSidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
      <main className="min-w-0 flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <button onClick={() => setMobileSidebar(true)} className="mb-4 flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 lg:hidden">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          Menu
        </button>
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
