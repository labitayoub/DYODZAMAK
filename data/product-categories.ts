export type ProductCategorySlug =
  | "medailles"
  | "trophees"
  | "pins"
  | "badges"
  | "porte-cles"
  | "macarons"
  | "boutons"
  | "boucles"
  | "t-shirt"
  | "resine";

type LocalizedText = {
  fr: string;
  ar: string;
  en: string;
};

type ProductPlaceholder = {
  image: string;
  title: LocalizedText;
  description: LocalizedText;
  details: LocalizedText[];
};

export type ProductCategory = {
  slug: ProductCategorySlug;
  href: `/${ProductCategorySlug}`;
  navLabel: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  benefitsTitle: LocalizedText;
  benefits: LocalizedText[];
  applicationsTitle: LocalizedText;
  applicationsDescription: LocalizedText;
  applications: LocalizedText[];
  sectionTitle: LocalizedText;
  sectionText: LocalizedText;
  customizationTitle: LocalizedText;
  customizationText: LocalizedText;
  metaTitle: string;
  metaDescription: string;
  placeholders: ProductPlaceholder[];
};

function sameText(fr: string): LocalizedText {
  return { fr, ar: fr, en: fr };
}

function sameList(items: string[]): LocalizedText[] {
  return items.map((item) => sameText(item));
}

const categoryLabels: Record<ProductCategorySlug, LocalizedText> = {
  medailles: { fr: "Medailles", ar: "ميداليات", en: "Medals" },
  trophees: { fr: "Trophees", ar: "كؤوس", en: "Trophies" },
  pins: { fr: "Pins", ar: "دبابيس", en: "Pins" },
  badges: { fr: "Badges", ar: "شارات", en: "Badges" },
  "porte-cles": { fr: "Portes cles", ar: "حاملات مفاتيح", en: "Keychains" },
  macarons: { fr: "Macarons", ar: "ماكرون", en: "Car badges" },
  boutons: { fr: "Boutons", ar: "أزرار", en: "Buttons" },
  boucles: { fr: "Boucles", ar: "أقراط", en: "Loops" },
  "t-shirt": { fr: "T-shirt", ar: "تيشيرت", en: "T-shirt" },
  resine: { fr: "Resine", ar: "ريزن", en: "Resin" }
};

export function getProductCategoryLabel(slug: ProductCategorySlug, lang: keyof LocalizedText) {
  return categoryLabels[slug][lang];
}

type CategorySeed = {
  slug: ProductCategorySlug;
  navLabel: string;
  heroTitle: string;
  heroDescription: string;
  benefits: string[];
  applications: string[];
  customizationText: string;
  placeholders: Array<{
    title: string;
    description: string;
    details: string[];
  }>;
  metaTitle: string;
  metaDescription: string;
};

