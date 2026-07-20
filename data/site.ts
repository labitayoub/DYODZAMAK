export type Lang = "fr" | "ar" | "en";
export type CategorySlug = "medailles" | "trophees" | "pins" | "badges" | "porte-cles" | "macarons" | "boutons" | "boucles" | "t-shirt" | "resine";
export type Finish = "bronze" | "gold" | "silver" | "black";
export type Usage = "sport" | "corporate" | "event" | "school" | "association";

export const whatsappNumber = "212XXXXXXXXX";
export const phoneDisplay = "+212 XX XX XX XX XX";
export const emailDisplay = "contact@bestboutons.ma";

const img = {
  medal: "/images/WhatsApp Image 2026-06-03 at 13.38.31.jpeg",
  plaqueBox: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg",
  plaque: "/images/WhatsApp Image 2026-06-03 at 13.39.10 (2).jpeg",
  trophy: "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg",
  trophy2: "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg",
  pinCancer: "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg",
  pinMap: "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
  pinBadge: "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",
  keyCar: "/images/WhatsApp Image 2026-06-03 at 13.39.12.jpeg",
  keyMetal: "/images/WhatsApp Image 2026-06-03 at 13.39.12 (1).jpeg",
  keyBrand: "/images/WhatsApp Image 2026-06-03 at 13.39.12 (2).jpeg"
};

export const categoryRoutes: CategorySlug[] = ["medailles", "trophees", "pins", "badges", "porte-cles", "macarons", "boutons", "boucles", "t-shirt", "resine"];

export const navItems = [
  { href: "/medailles", key: "medals" },
  { href: "/trophees", key: "trophies" },
  { href: "/pins", key: "pins" },
  { href: "/badges", key: "badges" },
  { href: "/porte-cles", key: "keychains" },
  { href: "/macarons", key: "macarons" },
  { href: "/boutons", key: "boutons" },
  { href: "/boucles", key: "boucles" },
  { href: "/t-shirt", key: "tshirt" },
  { href: "/resine", key: "resine" },
  { href: "/devis", key: "quote" }
] as const;

