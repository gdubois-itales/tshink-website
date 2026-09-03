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
        title: "Bi-Pull", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/biPull.jpg`, alt: "Bi-Pull, porté" },
        modalImages: [{ src: `${V}/buste/biPullB.jpg`, alt: "Bi-Pull, sur buste" }],
    },
    {
        slug: "byzance-01",
        cat: "vetement",
        title: "Byzance I", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/byzance01.jpg`, alt: "Byzance I, porté" },
        modalImages: [{ src: `${V}/buste/byzance01B.jpg`, alt: "Byzance I, sur buste" }],
    },
    {
        slug: "byzance-02",
        cat: "vetement",
        title: "Byzance II", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/byzance02.jpg`, alt: "Byzance II, porté" },
        modalImages: [{ src: `${V}/buste/byzance02B.jpg`, alt: "Byzance II, sur buste" }],
    },
    {
        slug: "byzance-03",
        cat: "vetement",
        title: "Byzance III", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/byzance03.jpg`, alt: "Byzance III, porté" },
        // À VÉRIFIER : byzance03B.jpg ET byzance03B1.jpg existent tous les deux —
        // je suppose que ce sont 2 angles bustes de la même pièce. Confirme.
        modalImages: [
            { src: `${V}/buste/byzance03B.jpg`, alt: "Byzance III, sur buste" },
            { src: `${V}/buste/byzance03B1.jpg`, alt: "Byzance III, sur buste, autre angle" },
        ],
    },
    {
        slug: "byzance-003",
        cat: "vetement",
        title: "Byzance IV", // À COMPLÉTER — nom de fichier ambigu, voir note ci-dessous
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // À VÉRIFIER : "byzance003.jpg" n'a pas de photo buste correspondante
        // clairement identifiable dans ton dossier. Pas de doublon avec Byzance III ?
        cardImage: { src: `${V}/model/byzance003.jpg`, alt: "Byzance IV, porté" },
        modalImages: [{ src: `${V}/model/byzance003.jpg`, alt: "Byzance IV, porté" }],
    },
    {
        slug: "cape-001",
        cat: "vetement",
        title: "Cape Vêtement I", // À COMPLÉTER (nom provisoire pour la distinguer des accessoires "Cape A/B")
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // À VÉRIFIER : j'ai supposé cape001.jpg <-> cape01B.jpg (numérotation différente : 001 vs 01)
        cardImage: { src: `${V}/model/cape001.jpg`, alt: "Cape Vêtement I, portée" },
        modalImages: [{ src: `${V}/buste/cape01B.jpg`, alt: "Cape Vêtement I, sur buste" }],
    },
    {
        slug: "cape-02",
        cat: "vetement",
        title: "Cape Vêtement II", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/cape02.jpg`, alt: "Cape Vêtement II, portée" },
        modalImages: [{ src: `${V}/buste/cape02B.jpg`, alt: "Cape Vêtement II, sur buste" }],
    },
    {
        slug: "cape-03",
        cat: "vetement",
        title: "Cape Vêtement III", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // Pas de photo buste pour cette pièce : on réutilise la photo modèle dans la modale
        // (même logique que pour "Top Fleuri III" plus bas).
        cardImage: { src: `${V}/model/cape03.jpg`, alt: "Cape Vêtement III, portée" },
        modalImages: [{ src: `${V}/model/cape03.jpg`, alt: "Cape Vêtement III, portée" }],
    },
    {
        slug: "capette-01",
        cat: "vetement",
        title: "Capette I", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/capette01.jpg`, alt: "Capette I, portée" },
        modalImages: [{ src: `${V}/buste/capette01B.jpg`, alt: "Capette I, sur buste" }],
    },
    {
        slug: "capette-02",
        cat: "vetement",
        title: "Capette II", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/capette02.jpg`, alt: "Capette II, portée" },
        modalImages: [{ src: `${V}/buste/capette02B.jpg`, alt: "Capette II, sur buste" }],
    },
    {
        slug: "open-veste",
        cat: "vetement",
        title: "Open Veste", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/openVeste.jpg`, alt: "Open Veste, portée" },
        modalImages: [{ src: `${V}/buste/openVesteB.jpg`, alt: "Open Veste, sur buste" }],
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
        title: "Pull Réversible I", // À COMPLÉTER
        meta: "Pièce unique — Réversible", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // À VÉRIFIER : "reverse01.jpg" (dossier model) et "pulRev01.jpg" (dossier buste)
        // n'ont pas le même nom de base — je suppose que c'est la même pièce
        // (pull réversible), nommée différemment dans les 2 dossiers. Confirme.
        cardImage: { src: `${V}/model/reverse01.jpg`, alt: "Pull Réversible I, porté" },
        modalImages: [{ src: `${V}/buste/pulRev01.jpg`, alt: "Pull Réversible I, sur buste" }],
    },
    {
        slug: "reverse-02",
        cat: "vetement",
        title: "Pull Réversible II", // À COMPLÉTER
        meta: "Pièce unique — Réversible", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // Même remarque que ci-dessus : reverse02.jpg <-> pulRev02.jpg
        cardImage: { src: `${V}/model/reverse02.jpg`, alt: "Pull Réversible II, porté" },
        modalImages: [{ src: `${V}/buste/pulRev02.jpg`, alt: "Pull Réversible II, sur buste" }],
    },
    {
        slug: "top-01",
        cat: "vetement",
        title: "Top I", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/top01.jpg`, alt: "Top I, porté" },
        modalImages: [{ src: `${V}/buste/top01B.jpg`, alt: "Top I, sur buste" }],
    },
    {
        slug: "top-02",
        cat: "vetement",
        title: "Top II", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/top02.jpg`, alt: "Top II, porté" },
        modalImages: [{ src: `${V}/buste/top02B.jpg`, alt: "Top II, sur buste" }],
    },
    {
        slug: "top-fleuri-3",
        cat: "vetement",
        title: "Top Fleuri III",
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        cardImage: { src: `${V}/model/top03.jpg`, alt: "Top Fleuri III, porté" },
        // Pas de photo buste pour cette pièce : on réutilise la photo modèle dans la modale.
        modalImages: [{ src: `${V}/model/top03.jpg`, alt: "Top Fleuri III, porté" }],
    },
    {
        slug: "top-texture-creme",
        cat: "vetement",
        title: "Top Texturé Crème",
        meta: "Pièce unique — Maille",
        desc: "Top ample à manches longues en maille texturée, coupe fluide, ton crème.",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/top04.jpg`, alt: "Top Texturé Crème, porté" },
        modalImages: [{ src: `${V}/buste/top04B.jpg`, alt: "Top Texturé Crème, sur buste" }],
    },
    {
        slug: "tri-jupe-franges",
        cat: "vetement",
        title: "Tri-Jupe Franges",
        meta: "Pièce unique",
        desc: "Jupe superposée à finitions franges, jouant sur la transparence et le mouvement.",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/triJupe.jpg`, alt: "Tri-Jupe Franges, portée" },
        modalImages: [{ src: `${V}/buste/triJupeB.jpg`, alt: "Tri-Jupe Franges, sur buste" }],
    },
    {
        slug: "veste-chinee",
        cat: "vetement",
        title: "Veste Chinée",
        meta: "Pièce unique — Tweed",
        desc: "Veste longue en tweed chiné noir et blanc, finitions contrastées, portée ouverte.",
        badge: "Sur commande",
        cardImage: { src: `${V}/model/vesteChine.jpg`, alt: "Veste Chinée, portée" },
        modalImages: [{ src: `${V}/buste/vesteChineB.jpg`, alt: "Veste Chinée, sur buste" }],
    },
    {
        slug: "veste-dc",
        cat: "vetement",
        title: "Veste DC", // À COMPLÉTER
        meta: "Pièce unique", // À COMPLÉTER
        desc: "À compléter — décris cette pièce ici.", // À COMPLÉTER
        badge: "Sur commande", // À COMPLÉTER
        // À VÉRIFIER : "vesteDC.jpg" (minuscule) <-> "VesteDCB.jpg" (majuscule) —
        // casse différente, à uniformiser si ton hébergeur est sensible à la casse.
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