const categorySeeds: CategorySeed[] = [
  {
    slug: "medailles",
    navLabel: "Medailles",
    heroTitle: "Medailles personnalisees",
    heroDescription:
      "Fabrication de medailles sur mesure pour evenements sportifs, entreprises, associations, ecoles et ceremonies.",
    benefits: [
      "Conception sur mesure selon votre evenement, votre budget et votre image.",
      "Finitions metalliques soignees pour un rendu valorisant et durable.",
      "Accompagnement clair de la maquette jusqu'a la validation finale.",
      "Production adaptee aux petites comme aux grandes series.",
      "Possibilite d'integrer logos, rubans, textes et numerotation.",
    ],
    applications: [
      "Tournois et competitions sportives",
      "Ceremonies scolaires et universitaires",
      "Distinctions d'entreprise et anniversaires",
      "Evenements associatifs et institutionnels",
    ],
    customizationText:
      "Nous adaptons la forme, le relief, le ruban, la gravure et la finition pour creer une medaille qui porte reellement la valeur de votre evenement.",
    placeholders: [
      {
        title: "Medaille sportive classique",
        description: "Un modele polyvalent pour courses, championnats et podiums.",
        details: ["Ruban personnalise", "Finition or, argent ou bronze", "Gravure possible"],
      },
      {
        title: "Medaille institutionnelle",
        description: "Une presentation sobre et elegante pour ceremonies officielles.",
        details: ["Relief logo", "Aspect premium", "Presentation soignee"],
      },
      {
        title: "Medaille ecole",
        description: "Une solution claire pour remises de diplome et distinctions eleves.",
        details: ["Texte personnalise", "Serie adaptee", "Delai maitrise"],
      },
      {
        title: "Medaille corporate",
        description: "Concue pour challenges internes et recompenses d'equipe.",
        details: ["Charte visuelle respectee", "Packaging possible", "Rendu professionnel"],
      },
      {
        title: "Medaille associative",
        description: "Un format accessible pour clubs, ONG et actions locales.",
        details: ["Quantites flexibles", "Forme sur mesure", "Maquette incluse"],
      },
      {
        title: "Medaille commemorative",
        description: "Une piece a forte valeur symbolique pour anniversaires et hommages.",
        details: ["Finition detaillee", "Message dedie", "Fabrication sur devis"],
      },
    ],
    metaTitle: "Medailles personnalisees",
    metaDescription: "Fabrication de medailles personnalisees pour sport, ecoles, entreprises et ceremonies.",
  },
  {
    slug: "trophees",
    navLabel: "Trophees",
    heroTitle: "Trophees metalliques sur mesure",
    heroDescription:
      "Nous concevons et fabriquons des trophees metalliques haut de gamme, entierement personnalises selon vos besoins. Grace a une finition soignee et des materiaux de qualite, nos trophees sont parfaits pour recompenser les performances, celebrer les reussites et marquer les evenements professionnels, sportifs ou institutionnels.",
    benefits: [
      "Design valorisant pour renforcer l'impact de chaque remise de prix.",
      "Fabrication sur mesure avec choix de formes, hauteurs et materiaux.",
      "Presentation adaptee aux univers corporate, sportifs ou institutionnels.",
      "Integration propre de votre logo, message ou plaque dediee.",
      "Accompagnement serieux pour garantir un resultat coherent et presentable.",
    ],
    applications: [
      "Remises de prix d'entreprise",
      "Competitions sportives et challenges",
      "Galas, ceremonies et distinctions",
      "Evenements partenaires et incentives",
    ],
    customizationText:
      "Chaque piece est realisee avec precision afin d'offrir un souvenir elegant et durable, parfaitement aligne avec votre identite visuelle, votre niveau d'exigence et l'image de votre evenement.",
    placeholders: [
      {
        title: "Trophee corporate premium",
        description: "Un format ideal pour valoriser partenaires, collaborateurs et performances.",
        details: ["Socle personnalise", "Plaque gravee", "Ligne elegante"],
      },
      {
        title: "Trophee evenementiel",
        description: "Pense pour galas, ceremonies officielles et remises protocolaires.",
        details: ["Format adaptable", "Visibilite optimale", "Finition soignee"],
      },
      {
        title: "Trophee sportif",
        description: "Une piece forte pour championnats, finales et podiums.",
        details: ["Impact visuel", "Serie disponible", "Personnalisation complete"],
      },
      {
        title: "Trophee excellence",
        description: "Concu pour distinctions internes et programmes de reconnaissance.",
        details: ["Message dedie", "Style premium", "Validation maquette"],
      },
      {
        title: "Trophee sur socle",
        description: "Une presentation stable et prestigieuse pour evenements institutionnels.",
        details: ["Dimensions au choix", "Logo integre", "Rendu professionnel"],
      },
      {
        title: "Trophee edition speciale",
        description: "Une creation unique pour edition limitee ou occasion marquee.",
        details: ["Decoupe libre", "Projet sur mesure", "Production controlee"],
      },
    ],
    metaTitle: "Trophees metalliques sur mesure",
    metaDescription: "Trophees metalliques personnalises haut de gamme pour evenements professionnels, sportifs et institutionnels.",
  },
  {
    slug: "pins",
    navLabel: "Pins",
    heroTitle: "Pins metalliques personnalises",
    heroDescription:
      "Nos pins metalliques sont fabriques sur mesure pour representer votre marque, votre entreprise, votre association ou votre evenement. Disponibles en differentes formes, finitions et couleurs, ils allient qualite, precision et durabilite.",
    benefits: [
      "Petit format a forte visibilite pour renforcer votre image de marque.",
      "Fabrication precise avec couleurs, reliefs et attaches adaptes a l'usage.",
      "Support ideal pour communication, fidelisation et identification.",
      "Compatible avec productions promotionnelles ou editions limitees.",
      "Rendu soigne qui inspire confiance au premier regard.",
    ],
    applications: [
      "Lancement de marque et merchandising",
      "Clubs, associations et collectivites",
      "Campagnes promotionnelles",
      "Accreditations et evenements",
    ],
    customizationText:
      "Ideals pour la communication, les cadeaux promotionnels ou les collections, nos pins refletent parfaitement votre identite visuelle grace a une personnalisation precise de la forme, des finitions et des attaches.",
    placeholders: [
      {
        title: "Pin logo de marque",
        description: "Une signature visuelle compacte pour communication et notoriete.",
        details: ["Email colore", "Attache papillon", "Format sur mesure"],
      },
      {
        title: "Pin club ou association",
        description: "Ideal pour renforcer l'appartenance et la reconnaissance visuelle.",
        details: ["Couleurs institutionnelles", "Relief net", "Serie adaptable"],
      },
      {
        title: "Pin evenementiel",
        description: "Concu pour participants, staff, invites ou partenaires.",
        details: ["Distribution facile", "Delai encadre", "Bonne lisibilite"],
      },
      {
        title: "Pin collector",
        description: "Un format plus identitaire pour editions limitees et revente.",
        details: ["Finition premium", "Packaging possible", "Aspect valorisant"],
      },
      {
        title: "Pin promotionnel",
        description: "Une solution simple pour actions marketing et visibilite terrain.",
        details: ["Budget optimise", "Logo integre", "Commande en serie"],
      },
      {
        title: "Pin institutionnel",
        description: "Une presentation serieuse pour ceremonies et representation.",
        details: ["Style sobre", "Gravure soignee", "Production sur devis"],
      },
    ],
    metaTitle: "Pins metalliques personnalises",
    metaDescription: "Pins metalliques sur mesure pour entreprises, associations, marques et evenements.",
  },
  {
    slug: "badges",
    navLabel: "Badges",
    heroTitle: "Badges metalliques personnalises",
    heroDescription:
      "Nos badges metalliques personnalises sont concus pour repondre aux besoins des entreprises, administrations, ecoles, associations et evenements. Elegants, resistants et entierement personnalisables, ils permettent d'identifier les collaborateurs ou de valoriser une marque avec une finition professionnelle et durable.",
    benefits: [
      "Identification claire et professionnelle pour vos equipes et visiteurs.",
      "Formats et attaches adaptes a l'accueil, au terrain ou au protocole.",
      "Personnalisation lisible avec nom, fonction, logo ou code evenement.",
      "Solution pratique pour renforcer l'organisation et la confiance.",
      "Production fiable pour besoins ponctuels ou recurrents.",
    ],
    applications: [
      "Salons et foires professionnelles",
      "Accueil entreprise et reception",
      "Equipes terrain et staff evenementiel",
      "Conferences, seminaires et congres",
    ],
    customizationText:
      "Nous definissons avec vous le format, la matiere, le type de fixation et le marquage pour produire des badges metalliques a la fois pratiques, representatifs et irreprochables en presentation.",
    placeholders: [
      {
        title: "Badge nominatif",
        description: "Une solution elegante pour accueil, boutiques et service client.",
        details: ["Nom et fonction", "Fixation au choix", "Lecture immediate"],
      },
      {
        title: "Badge salon",
        description: "Concu pour fluidifier l'identification lors des evenements professionnels.",
        details: ["Logo integre", "Serie numerique", "Format pratique"],
      },
      {
        title: "Badge staff",
        description: "Ideal pour coordonner les equipes sur site avec clarte.",
        details: ["Couleurs de role", "Resistant", "Commande rapide"],
      },
      {
        title: "Badge entreprise",
        description: "Un support constant pour renforcer l'image de professionnalisme.",
        details: ["Charte visuelle respectee", "Finition propre", "Usage quotidien"],
      },
      {
        title: "Badge accreditation",
        description: "Pense pour evenements, acces controles et organisations multiples.",
        details: ["Informations lisibles", "Support adapte", "Projet sur mesure"],
      },
      {
        title: "Badge promotionnel",
        description: "Une option visible pour campagnes, animations et street marketing.",
        details: ["Message imprime", "Serie en volume", "Impact direct"],
      },
    ],
    metaTitle: "Badges metalliques personnalises",
    metaDescription: "Badges metalliques personnalises pour entreprises, ecoles, administrations, associations et evenements.",
  },
  {
    slug: "porte-cles",
    navLabel: "Portes cles",
    heroTitle: "Porte-cles metalliques personnalises",
    heroDescription:
      "Nous fabriquons des porte-cles metalliques personnalises qui associent design, resistance et elegance. Adaptes aux entreprises, aux marques et aux evenements, ils constituent un excellent support publicitaire et un cadeau durable.",
    benefits: [
      "Objet utile au quotidien qui prolonge la visibilite de votre marque.",
      "Excellente option pour cadeaux clients, salons et operations commerciales.",
      "Personnalisation complete de la forme, du metal et du marquage.",
      "Rendu durable qui valorise votre image bien apres la remise.",
      "Approche souple pour productions standard ou premium.",
    ],
    applications: [
      "Cadeaux clients et fidelisation",
      "Objets publicitaires d'entreprise",
      "Evenements commerciaux et salons",
      "Souvenirs de marque ou editions speciales",
    ],
    customizationText:
      "Chaque modele est concu avec un haut niveau de finition pour mettre en valeur votre logo ou votre message, avec un choix sur mesure de forme, gravure, finition et presentation.",
    placeholders: [
      {
        title: "Porte cles logo",
        description: "Un classique efficace pour visibilite de marque et distribution.",
        details: ["Metal personnalise", "Anneau standard", "Bonne tenue"],
      },
      {
        title: "Porte cles premium",
        description: "Une version plus valorisante pour cadeaux affaires ou coffrets.",
        details: ["Finition haut de gamme", "Packaging possible", "Image soignee"],
      },
      {
        title: "Porte cles evenementiel",
        description: "Concu pour salons, lancements et operations de terrain.",
        details: ["Distribution simple", "Serie en volume", "Message visible"],
      },
      {
        title: "Porte cles souvenir",
        description: "Une piece memoire pour editions speciales et occasions marquees.",
        details: ["Forme libre", "Detail personnalise", "Effet durable"],
      },
      {
        title: "Porte cles corporate",
        description: "Un support utile pour renforcer la presence de votre entreprise.",
        details: ["Charte visuelle", "Logo integre", "Rendu professionnel"],
      },
      {
        title: "Porte cles campagne",
        description: "Une solution publicitaire pratique pour grandes diffusions.",
        details: ["Budget optimise", "Personnalisation nette", "Fabrication sur devis"],
      },
    ],
    metaTitle: "Porte-cles metalliques personnalises",
    metaDescription: "Porte-cles metalliques personnalises pour entreprises, marques, evenements et cadeaux publicitaires.",
  },
  {
    slug: "macarons",
    navLabel: "Macarons",
    heroTitle: "Macarons de voiture personnalises",
    heroDescription:
      "Nous concevons et fabriquons des macarons de voiture metalliques personnalises pour les entreprises, institutions, administrations, clubs et associations. Nos macarons sont realises avec precision afin de garantir une excellente qualite, une finition elegante et une grande resistance aux conditions exterieures.",
    benefits: [
      "Support visuel simple et efficace pour faire passer un message rapidement.",
      "Excellente visibilite pour campagnes, animations et actions de terrain.",
      "Production flexible selon les quantites et les usages.",
      "Personnalisation graphique adaptee a votre charte et a votre cible.",
      "Format accessible qui facilite la diffusion a grande echelle.",
    ],
    applications: [
      "Campagnes de communication",
      "Actions promotionnelles et street marketing",
      "Equipes d'animation et de sensibilisation",
      "Evenements grand public et institutionnels",
    ],
    customizationText:
      "Chaque modele est entierement personnalisable selon votre identite visuelle, votre logo ou votre embleme, avec une fabrication soignee pensee pour durer et representer votre organisation avec serieux.",
    placeholders: [
      {
        title: "Macaron campagne",
        description: "Ideal pour porter un message court avec impact immediat.",
        details: ["Impression personnalisee", "Format visible", "Serie disponible"],
      },
      {
        title: "Macaron evenement",
        description: "Pense pour animations, salons et distributions sur site.",
        details: ["Mise en avant rapide", "Design adapte", "Commande simple"],
      },
      {
        title: "Macaron branding",
        description: "Une solution legere pour renforcer l'identite d'une marque.",
        details: ["Couleurs maitrisees", "Visibilite terrain", "Support pratique"],
      },
      {
        title: "Macaron equipe",
        description: "Utile pour identifier un role, un service ou un groupe.",
        details: ["Texte lisible", "Accroche adaptee", "Usage evenementiel"],
      },
      {
        title: "Macaron associatif",
        description: "Concu pour actions citoyennes, clubs et mobilisation locale.",
        details: ["Petit budget", "Diffusion facile", "Projet personnalise"],
      },
      {
        title: "Macaron promotionnel",
        description: "Un support visible pour messages commerciaux ou saisonniers.",
        details: ["Volume possible", "Creation rapide", "Fabrication sur devis"],
      },
    ],
    metaTitle: "Macarons de voiture personnalises",
    metaDescription: "Macarons de voiture metalliques personnalises pour entreprises, institutions, clubs, administrations et associations.",
  },
  {
    slug: "boutons",
    navLabel: "Boutons",
    heroTitle: "Boutons metalliques personnalises",
    heroDescription:
      "Nous realisons des boutons metalliques sur mesure destines aux vetements, uniformes, accessoires de mode et articles de maroquinerie. Fabriques avec des materiaux de qualite et une finition irreprochable, ils apportent une touche d'elegance, de robustesse et de personnalisation a vos creations.",
    benefits: [
      "Element de finition qui renforce la qualite percue de vos pieces.",
      "Fabrication adaptee aux besoins mode, uniforme ou accessoire.",
      "Large choix de formes, matieres, marquages et effets de surface.",
      "Possibilite de realiser des series coherentes avec votre identite.",
      "Approche serieuse pour associer esthetique, usage et durabilite.",
    ],
    applications: [
      "Collections textile et accessoires",
      "Uniformes scolaires ou professionnels",
      "Pieces de marque et merchandising",
      "Projets de confection sur mesure",
    ],
    customizationText:
      "Nous vous aidons a definir dimensions, style, relief et finition pour obtenir des boutons metalliques coherents avec votre univers produit et capables de renforcer la valeur percue de chaque piece.",
    placeholders: [
      {
        title: "Bouton uniforme",
        description: "Une solution sobre et fiable pour tenues institutionnelles.",
        details: ["Marquage discret", "Metal ou matiere au choix", "Usage regulier"],
      },
      {
        title: "Bouton mode",
        description: "Concu pour donner du caractere a une collection textile.",
        details: ["Relief possible", "Finition travaillee", "Serie coherente"],
      },
      {
        title: "Bouton marque",
        description: "Un support de detail pour renforcer une signature visuelle.",
        details: ["Logo integre", "Aspect propre", "Production sur mesure"],
      },
      {
        title: "Bouton accessoire",
        description: "Pense pour sacs, pochettes et creations diverses.",
        details: ["Format adapte", "Bon maintien", "Options multiples"],
      },
      {
        title: "Bouton collection premium",
        description: "Une finition plus haut de gamme pour pieces valorisantes.",
        details: ["Rendu qualitatif", "Traitement de surface", "Validation maquette"],
      },
      {
        title: "Bouton promotionnel",
        description: "Une option fonctionnelle pour series dediees a la communication.",
        details: ["Budget maitrise", "Volume possible", "Projet sur devis"],
      },
    ],
    metaTitle: "Boutons metalliques personnalises",
    metaDescription: "Boutons metalliques personnalises pour vetements, uniformes, maroquinerie et accessoires de mode.",
  },
  {
    slug: "boucles",
    navLabel: "Boucles",
    heroTitle: "Ceintures de pantalon personnalisees",
    heroDescription:
      "Nous fabriquons des ceintures de pantalon personnalisees alliant elegance, confort et durabilite. Concues avec des materiaux de haute qualite et des boucles metalliques personnalisables, elles sont ideales pour les entreprises, les marques, les administrations, les clubs et les evenements promotionnels.",
    benefits: [
      "Piece technique et esthetique pour renforcer la qualite de vos accessoires.",
      "Fabrication sur mesure selon usage, dimensions et style recherche.",
      "Finitions metalliques propres pour un rendu fiable et presentable.",
      "Compatible avec projets mode, maroquinerie ou objets dedies a la marque.",
      "Accompagnement precis sur les contraintes de production et de rendu.",
    ],
    applications: [
      "Ceintures et maroquinerie",
      "Accessoires textile et mode",
      "Pieces fonctionnelles de marque",
      "Objets promotionnels specifiques",
    ],
    customizationText:
      "Disponibles dans differents styles, couleurs et finitions, nos ceintures peuvent etre personnalisees avec votre logo, votre nom ou votre identite visuelle afin de creer un produit unique et raffine.",
    placeholders: [
      {
        title: "Boucle ceinture classique",
        description: "Un modele fonctionnel et propre pour gammes standards.",
        details: ["Metal au choix", "Bonne robustesse", "Format adapte"],
      },
      {
        title: "Boucle premium",
        description: "Une version plus raffinee pour collections ou editions speciales.",
        details: ["Finition soignee", "Relief possible", "Rendu valorisant"],
      },
      {
        title: "Boucle logo",
        description: "Concue pour integrer votre identite visuelle dans l'accessoire.",
        details: ["Marquage integre", "Decoupe sur mesure", "Serie controlee"],
      },
      {
        title: "Boucle textile",
        description: "Pensee pour accessoires techniques ou produits de confection.",
        details: ["Usage fonctionnel", "Dimensions variables", "Production fiable"],
      },
      {
        title: "Boucle promotionnelle",
        description: "Une piece specifique pour produits de marque ou operations dediees.",
        details: ["Projet personnalise", "Style adaptable", "Delai sur devis"],
      },
      {
        title: "Boucle edition speciale",
        description: "Une realisation plus identitaire pour concepts singuliers.",
        details: ["Finition exclusive", "Maquette validee", "Fabrication sur mesure"],
      },
    ],
    metaTitle: "Ceintures de pantalon personnalisees",
    metaDescription: "Ceintures de pantalon personnalisees avec boucles metalliques personnalisables pour entreprises, marques, clubs et administrations.",
  },
  {
    slug: "t-shirt",
    navLabel: "T-shirt",
    heroTitle: "T-shirts personnalises",
    heroDescription:
      "T-shirts personnalises pour entreprises, evenements, equipes, campagnes publicitaires et marques.",
    benefits: [
      "Support textile efficace pour visibilite, cohesion et communication.",
      "Choix de coupes, couleurs et marquages selon votre contexte d'utilisation.",
      "Convient aussi bien aux operations ponctuelles qu'aux besoins recurrents.",
      "Personnalisation claire pour logo, slogan, nom d'equipe ou design complet.",
      "Presentation serieuse qui renforce l'image de votre organisation.",
    ],
    applications: [
      "Equipes evenementielles et staff",
      "Campagnes publicitaires et street marketing",
      "Marques et merchandising",
      "Entreprises, associations et ecoles",
    ],
    customizationText:
      "Nous vous accompagnons sur le choix du textile, de la coupe, des tailles et du marquage afin d'obtenir des t-shirts coherents avec votre image et confortables a porter.",
    placeholders: [
      {
        title: "T-shirt entreprise",
        description: "Une base textile professionnelle pour vos equipes et actions terrain.",
        details: ["Logo poitrine ou dos", "Tailles disponibles", "Couleurs au choix"],
      },
      {
        title: "T-shirt evenement",
        description: "Concu pour operations temporaires, festivals et animations.",
        details: ["Visibilite immediate", "Commande en serie", "Marquage net"],
      },
      {
        title: "T-shirt equipe",
        description: "Ideal pour staff, benevoles, clubs et groupes organises.",
        details: ["Identification rapide", "Confort d'usage", "Projet adaptable"],
      },
      {
        title: "T-shirt marque",
        description: "Pense pour revente, distribution ou image de marque.",
        details: ["Design personnalise", "Coherence visuelle", "Support textile choisi"],
      },
      {
        title: "T-shirt promotionnel",
        description: "Une solution simple pour communication grand public ou cadeaux.",
        details: ["Budget optimise", "Volume possible", "Delai encadre"],
      },
      {
        title: "T-shirt campagne",
        description: "Un support efficace pour mobilisation, sensibilisation ou lancement.",
        details: ["Message visible", "Impression adaptee", "Fabrication sur devis"],
      },
    ],
    metaTitle: "T-shirts personnalises",
    metaDescription: "T-shirts personnalises pour entreprises, evenements, equipes et marques.",
  },
  {
    slug: "resine",
    navLabel: "Resine",
    heroTitle: "Creations en resine personnalisees",
    heroDescription:
      "Fabrication d'objets personnalises en resine pour decoration, cadeaux, trophees et supports promotionnels.",
    benefits: [
      "Grande liberte de forme, de couleur et d'effet visuel pour vos projets.",
      "Solution pertinente pour pieces decoratives, signaletiques ou cadeaux distinctifs.",
      "Possibilite d'integrer logos, inclusions et effets de transparence.",
      "Rendu original qui apporte une forte valeur percue.",
      "Approche sur mesure pour creations uniques ou petites series.",
    ],
    applications: [
      "Cadeaux personnalises et objets deco",
      "Trophees et pieces commemoratives",
      "Supports promotionnels originaux",
      "Elements visuels pour marque ou evenement",
    ],
    customizationText:
      "Nous travaillons la forme, les couleurs, les inclusions et le niveau de finition pour produire des creations en resine qui attirent l'attention et servent clairement votre objectif.",
    placeholders: [
      {
        title: "Objet resine logo",
        description: "Une piece de marque originale pour bureau, accueil ou cadeau.",
        details: ["Couleur au choix", "Logo integre", "Effet valorisant"],
      },
      {
        title: "Trophee en resine",
        description: "Une alternative creative pour remises et distinctions personnalisees.",
        details: ["Forme libre", "Finition brillante", "Projet sur mesure"],
      },
      {
        title: "Piece decorative",
        description: "Concue pour valoriser un espace, un comptoir ou une vitrine.",
        details: ["Effet visuel fort", "Dimensions adaptees", "Presentation soignee"],
      },
      {
        title: "Objet souvenir",
        description: "Un support memorable pour evenement, anniversaire ou hommage.",
        details: ["Texte possible", "Inclusion personnalisee", "Fabrication controlee"],
      },
      {
        title: "Support promotionnel",
        description: "Une creation differenciante pour communication ou cadeaux clients.",
        details: ["Originalite assumee", "Serie limitee", "Rendu professionnel"],
      },
      {
        title: "Creation artistique",
        description: "Une piece sur mesure pour besoin singulier ou concept specifique.",
        details: ["Approche creative", "Validation maquette", "Devis personnalise"],
      },
    ],
    metaTitle: "Creations en resine personnalisees",
    metaDescription: "Objets et creations en resine personnalises pour decoration, cadeaux, trophees et communication.",
  },
];

