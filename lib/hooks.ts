"use client";

import { useState, useEffect, useCallback } from "react";

export function useApi<T>(url: string, fallback: T) {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((r) => (r.ok ? r.json() : fallback))
      .then((d) => { setData(d ?? fallback); setLoading(false); })
      .catch(() => { setData(fallback); setLoading(false); });
  }, [url, fallback]);

  return { data, loading };
}

export function useSettings() {
  const { data, loading } = useApi<Record<string, Record<string, unknown>>>("/api/settings", {});
  return { settings: data, loading };
}

export function useCategories() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/categories", []);
  return { categories: data, loading };
}

export function useProducts(categorySlug?: string) {
  const url = categorySlug ? `/api/products?category=${categorySlug}` : "/api/products";
  const { data, loading } = useApi<Array<Record<string, unknown>>>(url, []);
  return { products: data, loading };
}

export function useSlides() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/slides", []);
  return { slides: data, loading };
}

export function useProcessSteps() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/process-steps", []);
  return { steps: data, loading };
}

export function useTrustPoints() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/trust-points", []);
  return { points: data, loading };
}

export function useStats() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/stats", []);
  return { stats: data, loading };
}

export function useGallery() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/gallery", []);
  return { items: data, loading };
}

export function useNavItems() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/nav-items", []);
  return { items: data, loading };
}

export function usePages() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/pages", []);
  return { pages: data, loading };
}

export function usePageContent(slug: string) {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/pages", []);
  const page = data.find((p) => p.slug === slug);
  return { page, loading };
}

export function useHeroSections() {
  const { data, loading } = useApi<Array<Record<string, unknown>>>("/api/hero-sections", []);
  return { heroes: data, loading };
}

export function submitQuote(data: Record<string, unknown>) {
  return fetch("/api/quotes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function submitContact(data: Record<string, unknown>) {
  return fetch("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
