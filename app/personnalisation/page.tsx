import type { Metadata } from "next";
import { CustomizationPageClient } from "@/components/pages/SimplePageClients";

export const metadata: Metadata = {
  title: "Personnalisation",
  description: "Options de personnalisation DYODZAMAK: logo, nom, texte, date, événement, forme, taille, quantité et finitions métal."
};

export default function PersonnalisationPage() {
  return <CustomizationPageClient />;
}
