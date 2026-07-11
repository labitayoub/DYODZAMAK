"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import SectionTitle from "@/components/SectionTitle";
import { FadeIn, ScaleIn, StaggerIn } from "@/components/Motion";
import { PrimaryButton, SecondaryButton, WhatsAppButton } from "@/components/Buttons";
import { categories, categoryRoutes, products } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomeClient() {
  const { lang, t } = useLanguage();
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const premium = products.filter((product) => product.premium).slice(0, 3);
  const leadCategory = categories[categoryRoutes[0]];
  const secondaryCategory = categories[categoryRoutes[2]];
  const signatureProduct = premium[0] ?? featured[0];
  const signatureSupport = premium[1] ?? featured[1] ?? signatureProduct;
  const supportGallery = [
    { key: signatureSupport.id, image: signatureSupport.image, alt: signatureSupport[lang].name },
    { key: leadCategory.slug, image: leadCategory.image, alt: leadCategory[lang].title }
  ];

  return (
    <>
      <section className="px-4 pb-8 pt-6 md:px-6 md:pb-14 md:pt-8">
        <div className="section-frame">
          <div className="hero-panel rounded-[40px] px-5 py-5 md:px-7 md:py-7">
            <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
              <FadeIn className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 md:p-8 lg:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/76 backdrop-blur">
                    <Sparkles size={14} className="text-[rgba(201,158,99,0.95)]" />
                    Atelier metal sur mesure
                  </span>
                  <span className="rounded-full border border-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/52">
                    Maroc
                  </span>
                </div>

                <h1 className="mt-8 max-w-4xl text-[clamp(3.4rem,8vw,7.1rem)] font-medium leading-[1.15] tracking-[-0.03em] text-[#f7f3ed]">
                  Des pieces de distinction pensees comme des objets de collection.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(247,243,237,0.72)] md:text-lg">
                  {t.home.intro} Nous concevons chaque medaille, trophee, plaque ou pin comme un marqueur de prestige, avec
                  une execution nette, des finitions precises et une presentation qui inspire confiance avant meme le devis.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/devis">{t.quote}</PrimaryButton>
                  <WhatsAppButton>{t.whatsapp}</WhatsAppButton>
                </div>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">Approche</p>
                    <p className="mt-2 text-sm leading-6 text-white/76">Maquette avant production pour valider le ton, le logo et la lisibilite.</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">Finitions</p>
                    <p className="mt-2 text-sm leading-6 text-white/76">Dorure, argent, bronze et metal noir pour une lecture plus haut de gamme.</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">Canal</p>
                    <p className="mt-2 text-sm leading-6 text-white/76">Demande rapide sur WhatsApp avec orientation claire vers le bon produit.</p>
                  </div>
                </div>
              </FadeIn>

              <ScaleIn className="grid gap-5">
                <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8">
                  <Image
                    src={signatureProduct.image}
                    alt={signatureProduct[lang].name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.58))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/56">{signatureProduct.badge}</p>
                    <h2 className="mt-2 max-w-md text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-white md:text-4xl">
                      {signatureProduct[lang].name}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/74">{signatureProduct[lang].description}</p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="soft-panel rounded-[30px] p-5 md:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(17,17,17,0.42)]">Positionnement</p>
                    <p className="mt-4 text-2xl font-medium leading-[1.22] tracking-[-0.02em] text-[#111111]">
                      Un catalogue qui parle comme un atelier premium, pas comme une grille de produits.
                    </p>
                  </div>

                  <div className="soft-panel relative overflow-hidden rounded-[30px] p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {supportGallery.map((item) => (
                        <div key={item.key} className="relative min-h-[170px] overflow-hidden rounded-[22px] bg-[#fcfbf9]/60 p-4">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 16vw, 50vw"
                            className="object-contain p-2"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="max-w-xs text-sm leading-6 text-[rgba(17,17,17,0.66)]">{t.home.bannerText}</p>
                      <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-medium text-[#111111]">
                        {t.nav.work} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="section-frame grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <FadeIn className="soft-panel rounded-[32px] p-6 md:p-8">
            <span className="eyebrow">Signal de confiance</span>
            <h2 className="mt-5 text-4xl font-medium leading-[0.96] tracking-[-0.05em] text-[#111111] md:text-5xl">
              Le visiteur doit comprendre en quelques secondes que le resultat sera precis, propre et valorisant.
            </h2>
          </FadeIn>

          <StaggerIn className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {t.trust.map((item, index) => (
              <ScaleIn key={item}>
                <div className="section-surface h-full rounded-[28px] p-5 md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(17,17,17,0.4)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-10 text-xl font-medium leading-8 tracking-[-0.04em] text-[#111111]">{item}</p>
                </div>
              </ScaleIn>
            ))}
          </StaggerIn>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="section-frame">
          <div className="soft-panel rounded-[34px] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <span className="eyebrow">Ils nous font confiance</span>
                <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-[#111111] md:text-5xl">
                  Entreprises, ecoles, clubs, associations et institutions nous confient leurs projets de distinction.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-9 text-[rgba(17,17,17,0.62)]">
                  Nos clients recherchent un rendu propre, une personnalisation serieuse et une fabrication capable de valoriser leur image
                  lors d&apos;une remise, d&apos;un evenement ou d&apos;une operation de communication.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  "Entreprises et marques",
                  "Ecoles et universites",
                  "Clubs et federations",
                  "Associations et ONG",
                  "Administrations",
                  "Organisateurs d'evenements"
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/80 px-5 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.42)]">Client type</p>
                    <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-[#111111]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="section-frame">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Collections"
              title="Chaque famille de produit a son propre role dans le parcours de reconnaissance."
              text="Au lieu d'une simple liste, nous positionnons chaque categorie par usage, niveau de prestige et type de personnalisation."
            />

            <StaggerIn className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categoryRoutes.map((slug, index) => (
                <ScaleIn key={slug}>
                  <Link
                    href={categories[slug].href}
                    className="group relative block overflow-hidden rounded-[30px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,245,238,0.82))] p-5 transition duration-500 hover:-translate-y-1 hover:border-[rgba(166,107,44,0.22)] hover:shadow-[0_28px_70px_rgba(17,17,17,0.10)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full border border-[rgba(17,17,17,0.08)] bg-white/88 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(17,17,17,0.56)]">
                        {categories[slug][lang].subcategories[0]}
                      </span>
                      <span className="text-[rgba(17,17,17,0.35)]">
                        <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>

                    <h3 className="mt-12 text-3xl font-medium leading-[1.18] tracking-[-0.02em] text-[#111111]">
                      {categories[slug][lang].title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(17,17,17,0.66)]">
                      {categories[slug][lang].summary}
                    </p>

                    <div className="mt-10 overflow-hidden rounded-[24px] bg-[#fcfbf9]/60 p-4">
                      <div className="relative min-h-[220px] transition duration-700 group-hover:scale-[1.02]">
                        <Image
                          src={categories[slug].image}
                          alt={categories[slug][lang].title}
                          fill
                          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 40vw, 100vw"
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  </Link>
                </ScaleIn>
              ))}
            </StaggerIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-18">
        <div className="section-frame">
          <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
            <FadeIn className="soft-panel rounded-[36px] p-6 md:p-8 lg:p-10">
              <div className="relative z-10">
                <span className="eyebrow">Materiaux & impact</span>
                <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-6xl">
                  La valeur percue se construit dans la matiere, la lumiere et la nettete des details.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[rgba(17,17,17,0.66)] md:text-lg">
                  Les reflets metalliques, les arretes bien controlees et les fonds de presentation propres transforment un simple objet
                  en piece de remise digne d&apos;une marque, d&apos;une institution ou d&apos;un evenement qui veut laisser une impression durable.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["01", "Finitions premium"],
                    ["02", "Logo et gravure nets"],
                    ["03", "Presentation plus ceremonielle"]
                  ].map(([number, label]) => (
                    <div key={number} className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/80 px-4 py-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(17,17,17,0.38)]">{number}</p>
                      <p className="mt-6 text-lg font-medium tracking-[-0.03em] text-[#111111]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <ScaleIn className="grid gap-5">
              <div className="soft-panel rounded-[34px] p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(17,17,17,0.4)]">Usage cible</p>
                <h3 className="mt-5 text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-[#111111]">
                  Clubs, institutions, entreprises et evenements qui veulent offrir plus qu&apos;un objet standard.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[rgba(17,17,17,0.62)]">
                  Le site doit rassurer sur la qualite, puis raccourcir le chemin vers le devis. C&apos;est pour cela que chaque section repond a
                  une question simple: est-ce que DYODZAMAK peut produire une piece a la hauteur de mon image?
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[34px] border border-[rgba(17,17,17,0.08)] bg-[#fcfbf9]/60 p-6">
                <Image
                  src={secondaryCategory.image}
                  alt={secondaryCategory[lang].title}
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.46))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/56">{secondaryCategory[lang].title}</p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/78">{secondaryCategory[lang].summary}</p>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-16">
        <div className="section-frame">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionTitle
              eyebrow="Pieces en avant"
              title="Une selection reduite pour etablir le niveau de desir avant d'explorer tout le catalogue."
              text="Moins d'objets affiches, mais mieux presentes: c'est ce qui donne un sentiment plus premium et plus intentionnel."
            />
            <div className="soft-panel rounded-[34px] p-4 md:p-5">
              <ProductGrid products={featured} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-18">
        <div className="section-dark section-frame overflow-hidden rounded-[40px] px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <SectionTitle
              eyebrow="Commande"
              title="Un parcours plus court, plus calme, et plus credible."
              text="Le visiteur n&apos;a pas besoin d&apos;apprendre un systeme complexe. Il a besoin d&apos;etre guide vers la bonne demande avec un sentiment de maitrise."
              dark
            />
            <StaggerIn className="grid gap-4">
              {t.steps.map((step, index) => (
                <ScaleIn key={step}>
                  <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 md:grid-cols-[92px_1fr] md:items-center md:px-6">
                    <span className="font-display text-5xl leading-none text-[rgba(201,158,99,0.9)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-lg leading-8 text-[rgba(247,243,237,0.8)]">{step}</p>
                  </div>
                </ScaleIn>
              ))}
            </StaggerIn>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-16">
        <div className="section-frame grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="soft-panel rounded-[36px] p-6 md:p-8 lg:p-10">
            <span className="eyebrow">Passage a l&apos;action</span>
            <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-6xl">
              Votre prochain objet de reconnaissance peut deja entrer en maquette aujourd&apos;hui.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(17,17,17,0.62)] md:text-lg">
              Si vous avez deja le logo, le texte ou la quantite, le chemin ideal est simple: envoyez les informations et nous preparons une
              base de devis avec la bonne categorie, la bonne finition et le bon niveau de presentation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/devis">{t.quote}</PrimaryButton>
              <SecondaryButton href="/catalogue">{t.nav.catalog}</SecondaryButton>
            </div>
          </FadeIn>

          <ScaleIn className="soft-panel rounded-[36px] p-6 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(17,17,17,0.4)]">Pourquoi cela convertit mieux</p>
            <div className="mt-8 grid gap-4">
              {[
                "L'histoire du produit arrive avant la demande commerciale.",
                "Les visuels renforcent la perception de qualite avant les specifications.",
                "Le devis devient la suite naturelle du parcours, pas une interruption brutale."
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white/76 px-5 py-5">
                  <p className="text-base leading-7 text-[rgba(17,17,17,0.74)]">{item}</p>
                </div>
              ))}
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
