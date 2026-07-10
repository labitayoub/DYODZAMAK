import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "Accueil",
  description: "DYODZAMAK cree des medailles, trophees et creations metalliques personnalisees au Maroc. Prix sur devis."
};

export default function Home() {
  return <HomeClient />;
}
