"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Award, BadgeCheck, Gem, Palette, Sparkles, Trophy } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/Motion";

const collections = [
  { title: "كؤوس رياضية", text: "كؤوس وميداليات للبطولات والدوريات", image: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg", href: "/trophees", icon: Trophy },
  { title: "جوائز الشركات", text: "قطع تقدير راقية تحمل هوية مؤسستك", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg", href: "/trophees-3d", icon: Award },
  { title: "دروع تذكارية", text: "دروع ولوحات للشكر والتكريم والمناسبات", image: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg", href: "/plaques", icon: Gem }
];

const slides = [
  { eyebrow: "تفاصيل تصنع الفرق", title: "جوائز استثنائية لأبطال مميزين.", text: "من الفكرة الأولى إلى القطعة النهائية، نصمم جوائز تليق بقيمة الإنجاز.", cta: "ابدأ تصميمك الآن", href: "/devis" },
  { eyebrow: "هوية تستحق أن تظهر", title: "حوّل شعارك إلى قطعة تترك انطباعاً.", text: "نصنع كؤوساً، ميداليات ودروعاً بتشطيبات معدنية تليق بعلامتك أو مناسبتك.", cta: "استكشف التخصيص", href: "/personnalisation" },
  { eyebrow: "للمناسبات الكبيرة", title: "كل تكريم يبدأ بقطعة لا تُنسى.", text: "تصاميم دقيقة للمدارس، الأندية، الشركات، الجمعيات والفعاليات في كل المغرب.", cta: "شاهد أعمالنا", href: "/realisations" }
];

const steps = [
  ["01", "شاركنا فكرتك", "أرسل الشعار، النص، الكمية والمناسبة عبر واتساب."],
  ["02", "نصمم المعاينة", "نجهز لك تصميماً واضحاً قبل بدء الإنتاج."],
  ["03", "نصنع ونُسلّم", "ننفذ القطعة بالتشطيب الذي اخترته ونوصلها إليك."]
];

export default function HomeClient() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const current = slides[slide];

  return (
    <div dir="rtl" className="awards-home">
      <section className="awards-hero">
        <Image src="/images/hero-awards.png" alt="تشكيلة جوائز DYODZAMAK المعدنية" fill priority sizes="100vw" className="awards-hero-image" />
        <div className="awards-hero-shade" />
        <div className="awards-container awards-hero-content">
          <div key={slide} className="hero-copy">
            <span className="gold-kicker"><Sparkles size={15} /> {current.eyebrow}</span>
            <h1>{current.title}</h1>
            <p>{current.text}</p>
            <Link href={current.href} className="gold-button">{current.cta} <ArrowLeft size={18} /></Link>
          </div>
          <div className="hero-dots" aria-label="عروض مميزة">
            {slides.map((item, index) => <button key={item.title} onClick={() => setSlide(index)} className={index === slide ? "active" : ""} aria-label={`العرض ${index + 1}`} />)}
          </div>
        </div>
      </section>

      <section className="awards-container collection-section">
        <div className="section-heading">
          <span>مجموعاتنا المميزة</span>
          <h2>نصمم كل جائزة لتعبّر عن دورها.</h2>
          <p>اختر نوع القطعة، ثم نخصصها بشعارك ونصك وتشطيبك المفضل.</p>
        </div>
        <div className="collection-grid">
          {collections.map((item, index) => {
            const Icon = item.icon;
            return <ScaleIn key={item.title} className="collection-card">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="collection-image" />
              <div className="collection-overlay" />
              <div className="collection-content"><Icon size={22} /><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>اكتشف المجموعة <ArrowLeft size={15} /></Link></div>
            </ScaleIn>;
          })}
        </div>
      </section>

      <section className="craft-section">
        <div className="awards-container craft-grid">
          <FadeIn className="craft-copy">
            <span className="gold-kicker"><Palette size={15} /> تخصيص كامل</span>
            <h2>قطعتك تحمل قصتك، وليس مجرد اسمك.</h2>
            <p>نحوّل هوية الحدث أو المؤسسة إلى تفاصيل ملموسة: شعار بارز، نقش دقيق، ألوان، شكل خاص وعلبة عرض عند الحاجة.</p>
            <Link href="/personnalisation" className="outline-button">كيف يتم التخصيص؟ <ArrowLeft size={18} /></Link>
          </FadeIn>
          <ScaleIn className="craft-stats">
            <div><BadgeCheck /><strong>معاينة قبل الإنتاج</strong><span>تأكيد التصميم قبل التنفيذ</span></div>
            <div><Gem /><strong>تشطيبات فاخرة</strong><span>ذهبي، فضي، برونزي وأسود</span></div>
            <div><Award /><strong>لكل مناسبة</strong><span>رياضة، شركات، مدارس وفعاليات</span></div>
          </ScaleIn>
        </div>
      </section>

      <section className="awards-container process-section">
        <div className="section-heading centered"><span>مسار بسيط وواضح</span><h2>من الفكرة إلى لحظة التكريم.</h2></div>
        <div className="process-grid">
          {steps.map(([number, title, text]) => <FadeIn key={number} className="process-item"><b>{number}</b><h3>{title}</h3><p>{text}</p></FadeIn>)}
        </div>
      </section>

      <section className="awards-container final-cta">
        <div><span className="gold-kicker"><Sparkles size={15} /> DYODZAMAK</span><h2>هل أنت مستعد لصناعة جائزة ترفع قيمة الإنجاز؟</h2><p>أرسل التفاصيل الأساسية، وسنقترح عليك النموذج والتشطيب المناسبين.</p></div>
        <Link href="/devis" className="gold-button">اطلب عرض السعر <ArrowLeft size={18} /></Link>
      </section>
    </div>
  );
}
