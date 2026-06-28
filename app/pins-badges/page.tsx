import type { Metadata } from "next";
import CategoryPageClient from "@/components/pages/CategoryPageClient";

export const metadata: Metadata = {
  title: "Pins et badges métalliques",
  description: "Pins métalliques, badges personnalisés, logos en métal et finitions bronze, dorée ou argentée. Prix sur devis."
};

export default function PinsBadgesPage() {
  return <CategoryPageClient slug="pins-badges" />;
}
