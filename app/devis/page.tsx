import type { Metadata } from "next";
import { QuotePageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Demande de devis",
  description: "Demandez un devis Best Boutons via un formulaire WhatsApp pré-rempli. Aucun paiement en ligne, prix sur devis."
};

export default function DevisPage() {
  return <QuotePageClient />;
}
