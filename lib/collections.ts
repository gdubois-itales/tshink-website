// lib/collections.ts
//
// Contenu détaillé des 3 collections (page /collections et /collections/[slug]).
// Le titre, l'année et le thème de chaque collection restent dans
// lib/nav-links.ts (déjà utilisés par le header et generateStaticParams) ;
// ce fichier ne contient que le contenu éditorial propre à chaque page,
// relié par le même `slug`.

export type CollectionContent = {
    slug: string;
    teaser: string; // texte court affiché sur la carte, page /collections
    paragraphs: string[]; // texte d'intro de la page détail (dans l'ordre)
    heroCaption: string; // légende de la grande photo en haut de la page détail
    gallery: string[]; // légendes des photos de la galerie
};

export const collectionsContent: CollectionContent[] = [
    {
        slug: "zodiac-tribe",
        teaser:
            "Une tribu de guerrières, des combattantes du quotidien, dont chaque silhouette incarne la force et le caractère d'un signe du zodiaque.",
        paragraphs: [
            "D'un calendrier à l'horoscope, il n'y a qu'un pas : celui qui m'a menée des jours qui rythment une année aux signes qui, dit-on, façonnent une personnalité. J'ai imaginé cette collection comme une tribu de guerrières, des combattantes du quotidien, dont chaque silhouette incarne la force et le caractère d'un signe du zodiaque. Sur les douze signes imaginés, quatre ont pris vie : Scorpion, Bélier, Verseau et Poisson, ceux qui me représentent, moi et mes proches.",
            "Le travail de la matière est au cœur de cette collection : lisières de tissu récupérées puis réassemblées, déconstruction et reconstruction textile, teintures et jeux de plis viennent sculpter les volumes et renforcer l'identité de chaque silhouette.",
        ],
        heroCaption: "Zodiac Tribe, look complet",
        gallery: ["Scorpion", "Bélier", "Verseau", "Poisson"],
    },
    {
        slug: "kinky-link",
        teaser:
            "Huit silhouettes nées d'une réflexion autour des notions de pouvoir, de tension et de confiance, explorées à travers l'esthétique BDSM.",
        paragraphs: [
            "Huit silhouettes nées d'une réflexion autour des notions de pouvoir, de tension et de confiance, explorées à travers l'esthétique BDSM. Plus qu'un univers à illustrer, ce thème est devenu un véritable langage de construction du vêtement, où chaque technique participe au sens de la création.",
            "Déconstruction et reconstruction de matière, coupe directe, cire de bougie sur tissu, bandes tissées à la main… autant de procédés inspirés de cet univers et réinterprétés dans une démarche de stylisme, sur une grande diversité de matières.",
        ],
        heroCaption: "Kinky Link, look complet",
        gallery: ["Silhouette 01", "Silhouette 02", "Avant / après", "Détail — cire & tissage"],
    },
    {
        slug: "freedoms-temptation",
        teaser:
            "Six silhouettes imaginées autour d'une même idée : celle d'une femme libre, affirmée et pleinement maîtresse de ses choix.",
        paragraphs: [
            "Six silhouettes imaginées autour d'une même idée : celle d'une femme libre, affirmée et pleinement maîtresse de ses choix. Une collection où la sensualité devient un moyen d'expression, entre élégance, force de caractère et confiance en soi.",
            "Les bandes transversales structurent les silhouettes, les lignes franches traduisent la maîtrise et la précision, tandis que l'inspiration puisée dans la lingerie joue avec les contrastes entre matières opaques et légères pour révéler une féminité assumée.",
        ],
        heroCaption: "Freedom's Temptation, look complet",
        gallery: [
            "Silhouette 01",
            "Silhouette 02",
            "Détail — bandes transversales",
            "Silhouette 03",
        ],
    },
];