export const ui = {
  fr: {
    announcement: "Livraison partout au Maroc | Produits personnalises | Devis rapide sur WhatsApp",
    nav: {
      home: "Accueil",
      catalog: "Catalogue",
      products: "Produits",
      medals: "Medailles",
      trophies: "Trophees",
      pins: "Pins",
      badges: "Badges",
      keychains: "Porte-cles",
      macarons: "Macarons",
      boutons: "Boutons",
      boucles: "Boucles",
      tshirt: "T-shirt",
      resine: "Resine",
      quote: "Demande de devis",
      about: "A propos",
      contact: "Contact",
      customization: "Personnalisation"
    },
    search: "Rechercher medaille, trophee, plaque, pins, porte-cles...",
    language: "AR",
    price: "Prix sur devis",
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
    quickView: "Voir details",
    sameModel: "Demander le meme modele",
    filters: "Filtres",
    sort: "Trier",
    results: "resultats",
    all: "Tous",
    custom: "Personnalisable",
    classic: "Classique",
    model3d: "3D",
    finishes: {
      bronze: "Bronze",
      gold: "Dore",
      silver: "Argente",
      black: "Metal noir"
    },
    usages: {
      sport: "Sport",
      corporate: "Entreprise",
      event: "Evenement",
      school: "Ecole",
      association: "Association"
    },
    home: {
      title: "Best Boutons",
      subtitle: "Catalogue premium de medailles, trophees, plaques, pins et porte-cles personnalises",
      intro: "Des produits metalliques sur mesure pour entreprises, clubs, ecoles, associations et evenements au Maroc.",
      bannerTitle: "Produits personnalises, finitions premium, prix sur devis",
      bannerText: "Choisissez un modele, envoyez votre logo et recevez un devis rapide sur WhatsApp.",
      featured: "Categories populaires",
      best: "Meilleures demandes",
      new: "Nouveaux modeles",
      premium: "Pieces premium",
      medals: "Selection medailles",
      pins: "Pins, badges et porte-cles",
      how: "Comment commander",
      trust: "Pourquoi les clients demandent un devis",
      finalTitle: "Votre modele peut etre prepare aujourd'hui"
    },
    trust: ["Maquette avant production", "Finitions bronze, doree, argentee et noir metal", "Livraison partout au Maroc", "Commande via WhatsApp"],
    steps: ["Choisir un produit", "Envoyer logo, texte et quantite", "Recevoir le devis", "Valider la maquette", "Production et livraison"],
    pages: {
      catalog: ["Catalogue Best Boutons", "Parcourez les modeles avec une presentation plus claire, des filtres utiles et un acces rapide au devis."],
      customization: ["Personnalisation", "Logos, textes, dates, formes, quantites et finitions: chaque piece est preparee selon votre besoin reel."],
      quote: ["Demande de devis", "Renseignez les details essentiels pour recevoir une reponse plus rapide et mieux cadree."],
      about: ["A propos de Best Boutons", "Un atelier specialise dans les recompenses, plaques et creations metalliques personnalisees au Maroc."],
      contact: ["Contact", "WhatsApp reste le canal le plus rapide pour demander un prix, envoyer un logo ou suivre un projet."]
    },
    form: {
      name: "Nom complet",
      phone: "Telephone",
      city: "Ville",
      product: "Type de produit",
      quantity: "Quantite",
      finish: "Finition",
      engraving: "Texte a graver",
      upload: "Logo ou maquette (placeholder)",
      message: "Message",
      button: "Envoyer sur WhatsApp"
    },
    footer: "Catalogue marocain de medailles, trophees, plaques, pins, badges, porte-cles et creations metalliques personnalisees."
  },
  ar: {
    announcement: "التوصيل في جميع أنحاء المغرب | منتجات مخصصة | عرض سعر سريع عبر واتساب",
    nav: {
      home: "الرئيسية",
      catalog: "الكتالوج",
      products: "المنتجات",
      medals: "ميداليات",
      trophies: "كؤوس",
      pins: "دبابيس",
      badges: "شارات",
      keychains: "حاملات مفاتيح",
      macarons: "ماكرون",
      boutons: "أزرار",
      boucles: "أبازيم",
      tshirt: "تيشيرت",
      resine: "ريزن",
      quote: "طلب عرض سعر",
      about: "من نحن",
      contact: "اتصال",
      customization: "التخصيص"
    },
    search: "ابحث عن ميدالية، كأس، لوحة، شارة، حامل مفاتيح...",
    language: "FR",
    price: "السعر حسب الطلب",
    quote: "طلب عرض سعر",
    whatsapp: "واتساب",
    quickView: "عرض التفاصيل",
    sameModel: "طلب نفس النموذج",
    filters: "الفلاتر",
    sort: "الترتيب",
    results: "نتيجة",
    all: "الكل",
    custom: "قابل للتخصيص",
    classic: "كلاسيكي",
    model3d: "ثلاثي الأبعاد",
    finishes: {
      bronze: "برونزي",
      gold: "ذهبي",
      silver: "فضي",
      black: "معدن أسود"
    },
    usages: {
      sport: "رياضة",
      corporate: "شركات",
      event: "مناسبات",
      school: "مدارس",
      association: "جمعيات"
    },
    home: {
      title: "Best Boutons",
      subtitle: "كتالوج راق للميداليات والكؤوس واللوحات والدبابيس وحاملات المفاتيح المخصصة",
      intro: "منتجات معدنية حسب الطلب للشركات والنوادي والمدارس والجمعيات والمناسبات في المغرب.",
      bannerTitle: "منتجات مخصصة، تشطيبات راقية، السعر حسب الطلب",
      bannerText: "اختر النموذج، أرسل الشعار واحصل على عرض سعر سريع عبر واتساب.",
      featured: "الفئات الأكثر طلبا",
      best: "أكثر الطلبات",
      new: "نماذج جديدة",
      premium: "قطع راقية",
      medals: "مختارات الميداليات",
      pins: "دبابيس وشارات وحاملات مفاتيح",
      how: "طريقة الطلب",
      trust: "لماذا يطلب العملاء عرض السعر",
      finalTitle: "يمكن تحضير نموذجك اليوم"
    },
    trust: ["تصميم قبل الإنتاج", "تشطيبات برونزية وذهبية وفضية وسوداء", "التوصيل في المغرب", "الطلب عبر واتساب"],
    steps: ["اختيار المنتج", "إرسال الشعار والنص والكمية", "استلام عرض السعر", "تأكيد التصميم", "الإنتاج والتوصيل"],
    pages: {
      catalog: ["كتالوج Best Boutons", "تصفح النماذج بتجربة واضحة: فلاتر، تشطيبات، استعمالات وطلب سريع."],
      customization: ["التخصيص", "الشعارات، النصوص، التواريخ، الأشكال، الكميات والتشطيبات حسب حاجتك."],
      quote: ["طلب عرض سعر", "املأ التفاصيل الأساسية وأرسل طلبا جاهزا عبر واتساب."],
      about: ["من نحن", "كتالوج متخصص في الجوائز والمنتجات المعدنية المخصصة في المغرب."],
      contact: ["اتصل بنا", "واتساب هو الأسرع لطلب السعر أو التصميم أو متابعة الطلب."]
    },
    form: {
      name: "الاسم الكامل",
      phone: "الهاتف",
      city: "المدينة",
      product: "نوع المنتج",
      quantity: "الكمية",
      finish: "التشطيب",
      engraving: "النص المراد نقشه",
      upload: "الشعار أو التصميم (مكان مخصص)",
      message: "رسالة",
      button: "إرسال عبر واتساب"
    },
    footer: "كتالوج مغربي للميداليات والكؤوس واللوحات والدبابيس والشارات وحاملات المفاتيح والمنتجات المعدنية المخصصة."
  },
  en: {
    announcement: "Delivery across Morocco | Custom products | Fast quote on WhatsApp",
    nav: {
      home: "Home",
      catalog: "Catalog",
      products: "Products",
      medals: "Medals",
      trophies: "Trophies",
      pins: "Pins",
      badges: "Badges",
      keychains: "Keychains",
      macarons: "Car badges",
      boutons: "Buttons",
      boucles: "Buckles",
      tshirt: "T-shirt",
      resine: "Resin",
      quote: "Quote request",
      about: "About",
      contact: "Contact",
      customization: "Customization"
    },
    search: "Search for medals, trophies, plaques, pins, keychains...",
    language: "EN",
    price: "Quote-based pricing",
    quote: "Request a quote",
    whatsapp: "WhatsApp",
    quickView: "View details",
    sameModel: "Request the same model",
    filters: "Filters",
    sort: "Sort",
    results: "results",
    all: "All",
    custom: "Customizable",
    classic: "Classic",
    model3d: "3D",
    finishes: {
      bronze: "Bronze",
      gold: "Gold",
      silver: "Silver",
      black: "Black metal"
    },
    usages: {
      sport: "Sport",
      corporate: "Corporate",
      event: "Event",
      school: "School",
      association: "Association"
    },
    home: {
      title: "Best Boutons",
      subtitle: "Premium catalog of custom medals, trophies, plaques, pins and keychains",
      intro: "Tailor-made metal products for companies, clubs, schools, associations and events in Morocco.",
      bannerTitle: "Custom products, premium finishes, quote-based pricing",
      bannerText: "Choose a model, send your logo and get a quick quote on WhatsApp.",
      featured: "Popular categories",
      best: "Top requests",
      new: "New models",
      premium: "Premium pieces",
      medals: "Medal selection",
      pins: "Pins, badges and keychains",
      how: "How to order",
      trust: "Why clients request a quote",
      finalTitle: "Your model can be prepared today"
    },
    trust: ["Mockup before production", "Bronze, gold, silver and black metal finishes", "Delivery across Morocco", "Order via WhatsApp"],
    steps: ["Choose a product", "Send logo, text and quantity", "Receive the quote", "Approve the mockup", "Production and delivery"],
    pages: {
      catalog: ["Best Boutons Catalog", "Browse the models with clearer presentation, useful filters and fast access to quoting."],
      customization: ["Customization", "Logos, text, dates, shapes, quantities and finishes: every piece is prepared for your real needs."],
      quote: ["Quote request", "Enter the essential details to receive a faster and better-scoped response."],
      about: ["About Best Boutons", "A workshop specialized in awards, plaques and customized metal creations in Morocco."],
      contact: ["Contact", "WhatsApp remains the fastest channel to request a price, send a logo or follow a project."]
    },
    form: {
      name: "Full name",
      phone: "Phone",
      city: "City",
      product: "Product type",
      quantity: "Quantity",
      finish: "Finish",
      engraving: "Engraving text",
      upload: "Logo or mockup (placeholder)",
      message: "Message",
      button: "Send on WhatsApp"
    },
    footer: "Moroccan catalog of custom medals, trophies, plaques, pins, badges, keychains and metal creations."
  }
} as const;

