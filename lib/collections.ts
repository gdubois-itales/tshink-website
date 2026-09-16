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
    note?: string
};

export type CollectionContent = {
    slug: string;
    teaser: string;
    paragraphs: string[];
    cardImage: CollectionImage;   // image sur la page /collections
    heroImage: CollectionImage;   // grande photo en haut de la page détail
    gallery: CollectionImage[];   // photos de la galerie (remplace l'ancien string[])
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
            src: "/images/collections/zodiac-tribe/AllGrid.jpg",
            alt: "Zodiac Tribe, look complet",
            objectPosition: "50% 47%",
        },
        gallery: [
            { src: "/images/collections/zodiac-tribe/scorpionDos.jpg", alt: "Scorpion Dos" },
            { src: "/images/collections/zodiac-tribe/scorpionFace.jpg", alt: "Scorpion Face" },
            { src: "/images/collections/zodiac-tribe/scorpionProfil.jpg", alt: "Scorpion Profil" },
            { src: "/images/collections/zodiac-tribe/belierDos.jpg", alt: "Bélier Dos" },
            { src: "/images/collections/zodiac-tribe/belierProfil.jpg", alt: "Bélier Profil" },
            { src: "/images/collections/zodiac-tribe/verseauDos.jpg", alt: "Verseau Dos" },
            { src: "/images/collections/zodiac-tribe/poissonDos.jpg", alt: "Poisson Dos" },
            { src: "/images/collections/zodiac-tribe/AllGrid.jpg", alt: "Collection complète" },
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
            alt: "Kinky Link Tribe, look complet",
        },
        heroImage: {
            src: "/images/collections/kinky-link/hero.jpg", //slideshow avec hero ?
            alt: "Kinky Link, look complet",
            objectPosition: "50% 30%",
        },
        gallery: [
            { src: "/images/collections/kinky-link/allProtoFinal.jpg", alt: "All proto final" },
            { src: "/images/collections/kinky-link/croquisDA.jpg", alt: "Croquis DA" },
            { src: "/images/collections/kinky-link/croquisSA.jpg", alt: "Croquis SA" },
            { src: "/images/collections/kinky-link/croquisDB.jpg", alt: "Croquis DB" },
            { src: "/images/collections/kinky-link/croquisSB.jpg", alt: "Croquis SB" },
            { src: "/images/collections/kinky-link/croquisDC.jpg", alt: "Croquis DC" },
            { src: "/images/collections/kinky-link/croquisSC.jpg", alt: "Croquis SC" },
            { src: "/images/collections/kinky-link/croquisDD.jpg", alt: "Croquis DD" },
            { src: "/images/collections/kinky-link/croquisSD.jpg", alt: "Croquis SD" },
            { src: "/images/collections/kinky-link/A01.jpg", alt: "A01" },
            { src: "/images/collections/kinky-link/DA01.jpg", alt: "DA01" },
            { src: "/images/collections/kinky-link/DA02.jpg", alt: "DA02" },
            { src: "/images/collections/kinky-link/DA03.jpg", alt: "DA03" },
            { src: "/images/collections/kinky-link/A02.jpg", alt: "A02" },
            { src: "/images/collections/kinky-link/SA01.jpg", alt: "A01" },
            { src: "/images/collections/kinky-link/SA02.jpg", alt: "A02" },
            { src: "/images/collections/kinky-link/B01.jpg", alt: "B01" },
            { src: "/images/collections/kinky-link/DB01.jpg", alt: "DB01" },
            { src: "/images/collections/kinky-link/DB02.jpg", alt: "DB02" },
            { src: "/images/collections/kinky-link/DB03.jpg", alt: "DB03" },
            { src: "/images/collections/kinky-link/SB01.jpg", alt: "SB01" },
            { src: "/images/collections/kinky-link/SB02.jpg", alt: "SB02" },
            { src: "/images/collections/kinky-link/SB03.jpg", alt: "SB03" },
            { src: "/images/collections/kinky-link/C01.jpg", alt: "C01" },
            { src: "/images/collections/kinky-link/DC01.jpg", alt: "DC01" },
            { src: "/images/collections/kinky-link/DC02.jpg", alt: "DC02" },
            { src: "/images/collections/kinky-link/DC03.jpg", alt: "DC03" },
            { src: "/images/collections/kinky-link/DC04.jpg", alt: "DC04" },
            { src: "/images/collections/kinky-link/DC05.jpg", alt: "DC05" },
            { src: "/images/collections/kinky-link/DC06.jpg", alt: "DC06" },
            { src: "/images/collections/kinky-link/SC01.jpg", alt: "SC01" },
            { src: "/images/collections/kinky-link/SC02.jpg", alt: "SC02" },
            { src: "/images/collections/kinky-link/SC03.jpg", alt: "SC03" },
            { src: "/images/collections/kinky-link/SC04.jpg", alt: "SC04" },
            { src: "/images/collections/kinky-link/SC05.jpg", alt: "SC05" },
            { src: "/images/collections/kinky-link/D01.jpg", alt: "D01" },
            { src: "/images/collections/kinky-link/D02.jpg", alt: "D02" },
            { src: "/images/collections/kinky-link/DD01.jpg", alt: "DD01" },
            { src: "/images/collections/kinky-link/DD02.jpg", alt: "DD02" },
            { src: "/images/collections/kinky-link/DD03.jpg", alt: "DD03" },
            { src: "/images/collections/kinky-link/DD04.jpg", alt: "DD04" },
            { src: "/images/collections/kinky-link/SD01.jpg", alt: "SD01" },
            { src: "/images/collections/kinky-link/SD02.jpg", alt: "SD02" },
            { src: "/images/collections/kinky-link/SD03.jpg", alt: "SD03" },
            { src: "/images/collections/kinky-link/SD04.jpg", alt: "SD04" },
            { src: "/images/collections/kinky-link/SD05.jpg", alt: "SD05" },
            { src: "/images/collections/kinky-link/hero.jpg", alt: "Collection complète" },
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
            { src: "/images/collections/freedoms-temptation/protoValya01.jpg", alt: "Proto Valya 01" },
            { src: "/images/collections/freedoms-temptation/protoValya02.jpg", alt: "Proto Valya 02" },
            { src: "/images/collections/freedoms-temptation/protoMira01.jpg", alt: "Proto Mira 01" },
            { src: "/images/collections/freedoms-temptation/protoMira02.jpg", alt: "Proto Mira 02" },
            { src: "/images/collections/freedoms-temptation/protoMira03.jpg", alt: "Proto Mira 03" },
            { src: "/images/collections/freedoms-temptation/protoSeirah01.jpg", alt: "Proto Seirah 01" },
            { src: "/images/collections/freedoms-temptation/protoSeirah02.jpg", alt: "Proto Seirah 02" },
            { src: "/images/collections/freedoms-temptation/protoSeirah03.jpg", alt: "Proto Seirah 03" },
            { src: "/images/collections/freedoms-temptation/protoCaliss01.jpg", alt: "Proto Caliss 01" },
            { src: "/images/collections/freedoms-temptation/protoCaliss02.jpg", alt: "Proto Caliss 02" },
            { src: "/images/collections/freedoms-temptation/Valya01.jpg", alt: "Valya 01" },
            { src: "/images/collections/freedoms-temptation/Valya03.jpg", alt: "Valya 03" },
            { src: "/images/collections/freedoms-temptation/Valya05.jpg", alt: "Valya 05" },
            { src: "/images/collections/freedoms-temptation/Valya06.jpg", alt: "Valya 06" },
            { src: "/images/collections/freedoms-temptation/Valya07.jpg", alt: "Valya 07" },
            { src: "/images/collections/freedoms-temptation/Valya08.jpg", alt: "Valya 08" },
            { src: "/images/collections/freedoms-temptation/Valya09.jpg", alt: "Valya 09" },
            { src: "/images/collections/freedoms-temptation/Valya011.jpg", alt: "Valya 011" },
            { src: "/images/collections/freedoms-temptation/Valya012.jpg", alt: "Valya 012" },
            { src: "/images/collections/freedoms-temptation/Valya013.jpg", alt: "Valya 013" },
            { src: "/images/collections/freedoms-temptation/Valya014.jpg", alt: "Valya 014" },
            { src: "/images/collections/freedoms-temptation/Valya015.jpg", alt: "Valya 015" },
            { src: "/images/collections/freedoms-temptation/Valya016.jpg", alt: "Valya 016" },
            { src: "/images/collections/freedoms-temptation/Carmen02.jpg", alt: "Carmen 02" },
            { src: "/images/collections/freedoms-temptation/Carmen03.jpg", alt: "Carmen 03" },
            { src: "/images/collections/freedoms-temptation/Carmen04.jpg", alt: "Carmen 04" },
            { src: "/images/collections/freedoms-temptation/Carmen05.jpg", alt: "Carmen 05" },
            { src: "/images/collections/freedoms-temptation/Carmen06.jpg", alt: "Carmen 06" },
            { src: "/images/collections/freedoms-temptation/Carmen07.jpg", alt: "Carmen 07" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya01.jpg", alt: "Carmen/Valya 01" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya03.jpg", alt: "Carmen/Valya 03" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya04.jpg", alt: "Carmen/Valya 04" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya05.jpg", alt: "Carmen/Valya 05" },
            { src: "/images/collections/freedoms-temptation/CarmenxValya06.jpg", alt: "Carmen/Valya 06" },
            { src: "/images/collections/freedoms-temptation/Mira01.jpg", alt: "Mira 01" },
            { src: "/images/collections/freedoms-temptation/Mira02.jpg", alt: "Mira 02" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah01.jpg", alt: "Mira/Seirah 01" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah02.jpg", alt: "Mira/Seirah 02" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah03.jpg", alt: "Mira/Seirah 03" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah04.jpg", alt: "Mira/Seirah 04" },
            { src: "/images/collections/freedoms-temptation/MiraxSeirah05.jpg", alt: "Mira/Seirah 05" },
            { src: "/images/collections/freedoms-temptation/Seirah01.jpg", alt: "Seirah 01" },
            { src: "/images/collections/freedoms-temptation/Seirah02.jpg", alt: "Seirah 02" },
            { src: "/images/collections/freedoms-temptation/Seirah03.jpg", alt: "Seirah 03" },
            { src: "/images/collections/freedoms-temptation/Seirah04.jpg", alt: "Seirah 04" },
            { src: "/images/collections/freedoms-temptation/Seirah05.jpg", alt: "Seirah 05" },
            { src: "/images/collections/freedoms-temptation/Seirah06.jpg", alt: "Seirah 06" },
            { src: "/images/collections/freedoms-temptation/Seirah07.jpg", alt: "Seirah 07" },
            { src: "/images/collections/freedoms-temptation/Seirah08.jpg", alt: "Seirah 08" },
            { src: "/images/collections/freedoms-temptation/all4.jpg", alt: "All 4 ; Carmen/Valya/Mira/Seirah" },
            { src: "/images/collections/freedoms-temptation/Letty01.jpg", alt: "Letty 01" },
            { src: "/images/collections/freedoms-temptation/Letty02.jpg", alt: "Letty 02" },
            { src: "/images/collections/freedoms-temptation/Letty03.jpg", alt: "Letty 03" },
            { src: "/images/collections/freedoms-temptation/Letty04.jpg", alt: "Letty 04" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss01.jpg", alt: "Letty/Caliss 01" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss02.jpg", alt: "Letty/Caliss 02" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss03.jpg", alt: "Letty/Caliss 03" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss04.jpg", alt: "Letty/Caliss 04" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss05.jpg", alt: "Letty/Caliss 05" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss06.jpg", alt: "Letty/Caliss 06" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss07.jpg", alt: "Letty/Caliss 07" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss09.jpg", alt: "Letty/Caliss 09" },
            { src: "/images/collections/freedoms-temptation/LettyxCaliss10.jpg", alt: "Letty/Caliss 10" },
            { src: "/images/collections/freedoms-temptation/Caliss01.jpg", alt: "Caliss 01" },
            { src: "/images/collections/freedoms-temptation/Caliss02.jpg", alt: "Caliss 02" },
            { src: "/images/collections/freedoms-temptation/Caliss03.jpg", alt: "Caliss 03" },
            { src: "/images/collections/freedoms-temptation/Caliss04.jpg", alt: "Caliss 04" },
            { src: "/images/collections/freedoms-temptation/Caliss05.jpg", alt: "Caliss 05" },
            { src: "/images/collections/freedoms-temptation/hero.jpg", alt: "Collection complète" },
        ],
    },
];