// lib/collections.ts
//
// Contenu détaillé des 3 collections (page /collections et /collections/[slug]).
// Le titre, l'année et le thème de chaque collection restent dans
// lib/nav-links.ts (déjà utilisés par le header et generateStaticParams) ;
// ce fichier ne contient que le contenu éditorial propre à chaque page,
// relié par le même `slug`.

export type CollectionImage = {
    src: string;
    alt: string;
    objectPosition?: string;
};

export type CollectionContent = {
    slug: string;
    teaser: string;
    paragraphs: string[];
    cardImage: CollectionImage;
    heroImage: CollectionImage;
    gallery: CollectionImage[];
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
        cardImage: {
            src: "/images/collections/zodiac-tribe/hero.jpg",
            alt: "Zodiac Tribe, look complet",
        },
        heroImage: {
            src: "/images/collections/zodiac-tribe/allGrid.jpg",
            alt: "Zodiac Tribe, look complet",
            objectPosition: "50% 47%",
        },
        gallery: [
            { src: "/images/collections/zodiac-tribe/scorpionDos.jpg", alt: "Scorpion — dos" },
            { src: "/images/collections/zodiac-tribe/scorpionFace.jpg", alt: "Scorpion — face" },
            { src: "/images/collections/zodiac-tribe/scorpionProfil.jpg", alt: "Scorpion — profil" },
            { src: "/images/collections/zodiac-tribe/belierDos.jpg", alt: "Bélier — dos" },
            { src: "/images/collections/zodiac-tribe/belierProfil.jpg", alt: "Bélier — profil" },
            { src: "/images/collections/zodiac-tribe/verseauDos.jpg", alt: "Verseau — dos" },
            { src: "/images/collections/zodiac-tribe/poissonDos.jpg", alt: "Poisson — dos" },
            { src: "/images/collections/zodiac-tribe/allGrid.jpg", alt: "Zodiac Tribe — vue d'ensemble" },
        ],
    },
    {
        slug: "kinky-link",
        teaser:
            "Huit silhouettes nées d'une réflexion autour des notions de pouvoir, de tension et de confiance, explorées à travers l'esthétique BDSM.",
        paragraphs: [
            "Huit silhouettes nées d'une réflexion autour des notions de pouvoir, de tension et de confiance, explorées à travers l'esthétique BDSM. Plus qu'un univers à illustrer, ce thème est devenu un véritable langage de construction du vêtement, où chaque technique participe au sens de la création.",
            "Déconstruction et reconstruction de matière, coupe directe, cire de bougie sur tissu, bandes tissées à la main… autant de procédés inspirés de cet univers et réinterprétés dans une démarche de stylisme, sur une grande diversité de matières.",
        ],
        cardImage: {
            src: "/images/collections/kinky-link/hero.jpg",
            alt: "Kinky Link, look complet",
        },
        heroImage: {
            src: "/images/collections/kinky-link/hero.jpg",
            alt: "Kinky Link, look complet",
            objectPosition: "50% 30%",
        },
        gallery: [
            { src: "/images/collections/kinky-link/prototypes-finaux.jpg", alt: "Les huit silhouettes — prototypes finaux" },

            // Croquis
            { src: "/images/collections/kinky-link/croquis-domina.jpg", alt: "Croquis — Domina" },
            { src: "/images/collections/kinky-link/croquis-lilith.jpg", alt: "Croquis — Lilith" },
            { src: "/images/collections/kinky-link/croquis-nemesis.jpg", alt: "Croquis — Némésis" },
            { src: "/images/collections/kinky-link/croquis-kizuna.jpg", alt: "Croquis — Kizuna" },
            { src: "/images/collections/kinky-link/croquis-belladone.jpg", alt: "Croquis — Belladone" },
            { src: "/images/collections/kinky-link/croquis-pandore.jpg", alt: "Croquis — Pandore" },
            { src: "/images/collections/kinky-link/croquis-morgana.jpg", alt: "Croquis — Morgana" },
            { src: "/images/collections/kinky-link/croquis-calypso.jpg", alt: "Croquis — Calypso" },

            // Duo A — Domina & Lilith
            { src: "/images/collections/kinky-link/duo-domina-lilith-01.jpg", alt: "Domina & Lilith (1/2)" },
            { src: "/images/collections/kinky-link/domina-01.jpg", alt: "Domina, La Maîtresse (1/3)" },
            { src: "/images/collections/kinky-link/domina-02.jpg", alt: "Domina, La Maîtresse (2/3)" },
            { src: "/images/collections/kinky-link/domina-03.jpg", alt: "Domina, La Maîtresse (3/3)" },
            { src: "/images/collections/kinky-link/duo-domina-lilith-02.jpg", alt: "Domina & Lilith (2/2)" },
            { src: "/images/collections/kinky-link/lilith-01.jpg", alt: "Lilith, L'Insoumise (1/2)" },
            { src: "/images/collections/kinky-link/lilith-02.jpg", alt: "Lilith, L'Insoumise (2/2)" },

            // Duo B — Némésis & Kizuna
            { src: "/images/collections/kinky-link/duo-nemesis-kizuna-01.jpg", alt: "Némésis & Kizuna" },
            { src: "/images/collections/kinky-link/nemesis-01.jpg", alt: "Némésis, L'Implacable (1/3)" },
            { src: "/images/collections/kinky-link/nemesis-02.jpg", alt: "Némésis, L'Implacable (2/3)" },
            { src: "/images/collections/kinky-link/nemesis-03.jpg", alt: "Némésis, L'Implacable (3/3)" },
            { src: "/images/collections/kinky-link/kizuna-01.jpg", alt: "Kizuna, L'Attachée (1/3)" },
            { src: "/images/collections/kinky-link/kizuna-02.jpg", alt: "Kizuna, L'Attachée (2/3)" },
            { src: "/images/collections/kinky-link/kizuna-03.jpg", alt: "Kizuna, L'Attachée (3/3)" },

            // Duo C — Belladone & Pandore
            { src: "/images/collections/kinky-link/duo-belladone-pandore-01.jpg", alt: "Belladone & Pandore" },
            { src: "/images/collections/kinky-link/belladone-01.jpg", alt: "Belladone, La Doyenne (1/6)" },
            { src: "/images/collections/kinky-link/belladone-02.jpg", alt: "Belladone, La Doyenne (2/6)" },
            { src: "/images/collections/kinky-link/belladone-03.jpg", alt: "Belladone, La Doyenne (3/6)" },
            { src: "/images/collections/kinky-link/belladone-04.jpg", alt: "Belladone, La Doyenne (4/6)" },
            { src: "/images/collections/kinky-link/belladone-05.jpg", alt: "Belladone, La Doyenne (5/6)" },
            { src: "/images/collections/kinky-link/belladone-06.jpg", alt: "Belladone, La Doyenne (6/6)" },
            { src: "/images/collections/kinky-link/pandore-01.jpg", alt: "Pandore, La Subjuguée (1/5)" },
            { src: "/images/collections/kinky-link/pandore-02.jpg", alt: "Pandore, La Subjuguée (2/5)" },
            { src: "/images/collections/kinky-link/pandore-03.jpg", alt: "Pandore, La Subjuguée (3/5)" },
            { src: "/images/collections/kinky-link/pandore-04.jpg", alt: "Pandore, La Subjuguée (4/5)" },
            { src: "/images/collections/kinky-link/pandore-05.jpg", alt: "Pandore, La Subjuguée (5/5)" },

            // Duo D — Morgana & Calypso
            { src: "/images/collections/kinky-link/duo-morgana-calypso-01.jpg", alt: "Morgana & Calypso (1/2)" },
            { src: "/images/collections/kinky-link/morgana-01.jpg", alt: "Morgana, L'Intransigeante (1/4)" },
            { src: "/images/collections/kinky-link/morgana-02.jpg", alt: "Morgana, L'Intransigeante (2/4)" },
            { src: "/images/collections/kinky-link/morgana-03.jpg", alt: "Morgana, L'Intransigeante (3/4)" },
            { src: "/images/collections/kinky-link/morgana-04.jpg", alt: "Morgana, L'Intransigeante (4/4)" },
            { src: "/images/collections/kinky-link/duo-morgana-calypso-02.jpg", alt: "Morgana & Calypso (2/2)" },
            { src: "/images/collections/kinky-link/calypso-01.jpg", alt: "Calypso, La Gardienne (1/5)" },
            { src: "/images/collections/kinky-link/calypso-02.jpg", alt: "Calypso, La Gardienne (2/5)" },
            { src: "/images/collections/kinky-link/calypso-03.jpg", alt: "Calypso, La Gardienne (3/5)" },
            { src: "/images/collections/kinky-link/calypso-04.jpg", alt: "Calypso, La Gardienne (4/5)" },
            { src: "/images/collections/kinky-link/calypso-05.jpg", alt: "Calypso, La Gardienne (5/5)" },

            { src: "/images/collections/kinky-link/hero.jpg", alt: "Kinky Link — vue d'ensemble" },
        ],
    },
    {
        slug: "freedoms-temptation",
        teaser:
            "Six silhouettes imaginées autour d'une même idée : celle d'une femme libre, affirmée et pleinement maîtresse de ses choix.",
        paragraphs: [
            "Six silhouettes imaginées autour d'une même idée : celle d'une femme libre, affirmée et pleinement maîtresse de ses choix. Une collection où la sensualité devient un moyen d'expression, entre élégance, force de caractère et confiance en soi.",
            "Les bandes transversales structurent les silhouettes, les lignes franches traduisent la maîtrise et la précision, tandis que l'inspiration puisée dans la lingerie joue avec les contrastes entre matières opaques et légères pour révéler une féminité assumée.",
        ],
        cardImage: {
            src: "/images/collections/freedoms-temptation/hero.jpg",
            alt: "Freedom's Temptation, look complet",
        },
        heroImage: {
            src: "/images/collections/freedoms-temptation/hero.jpg",
            alt: "Freedom's Temptation, look complet",
            objectPosition: "50% 20%",
        },
        gallery: [
            // Prototypes
            { src: "/images/collections/freedoms-temptation/protoValya01.jpg", alt: "Valya — prototype (1/2)" },
            { src: "/images/collections/freedoms-temptation/protoValya02.jpg", alt: "Valya — prototype (2/2)" },
            { src: "/images/collections/freedoms-temptation/protoMira01.jpg", alt: "Mira — prototype (1/3)" },
            { src: "/images/collections/freedoms-temptation/protoMira02.jpg", alt: "Mira — prototype (2/3)" },
            { src: "/images/collections/freedoms-temptation/protoMira03.jpg", alt: "Mira — prototype (3/3)" },
            { src: "/images/collections/freedoms-temptation/protoSeirah01.jpg", alt: "Seirah — prototype (1/3)" },
            { src: "/images/collections/freedoms-temptation/protoSeirah02.jpg", alt: "Seirah — prototype (2/3)" },
            { src: "/images/collections/freedoms-temptation/protoSeirah03.jpg", alt: "Seirah — prototype (3/3)" },
            { src: "/images/collections/freedoms-temptation/protoCaliss01.jpg", alt: "Caliss — prototype (1/2)" },
            { src: "/images/collections/freedoms-temptation/protoCaliss02.jpg", alt: "Caliss — prototype (2/2)" },

            // Valya
            { src: "/images/collections/freedoms-temptation/Valya01.jpg", alt: "Valya (1/13)" },
            { src: "/images/collections/freedoms-temptation/Valya03.jpg", alt: "Valya (2/13)" },
            { src: "/images/collections/freedoms-temptation/Valya05.jpg", alt: "Valya (3/13)" },
            { src: "/images/collections/freedoms-temptation/Valya06.jpg", alt: "Valya (4/13)" },
            { src: "/images/collections/freedoms-temptation/Valya07.jpg", alt: "Valya (5/13)" },
            { src: "/images/collections/freedoms-temptation/Valya08.jpg", alt: "Valya (6/13)" },
            { src: "/images/collections/freedoms-temptation/Valya09.jpg", alt: "Valya (7/13)" },
            { src: "/images/collections/freedoms-temptation/Valya011.jpg", alt: "Valya (8/13)" },
            { src: "/images/collections/freedoms-temptation/Valya012.jpg", alt: "Valya (9/13)" },
            { src: "/images/collections/freedoms-temptation/Valya013.jpg", alt: "Valya (10/13)" },
            { src: "/images/collections/freedoms-temptation/Valya014.jpg", alt: "Valya (11/13)" },
            { src: "/images/collections/freedoms-temptation/Valya015.jpg", alt: "Valya (12/13)" },
            { src: "/images/collections/freedoms-temptation/Valya016.jpg", alt: "Valya (13/13)" },

            // Carmen
            { src: "/images/collections/freedoms-temptation/Carmen02.jpg", alt: "Carmen (1/6)" },
            { src: "/images/collections/freedoms-temptation/Carmen03.jpg", alt: "Carmen (2/6)" },
            { src: "/images/collections/freedoms-temptation/Carmen04.jpg", alt: "Carmen (3/6)" },
            { src: "/images/collections/freedoms-temptation/Carmen05.jpg", alt: "Carmen (4/6)" },
            { src: "/images/collections/freedoms-temptation/Carmen06.jpg", alt: "Carmen (5/6)" },
            { src: "/images/collections/freedoms-temptation/Carmen07.jpg", alt: "Carmen (6/6)" },

            // Carmen & Valya
            { src: "/images/collections/freedoms-temptation/CarmenxValya01.jpg", alt: "Carmen & Valya (1/5)" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya03.jpg", alt: "Carmen & Valya (2/5)" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya04.jpg", alt: "Carmen & Valya (3/5)" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya05.jpg", alt: "Carmen & Valya (4/5)" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya06.jpg", alt: "Carmen & Valya (5/5)" },

            // Mira
            { src: "/images/collections/freedoms-temptation/Mira01.jpg", alt: "Mira (1/2)" },
            { src: "/images/collections/freedoms-temptation/Mira02.jpg", alt: "Mira (2/2)" },

            // Mira & Seirah
            { src: "/images/collections/freedoms-temptation/MiraxSeirah01.jpg", alt: "Mira & Seirah (1/5)" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah02.jpg", alt: "Mira & Seirah (2/5)" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah03.jpg", alt: "Mira & Seirah (3/5)" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah04.jpg", alt: "Mira & Seirah (4/5)" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah05.jpg", alt: "Mira & Seirah (5/5)" },

            // Seirah
            { src: "/images/collections/freedoms-temptation/Seirah01.jpg", alt: "Seirah (1/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah02.jpg", alt: "Seirah (2/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah03.jpg", alt: "Seirah (3/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah04.jpg", alt: "Seirah (4/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah05.jpg", alt: "Seirah (5/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah06.jpg", alt: "Seirah (6/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah07.jpg", alt: "Seirah (7/8)" },
            { src: "/images/collections/freedoms-temptation/Seirah08.jpg", alt: "Seirah (8/8)" },

            // Groupe
            { src: "/images/collections/freedoms-temptation/all4.jpg", alt: "Carmen, Valya, Mira & Seirah" },

            // Letty
            { src: "/images/collections/freedoms-temptation/Letty01.jpg", alt: "Letty (1/4)" },
            { src: "/images/collections/freedoms-temptation/Letty02.jpg", alt: "Letty (2/4)" },
            { src: "/images/collections/freedoms-temptation/Letty03.jpg", alt: "Letty (3/4)" },
            { src: "/images/collections/freedoms-temptation/Letty04.jpg", alt: "Letty (4/4)" },

            // Letty & Caliss
            { src: "/images/collections/freedoms-temptation/LettyxCaliss01.jpg", alt: "Letty & Caliss (1/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss02.jpg", alt: "Letty & Caliss (2/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss03.jpg", alt: "Letty & Caliss (3/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss04.jpg", alt: "Letty & Caliss (4/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss05.jpg", alt: "Letty & Caliss (5/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss06.jpg", alt: "Letty & Caliss (6/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss07.jpg", alt: "Letty & Caliss (7/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss09.jpg", alt: "Letty & Caliss (8/9)" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss10.jpg", alt: "Letty & Caliss (9/9)" },

            // Caliss
            { src: "/images/collections/freedoms-temptation/Caliss01.jpg", alt: "Caliss (1/5)" },
            { src: "/images/collections/freedoms-temptation/Caliss02.jpg", alt: "Caliss (2/5)" },
            { src: "/images/collections/freedoms-temptation/Caliss03.jpg", alt: "Caliss (3/5)" },
            { src: "/images/collections/freedoms-temptation/Caliss04.jpg", alt: "Caliss (4/5)" },
            { src: "/images/collections/freedoms-temptation/Caliss05.jpg", alt: "Caliss (5/5)" },

            { src: "/images/collections/freedoms-temptation/hero.jpg", alt: "Freedom's Temptation — vue d'ensemble" },
        ],
    },
];