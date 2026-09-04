// lib/creations.ts
//
// Source unique des données pour la page Créations.
// app/creations/page.tsx importe ce fichier et se contente de l'afficher —
// ajouter/modifier une pièce se fait uniquement ici, jamais dans page.tsx.

export type Category = "vetement" | "accessoire";

export type Creation = {
    slug: string;
    cat: Category;
    title: string;
    meta: string;
    desc: string;
    size: string;
    price: string;
    badge: string;
    cardImage: { src: string; alt: string };
    modalImages: { src: string; alt: string }[];
};

const V = "/images/creations/vetements";
const A = "/images/creations/accessoires";

// ============================================================
// VÊTEMENTS (22 pièces)
// cardImage = photo "model" (portée) — modalImages = photo(s) "buste"
// ============================================================

const vetements: Creation[] = [
    {
        slug: "bi-pull",
        cat: "vetement",
        title: "Pull en 2 - 127,70 €",
        meta: "Pièce unique",
        desc: "Sweat rouge.\nCoton/viscose écru ligné rouge.",
        size: "Taille 38",
        price: "Matières = 17,70 €.\nModèle = 110 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/biPull.jpg`, alt: "Bi-Pull, porté" },
        modalImages: [
            { src: `${V}/buste/biPullB.jpg`, alt: "Bi-Pull, sur buste" },
            { src: `${V}/model/biPull.jpg`, alt: "Bi-Pull, porté" }],
    },
    {
        slug: "byzance-01",
        cat: "vetement",
        title: "Byzance Grey - 281,50 €",
        meta: "Pièce unique",
        desc: "Fausse fourrure ligné blanc/gris.\nFausse fourrure gris ardoise.\nDoublure satinée beige.",
        size: "Taille 38/40",
        price: "Matières = 86,50 €.\nModèle = 195 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/byzance01.jpg`, alt: "Byzance Grey, porté" },
        modalImages: [
            { src: `${V}/buste/byzance01B.jpg`, alt: "Byzance Grey, sur buste" },
            { src: `${V}/model/byzance01.jpg`, alt: "Byzance Grey, porté" }],
    },
    {
        slug: "byzance-02",
        cat: "vetement",
        title: "Byzance Red - 255 €",
        meta: "Pièce unique",
        desc: "Fausse fourrure écrue double face quadrillée rouge.\nFausse fourrure girs/brun.",
        size: "Taille 38/40",
        price: "Modèle = 195 €.\nMatières = 60 €.",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/byzance02.jpg`, alt: "Byzance Red, porté" },
        modalImages: [
            { src: `${V}/buste/byzance02B.jpg`, alt: "Byzance Red, sur buste" },
            { src: `${V}/model/byzance02.jpg`, alt: "Byzance Red, porté" }],
    },
    {
        slug: "byzance-03",
        cat: "vetement",
        title: "Byzance White - 275 €",
        meta: "Pièce unique",
        desc: "Fausse fourrue écrue tachetée.\nFausse fourrure écrue.",
        size: "Taille 38/40",
        price: "Modèle = 195 €.\nMatières = 80 €.",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/byzance03.jpg`, alt: "Byzance White, porté" },
        modalImages: [
            { src: `${V}/buste/byzance03B.jpg`, alt: "Byzance White, sur buste" },
            { src: `${V}/model/byzance03.jpg`, alt: "Byzance White, porté" },
        ],
    },
    {
        slug: "decape-01",
        cat: "vetement",
        title: "Décape Fur Ecru - 138,75 €",
        meta: "Pièce unique",
        desc: "Fausse fourrure écrue tachetée.\nFausse fourrure écrue.\nDoublue ardoise satinée.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatoères = 38,75 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/cape01.jpg`, alt: "Décape Fur Ecru, portée" },
        modalImages: [
            { src: `${V}/buste/cape01B.jpg`, alt: "Décape Fur Ecru, sur buste" },
            { src: `${V}/model/cape01.jpg`, alt: "Décape Fur Ecru, portée" }],
    },
    {
        slug: "decape-02",
        cat: "vetement",
        title: "Décape Red - 141,50 €",
        meta: "Pièce unique",
        desc: "Laine bouclette rouge.\nLainage fin rouge.\nDoublure ardoise satinée.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 41,50 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/cape02.jpg`, alt: "Décape Red, portée" },
        modalImages: [
            { src: `${V}/buste/cape02B.jpg`, alt: "Décape Red, sur buste" },
            { src: `${V}/model/cape02.jpg`, alt: "Décape Red, portée" }],
    },
    {
        slug: "decape-03",
        cat: "vetement",
        title: "Décape Minkee Ecru - 127 €",
        meta: "Pièce unique",
        desc: "Minkee écru.\nMaille à peluchons blanc.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 27 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/cape03.jpg`, alt: "Décape Minkee Ecru, portée" },
        modalImages: [{ src: `${V}/model/cape03.jpg`, alt: "Décape Minkee Ecru, portée" }],
    },
    {
        slug: "capette-01",
        cat: "vetement",
        title: "Capette SD Blue - 127 €",
        meta: "Pièce unique",
        desc: "Laine chevron bleu/écru.\nGalon.",
        size: "Taille 38",
        price: "Modèle = 85 €.\nMatières = 42 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/capette01.jpg`, alt: "Capette SD Blue, portée" },
        modalImages: [
            { src: `${V}/buste/capette01B.jpg`, alt: "Capette SD Blue, sur buste" },
            { src: `${V}/model/capette01.jpg`, alt: "Capette SD Blue, portée" }],
    },
    {
        slug: "capette-02",
        cat: "vetement",
        title: "Capette SD White/Grey - 115 €",
        meta: "Pièce unique",
        desc: "Laine bouclette lignée gris/écru.",
        size: "Taille 38",
        price: "Modèle = 85 €.\nMatières = 30 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/capette02.jpg`, alt: "Capette SD White/Grey, portée" },
        modalImages: [
            { src: `${V}/buste/capette02B.jpg`, alt: "Capette SD White/Grey, sur buste" },
            { src: `${V}/model/capette02.jpg`, alt: "Capette SD White/Grey, portée" }],
    },
    {
        slug: "open-veste",
        cat: "vetement",
        title: "OpenLegs - 304,85 €",
        meta: "Pièce unique",
        desc: "Vinyle noir.\nDoublure jacquard satinée beige.",
        size: "Taille 38",
        price: "Modèle = 250 €.\nMatières = 54,85 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/openVeste.jpg`, alt: "OpenLegs, portée" },
        modalImages: [
            { src: `${V}/buste/openVesteB.jpg`, alt: "OpenLegs, sur buste" },
            { src: `${V}/model/openVeste.jpg`, alt: "OpenLegs, portée" }],
    },
    {
        slug: "pant-corset",
        cat: "vetement",
        title: "Pantalon Corset", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/pantCorset.jpg`, alt: "Pantalon Corset, porté" },
        modalImages: [{ src: `${V}/buste/pantCorsetB.jpg`, alt: "Pantalon Corset, sur buste" }],
    },
    {
        slug: "pant-valy",
        cat: "vetement",
        title: "Pantalon Valy", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/pantValy.jpg`, alt: "Pantalon Valy, porté" },
        modalImages: [{ src: `${V}/buste/pantValyB.jpg`, alt: "Pantalon Valy, sur buste" }],
    },
    {
        slug: "reverse-01",
        cat: "vetement",
        title: "Maille de 2 - 192 €",
        meta: "Pièce unique — Réversible",
        desc: "Maille impriméjacquard.",
        size: "Taille 38/40",
        price: "Modèle = 150 €.\nMatières = 42 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/reverse01.jpg`, alt: "Pull Réversible I, porté" },
        modalImages: [
            { src: `${V}/buste/pulRev01.jpg`, alt: "Maille de 2 I, sur buste" },
            { src: `${V}/buste/pulRev02.jpg`, alt: "Maille de 2 II, sur buste" },
            { src: `${V}/model/reverse01.jpg`, alt: "Maille de 2 I, porté" },
            { src: `${V}/model/reverse02.jpg`, alt: "Maille de 2 II, porté" }],
    },
    {
        slug: "robe-fakecoat",
        cat: "vetement",
        title: "Robe Fake Coat - 379,40 €",
        meta: "Pièce unique",
        desc: "Tartan rouge.\nVoile noir.\nDoublure noire.",
        size: "Taille 38",
        price: "Modèle = 320 €.\nMatières = 59,40 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/robeFakeCoat.jpg`, alt: "Robe Fake Coat, porté" },
        modalImages: [
            { src: `${V}/buste/robeFakeCoatB.jpg`, alt: "Robe Fake Coat, sur buste" },
            { src: `${V}/model/robeFakeCoat.jpg`, alt: "Robe Fake Coat, porté" }],
    },
    {
        slug: "top-01",
        cat: "vetement",
        title: "Top KMiSol Grey - 115 €",
        meta: "Pièce unique",
        desc: "Voile de polyester gris/mauve, quadrillage floqué noir.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 15 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/top01.jpg`, alt: "Top I, porté" },
        modalImages: [
            { src: `${V}/buste/top01B.jpg`, alt: "Top KMiSol Grey, sur buste" },
            { src: `${V}/model/top01.jpg`, alt: "Top KMiSol Grey, porté" }],
    },
    {
        slug: "top-02",
        cat: "vetement",
        title: "Top KMiSol Red - 115€",
        meta: "Pièce unique",
        desc: "Polyester satiné rouge, tacheté noit/écru..",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 15 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/top02.jpg`, alt: "Top KMiSol Red, porté" },
        modalImages: [
            { src: `${V}/buste/top02B.jpg`, alt: "Top KMiSol Red, sur buste" },
            { src: `${V}/model/top02.jpg`, alt: "Top KMiSol Red, porté" }],
    },
    {
        slug: "top-03",
        cat: "vetement",
        title: "Top KMiSol Green - 115 €",
        meta: "Pièce unique",
        desc: "Polyester satiné vert, tacheté noir/écru.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 15 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/top03.jpg`, alt: "Top KMiSol Green, porté" },
        modalImages: [
            { src: `${V}/buste/top03B.jpg`, alt: "Top KMiSol Green, sur buste" },
            { src: `${V}/model/top03.jpg`, alt: "Top KMiSol Green, porté" }],
    },
    {
        slug: "top-04",
        cat: "vetement",
        title: "Top KMiSol Black/Yellow/Gold - 115 €",
        meta: "Pièce unique",
        desc: "Viscose fond blanc, tacheté noir/jaune/or.",
        size: "Taille 38",
        price: "Modèle = 100 €.\nMatières = 15 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/top04.jpg`, alt: "Top KMiSol Black/Yellow/Gold, porté" },
        modalImages: [
            { src: `${V}/buste/top04B.jpg`, alt: "Top KMiSol Black/Yellow/Gold, sur buste" },
            { src: `${V}/model/top04.jpg`, alt: "Top KMiSol Black/Yellow/Gold, porté" }],
    },
    {
        slug: "tri-jupe",
        cat: "vetement",
        title: "Tri-Jupe - ",
        meta: "Pièce unique",
        desc: "DESCRIPTION A FAIRE",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/triJupe.jpg`, alt: "Tri-Jupe Franges, portée" },
        modalImages: [{ src: `${V}/buste/triJupeB.jpg`, alt: "Tri-Jupe Franges, sur buste" }],
    },
    {
        slug: "veste-chine",
        cat: "vetement",
        title: "Veste Chine - 309,40 €",
        meta: "Pièce unique",
        desc: "Fausse fourrure gris ardoise.\nCoton écru.\nDoublure noire.",
        size: "Taille 38",
        price: "Modèle = 220 €.\nMatières = 89,40 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/vesteChine.jpg`, alt: "Veste Chine, portée" },
        modalImages: [
            { src: `${V}/buste/vesteChineB.jpg`, alt: "Veste Chine, sur buste" },
            { src: `${V}/model/vesteChine.jpg`, alt: "Veste Chine, portée" }],
    },
    {
        slug: "veste-dc",
        cat: "vetement",
        title: "Veste DC - 280,50 €",
        meta: "Pièce unique",
        desc: "Fausse fourrure crème.\nDoublure noire.\nTissu texturé noir.",
        size: "Taille 38",
        price: "Modèle = 215 €.\nMatières = 65,50 €",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/vesteDC.jpg`, alt: "Veste DC, portée" },
        modalImages: [{ src: `${V}/buste/VesteDCB.jpg`, alt: "Veste DC, sur buste" }],
    },
];

// ============================================================
// ACCESSOIRES (22 modèles)
// ============================================================

const accessoires: Creation[] = [
    {
        slug: "chale-mom",
        cat: "accessoire",
        title: "Châle Mom",
        meta: "Accessoire — Tricot",
        desc: "Châle enveloppant à motif torsadé, pensé pour un usage cocooning autant qu'élégant.",
        badge: "Disponible",
        cardImage: { src: `${A}/chaleMom.jpg`, alt: "Châle Mom" },
        modalImages: [{ src: `${A}/chaleMom.jpg`, alt: "Châle Mom" }],
    },
    {
        slug: "cheche-noir",
        cat: "accessoire",
        title: "Chèche Noir",
        meta: "Accessoire — Coton",
        desc: "Chèche minimaliste, finitions franges, pensé pour s'associer à toutes les silhouettes.",
        badge: "Disponible",
        cardImage: { src: `${A}/checheNoir.jpg`, alt: "Chèche Noir" },
        modalImages: [{ src: `${A}/checheNoir.jpg`, alt: "Chèche Noir" }],
    },
    {
        slug: "cheche-militaire",
        cat: "accessoire",
        title: "Chèche Militaire",
        meta: "Accessoire — Coton",
        desc: "Variation kaki du chèche, ambiance utilitaire et graphique.",
        badge: "Disponible",
        cardImage: { src: `${A}/checheMilitaire.jpg`, alt: "Chèche Militaire" },
        modalImages: [{ src: `${A}/checheMilitaire.jpg`, alt: "Chèche Militaire" }],
    },
    {
        slug: "echarpe-fourrure",
        cat: "accessoire",
        title: "Écharpe Fourrure",
        meta: "Accessoire — Fausse fourrure",
        desc: "Écharpe tubulaire en fausse fourrure, chaude et texturée, pour twister une tenue simple.",
        badge: "Disponible",
        cardImage: { src: `${A}/EcharpeFur.jpg`, alt: "Écharpe Fourrure" },
        modalImages: [{ src: `${A}/EcharpeFur.jpg`, alt: "Écharpe Fourrure" }],
    },
    {
        slug: "echarpe-tricolore",
        cat: "accessoire",
        title: "Écharpe Tricolore",
        meta: "Accessoire — Laine",
        desc: "Écharpe rayée à trois teintes, tissée à la main, pièce graphique et chaude.",
        badge: "Disponible",
        cardImage: { src: `${A}/EcharpeTriColor.jpg`, alt: "Écharpe Tricolore" },
        modalImages: [{ src: `${A}/EcharpeTriColor.jpg`, alt: "Écharpe Tricolore" }],
    },
    {
        slug: "capuche-grise",
        cat: "accessoire",
        title: "Capuche Grise",
        meta: "Accessoire — Maille",
        desc: "Capuche enveloppante en maille grise, portée seule ou par-dessus une veste.",
        badge: "Disponible",
        cardImage: { src: `${A}/capucheGris.jpg`, alt: "Capuche Grise" },
        modalImages: [{ src: `${A}/capucheGris.jpg`, alt: "Capuche Grise" }],
    },
    {
        slug: "capuche-echarpe",
        cat: "accessoire",
        title: "Capuche-Écharpe",
        meta: "Accessoire — Maille",
        desc: "Capuche prolongée en écharpe, deux accessoires réunis en une seule pièce continue.",
        badge: "Disponible",
        cardImage: { src: `${A}/capucheEcharpe.jpg`, alt: "Capuche-Écharpe" },
        modalImages: [{ src: `${A}/capucheEcharpe.jpg`, alt: "Capuche-Écharpe" }],
    },
    {
        slug: "cape-a",
        cat: "accessoire",
        title: "Cape A", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/CapeA.jpg`, alt: "Cape A" },
        modalImages: [
            { src: `${A}/CapeA.jpg`, alt: "Cape A" },
            { src: `${A}/CapeAbis.jpg`, alt: "Cape A, autre angle" },
        ],
    },
    {
        slug: "cape-b",
        cat: "accessoire",
        title: "Cape B", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/CapeB.jpg`, alt: "Cape B" },
        modalImages: [
            { src: `${A}/CapeB.jpg`, alt: "Cape B" },
            { src: `${A}/CapeBbis.jpg`, alt: "Cape B, autre angle" },
        ],
    },
    {
        slug: "panier-lingette",
        cat: "accessoire",
        title: "Panier Lingette", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/PanierLingette.jpg`, alt: "Panier Lingette" },
        modalImages: [{ src: `${A}/PanierLingette.jpg`, alt: "Panier Lingette" }],
    },
    {
        slug: "pied-poule",
        cat: "accessoire",
        title: "Pied-de-Poule", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/PiedPoule.jpg`, alt: "Pied-de-Poule" },
        modalImages: [{ src: `${A}/PiedPoule.jpg`, alt: "Pied-de-Poule" }],
    },
    {
        slug: "sac-bulldog",
        cat: "accessoire",
        title: "Sac Bulldog", // À COMPLÉTER
        meta: "Accessoire — Sac", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        // À VÉRIFIER : "SacReverseBulldog.jpg" et "sacsBulldog.jpg" — 2 angles
        // du même sac, ou 2 sacs différents ? J'ai supposé la même pièce.
        cardImage: { src: `${A}/SacReverseBulldog.jpg`, alt: "Sac Bulldog" },
        modalImages: [
            { src: `${A}/SacReverseBulldog.jpg`, alt: "Sac Bulldog" },
            { src: `${A}/sacsBulldog.jpg`, alt: "Sac Bulldog, autre angle" },
        ],
    },
    {
        slug: "sac-chat",
        cat: "accessoire",
        title: "Sac Chat", // À COMPLÉTER
        meta: "Accessoire — Sac", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        // Même remarque que Sac Bulldog : SacReverseChat.jpg + sacsChat.jpg
        cardImage: { src: `${A}/SacReverseChat.jpg`, alt: "Sac Chat" },
        modalImages: [
            { src: `${A}/SacReverseChat.jpg`, alt: "Sac Chat" },
            { src: `${A}/sacsChat.jpg`, alt: "Sac Chat, autre angle" },
        ],
    },
    {
        slug: "snood-cream",
        cat: "accessoire",
        title: "Snood Crème", // À COMPLÉTER
        meta: "Accessoire — Snood", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/SnoodCream.jpg`, alt: "Snood Crème" },
        modalImages: [{ src: `${A}/SnoodCream.jpg`, alt: "Snood Crème" }],
    },
    {
        slug: "snood-04",
        cat: "accessoire",
        title: "Snood IV", // À COMPLÉTER
        meta: "Accessoire — Snood", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        // À VÉRIFIER : snood04.jpg et snood05.jpg — traités comme 2 modèles
        // DIFFÉRENTS (pas 2 angles du même). Confirme si c'est bien le cas.
        cardImage: { src: `${A}/snood04.jpg`, alt: "Snood IV" },
        modalImages: [{ src: `${A}/snood04.jpg`, alt: "Snood IV" }],
    },
    {
        slug: "snood-05",
        cat: "accessoire",
        title: "Snood V", // À COMPLÉTER
        meta: "Accessoire — Snood", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/snood05.jpg`, alt: "Snood V" },
        modalImages: [{ src: `${A}/snood05.jpg`, alt: "Snood V" }],
    },
    {
        slug: "bichale",
        cat: "accessoire",
        title: "Bi-Châle", // À COMPLÉTER
        meta: "Accessoire — Châle", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/bichale01.jpg`, alt: "Bi-Châle" },
        modalImages: [
            { src: `${A}/bichale01.jpg`, alt: "Bi-Châle" },
            { src: `${A}/bichale02.jpg`, alt: "Bi-Châle, autre angle" },
            { src: `${A}/bichale03.jpg`, alt: "Bi-Châle, détail" },
        ],
    },
    {
        slug: "echarpe-multi-orange",
        cat: "accessoire",
        title: "Écharpe Multi Orange", // À COMPLÉTER
        meta: "Accessoire — Laine", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/echarpeMultiOrange01.jpg`, alt: "Écharpe Multi Orange" },
        modalImages: [
            { src: `${A}/echarpeMultiOrange01.jpg`, alt: "Écharpe Multi Orange" },
            { src: `${A}/echarpeMultiOrange02.jpg`, alt: "Écharpe Multi Orange, autre angle" },
            { src: `${A}/echarpeMultiOrange03.jpg`, alt: "Écharpe Multi Orange, détail" },
        ],
    },
    {
        slug: "echarpe-multi-rouge",
        cat: "accessoire",
        title: "Écharpe Multi Rouge", // À COMPLÉTER
        meta: "Accessoire — Laine", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/echarpeMultiRouge01.jpg`, alt: "Écharpe Multi Rouge" },
        modalImages: [
            { src: `${A}/echarpeMultiRouge01.jpg`, alt: "Écharpe Multi Rouge" },
            { src: `${A}/echarpeMultiRouge02.jpg`, alt: "Écharpe Multi Rouge, autre angle" },
            { src: `${A}/echarpeMultiRouge03.jpg`, alt: "Écharpe Multi Rouge, détail" },
        ],
    },
    {
        slug: "tdc-01",
        cat: "accessoire",
        title: "Tour de Cou I", // À COMPLÉTER — j'ai supposé "tdc" = "tour de cou"
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/tdc01face.jpg`, alt: "Tour de Cou I, face" },
        modalImages: [
            { src: `${A}/tdc01face.jpg`, alt: "Tour de Cou I, face" },
            { src: `${A}/tdc01profil.jpg`, alt: "Tour de Cou I, profil" },
        ],
    },
    {
        slug: "tdc-02",
        cat: "accessoire",
        title: "Tour de Cou II", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/tdc02.jpg`, alt: "Tour de Cou II" },
        modalImages: [{ src: `${A}/tdc02.jpg`, alt: "Tour de Cou II" }],
    },
    {
        slug: "tdc-03",
        cat: "accessoire",
        title: "Tour de Cou III", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/tdc03.jpg`, alt: "Tour de Cou III" },
        modalImages: [{ src: `${A}/tdc03.jpg`, alt: "Tour de Cou III" }],
    },
    {
        slug: "tdc-04",
        cat: "accessoire",
        title: "Tour de Cou IV", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        cardImage: { src: `${A}/tdc04.jpg`, alt: "Tour de Cou IV" },
        modalImages: [{ src: `${A}/tdc04.jpg`, alt: "Tour de Cou IV" }],
    },
    {
        slug: "tdc-brun",
        cat: "accessoire",
        title: "Tour de Cou Brun", // À COMPLÉTER
        meta: "Accessoire", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Disponible", // À COMPLÉTER
        // À VÉRIFIER : "tcdBrun.jpg" (lettres inversées : "tcd" et non "tdc") —
        // probablement une faute de frappe au moment du nommage du fichier,
        // à renommer en "tdcBrun.jpg" si tu veux rester cohérente avec les autres.
        cardImage: { src: `${A}/tcdBrun.jpg`, alt: "Tour de Cou Brun" },
        modalImages: [{ src: `${A}/tcdBrun.jpg`, alt: "Tour de Cou Brun" }],
    },
];

export const creations: Creation[] = [...vetements, ...accessoires];