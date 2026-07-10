import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="section-frame">
        <div className="section-surface rounded-[34px] p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Devis</span>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-[#111111] md:text-5xl">
                Vous avez un besoin precis, un delai a respecter ou une personnalisation a confirmer ?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)]">
                Notre equipe vous accompagne avec une reponse claire sur les options, les quantites et la meilleure base de fabrication pour votre projet.
              </p>
            </div>

            <Link href="/devis" className="button-primary">
              Demander un devis
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