const placeholderImageMap: Record<ProductCategorySlug, string[]> = {
  medailles: [
    "/images/WhatsApp Image 2026-06-03 at 13.38.31.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.38.49.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.05.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
  ],
  trophees: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.10 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
  ],
  pins: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (3).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg",
  ],
  badges: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (3).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
  ],
  "porte-cles": [
    "/images/WhatsApp Image 2026-06-03 at 13.39.12.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (2).jpeg",
  ],
  macarons: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg",
  ],
  boutons: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (3).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (4).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14.jpeg",
  ],
  boucles: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.12.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.13 (3).jpeg",
  ],
  "t-shirt": [
    "/images/hero-awards.png",
    "/images/WhatsApp Image 2026-06-03 at 13.38.49.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.05.jpeg",
    "/images/hero-awards.png",
    "/images/WhatsApp Image 2026-06-03 at 13.38.31.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.10 (1).jpeg",
  ],
  resine: [
    "/images/WhatsApp Image 2026-06-03 at 13.39.10 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.10.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.11.jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (2).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.14 (1).jpeg",
    "/images/WhatsApp Image 2026-06-03 at 13.39.05.jpeg",
  ],
};

export const productCategories: ProductCategory[] = categorySeeds.map((category) => ({
  slug: category.slug,
  href: `/${category.slug}`,
  navLabel: sameText(category.navLabel),
  heroTitle: sameText(category.heroTitle),
  heroDescription: sameText(category.heroDescription),
  benefitsTitle: sameText("Pourquoi choisir cette categorie"),
  benefits: sameList(category.benefits),
  applicationsTitle: sameText("Applications"),
  applicationsDescription: sameText(
    "Des usages concrets, frequents et adaptes aux exigences des entreprises, institutions et organisateurs d'evenements."
  ),
  applications: sameList(category.applications),
  sectionTitle: sameText("Exemples de produits"),
  sectionText: sameText(
    "Une selection de references placeholders pour projeter votre futur assortiment et vous aider a cadrer rapidement votre demande."
  ),
  customizationTitle: sameText("Une personnalisation pensee pour votre projet"),
  customizationText: sameText(category.customizationText),
  metaTitle: category.metaTitle,
  metaDescription: category.metaDescription,
  placeholders: category.placeholders.map((item, index) => ({
    image: placeholderImageMap[category.slug][index % placeholderImageMap[category.slug].length],
    title: sameText(item.title),
    description: sameText(item.description),
    details: sameList(item.details),
  })),
}));

export const productCategorySlugs = productCategories.map((category) => category.slug);

export const productCategoriesBySlug = Object.fromEntries(
  productCategories.map((category) => [category.slug, category])
) as Record<ProductCategorySlug, ProductCategory>;

export function getProductCategory(slug: ProductCategorySlug) {
  return productCategoriesBySlug[slug];
}
