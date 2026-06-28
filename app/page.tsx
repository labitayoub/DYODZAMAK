import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "Accueil",
  description: "DYODZAMAK crée des médailles, trophées et créations métalliques personnalisées au Maroc. Prix sur devis."
};

export default function Home() {
  return <HomeClient />;
}