export const categories: Record<
  CategorySlug,
  {
    slug: CategorySlug;
    href: string;
    icon: string;
    image: string;
    fr: { title: string; summary: string; subcategories: string[]; useCases: string[] };
    ar: { title: string; summary: string; subcategories: string[]; useCases: string[] };
    en: { title: string; summary: string; subcategories: string[]; useCases: string[] };
  }
> = {
  medailles: {
    slug: "medailles",
    href: "/medailles",
    icon: "medal",
    image: img.medal,
    fr: {
      title: "Medailles personnalisees",
      summary: "Medailles sportives, institutionnelles et evenementielles avec ruban, gravure et finition au choix.",
      subcategories: ["Sport", "Institution", "Evenement", "Premium"],
      useCases: ["Courses", "Tournois", "Graduations", "Ceremonies"]
    },
    ar: {
      title: "ميداليات مخصصة",
      summary: "ميداليات رياضية ومؤسساتية ومناسباتية مع شريط ونقش وتشطيب حسب الطلب.",
      subcategories: ["رياضة", "مؤسسة", "مناسبة", "راقي"],
      useCases: ["سباقات", "بطولات", "تخرج", "حفلات"]
    },
    en: {
      title: "Custom medals",
      summary: "Sports, institutional and event medals with ribbon, engraving and a finish of your choice.",
      subcategories: ["Sport", "Institution", "Event", "Premium"],
      useCases: ["Races", "Tournaments", "Graduations", "Ceremonies"]
    }
  },
  trophees: {
    slug: "trophees",
    href: "/trophees",
    icon: "trophy",
    image: img.trophy,
    fr: {
      title: "Trophees metalliques sur mesure",
      summary: "Trophees metalliques personnalises pour remises de prix, competitions, entreprises et institutions.",
      subcategories: ["Classique", "Entreprise", "Sport", "Premium"],
      useCases: ["Remises de prix", "Competitions", "Challenges", "Reconnaissance"]
    },
    ar: {
      title: "كؤوس كلاسيكية",
      summary: "كؤوس لحفلات الجوائز والمسابقات الرياضية والشركات والمؤسسات.",
      subcategories: ["كلاسيكي", "شركات", "رياضة", "خشب ومعدن"],
      useCases: ["جوائز", "مسابقات", "تحديات", "تكريم"]
    },
    en: {
      title: "Custom metal trophies",
      summary: "Personalized metal trophies for award ceremonies, competitions, businesses and institutions.",
      subcategories: ["Classic", "Corporate", "Sport", "Premium"],
      useCases: ["Award ceremonies", "Competitions", "Challenges", "Recognition"]
    }
  },
  pins: {
    slug: "pins",
    href: "/pins",
    icon: "pin",
    image: img.pinCancer,
    fr: {
      title: "Pins metalliques personnalises",
      summary: "Pins metalliques et badges personnalises pour marques, associations, administrations et evenements.",
      subcategories: ["Pins", "Logo metal", "Evenement", "Collection"],
      useCases: ["Marque", "Association", "Uniforme", "Salon"]
    },
    ar: {
      title: "دبابيس معدنية مخصصة",
      summary: "دبابيس وشارات معدنية وشعارات قابلة للتخصيص.",
      subcategories: ["دبابيس", "شعار معدني", "مناسبة", "مجموعة"],
      useCases: ["هوية", "جمعية", "زي رسمي", "معرض"]
    },
    en: {
      title: "Custom metal pins",
      summary: "Custom metal pins and badges for brands, associations, organizations and events.",
      subcategories: ["Pins", "Metal logo", "Event", "Collection"],
      useCases: ["Brand", "Association", "Uniform", "Trade fair"]
    }
  },
  badges: {
    slug: "badges",
    href: "/badges",
    icon: "badge",
    image: img.pinMap,
    fr: {
      title: "Badges personnalises",
      summary: "Badges metalliques sur mesure pour evenements, administrations et associations.",
      subcategories: ["Badges", "Logo", "Evenement", "Administration"],
      useCases: ["Identification", "Evenement", "Uniforme", "Acces"]
    },
    ar: {
      title: "شارات مخصصة",
      summary: "شارات معدنية حسب الطلب للمناسبات والإدارات والجمعيات.",
      subcategories: ["شارات", "شعار", "مناسبة", "إدارة"],
      useCases: ["تعريف", "مناسبة", "زي رسمي", "دخول"]
    },
    en: {
      title: "Custom badges",
      summary: "Tailor-made metal badges for events, administrations and associations.",
      subcategories: ["Badges", "Logo", "Event", "Administration"],
      useCases: ["Identification", "Event", "Uniform", "Access"]
    }
  },
  macarons: {
    slug: "macarons",
    href: "/macarons",
    icon: "circle",
    image: img.keyMetal,
    fr: {
      title: "Macarons de voiture personnalises",
      summary: "Macarons publicitaires et personnalises pour vehicules, entreprises et evenements.",
      subcategories: ["Voiture", "Publicite", "Evenement", "Collection"],
      useCases: ["Flotte", "Promotion", "Salon", "Club"]
    },
    ar: {
      title: "ماكرون سيارات مخصص",
      summary: "ماكرون إعلاني ومخصص للمركبات والشركات والمناسبات.",
      subcategories: ["سيارة", "إعلان", "مناسبة", "مجموعة"],
      useCases: ["أسطول", "ترويج", "معرض", "نادي"]
    },
    en: {
      title: "Custom car badges",
      summary: "Custom and promotional car badges for vehicles, businesses and events.",
      subcategories: ["Car", "Advertising", "Event", "Collection"],
      useCases: ["Fleet", "Promotion", "Trade fair", "Club"]
    }
  },
  boutons: {
    slug: "boutons",
    href: "/boutons",
    icon: "circle",
    image: img.pinBadge,
    fr: {
      title: "Boutons metalliques personnalises",
      summary: "Boutons metalliques sur mesure pour vetements, uniformes et accessoires.",
      subcategories: ["Mode", "Uniforme", "Evenement", "Accessoire"],
      useCases: ["Pret-a-porter", "Tenue pro", "Collection", "Marque"]
    },
    ar: {
      title: "أزرار معدنية مخصصة",
      summary: "أزرار معدنية حسب الطلب للملابس والزي الرسمي والإكسسوارات.",
      subcategories: ["موضة", "زي رسمي", "مناسبة", "إكسسوار"],
      useCases: ["ملابس جاهزة", "لباس مهني", "مجموعة", "علامة"]
    },
    en: {
      title: "Custom metal buttons",
      summary: "Custom metal buttons for clothing, uniforms and accessories.",
      subcategories: ["Fashion", "Uniform", "Event", "Accessory"],
      useCases: ["Ready-to-wear", "Workwear", "Collection", "Brand"]
    }
  },
  boucles: {
    slug: "boucles",
    href: "/boucles",
    icon: "circle",
    image: img.keyBrand,
    fr: {
      title: "Boucles de ceinture personnalisees",
      summary: "Boucles metalliques personnalisees pour ceintures, accessoires mode et vetements.",
      subcategories: ["Ceinture", "Mode", "Evenement", "Accessoire"],
      useCases: ["Pret-a-porter", "Tenue pro", "Uniforme", "Marque"]
    },
    ar: {
      title: "أبازيم أحزمة مخصصة",
      summary: "أبازيم معدنية مخصصة للأحزمة وإكسسوارات الموضة والملابس.",
      subcategories: ["حزام", "موضة", "مناسبة", "إكسسوار"],
      useCases: ["ملابس جاهزة", "لباس مهني", "زي رسمي", "علامة"]
    },
    en: {
      title: "Custom belt buckles",
      summary: "Custom metal buckles for belts, fashion accessories and clothing.",
      subcategories: ["Belt", "Fashion", "Event", "Accessory"],
      useCases: ["Ready-to-wear", "Workwear", "Uniform", "Brand"]
    }
  },
  "t-shirt": {
    slug: "t-shirt",
    href: "/t-shirt",
    icon: "circle",
    image: img.plaque,
    fr: {
      title: "T-shirts personnalises",
      summary: "T-shirts sur mesure avec impression logo, texte et motifs pour entreprises et evenements.",
      subcategories: ["Impression", "Logo", "Evenement", "Sport"],
      useCases: ["Equipe", "Promotion", "Evenement", "Uniforme"]
    },
    ar: {
      title: "تيشيرتات مخصصة",
      summary: "تيشيرتات حسب الطلب مع طباعة الشعار والنص والتصاميم للشركات والمناسبات.",
      subcategories: ["طباعة", "شعار", "مناسبة", "رياضة"],
      useCases: ["فريق", "ترويج", "مناسبة", "زي رسمي"]
    },
    en: {
      title: "Custom T-shirts",
      summary: "Custom T-shirts with logo, text and design printing for businesses and events.",
      subcategories: ["Printing", "Logo", "Event", "Sports"],
      useCases: ["Team", "Promotion", "Event", "Uniform"]
    }
  },
  resine: {
    slug: "resine",
    href: "/resine",
    icon: "circle",
    image: img.plaqueBox,
    fr: {
      title: "Creations en resine personnalisees",
      summary: "Objets en resine sur mesure avec inclusion de logos et motifs pour cadeaux et distinctions.",
      subcategories: ["Resine", "Logo 3D", "Cadeau", "Distinction"],
      useCases: ["Souvenir", "Cadeau pro", "Evenement", "Deco"]
    },
    ar: {
      title: "إبداعات ريزن مخصصة",
      summary: "قطع ريزن حسب الطلب مع إدراج الشعارات والتصاميم للهدايا والتكريم.",
      subcategories: ["ريزن", "شعار 3D", "هدية", "تكريم"],
      useCases: ["تذكار", "هدية مهنية", "مناسبة", "ديكور"]
    },
    en: {
      title: "Custom resin creations",
      summary: "Custom resin items with embedded logos and designs for gifts and awards.",
      subcategories: ["Resin", "3D logo", "Gift", "Award"],
      useCases: ["Souvenir", "Corporate gift", "Event", "Decor"]
    }
  },
  "porte-cles": {
    slug: "porte-cles",
    href: "/porte-cles",
    icon: "key",
    image: img.keyCar,
    fr: {
      title: "Porte-cles metalliques personnalises",
      summary: "Porte-cles metalliques personnalises pour entreprises, marques, clubs et evenements promotionnels.",
      subcategories: ["Logo metal", "Automobile", "Souvenir", "Corporate"],
      useCases: ["Cadeaux clients", "Concessions", "Clubs", "Evenements"]
    },
    ar: {
      title: "حاملات مفاتيح مخصصة",
      summary: "حاملات مفاتيح معدنية وشعارات مخصصة وأشكال خاصة للشركات والنوادي والمناسبات.",
      subcategories: ["شعار معدني", "سيارات", "تذكار", "شركات"],
      useCases: ["هدايا العملاء", "وكالات السيارات", "نوادي", "مناسبات"]
    },
    en: {
      title: "Custom metal keychains",
      summary: "Custom metal keychains for companies, brands, clubs and promotional events.",
      subcategories: ["Metal logo", "Automotive", "Souvenir", "Corporate"],
      useCases: ["Client gifts", "Dealerships", "Clubs", "Events"]
    }
  }
};

