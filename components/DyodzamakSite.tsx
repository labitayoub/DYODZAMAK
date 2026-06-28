"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Crown,
  Gem,
  Instagram,
  Mail,
  MapPin,
  Medal,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  X
} from "lucide-react";
import { content, emailDisplay, Lang, phoneDisplay, whatsappNumber } from "@/data/content";

const iconMap = [Medal, Trophy, Crown, BadgeCheck, Gem, Sparkles];
const finishColors = ["#b8763f", "#d9ad58", "#c8c8c3", "#111111"];

const galleryImages = [
  "linear-gradient(145deg, #1a1511, #b8793f 45%, #f7e5b4)",
  "linear-gradient(145deg, #0b0b0d, #d4a64c 50%, #ffffff)",
  "linear-gradient(145deg, #151515, #2d2b27 45%, #ce9552)",
  "linear-gradient(145deg, #2a2017, #e8d9bd 45%, #b06a36)",
  "linear-gradient(145deg, #0d0d0e, #c5c2b8 45%, #d9aa54)",
  "linear-gradient(145deg, #15100d, #805335 45%, #fff0c8)"
];

export default function DyodzamakSite() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    details: "",
    message: ""
  });

  const t = content[lang];
  const isRtl = lang === "ar";
  const whatsappBase = `https://wa.me/${whatsappNumber}`;

  const navLinks = useMemo(
    () => [
      ["#home", t.nav[0]],
      ["#products", t.nav[1]],
      ["#personalization", t.nav[2]],
      ["#gallery", t.nav[3]],
      ["#quote", t.nav[4]],
      ["#contact", t.nav[5]]
    ],
    [t.nav]
  );

  function setField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const labels = content[lang].form;
    const message = [
      "DYODZAMAK - Demande de devis",
      `${labels.name}: ${form.name}`,
      `${labels.phone}: ${form.phone}`,
      `${labels.product}: ${form.product}`,
      `${labels.quantity}: ${form.quantity}`,
      `${labels.details}: ${form.details}`,
      `${labels.message}: ${form.message}`,
      t.price
    ].join("\n");

    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="site" dir={isRtl ? "rtl" : "ltr"} lang={lang}>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="DYODZAMAK">
          <span className="brandMark">D</span>
          <span>DYODZAMAK</span>
        </a>
        <nav className={menuOpen ? "navLinks open" : "navLinks"} aria-label="Navigation principale">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="navActions">
          <button className="languageSwitch" type="button" onClick={() => setLang(isRtl ? "fr" : "ar")}>
            {t.language}
          </button>
          <a className="whatsappSmall" href={whatsappBase} target="_blank" rel="noreferrer" aria-label={t.whatsapp}>
            <MessageCircle size={18} />
          </a>
          <button className="menuButton" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero section">
        <Image src="/images/hero-awards.png" alt="" fill priority className="heroImage" />
        <div className="heroOverlay" />
        <div className="container heroInner">
          <div className="heroCopy reveal">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p className="heroSubtitle">{t.hero.subtitle}</p>
            <p className="heroNote">{t.hero.note}</p>
            <div className="ctaRow">
              <a className="button primary" href="#quote">
                <Send size={18} />
                {t.quote}
              </a>
              <a className="button ghost" href={whatsappBase} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                {t.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container split">
          <div className="sectionIntro reveal">
            <span className="eyebrow">{t.about.label}</span>
            <h2>{t.about.title}</h2>
          </div>
          <div className="aboutText reveal">
            <p>{t.about.body}</p>
            <div className="highlightGrid">
              {t.about.highlights.map((item) => (
                <div className="highlight" key={item}>
                  <ShieldCheck size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="container">
          <div className="sectionIntro centered reveal">
            <span className="eyebrow">{t.price}</span>
            <h2>{t.categoriesTitle}</h2>
            <p>{t.categoriesSubtitle}</p>
          </div>
          <div className="productGrid">
            {t.categories.map(([title, description], index) => {
              const Icon = iconMap[index];
              return (
                <article className="productCard reveal" key={title}>
                  <div className="productIcon">
                    <Icon size={26} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="priceBadge">{t.price}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section personalization" id="personalization">
        <div className="container split">
          <div className="sectionIntro reveal">
            <span className="eyebrow">DYODZAMAK</span>
            <h2>{t.personalization.title}</h2>
            <p>{t.personalization.subtitle}</p>
            <div className="finishRow" aria-hidden="true">
              {finishColors.map((color) => (
                <span key={color} style={{ background: color }} />
              ))}
            </div>
          </div>
          <div className="personalizationGrid reveal">
            {t.personalization.items.map((item) => (
              <div className="personalizationItem" key={item}>
                <ChevronRight size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="sectionIntro centered reveal">
            <span className="eyebrow">Portfolio</span>
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.subtitle}</p>
          </div>
          <div className="galleryGrid">
            {t.gallery.items.map((item, index) => (
              <article className="galleryCard reveal" key={item}>
                <div className="galleryImage" style={{ background: galleryImages[index] }}>
                  <Trophy size={index % 2 ? 58 : 48} />
                </div>
                <div>
                  <h3>{item}</h3>
                  <span>{t.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="sectionIntro centered reveal">
            <span className="eyebrow">Process</span>
            <h2>{t.process.title}</h2>
          </div>
          <div className="steps">
            {t.process.steps.map((step, index) => (
              <div className="step reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section quoteSection" id="quote">
        <div className="container quoteWrap">
          <div className="sectionIntro reveal">
            <span className="eyebrow">MAD · {t.price}</span>
            <h2>{t.form.title}</h2>
            <p>{t.form.subtitle}</p>
          </div>
          <form className="quoteForm reveal" onSubmit={handleSubmit}>
            <input required placeholder={t.form.name} value={form.name} onChange={(e) => setField("name", e.target.value)} />
            <input required placeholder={t.form.phone} value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
            <select required value={form.product} onChange={(e) => setField("product", e.target.value)}>
              <option value="">{t.form.product}</option>
              {t.categories.map(([title]) => (
                <option value={title} key={title}>
                  {title}
                </option>
              ))}
            </select>
            <input required type="number" min="1" placeholder={t.form.quantity} value={form.quantity} onChange={(e) => setField("quantity", e.target.value)} />
            <textarea required placeholder={t.form.placeholderDetails} value={form.details} onChange={(e) => setField("details", e.target.value)} />
            <textarea placeholder={t.form.placeholderMessage} value={form.message} onChange={(e) => setField("message", e.target.value)} />
            <button className="button primary" type="submit">
              <MessageCircle size={18} />
              {t.form.button}
            </button>
          </form>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contactGrid">
          <div className="sectionIntro reveal">
            <span className="eyebrow">DYODZAMAK</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>
          <div className="contactCards reveal">
            <a href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`}><Phone /> {phoneDisplay}</a>
            <a href={`mailto:${emailDisplay}`}><Mail /> {emailDisplay}</a>
            <span><MapPin /> {t.contact.city}</span>
            <span><Instagram /> {t.contact.socials}</span>
            <span><Building2 /> DYODZAMAK</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <strong>DYODZAMAK</strong>
          <p>{t.footer}</p>
        </div>
      </footer>

      <a className="stickyWhatsapp" href={whatsappBase} target="_blank" rel="noreferrer" aria-label={t.whatsapp}>
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
