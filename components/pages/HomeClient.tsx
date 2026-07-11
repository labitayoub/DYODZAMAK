"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Award, BadgeCheck, Gem, Palette, Sparkles, Trophy } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/Motion";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  fr: {
    heroDir: "ltr",
    slides: [
      { eyebrow: "Des details qui font la difference", title: "Des recompenses exceptionnelles pour des champions uniques.", text: "De la premiere idee a la piece finale, nous concevons des recompenses a la hauteur de l'exploit.", cta: "Commencer votre design", href: "/devis" },
      { eyebrow: "Une identite qui merite d'apparaitre", title: "Transformez votre logo en une piece qui laisse une impression.", text: "Nous fabriquons des coupes, medailles et plaques avec des finitions metalliques adaptees a votre marque ou votre evenement.", cta: "Explorer la personnalisation", href: "/personnalisation" },
      { eyebrow: "Pour les grands moments", title: "Chaque hommage commence par une piece inoubliable.", text: "Des creations precises pour les ecoles, clubs, entreprises, associations et evenements dans tout le Maroc.", cta: "Voir nos realisations", href: "/realisations" }
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
  const [slide, setSlide] = useState(0);
  const current = copy[lang];

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((currentSlide) => (currentSlide + 1) % current.slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [current.slides.length]);

  const activeSlide = current.slides[slide];

  return (
    <div dir={current.heroDir} className="awards-home">
      <section className="awards-hero">
        <Image src="/images/hero-awards.png" alt="DYODZAMAK metal awards collection" fill priority sizes="100vw" className="awards-hero-image" />
        <div className="awards-hero-shade" />
        <div className="awards-container awards-hero-content">
          <div key={slide} className="hero-copy">
            <span className="gold-kicker"><Sparkles size={15} /> {activeSlide.eyebrow}</span>
            <h1>{activeSlide.title}</h1>
            <p>{activeSlide.text}</p>
            <Link href={activeSlide.href} className="gold-button">{activeSlide.cta} <ArrowLeft size={18} /></Link>
          </div>
          <div className="hero-dots" aria-label="featured slides">
            {current.slides.map((item, index) => <button key={item.title} onClick={() => setSlide(index)} className={index === slide ? "active" : ""} aria-label={`Slide ${index + 1}`} />)}
          </div>
        </div>
      </section>

      <section className="awards-container collection-section">
        <div className="section-heading">
          <span>{current.sectionLabel}</span>
          <h2>{lang === "fr" ? "Nous concevons chaque récompense pour refléter son rôle." : lang === "ar" ? "نصمم كل جائزة لتعبّر عن دورها." : "We design every award to reflect its purpose."}</h2>
          <p>{current.sectionText}</p>
        </div>
        <div className="collection-grid">
          {current.collections.map((item, index) => {
            const Icon = item.icon;
            return <ScaleIn key={item.title} className="collection-card">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="collection-image" />
              <div className="collection-overlay" />
              <div className="collection-content"><Icon size={22} /><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>{item.cta} <ArrowLeft size={15} /></Link></div>
            </ScaleIn>;
          })}
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
