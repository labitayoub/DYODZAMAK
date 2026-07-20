import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Pins metalliques personnalises",
  description: "Pins metalliques personnalises, logos en metal et finitions bronze, doree ou argentee. Prix sur devis."
};

export default function PinsBadgesPage() {
  return <CategoryPageClient slug="pins" />;
}
