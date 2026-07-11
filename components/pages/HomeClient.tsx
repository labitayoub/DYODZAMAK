"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Award, BadgeCheck, Gem, Palette, Sparkles, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/Motion";
import { useLanguage } from "@/components/LanguageProvider";

const ALL_PRODUCTS = [
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg",  label: { fr: "Trophée sportif",        ar: "كأس رياضي",        en: "Sports trophy" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg",  label: { fr: "Récompense corporate",   ar: "جائزة مؤسسية",     en: "Corporate award" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg", label: { fr: "Plaque commémorative", ar: "درع تذكاري",       en: "Commemorative plaque" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (2).jpeg", label: { fr: "Médaille premium",     ar: "ميدالية فاخرة",    en: "Premium medal" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.12.jpeg",   label: { fr: "Médaille événement",    ar: "ميدالية حدث",      en: "Event medal" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.12 (1).jpeg", label: { fr: "Trophée édition spéciale", ar: "كأس إصدار خاص", en: "Special edition trophy" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.12 (2).jpeg", label: { fr: "Trophée corporate",   ar: "كأس مؤسسي",       en: "Corporate trophy" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",   label: { fr: "Pin personnalisé",      ar: "دبوس مخصص",        en: "Custom pin" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg", label: { fr: "Badge professionnel", ar: "شارة احترافية",    en: "Professional badge" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg", label: { fr: "Porte-clés gravé",    ar: "سلسلة مفاتيح",     en: "Engraved keychain" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.13 (3).jpeg", label: { fr: "Macaron prestige",    ar: "شارة بريستيج",     en: "Prestige badge" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg", label: { fr: "Bouton personnalisé", ar: "زر مخصص",          en: "Custom button" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",   label: { fr: "Plaque entreprise",     ar: "لوحة شركة",        en: "Company plaque" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.14 (1).jpeg", label: { fr: "Résine décorative",  ar: "ريزن ديكوري",      en: "Decorative resin" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.14 (2).jpeg", label: { fr: "T-shirt brodé",       ar: "تيشيرت مطرز",      en: "Embroidered T-shirt" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.38.31.jpeg",   label: { fr: "Médaille sportive",     ar: "ميدالية رياضية",   en: "Sports medal" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.38.49.jpeg",   label: { fr: "Médaille institutionnelle", ar: "ميدالية مؤسسية", en: "Institutional medal" } },
  { image: "/images/WhatsApp Image 2026-06-03 at 13.39.05.jpeg",   label: { fr: "Trophée excellence",   ar: "كأس التميز",       en: "Excellence trophy" } },
];

const copy = {
  fr: {
    heroDir: "ltr",
    slides: [
      { eyebrow: "Des details qui font la difference", text: "De la premiere idee a la piece finale, nous concevons des recompenses a la hauteur de l'exploit.", cta: "Commencer votre design", href: "/devis" },
      { eyebrow: "Une identite qui merite d'apparaitre", text: "Nous fabriquons des coupes, medailles et plaques avec des finitions metalliques adaptees a votre marque ou votre evenement.", cta: "Explorer la personnalisation", href: "/personnalisation" },
      { eyebrow: "Pour les grands moments",text: "Des creations precises pour les ecoles, clubs, entreprises, associations et evenements dans tout le Maroc.", cta: "Voir nos realisations", href: "/realisations" }
    ],
    collections: [
      { title: "Trophees sportifs", text: "Coupes et medailles pour championnats et tournois", href: "/trophees", image: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg", icon: Trophy, cta: "Decouvrir la collection" },
      { title: "Recompenses corporate", text: "Pieces premium qui portent l'image de votre marque", href: "/trophees-3d", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg", icon: Award, cta: "Decouvrir la collection" },
      { title: "Plaques commemoratives", text: "Plaques et tableaux pour remerciement et ceremonie", href: "/plaques", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg", icon: Gem, cta: "Decouvrir la collection" }
    ],
    sectionLabel: "Nos collections remarquables",
    sectionText: "Choisissez une piece, puis nous la personnalisons avec votre logo, votre texte et votre finition preferees.",
    craftEyebrow: "Personnalisation complete",
    craftTitle: "Votre piece raconte votre histoire, pas seulement votre nom.",
    craftText: "Nous transformons l'identite de votre evenement ou de votre institution en details concrets: logo en relief, gravure precise, couleurs, forme speciale et boite de presentation si necessaire.",
    craftLink: "Comment se fait la personnalisation ?",
    stats: [
      { title: "Maquette avant production", text: "Validation du design avant execution", icon: BadgeCheck },
      { title: "Finitions premium", text: "Or, argent, bronze et metal noir", icon: Gem },
      { title: "Pour chaque occasion", text: "Sport, entreprises, ecoles et evenements", icon: Award }
    ],
    processEyebrow: "Un parcours simple et clair",
    processTitle: "De l'idee au moment de la distinction.",
    steps: [
      ["01", "Partagez votre idee", "Envoyez le logo, le texte, la quantite et l'occasion via WhatsApp."],
      ["02", "Nous preparons la maquette", "Nous concevons un visuel clair avant de lancer la production."],
      ["03", "Nous fabriquons et livrons", "Nous realisons la piece avec la finition choisie et nous la livrons."]
    ] as Array<[string, string, string]>,
    finalEyebrow: "DYODZAMAK",
    finalTitle: "Pret a creer une recompense qui eleve la valeur de votre succes ?",
    finalText: "Envoyez les details essentiels, et nous vous proposerons le modele et la finition adaptes.",
    finalCta: "Demander un devis"
  },
  ar: {
    heroDir: "rtl",
    slides: [
      { eyebrow: "تفاصيل تصنع الفرق", title: "جوائز استثنائية لأبطال مميزين.", text: "من الفكرة الأولى إلى القطعة النهائية، نصمم جوائز تليق بقيمة الإنجاز.", cta: "ابدأ تصميمك الآن", href: "/devis" },
      { eyebrow: "هوية تستحق أن تظهر", title: "حوّل شعارك إلى قطعة تترك انطباعاً.", text: "نصنع كؤوساً، ميداليات ودروعاً بتشطيبات معدنية تليق بعلامتك أو مناسبتك.", cta: "استكشف التخصيص", href: "/personnalisation" },
      { eyebrow: "للمناسبات الكبيرة", title: "كل تكريم يبدأ بقطعة لا تُنسى.", text: "تصاميم دقيقة للمدارس، الأندية، الشركات، الجمعيات والفعاليات في كل المغرب.", cta: "شاهد أعمالنا", href: "/realisations" }
    ],
    collections: [
      { title: "كؤوس رياضية", text: "كؤوس وميداليات للبطولات والدوريات", href: "/trophees", image: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg", icon: Trophy, cta: "اكتشف المجموعة" },
      { title: "جوائز الشركات", text: "قطع تقدير راقية تحمل هوية مؤسستك", href: "/trophees-3d", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg", icon: Award, cta: "اكتشف المجموعة" },
      { title: "دروع تذكارية", text: "دروع ولوحات للشكر والتكريم والمناسبات", href: "/plaques", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg", icon: Gem, cta: "اكتشف المجموعة" }
    ],
    sectionLabel: "مجموعاتنا المميزة",
    sectionText: "اختر نوع القطعة، ثم نخصصها بشعارك ونصك وتشطيبك المفضل.",
    craftEyebrow: "تخصيص كامل",
    craftTitle: "قطعتك تحمل قصتك، وليس مجرد اسمك.",
    craftText: "نحوّل هوية الحدث أو المؤسسة إلى تفاصيل ملموسة: شعار بارز، نقش دقيق، ألوان، شكل خاص وعلبة عرض عند الحاجة.",
    craftLink: "كيف يتم التخصيص؟",
    stats: [
      { title: "معاينة قبل الإنتاج", text: "تأكيد التصميم قبل التنفيذ", icon: BadgeCheck },
      { title: "تشطيبات فاخرة", text: "ذهبي، فضي، برونزي وأسود", icon: Gem },
      { title: "لكل مناسبة", text: "رياضة، شركات، مدارس وفعاليات", icon: Award }
    ],
    processEyebrow: "مسار بسيط وواضح",
    processTitle: "من الفكرة إلى لحظة التكريم.",
    steps: [
      ["01", "شاركنا فكرتك", "أرسل الشعار، النص، الكمية والمناسبة عبر واتساب."],
      ["02", "نصمم المعاينة", "نجهز لك تصميماً واضحاً قبل بدء الإنتاج."],
      ["03", "نصنع ونُسلّم", "ننّفذ القطعة بالتشطيب الذي اخترته ونوصلها إليك."]
    ] as Array<[string, string, string]>,
    finalEyebrow: "DYODZAMAK",
    finalTitle: "هل أنت مستعد لصناعة جائزة ترفع قيمة الإنجاز؟",
    finalText: "أرسل التفاصيل الأساسية، وسنقترح عليك النموذج والتشطيب المناسبين.",
    finalCta: "اطلب عرض السعر"
  },
  en: {
    heroDir: "ltr",
    slides: [
      { eyebrow: "Details that make the difference", title: "Exceptional awards for unique champions.", text: "From the first idea to the final piece, we design awards that match the value of the achievement.", cta: "Start your design", href: "/devis" },
      { eyebrow: "An identity worth showing", title: "Turn your logo into a piece that leaves an impression.", text: "We make trophies, medals and plaques with metal finishes that suit your brand or event.", cta: "Explore customization", href: "/personnalisation" },
      { eyebrow: "For big occasions", title: "Every tribute starts with an unforgettable piece.", text: "Precise designs for schools, clubs, companies, associations and events across Morocco.", cta: "See our work", href: "/realisations" }
    ],
    collections: [
      { title: "Sports trophies", text: "Trophies and medals for championships and tournaments", href: "/trophees", image: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg", icon: Trophy, cta: "Explore the collection" },
      { title: "Corporate awards", text: "Premium pieces that carry your brand identity", href: "/trophees-3d", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg", icon: Award, cta: "Explore the collection" },
      { title: "Commemorative plaques", text: "Plaques and boards for thanks and ceremonies", href: "/plaques", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg", icon: Gem, cta: "Explore the collection" }
    ],
    sectionLabel: "Our featured collections",
    sectionText: "Choose a piece, then we customize it with your logo, text and preferred finish.",
    craftEyebrow: "Full customization",
    craftTitle: "Your piece tells your story, not just your name.",
    craftText: "We turn your event or institution identity into tangible details: raised logo, precise engraving, colors, special shape and a presentation box when needed.",
    craftLink: "How does customization work?",
    stats: [
      { title: "Mockup before production", text: "Design approval before execution", icon: BadgeCheck },
      { title: "Premium finishes", text: "Gold, silver, bronze and black metal", icon: Gem },
      { title: "For every occasion", text: "Sport, business, schools and events", icon: Award }
    ],
    processEyebrow: "A simple, clear journey",
    processTitle: "From idea to the moment of recognition.",
    steps: [
      ["01", "Share your idea", "Send the logo, text, quantity and occasion via WhatsApp."],
      ["02", "We prepare the mockup", "We create a clear design before production starts."],
      ["03", "We produce and deliver", "We make the piece with the finish you chose and deliver it to you."]
    ] as Array<[string, string, string]>,
    finalEyebrow: "DYODZAMAK",
    finalTitle: "Ready to create an award that elevates the value of your success?",
    finalText: "Send the essential details and we will suggest the right model and finish.",
    finalCta: "Request a quote"
  }
} as const;

export default function HomeClient() {
  const { lang } = useLanguage();
  const current = copy[lang];
  const [activeIdx, setActiveIdx] = useState(0);
  const total = ALL_PRODUCTS.length;

  const goPrev = () => setActiveIdx((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIdx((prev) => (prev + 1) % total);

  // Show 5 items: center + 2 on each side
  const getOffset = (index: number) => {
    let diff = index - activeIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div dir={current.heroDir} className="awards-home">
      <section className="awards-hero">
        <video
          src="/images/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-[-2]"
        />
      </section>

      <section className="products-carousel-section">
        <div className="awards-container">
          <div className="carousel-header">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <span>{current.sectionLabel}</span>
              <h2>{lang === "fr" ? "Tous nos produits" : lang === "ar" ? "جميع منتجاتنا" : "All our products"}</h2>
            </div>
          </div>
        </div>

        <div className="coverflow-wrapper">
          <button className="coverflow-arrow coverflow-arrow--left" onClick={goPrev} aria-label="Précédent">
            <ChevronLeft size={28} />
          </button>

          <div className="coverflow-stage">
            {ALL_PRODUCTS.map((product, i) => {
              const offset = getOffset(i);
              if (offset < -2 || offset > 2) return null;

              let className = "coverflow-item";
              if (offset === 0) className += " coverflow-item--center";
              else if (offset === -1) className += " coverflow-item--left1";
              else if (offset === 1) className += " coverflow-item--right1";
              else if (offset === -2) className += " coverflow-item--left2";
              else if (offset === 2) className += " coverflow-item--right2";

              return (
                <div key={i} className={className} onClick={() => setActiveIdx(i)}>
                  <div className="coverflow-img-wrap">
                    <Image
                      src={product.image}
                      alt={product.label[lang]}
                      fill
                      sizes="(max-width: 768px) 260px, 420px"
                      className="coverflow-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button className="coverflow-arrow coverflow-arrow--right" onClick={goNext} aria-label="Suivant">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="coverflow-info">
          <h3 className="coverflow-title">{ALL_PRODUCTS[activeIdx].label[lang]}</h3>
          <p className="coverflow-desc">{current.sectionText}</p>
        </div>
      </section>


      <section className="craft-section">
        <div className="awards-container craft-grid">
          <FadeIn className="craft-copy">
            <span className="gold-kicker"><Palette size={15} /> {current.craftEyebrow}</span>
            <h2>{current.craftTitle}</h2>
            <p>{current.craftText}</p>
            <Link href="/personnalisation" className="outline-button">{current.craftLink} <ArrowLeft size={18} /></Link>
          </FadeIn>
          <ScaleIn className="craft-stats">
            {current.stats.map((item) => {
              const Icon = item.icon;
              return <div key={item.title}><Icon /><strong>{item.title}</strong><span>{item.text}</span></div>;
            })}
          </ScaleIn>
        </div>
      </section>

      <section className="awards-container process-section">
        <div className="section-heading centered"><span>{current.processEyebrow}</span><h2>{current.processTitle}</h2></div>
        <div className="process-grid">
          {current.steps.map(([number, title, text]) => <FadeIn key={number} className="process-item"><b>{number}</b><h3>{title}</h3><p>{text}</p></FadeIn>)}
        </div>
      </section>

      <section className="awards-container final-cta">
        <div><span className="gold-kicker"><Sparkles size={15} /> {current.finalEyebrow}</span><h2>{current.finalTitle}</h2><p>{current.finalText}</p></div>
        <Link href="/devis" className="gold-button">{current.finalCta} <ArrowLeft size={18} /></Link>
      </section>
    </div>
  );
}