export type Product = {
  id: string;
  category: CategorySlug;
  badge: string;
  image: string;
  finishes: Finish[];
  usage: Usage[];
  customizable: boolean;
  is3d: boolean;
  featured?: boolean;
  newest?: boolean;
  premium?: boolean;
  fr: { name: string; specs: string[]; description: string };
  ar: { name: string; specs: string[]; description: string };
  en: { name: string; specs: string[]; description: string };
};

export const products: Product[] = [
  {
    id: "medal-rabat-2025",
    category: "medailles",
    badge: "Institution",
    image: img.medal,
    finishes: ["gold", "silver", "bronze"],
    usage: ["corporate", "event", "association"],
    customizable: true,
    is3d: false,
    featured: true,
    premium: true,
    fr: { name: "Medaille institutionnelle Rabat 2025", specs: ["Logo et texte", "Finition doree", "Support presentoir"], description: "Medaille ceremonielle premium pour institutions, federations et evenements officiels." },
    ar: { name: "ميدالية مؤسساتية الرباط 2025", specs: ["شعار ونص", "تشطيب ذهبي", "حامل عرض"], description: "ميدالية راقية للمؤسسات والاتحادات والمناسبات الرسمية." }
    ,en: { name: "Rabat 2025 institutional medal", specs: ["Logo and text", "Gold finish", "Display stand"], description: "Premium ceremonial medal for institutions, federations and official events." }
  },
  {
    id: "medal-heritage-box",
    category: "medailles",
    badge: "Premium",
    image: img.plaqueBox,
    finishes: ["bronze", "gold", "black"],
    usage: ["corporate", "association", "event"],
    customizable: true,
    is3d: false,
    premium: true,
    fr: { name: "Medaille Heritage avec coffret", specs: ["Relief logo", "Coffret premium", "Finition antique"], description: "Rendu prestigieux pour associations, federations et remises de prix." },
    ar: { name: "ميدالية Heritage مع علبة", specs: ["شعار بارز", "علبة راقية", "تشطيب عتيق"], description: "لمسة راقية للجمعيات والاتحادات وحفلات الجوائز." }
    ,en: { name: "Heritage medal with box", specs: ["Raised logo", "Premium box", "Antique finish"], description: "A prestigious result for associations, federations and award ceremonies." }
  },
  {
    id: "trophy-corporate",
    category: "trophees",
    badge: "Entreprise",
    image: img.trophy,
    finishes: ["gold", "black", "silver"],
    usage: ["corporate", "event"],
    customizable: true,
    is3d: false,
    featured: true,
    fr: { name: "Trophee corporate metal et socle", specs: ["Plaque gravee", "Socle stable", "Hauteur au choix"], description: "Trophee metallique professionnel pour remises de prix, challenges internes et partenaires." },
    ar: { name: "كأس شركات معدن وقاعدة", specs: ["لوحة منقوشة", "قاعدة ثابتة", "ارتفاع حسب الطلب"], description: "كأس أنيق للجوائز والتحديات الداخلية والشركاء." }
    ,en: { name: "Corporate metal trophy with base", specs: ["Engraved plate", "Stable base", "Custom height"], description: "Professional metal trophy for awards, internal challenges and partners." }
  },
  {
    id: "trophy-sport-cup",
    category: "trophees",
    badge: "Sport",
    image: img.trophy2,
    finishes: ["gold", "silver"],
    usage: ["sport", "association", "school"],
    customizable: true,
    is3d: false,
    fr: { name: "Coupe sportive classique", specs: ["Coupe metal", "Socle noir", "Etiquette gravee"], description: "Reference fiable pour clubs, championnats, tournois et ceremonies sportives." },
    ar: { name: "كأس رياضي كلاسيكي", specs: ["كأس معدني", "قاعدة سوداء", "بطاقة منقوشة"], description: "اختيار عملي للأندية والبطولات والدوريات." }
    ,en: { name: "Classic sports cup", specs: ["Metal cup", "Black base", "Engraved label"], description: "A reliable choice for clubs, championships, tournaments and sports ceremonies." }
  },
  {
    id: "3d-logo-award",
    category: "trophees",
    badge: "Sur mesure",
    image: img.plaque,
    finishes: ["gold", "black", "bronze"],
    usage: ["corporate", "event"],
    customizable: true,
    is3d: true,
    newest: true,
    premium: true,
    fr: { name: "Trophee logo 3D signature", specs: ["Logo en volume", "Forme speciale", "Maquette avant production"], description: "Piece distinctive pour marques, galas et lancements de projets." },
    ar: { name: "كأس شعار 3D", specs: ["شعار بارز", "شكل خاص", "تصميم قبل الإنتاج"], description: "قطعة مميزة للعلامات والحفلات وإطلاق المشاريع." }
    ,en: { name: "Signature 3D logo trophy", specs: ["3D logo", "Special shape", "Mockup before production"], description: "A distinctive piece for brands, galas and project launches." }
  },
  {
    id: "3d-event-tower",
    category: "trophees",
    badge: "Nouveau",
    image: img.pinBadge,
    finishes: ["silver", "black", "gold"],
    usage: ["corporate", "event", "association"],
    customizable: true,
    is3d: true,
    newest: true,
    fr: { name: "Trophee 3D Event Signature", specs: ["Structure speciale", "Texte grave", "Finition bicolore"], description: "Design moderne pour evenements premium et concours." },
    ar: { name: "كأس 3D للمناسبات", specs: ["هيكل خاص", "نص منقوش", "تشطيب بلونين"], description: "تصميم حديث للمناسبات الراقية والمسابقات." }
    ,en: { name: "3D event signature trophy", specs: ["Special structure", "Engraved text", "Two-tone finish"], description: "Modern design for premium events and competitions." }
  },
  {
    id: "plaque-honneur",
    category: "medailles",
    badge: "Institution",
    image: img.plaqueBox,
    finishes: ["gold", "bronze", "silver"],
    usage: ["corporate", "school", "association"],
    customizable: true,
    is3d: false,
    featured: true,
    fr: { name: "Plaque honorifique gravee", specs: ["Texte long", "Logo", "Boite presentoir"], description: "Plaque professionnelle pour hommage, remerciement et ceremonies." },
    ar: { name: "لوحة تكريمية منقوشة", specs: ["نص طويل", "شعار", "علبة عرض"], description: "لوحة احترافية للتكريم والشكر والحفلات." }
    ,en: { name: "Engraved honor plaque", specs: ["Long text", "Logo", "Display box"], description: "Professional plaque for tribute, thanks and ceremonies." }
  },
  {
    id: "plaque-opening",
    category: "medailles",
    badge: "Evenement",
    image: img.plaque,
    finishes: ["black", "gold", "silver"],
    usage: ["event", "corporate"],
    customizable: true,
    is3d: false,
    fr: { name: "Plaque inauguration premium", specs: ["Metal noir", "Gravure claire", "Fixation possible"], description: "Pour ouvertures, partenariats et projets institutionnels." },
    ar: { name: "لوحة افتتاح راقية", specs: ["معدن أسود", "نقش واضح", "إمكانية التثبيت"], description: "للافتتاحات والشراكات والمشاريع المؤسساتية." }
    ,en: { name: "Premium inauguration plaque", specs: ["Black metal", "Clear engraving", "Mounting available"], description: "For openings, partnerships and institutional projects." }
  },
  {
    id: "pin-breast-cancer",
    category: "pins",
    badge: "Logo",
    image: img.pinCancer,
    finishes: ["gold", "silver", "black"],
    usage: ["corporate", "association", "event"],
    customizable: true,
    is3d: false,
    newest: true,
    fr: { name: "Pin emaille de sensibilisation", specs: ["Forme speciale", "Email colore", "Attache securisee"], description: "Pin metallique premium pour campagnes, associations, institutions et evenements." },
    ar: { name: "دبوس توعوي بالمينا", specs: ["شكل خاص", "ألوان مينا", "تثبيت آمن"], description: "دبوس راق للحملات والجمعيات والمناسبات." }
    ,en: { name: "Awareness enamel pin", specs: ["Special shape", "Colored enamel", "Secure clasp"], description: "Premium metal pin for campaigns, associations, institutions and events." }
  },
  {
    id: "pin-maroc-map",
    category: "badges",
    badge: "Maroc",
    image: img.pinMap,
    finishes: ["gold", "bronze", "silver"],
    usage: ["event", "school", "association"],
    customizable: true,
    is3d: false,
    fr: { name: "Pin carte du Maroc emaille", specs: ["Forme Maroc", "Drapeau emaille", "Finition doree"], description: "Pin identitaire pour evenements, associations, cadeaux officiels et communication de marque." },
    ar: { name: "دبوس خريطة المغرب", specs: ["شكل المغرب", "علم بالمينا", "تشطيب ذهبي"], description: "شارة هوية للمناسبات والجمعيات والهدايا الرسمية." }
    ,en: { name: "Morocco map enamel pin", specs: ["Morocco shape", "Enamel flag", "Gold finish"], description: "An identity pin for events, associations, official gifts and brand communication." }
  },
  {
    id: "keychain-auto-logo",
    category: "porte-cles",
    badge: "Automobile",
    image: img.keyCar,
    finishes: ["silver", "black", "gold"],
    usage: ["corporate", "event"],
    customizable: true,
    is3d: false,
    featured: true,
    newest: true,
    fr: { name: "Porte-cles logo automobile", specs: ["Logo metal", "Anneau premium", "Finition brillante"], description: "Porte-cles metallique elegant pour concessions, marques automobiles et cadeaux clients." },
    ar: { name: "حامل مفاتيح شعار سيارات", specs: ["شعار معدني", "حلقة راقية", "تشطيب لامع"], description: "حامل مفاتيح أنيق لوكالات السيارات والعلامات والهدايا." }
    ,en: { name: "Automotive logo keychain", specs: ["Metal logo", "Premium ring", "Gloss finish"], description: "An elegant metal keychain for dealerships, car brands and client gifts." }
  },
  {
    id: "keychain-metal-custom",
    category: "porte-cles",
    badge: "Sur mesure",
    image: img.keyMetal,
    finishes: ["gold", "silver", "black"],
    usage: ["corporate", "association", "event"],
    customizable: true,
    is3d: false,
    premium: true,
    fr: { name: "Porte-cles metal personnalise", specs: ["Forme au choix", "Logo grave", "Packaging possible"], description: "Accessoire metallique premium pour cadeaux d'entreprise, clubs et campagnes de marque." },
    ar: { name: "حامل مفاتيح معدني مخصص", specs: ["شكل حسب الطلب", "شعار منقوش", "تغليف اختياري"], description: "إكسسوار راق لهدايا الشركات والنوادي والحملات." }
    ,en: { name: "Custom metal keychain", specs: ["Shape of choice", "Engraved logo", "Optional packaging"], description: "A premium metal accessory for corporate gifts, clubs and brand campaigns." }
  },
  {
    id: "keychain-brand-series",
    category: "porte-cles",
    badge: "Serie",
    image: img.keyBrand,
    finishes: ["bronze", "gold", "silver"],
    usage: ["event", "school", "association"],
    customizable: true,
    is3d: false,
    fr: { name: "Serie porte-cles evenement", specs: ["Serie personnalisee", "Nom evenement", "Finition au choix"], description: "Porte-cles durable pour participants, staff et souvenirs d'evenement." },
    ar: { name: "سلسلة حاملات مفاتيح للمناسبات", specs: ["سلسلة مخصصة", "اسم المناسبة", "تشطيب حسب الطلب"], description: "حامل مفاتيح متين للمشاركين والطاقم وتذكارات المناسبات." }
    ,en: { name: "Event keychain series", specs: ["Custom series", "Event name", "Finish of choice"], description: "Durable keychains for participants, staff and event souvenirs." }
  }
];

export const gallery = products.map((product, index) => ({
  category: product.category,
  tone: index % 2 === 0 ? "from-bronze via-gold to-ivory" : "from-coal via-bronze to-gold",
  image: product.image
}));

export function productWhatsAppMessage(productName: string, lang: Lang) {
  const text =
    lang === "fr"
      ? `Bonjour Best Boutons, je souhaite un devis pour: ${productName}. Merci de me contacter.`
      : lang === "ar"
        ? `مرحبا Best Boutons، أريد عرض سعر لهذا المنتج: ${productName}. المرجو التواصل معي.`
        : `Hello Best Boutons, I would like a quote for this product: ${productName}. Please contact me.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
