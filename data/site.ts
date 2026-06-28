export type Lang = "fr" | "ar";
export type CategorySlug = "medailles" | "trophees" | "trophees-3d" | "plaques" | "pins-badges" | "porte-cles";
export type Finish = "bronze" | "gold" | "silver" | "black";
export type Usage = "sport" | "corporate" | "event" | "school" | "association";

export const whatsappNumber = "212XXXXXXXXX";
export const phoneDisplay = "+212 XX XX XX XX XX";
export const emailDisplay = "contact@dyodzamak.ma";

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

export const categoryRoutes: CategorySlug[] = ["medailles", "trophees", "trophees-3d", "plaques", "pins-badges", "porte-cles"];

export const navItems = [
  { href: "/medailles", key: "medals" },
  { href: "/trophees", key: "trophies" },
  { href: "/trophees-3d", key: "trophies3d" },
  { href: "/plaques", key: "plaques" },
  { href: "/pins-badges", key: "pins" },
  { href: "/porte-cles", key: "keychains" },
  { href: "/realisations", key: "work" },
  { href: "/devis", key: "quote" }
] as const;

export const ui = {
  fr: {
    announcement: "Livraison partout au Maroc | Produits personnalises | Devis rapide sur WhatsApp",
    nav: {
      home: "Accueil",
      catalog: "Catalogue",
      medals: "Medailles",
      trophies: "Trophees",
      trophies3d: "Trophees 3D",
      plaques: "Plaques",
      pins: "Pins & Badges",
      keychains: "Porte-cles",
      work: "Realisations",
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
      title: "DYODZAMAK",
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
    trust: ["Maquette avant production", "Finitions bronze, or, argent et noir", "Livraison partout au Maroc", "Commande via WhatsApp"],
    steps: ["Choisir un produit", "Envoyer logo, texte et quantite", "Recevoir le devis", "Valider la maquette", "Production et livraison"],
    pages: {
      catalog: ["Catalogue DYODZAMAK", "Parcourez les modeles avec une experience claire: filtres, finitions, usages et devis rapide."],
      customization: ["Personnalisation", "Logos, textes, dates, formes, quantites et finitions: chaque piece est preparee selon votre besoin."],
      gallery: ["Realisations", "Inspirations de medailles, trophees, plaques, pins, porte-cles et produits metalliques."],
      quote: ["Demande de devis", "Remplissez les details essentiels et envoyez une demande WhatsApp pre-remplie."],
      about: ["A propos de DYODZAMAK", "Un atelier catalogue specialise dans les recompenses et produits metalliques personnalises au Maroc."],
      contact: ["Contact", "WhatsApp reste le canal le plus rapide pour une demande de prix, une maquette ou un suivi."]
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
      medals: "ميداليات",
      trophies: "كؤوس",
      trophies3d: "كؤوس 3D",
      plaques: "لوحات",
      pins: "دبابيس وشارات",
      keychains: "حاملات مفاتيح",
      work: "الأعمال",
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
      title: "DYODZAMAK",
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
      catalog: ["كتالوج DYODZAMAK", "تصفح النماذج بتجربة واضحة: فلاتر، تشطيبات، استعمالات وطلب سريع."],
      customization: ["التخصيص", "الشعارات، النصوص، التواريخ، الأشكال، الكميات والتشطيبات حسب حاجتك."],
      gallery: ["الأعمال", "إلهام للميداليات والكؤوس واللوحات والدبابيس وحاملات المفاتيح."],
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
    }
  },
  trophees: {
    slug: "trophees",
    href: "/trophees",
    icon: "trophy",
    image: img.trophy,
    fr: {
      title: "Trophees classiques",
      summary: "Trophees pour remises de prix, challenges sportifs, entreprises et institutions.",
      subcategories: ["Classic", "Corporate", "Sport", "Bois et metal"],
      useCases: ["Awards", "Competitions", "Challenges", "Reconnaissance"]
    },
    ar: {
      title: "كؤوس كلاسيكية",
      summary: "كؤوس لحفلات الجوائز والمسابقات الرياضية والشركات والمؤسسات.",
      subcategories: ["كلاسيكي", "شركات", "رياضة", "خشب ومعدن"],
      useCases: ["جوائز", "مسابقات", "تحديات", "تكريم"]
    }
  },
  "trophees-3d": {
    slug: "trophees-3d",
    href: "/trophees-3d",
    icon: "box",
    image: img.trophy2,
    fr: {
      title: "Trophees 3D",
      summary: "Pieces sur mesure avec logo en volume, formes speciales et rendu premium.",
      subcategories: ["Logo 3D", "Forme speciale", "Entreprise", "Evenement"],
      useCases: ["Lancement", "Gala", "Marque", "Distinction"]
    },
    ar: {
      title: "كؤوس ثلاثية الأبعاد",
      summary: "قطع حسب الطلب مع شعار بارز وأشكال خاصة ولمسة راقية.",
      subcategories: ["شعار 3D", "شكل خاص", "شركات", "مناسبة"],
      useCases: ["إطلاق", "حفل", "علامة", "تميز"]
    }
  },
  plaques: {
    slug: "plaques",
    href: "/plaques",
    icon: "panel",
    image: img.plaqueBox,
    fr: {
      title: "Plaques honorifiques",
      summary: "Plaques de remerciement, inauguration, hommage et reconnaissance avec gravure nette.",
      subcategories: ["Gravee", "Institution", "Remerciement", "Inauguration"],
      useCases: ["Hommage", "Don", "Partenariat", "Ceremonie"]
    },
    ar: {
      title: "لوحات تكريمية",
      summary: "لوحات شكر وافتتاح وتقدير مع نقش واضح وتشطيب احترافي.",
      subcategories: ["منقوشة", "مؤسسة", "شكر", "افتتاح"],
      useCases: ["تكريم", "هبة", "شراكة", "حفل"]
    }
  },
  "pins-badges": {
    slug: "pins-badges",
    href: "/pins-badges",
    icon: "badge",
    image: img.pinCancer,
    fr: {
      title: "Pins & badges",
      summary: "Pins metalliques, badges de marque, logos et accessoires personnalisables.",
      subcategories: ["Pins", "Badges", "Logo metal", "Evenement"],
      useCases: ["Branding", "Association", "Uniforme", "Salon"]
    },
    ar: {
      title: "دبابيس وشارات",
      summary: "دبابيس وشارات معدنية وشعارات قابلة للتخصيص.",
      subcategories: ["دبابيس", "شارات", "شعار معدني", "مناسبة"],
      useCases: ["هوية", "جمعية", "زي رسمي", "معرض"]
    }
  },
  "porte-cles": {
    slug: "porte-cles",
    href: "/porte-cles",
    icon: "key",
    image: img.keyCar,
    fr: {
      title: "Porte-cles personnalises",
      summary: "Porte-cles metalliques, logos de marque, formes speciales et accessoires premium pour entreprises, clubs et evenements.",
      subcategories: ["Logo metal", "Automobile", "Souvenir", "Corporate"],
      useCases: ["Cadeaux clients", "Concessions", "Clubs", "Evenements"]
    },
    ar: {
      title: "حاملات مفاتيح مخصصة",
      summary: "حاملات مفاتيح معدنية وشعارات مخصصة وأشكال خاصة للشركات والنوادي والمناسبات.",
      subcategories: ["شعار معدني", "سيارات", "تذكار", "شركات"],
      useCases: ["هدايا العملاء", "وكالات السيارات", "نوادي", "مناسبات"]
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
    fr: { name: "Trophee corporate metal et socle", specs: ["Plaque gravee", "Socle stable", "Hauteur au choix"], description: "Trophee sobre pour awards, challenges internes et partenaires." },
    ar: { name: "كأس شركات معدن وقاعدة", specs: ["لوحة منقوشة", "قاعدة ثابتة", "ارتفاع حسب الطلب"], description: "كأس أنيق للجوائز والتحديات الداخلية والشركاء." }
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
    fr: { name: "Coupe sportive classique", specs: ["Coupe metal", "Socle noir", "Etiquette gravee"], description: "Reference efficace pour clubs, championnats et tournois." },
    ar: { name: "كأس رياضي كلاسيكي", specs: ["كأس معدني", "قاعدة سوداء", "بطاقة منقوشة"], description: "اختيار عملي للأندية والبطولات والدوريات." }
  },
  {
    id: "3d-logo-award",
    category: "trophees-3d",
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
  },
  {
    id: "3d-event-tower",
    category: "trophees-3d",
    badge: "Nouveau",
    image: img.pinBadge,
    finishes: ["silver", "black", "gold"],
    usage: ["corporate", "event", "association"],
    customizable: true,
    is3d: true,
    newest: true,
    fr: { name: "Trophee 3D Event Signature", specs: ["Structure speciale", "Texte grave", "Finition bicolore"], description: "Design moderne pour evenements premium et concours." },
    ar: { name: "كأس 3D للمناسبات", specs: ["هيكل خاص", "نص منقوش", "تشطيب بلونين"], description: "تصميم حديث للمناسبات الراقية والمسابقات." }
  },
  {
    id: "plaque-honneur",
    category: "plaques",
    badge: "Institution",
    image: img.plaqueBox,
    finishes: ["gold", "bronze", "silver"],
    usage: ["corporate", "school", "association"],
    customizable: true,
    is3d: false,
    featured: true,
    fr: { name: "Plaque honorifique gravee", specs: ["Texte long", "Logo", "Boite presentoir"], description: "Plaque professionnelle pour hommage, remerciement et ceremonies." },
    ar: { name: "لوحة تكريمية منقوشة", specs: ["نص طويل", "شعار", "علبة عرض"], description: "لوحة احترافية للتكريم والشكر والحفلات." }
  },
  {
    id: "plaque-opening",
    category: "plaques",
    badge: "Evenement",
    image: img.plaque,
    finishes: ["black", "gold", "silver"],
    usage: ["event", "corporate"],
    customizable: true,
    is3d: false,
    fr: { name: "Plaque inauguration premium", specs: ["Metal noir", "Gravure claire", "Fixation possible"], description: "Pour ouvertures, partenariats et projets institutionnels." },
    ar: { name: "لوحة افتتاح راقية", specs: ["معدن أسود", "نقش واضح", "إمكانية التثبيت"], description: "للافتتاحات والشراكات والمشاريع المؤسساتية." }
  },
  {
    id: "pin-breast-cancer",
    category: "pins-badges",
    badge: "Logo",
    image: img.pinCancer,
    finishes: ["gold", "silver", "black"],
    usage: ["corporate", "association", "event"],
    customizable: true,
    is3d: false,
    newest: true,
    fr: { name: "Pin emaille sensibilisation", specs: ["Forme speciale", "Email colore", "Attache securisee"], description: "Pin premium pour campagnes, associations et evenements." },
    ar: { name: "دبوس توعوي بالمينا", specs: ["شكل خاص", "ألوان مينا", "تثبيت آمن"], description: "دبوس راق للحملات والجمعيات والمناسبات." }
  },
  {
    id: "pin-maroc-map",
    category: "pins-badges",
    badge: "Maroc",
    image: img.pinMap,
    finishes: ["gold", "bronze", "silver"],
    usage: ["event", "school", "association"],
    customizable: true,
    is3d: false,
    fr: { name: "Pin carte du Maroc emaille", specs: ["Forme Maroc", "Drapeau emaille", "Finition doree"], description: "Badge identitaire pour evenements, associations et cadeaux officiels." },
    ar: { name: "دبوس خريطة المغرب", specs: ["شكل المغرب", "علم بالمينا", "تشطيب ذهبي"], description: "شارة هوية للمناسبات والجمعيات والهدايا الرسمية." }
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
    fr: { name: "Porte-cles logo automobile", specs: ["Logo metal", "Anneau premium", "Finition brillante"], description: "Porte-cles elegant pour concessions, marques automobiles et cadeaux clients." },
    ar: { name: "حامل مفاتيح شعار سيارات", specs: ["شعار معدني", "حلقة راقية", "تشطيب لامع"], description: "حامل مفاتيح أنيق لوكالات السيارات والعلامات والهدايا." }
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
    fr: { name: "Porte-cles metal personnalise", specs: ["Forme au choix", "Logo grave", "Packaging possible"], description: "Accessoire premium pour cadeaux d'entreprise, clubs et campagnes de marque." },
    ar: { name: "حامل مفاتيح معدني مخصص", specs: ["شكل حسب الطلب", "شعار منقوش", "تغليف اختياري"], description: "إكسسوار راق لهدايا الشركات والنوادي والحملات." }
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
      ? `Bonjour DYODZAMAK, je souhaite un devis pour: ${productName}. Merci de me contacter.`
      : `مرحبا DYODZAMAK، أريد عرض سعر لهذا المنتج: ${productName}. المرجو التواصل معي.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
