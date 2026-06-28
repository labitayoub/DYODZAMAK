import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez DYODZAMAK par WhatsApp, téléphone ou email pour demander un devis de médailles, trophées, plaques, pins ou badges."
};

export default function ContactPage() {
  return <ContactPageClient />;
}
