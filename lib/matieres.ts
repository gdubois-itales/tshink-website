// lib/matieres.ts
//
// Source unique des données pour la page "Matières en stock".
// Même principe que lib/creations.ts : tu ajoutes/modifies uniquement ici.

export type Matiere = {
    slug: string;
    name: string;
    composition: string;
    image: { src: string; alt: string };
};

const M = "/images/matieres";

export const matieres: Matiere[] = [
    {
        slug: "matieres-01",
        name: "01 - Viscose Motif Floral Vintage",
        composition: "100% viscose.\nLéger, fluide." +
            "\nUtilisation Suggérée : Blouses, chemisiers, robes légères, jupes fluides." +
            "\nPalette de Couleurs : Blanc crème, Rouille, Orange, Rouge, Jaune moutarde, Vert olive, Bleu canard.",
        image: { src: `${M}/matiere-01.jpg`, alt: "01 - Viscose fleurie" },
    },
    {
        slug: "matiere-02",
        name: "02 - Tartan",
        composition: "Tartan rouge traditionnel.\nMotif écossais classique." +
            "\nUtilisation Suggérée : Jupes plissées, chemises, vestes, pantalons, écharpes ou accessoires de mode et de décoration." +
            "\nPalette de Couleurs : Rouge vif, Vert foncé, Noir, Blanc, Jaune.",
        image: { src: `${M}/matiere-02.jpg`, alt: "02 - Tartan rouge" },
    },
    {
        slug: "matiere-03",
        name: "03 - Voile Motif Floral",
        composition: "Voile de polyester fin bleu nuit, motifs floral." +
            "\nUtilisation Suggérée : Robes de jour ou de soirée fluides, chemisiers légers, jupes larges ou même accessoires comme des foulards ou des bandeaux." +
            "\nPalette de Couleurs : Bleu marine, Blanc cassé, Jaune doré, Vert, Magenta, Rose.",
        image: { src: `${M}/matiere-03.jpg`, alt: "03 - Voile motif floral" },
    },
    {
        slug: "matiere-04",
        name: "04 - Viscose Brocard Floral",
        composition: "Viscose brocard floral, style baroque noir et pourpre." +
            "\nUtilisation Suggérée : Vestes ajustées, robes de soirée structurées, jupes crayon, ou éléments de décoration intérieure comme des coussins raffinés." +
            "\nPalette de Couleurs : Lie-de-vin (pourpre foncé), Noir.",
        image: { src: `${M}/matiere-04.jpg`, alt: "04 - Viscose brocard floral" },
    },
    {
        slug: "matiere-05",
        name: "05 - Minkee Texturé Gris Ardoise",
        composition: "Fausse fourrure synthétique, poil long et soyeux." +
            "\nUtilisation Suggérée : Vestes et manteaux de luxe, cols et poignets, gilets sans manches, doublures chaudes, plaids décoratifs, coussins raffinés, ou accessoires de mode (sacs, écharpes)." +
            "\nPalette de Couleurs : Gris ardoise, avec des variations de tons moyens à sombres dues à la profondeur du poil et à la structure matelassée.",
        image: { src: `${M}/matiere-05.jpg`, alt: "05 - Minkee texturé gris ardoise" },
    },
    {
        slug: "matiere-06",
        name: "06 - Minkee Texturé Brun/Crème",
        composition: "Fausse fourrure synthétique, poil long et soyeux." +
            "\nUtilisation Suggérée : Vestes ajustées, robes de soirée structurées, jupes crayon, ou éléments de décoration intérieure comme des coussins raffinés." +
            "\nPalette de Couleurs : Brun/Crème.",
        image: { src: `${M}/matiere-06.jpg`, alt: "06 - Minkee texturé brun/crème" },
    },
    {
        slug: "matiere-07",
        name: "07 - Minkee Texturé Blanc",
        composition: "Fausse fourrure synthétique, poil long et soyeux." +
            "\nUtilisation Suggérée : Vestes ajustées, robes de soirée structurées, jupes crayon, ou éléments de décoration intérieure comme des coussins raffinés." +
            "\nPalette de Couleurs : Blanc.",
        image: { src: `${M}/matiere-07.jpg`, alt: "07 - Minkee texturé blanc" },
    },
    {
        slug: "matiere-08",
        name: "08 - Minkee Lisse Blanc",
        composition: "Fausse fourrure synthétique, poil moyen." +
            "\nUtilisation Suggérée : Cols, poignets, gilets et manteaux complets, doublures chaudes, coussins décoratifs, plaids moelleux, ou accessoires de mode (sacs, étoles, écharpes)." +
            "\nPalette de Couleurs : Blanc pur.",
        image: { src: `${M}/matiere-08.jpg`, alt: "08 - Minkee lisse blanc" },
    },
    {
        slug: "matiere-09",
        name: "09 - Minkee Lisse Gris Clair",
        composition: "Fausse fourrure synthétique, poil moyen." +
            "\nUtilisation Suggérée : Cols, poignets, gilets et manteaux complets, doublures chaudes, coussins décoratifs, plaids moelleux, ou accessoires de mode (sacs, étoles, écharpes)." +
            "\nPalette de Couleurs : Blanc pur.",
        image: { src: `${M}/matiere-09.jpg`, alt: "09 - Minkee lisse gris clair" },
    },
    {
        slug: "matiere-010",
        name: "10 - Minkee Lisse Gris Ardoise",
        composition: "Fausse fourrure synthétique, poil moyen." +
            "\nUtilisation Suggérée : Cols, poignets, gilets et manteaux complets, doublures chaudes, coussins décoratifs, plaids moelleux, ou accessoires de mode (sacs, étoles, écharpes)." +
            "\nPalette de Couleurs : Gris ardoise.",
        image: { src: `${M}/matiere-10.jpg`, alt: "10 - Minkee lisse gris ardoise" },
    },
    {
        slug: "matiere-011",
        name: "11 - Dentelle Brodée noire et Tulle",
        composition: "Dentelle brodée avec fil épais noire, fond en tulle fin." +
            "\nUtilisation Suggérée : Bordure de décolleté, empiècement sur une robe de soirée ou un chemisier, manchette, ceinture, ou détail raffiné sur une pièce de lingerie ou un accessoire de mode." +
            "\nPalette de Couleurs : Noir de jais, Tulle transparent.",
        image: { src: `${M}/matiere-11.jpg`, alt: "11 - Dentelle brodée noire et tulle" },
    },
    {
        slug: "matiere-012",
        name: "12 - Fourrure Imprimé Effet Lynx",
        composition: "Fausse Fourrure synthétique imprimée effet lynx." +
            "\nUtilisation Suggérée : Cols et poignets de manteaux, gilets sans manches, écharpes élégantes, plaids décoratifs, coussins moelleux, ou détails de garniture sur des sacs." +
            "\nPalette de Couleurs : Blanc crème, Blanc argenté, Gris moyen, Gris foncé.",
        image: { src: `${M}/matiere-12.jpg`, alt: "12 - Fourrure imprimé effet lynx" },
    },
    {
        slug: "matiere-013",
        name: "13 - Crêpe Design Abstrait",
        composition: "Crêpe synthétique imprimé avec motifs abstraits." +
            "\nUtilisation Suggérée : Robes de jour modernes, chemisiers architecturaux, jupes fluides, vestes légères ou écharpes." +
            "\nPalette de Couleurs : Bordeaux profond, Gris perle, Bleu marine.",
        image: { src: `${M}/matiere-13.jpg`, alt: "13 - Crêpe design abstrait" },
    },
    {
        slug: "matiere-014",
        name: "14 - Viscose Imprimé Rayures",
        composition: "Viscose brocard floral, style baroque noir et pourpre."+
            "\nUtilisation Suggérée : Chemisiers fluides, robes droites, jupes à panneaux, pantalons larges, ou accessoires pour ajouter une note graphique." +
            "\nPalette de Couleurs : Bleu marine, Beige, Rouge, Noir.",
        image: { src: `${M}/matiere-14.jpg`, alt: "14 - Viscose imprimé rayures" },
    },
    {
        slug: "matiere-015",
        name: "15 - Voile de Coton Bordeaux",
        composition: "100% Voile de coton, motif petits pois écru." +
            "\nUtilisation Suggérée : Blouses légères, chemisiers à volants, robes d'été, jupes doublées, écharpes vaporeuses, ou empiècements délicats sur des vêtements plus structurés." +
            "\nPalette de Couleurs : Bordeaux profond, Blanc crème.",
        image: { src: `${M}/matiere-15.jpg`, alt: "15 - Voile de coton bordeaux" },
    },
    {
        slug: "matiere-016",
        name: "16 - Viscose Motif Abstrait",
        composition: "100% Viscose, design abstrait/géométrique inspiré du wax africain." +
            "\nUtilisation Suggérée : Robes fluides, chemisiers, jupes portefeuille, foulards ou sacs tote bags pour une touche d'originalité." +
            "\nPalette de Couleurs :Bleu marine, Corail, Turquoise, Orange, Blanc, Brun.",
        image: { src: `${M}/matiere-16.jpg`, alt: "16 - Viscose imprimé abstrait/géométrique" },
    },
    {
        slug: "matiere-017",
        name: "17 - Crêpe Motif Floral/Géométrique",
        composition: "Crêpe 100% polyester, motif floral/géométrique." +
            "\nUtilisation Suggérée : Robes ajustées, chemisiers fluides, jupes crayon, vestes légères ou pantalons larges." +
            "\nPalette de Couleurs : Ivoire (fond), Brun foncé (chocolat), Bleu marine, Beige.",
        image: { src: `${M}/matiere-17.jpg`, alt: "17 - Crêpe motif floral/géométrique" },
    },
    {
        slug: "matiere-018",
        name: "18 - Viscose Motif Art Déco",
        composition: "100% Viscose, motif géométrique  inspiré de l'art déco." +
            "\nUtilisation Suggérée : Robes longues fluides, chemisiers chics, jupes plissées, foulards ou doublures raffinées." +
            "\nPalette de Couleurs : Doré texturé, Rose poudré, Bordeaux, Blanc cassé.",
        image: { src: `${M}/matiere-18.jpg`, alt: "18 - Viscose motif art déco" },
    },
    {
        slug: "matiere-019",
        name: "19 - Viscose Motif Animal Abstrait",
        composition: "100% Viscose, motif animal abstrait noir/or." +
            "\nUtilisation Suggérée : Chemisiers fluides, robes droites ou portefeuille, jupes patineuses, pantalons larges ou foulards." +
            "\nPalette de Couleurs : Noir, Or métallique, Blanc crème.",
        image: { src: `${M}/matiere-19.jpg`, alt: "19 - Viscose motif animal abstrait noir/or" },
    },
    {
        slug: "matiere-020",
        name: "20 - Viscose Motif Renards",
        composition: "100% Viscose, motif renards sur fond noir/brun foncé." +
            "\nUtilisation Suggérée : Chemisiers fluides, robes droites ou portefeuille, jupes patineuses, foulards ou doublures de vestes pour une touche d'originalité." +
            "\nPalette de Couleurs : Noir, Brun, Orange brûlé, Beige crème, Blanc.",
        image: { src: `${M}/matiere-20.jpg`, alt: "20 - Viscose motif renards" },
    },
    {
        slug: "matiere-021",
        name: "21 - Crêpe Ivoire",
        composition: "100% Polyester, tombé fluide et élégant." +
            "\nUtilisation Suggérée : Robes de soirée, blouses élégantes, jupes mi-longues, pantalons larges, ou vestes de tailleur." +
            "\nPalette de Couleurs : Ivoire/Crème.",
        image: { src: `${M}/matiere-21.jpg`, alt: "21 - Crêpe ivoire" },
    },
    {
        slug: "matiere-022",
        name: "22 - Viscose Motif Floral Graphique",
        composition: "100% Viscose, motif floral graphique sur fond bleu marine profond." +
            "\nUtilisation Suggérée : Chemisiers fluides, robes droites ou portefeuille, jupes patineuses, pantalons larges ou foulards." +
            "\nPalette de Couleurs : Bleu marine, Jaune moutarde, Bordeaux/Lie-de-vin, Noir, Taches bleu ciel.",
        image: { src: `${M}/matiere-22.jpg`, alt: "22 - Viscose motif floral graphique" },
    },
    {
        slug: "matiere-023",
        name: "23 - Laine Bouclette Chiné Blanc/Noir",
        composition: "100% Laine bouclette, chiné blanc et noir." +
            "\nUtilisation Suggérée : Manteaux et vestes en laine, gilets oversize, jupes crayons chaudes, pulls épais, ou éléments de décoration intérieure (coussins, plaids raffinés)." +
            "\nPalette de Couleurs : Noir de jais, Blanc, Gris chiné.",
        image: { src: `${M}/matiere-23.jpg`, alt: "23 - Laine bouclette chiné blanc/noir" },
    },
    {
        slug: "matiere-024",
        name: "24 - Laine Tricotée Crème/Ecrue",
        composition: "100% Laine tricotée, légèrement feutrée, crème/écrue." +
            "\nUtilisation Suggérée : Pulls épais, gilets et cardigans, bonnets et écharpes, jupes droites chaudes, ou éléments de décoration intérieure comme des coussins douillets." +
            "\nPalette de Couleurs : Blanc cassé, Gris chiné.",
        image: { src: `${M}/matiere-24.jpg`, alt: "24 - Laine tricotée crème/ecrue" },
    },
    {
        slug: "matiere-025",
        name: "25 - Dentelle à Bouclettes Blanche",
        composition: "100% Polyester, dentelle texturée avec bouclettes blanche." +
            "\nUtilisation Suggérée : Capes légères, petites vestes, hauts fantaisie ou détails de garniture pour ajouter une note texturée et contemporaine." +
            "\nPalette de Couleurs : Blanc pur.",
        image: { src: `${M}/matiere-25.jpg`, alt: "25 - Dentelle texturée à bouclettes blanche" },
    },
    {
        slug: "matiere-026",
        name: "26 - Tricot Laine Bordeaux/Doré",
        composition: "100% Laine tricotée bordeaux avec motifs ajourés.\nFil de Lurex doré entrelacé dans la maille." +
            "\nUtilisation Suggérée : Gilets et cardigans élégants, pulls légers, jupes mi-longues structurées, écharpes raffinées, ou empiècements décoratifs sur des robes ou des vestes." +
            "\nPalette de Couleurs : Bordeaux profond, Doré (Lurex).",
        image: { src: `${M}/matiere-26.jpg`, alt: "26 - Laine tricotée bordeaux et lurex doré" },
    },
    {
        slug: "matiere-027",
        name: "27 - Tricot Maille Chinée Noir/Blanc",
        composition: "Mélange laine/polyester, maille chinée tricotée, noir et blanc." +
            "\nUtilisation Suggérée : Pulls élégants, chemisiers, blouses, jupes mi-longues, ou éléments de décoration intérieure comme des coussins douillets." +
            "\nPalette de Couleurs : Noir, Blanc.",
        image: { src: `${M}/matiere-27.jpg`, alt: "27 - Tricot maille chinée noir/blanc" },
    },
    {
        slug: "matiere-028",
        name: "28 - Coton Tricot Torsade Vert Olive",
        composition: "100% Coton tricoté à motifs torsadés, vert olive." +
            "\nUtilisation Suggérée : Gilets et cardigans, pulls légers, robes droites, jupes crayons, ou éléments de décoration intérieure comme des housses de coussin texturées." +
            "\nPalette de Couleurs : Vert Olive.",
        image: { src: `${M}/matiere-28.jpg`, alt: "28 - Coton tricot torsade vert olive" },
    },
    {
        slug: "matiere-029",
        name: "29 - Jersey Motif Floral Noir/Blanc",
        composition: "Mélange poly-coton, jersey tricoté avec motif floral, noir et blanc." +
            "\nUtilisation Suggérée : Robes moulantes, hauts et t-shirts, jupes patineuses, leggings ou doublures de vestes pour une touche d'originalité." +
            "\nPalette de Couleurs : Noir, Blanc.",
        image: { src: `${M}/matiere-29.jpg`, alt: "29 - Jersey poly-coton motif floral noir/blanc" },
    },
    {
        slug: "matiere-030",
        name: "30 - Jersey Texturé Maille Argent",
        composition: "100% Polyester, jersey maille argenté." +
            "\nUtilisation Suggérée : Robes ajustées, hauts et t-shirts chics, jupes patineuses, leggings, cardigans légers ou doublures de vestes pour une touche d'originalité." +
            "\nPalette de Couleurs : Noir, Argent.",
        image: { src: `${M}/matiere-30.jpg`, alt: "30 - Jersey texturé maille argent" },
    },
    {
        slug: "matiere-031",
        name: "31 - Jersey Motif Cercles Abstraits",
        composition: "Jersey 100% polyester, design cercles abstrait." +
            "\nUtilisation Suggérée : Robes fluides, t-shirts, jupes patineuses, leggings, foulards, ou hauts chics pour une touche d'originalité." +
            "\nPalette de Couleurs : Marron chocolat, Beige rosé (taupe), Gris bleu clair, Blanc cassé (fond).",
        image: { src: `${M}/matiere-31.jpg`, alt: "31 - Jersey motif cercles abstrait" },
    },
    {
        slug: "matiere-032",
        name: "32 - Fourrure Elastique Blanc Polaire",
        composition: "Fourrure synthétique élastique, poils moyens, blanc polaire." +
            "\nUtilisation Suggérée : cols et poignets, bonnets et écharpes, doublures de vestes pour un confort absolu, ou éléments de décoration intérieure (coussins douillets)." +
            "\nPalette de Couleurs : Blanc polaire.",
        image: { src: `${M}/matiere-32.jpg`, alt: "32 - Fourrure synthétique élastique blanc polaire" },
    },
    {
        slug: "matiere-033",
        name: "33 - Fourrure Elastique Gris Clair",
        composition: "Fourrure synthétique élastique, poils moyens, gris clair." +
            "\nUtilisation Suggérée : cols et poignets, bonnets et écharpes, doublures de vestes pour un confort absolu, ou éléments de décoration intérieure (coussins douillets)." +
            "\nPalette de Couleurs : Gris clair.",
        image: { src: `${M}/matiere-33.jpg`, alt: "33 - Fourrure synthétique élastique gris clair" },
    },
    {
        slug: "matiere-034",
        name: "34 - Fine Fourrure Elastique Rouge",
        composition: "Fine fourrure synthétique élastique, poils courts, rouge." +
            "\nUtilisation Suggérée : cols et poignets, bonnets et écharpes, doublures de vestes pour un confort absolu, ou éléments de décoration intérieure (coussins douillets)." +
            "\nPalette de Couleurs : Rouge.",
        image: { src: `${M}/matiere-34.jpg`, alt: "34 - Fine fourrure synthétique élastique rouge" },
    },
    {
        slug: "matiere-035",
        name: "35 - Fine Fourrure Elastique Blanc",
        composition: "Fine fourrure synthétique élastique, poils courts, blanc." +
            "\nUtilisation Suggérée : cols et poignets, bonnets et écharpes, doublures de vestes pour un confort absolu, ou éléments de décoration intérieure (coussins douillets)." +
            "\nPalette de Couleurs : Blanc.",
        image: { src: `${M}/matiere-35.jpg`, alt: "35 - Fine fourrure synthétique élastique blanc" },
    },
    {
        slug: "matiere-036",
        name: "36 - Maille Texturée Motif Abstrait",
        composition: "100% Polyester, maille texture gaufrée aux motifs abstraits géométriques." +
            "\nUtilisation Suggérée : Robes ajustées ou patineuses, t-shirts amples, cardigans légers, jupes droites, ou hauts chics pour une touche d'originalité." +
            "\nPalette de Couleurs : Bleu marine/ardoise, Bordeaux, Orange brûlé, Noir, (détail : Blanc).",
        image: { src: `${M}/matiere-36.jpg`, alt: "36 - Maille texturée motif abstrait géométrique" },
    },
    {
        slug: "matiere-037",
        name: "37 - Tricot Maille Chinée Gris/Blanc",
        composition: "Mélange laine/polyester, maille chinée tricotée, gris et blanc." +
            "\nUtilisation Suggérée : Pulls élégants, chemisiers, blouses, jupes mi-longues, ou éléments de décoration intérieure comme des coussins douillets." +
            "\nPalette de Couleurs : Gris, Blanc.",
        image: { src: `${M}/matiere-37.jpg`, alt: "37 - Tricot maille chinée gris/blanc" },
    },
    {
        slug: "matiere-038",
        name: "38 - Tricot Maille Texturé Bordeaux",
        composition: "100% polyester, maille texturée tricotée." +
            "\nUtilisation suggérée : Pulls épais, gilets et cardigans, robes droites, jupes crayons, écharpes volumineuses, ou éléments de décoration intérieure (coussins douillets)." +
            "\nPalette de Couleurs : Bordeaux.",
        image: { src: `${M}/matiere-38.jpg`, alt: "38 - Tricot maille texturée bordeaux" },
    },
    {
        slug: "matiere-039",
        name: "39 - Maille Texturée Motif Pointilliste",
        composition: "100% Polyester, maille texture gaufrée aux motifs poitilliste." +
            "\nUtilisation Suggérée : Robes ajustées ou patineuses, t-shirts graphiques, cardigans légers, jupes droites, ou hauts chics pour une touche d'originalité." +
            "\nPalette de Couleurs : Noir, Blanc, Gris, Rouge vif.",
        image: { src: `${M}/matiere-39.jpg`, alt: "39 - Maille texturée motif graphique pointilliste" },
    },
    {
        slug: "matiere-040",
        name: "40 - Doublure Polyester Gris",
        composition: "100% Polyester, doublure légère." +
            "\nUtilisation Suggérée : Doublure pour vestes, manteaux, jupes, robes et pantalons. Convient également pour la confection de pochettes ou de sacs légers." +
            "\nPalette de Couleurs : Gris.",
        image: { src: `${M}/matiere-40.jpg`, alt: "40 - Doublure polyester gris" },
    },
    {
        slug: "matiere-041",
        name: "41 - Doublure Motif Jacquard Gris",
        composition: "100% Polyester, doublure légère à motifs jacquard." +
            "\nUtilisation Suggérée : Doublure pour vestes de costume, manteaux élégants, blazers, jupes et robes structurées. Convient également pour la confection de sacs à main ou de pochettes de costume." +
            "\nPalette de Couleurs : Gris.",
        image: { src: `${M}/matiere-41.jpg`, alt: "41 - Doublure polyester motif jacquard gris" },
    },
    {
        slug: "matiere-042",
        name: "42 - Doublure Satinée Gris/Noir",
        composition: "100% Polyester, doublure légère satinée." +
            "\nUtilisation Suggérée : Doublure pour vestes, manteaux, jupes, robes et pantalons. Convient également pour la confection de pochettes ou de sacs légers." +
            "\nPalette de Couleurs : Noir graphite/Gris Ardoise.",
        image: { src: `${M}/matiere-42.jpg`, alt: "42 - Doublure polyester satinée gris/noir" },
    },
    {
        slug: "matiere-043",
        name: "43 - Doublure Léopard Gris/Noir",
        composition: "100% Polyester, doublure légère imprimée léopard." +
            "\nUtilisation Suggérée : Doublure pour vestes de costume, manteaux, blazers, jupes et robes, en particulier pour des pièces unies où l'imprimé apportera une surprise raffinée à l'ouverture. Convient également pour la confection de pochettes ou d'accessoires." +
            "\nPalette de Couleurs : Gris/Noir.",
        image: { src: `${M}/matiere-43.jpg`, alt: "43 - Doublure polyester imprimé léopard gris/noir" },
    },
    {
        slug: "matiere-044",
        name: "44 - Doublure Jacquard Chocolat",
        composition: "100% Polyester, doublure légère à motifs jacquard." +
            "\nUtilisation Suggérée : Doublure pour vestes de costume, manteaux élégants, blazers, jupes et robes structurées. Convient également pour la confection de sacs à main ou de pochettes de costume." +
            "\nPalette de Couleurs : Chocolat.",
        image: { src: `${M}/matiere-44.jpg`, alt: "44 - Doublure polyester motif jacquard chocolat" },
    },
    {
        slug: "matiere-045",
        name: "45 - Doublure Gris Ardoise",
        composition: "100% Polyester, doublure légère gris ardoise." +
            "\nUtilisation Suggérée : Doublure pour vestes de costume, manteaux élégants, blazers, jupes et robes structurées. Convient également pour la confection de sacs à main ou de pochettes de costume." +
            "\nPalette de Couleurs : Gris ardoise.",
        image: { src: `${M}/matiere-45.jpg`, alt: "45 - Viscose brocard floral" },
    },
    {
        slug: "matiere-046",
        name: "46 - Doublure Léopard Brun/Crème",
        composition: "100% Polyester, doublure légère imprimée léopard." +
            "\nUtilisation Suggérée : Doublure pour vestes de costume, manteaux, blazers, jupes et robes, en particulier pour des pièces unies où l'imprimé apportera une surprise raffinée à l'ouverture. Convient également pour la confection de pochettes ou d'accessoires." +
            "\nPalette de Couleurs : Brun/Crème.",
        image: { src: `${M}/matiere-46.jpg`, alt: "46 - Doublure polyester motif jacquard brun/creme" },
    },
    {
        slug: "matiere-047",
        name: "47 - Guipure Résille Noire",
        composition: "100% Polyester, résille ajourée aléatoirement avec des fils tressés." +
            "\nUtilisation Suggérée : Superposition sur une doublure de couleur contrastée (peau, blanc, etc.), empiècements décoratifs sur des robes ou des vestes, manches fantaisie, écharpes, ou éléments de garniture (bijoux textiles, applications)." +
            "\nPalette de Couleurs : Noir.",
        image: { src: `${M}/matiere-47.jpg`, alt: "47 - Guipure résille noire" },
    },
    {
        slug: "matiere-048",
        name: "48 - Prince de Galles",
        composition: "100% Polyester, aspect daim et doux au toucher." +
            "\nUtilisation Suggérée : Vestes et blazers structurés, pantalons habillés, jupes crayons, manteaux mi-saison, ou robes chasubles. Idéal pour des pièces d'inspiration masculine-féminine. Grâce à l'envers effet daim, il est parfait pour des vêtements non doublés ou partiellement doublés." +
            "\nPalette de Couleurs :Gris moyen, Noir, Bleu marine, Bleu ciel (lignes), Bordeaux (lignes).",
        image: { src: `${M}/matiere-48.jpg`, alt: "48 - Prince de Galles" },
    },
    {
        slug: "matiere-049",
        name: "49 - Maille Gaufrée Blanc",
        composition: "100% Polyester, maille gaufrée style nid d'abeille." +
            "\nUtilisation Suggérée : Pulls légers, gilets et cardigans, empiècement de robes/jupes, hauts texturés, chemises." +
            "\nPalette de Couleurs : Blanc.",
        image: { src: `${M}/matiere-49.jpg`, alt: "49 - Maille gaufrée blanc" },
    },
    {
        slug: "matiere-050",
        name: "50 - Soie Texturée Motif Reptile Noir",
        composition: "100% Soie, texture brillante en relief style écailles 3D." +
            "\nUtilisation Suggérée : Robes de soirée ou de cocktail, blouses fluides, jupes, foulards, ou éléments de décoration intérieure (coussins)." +
            "\nPalette de Couleurs : Noir.",
        image: { src: `${M}/matiere-50.jpg`, alt: "50 - Soie texturée motif reptile noir" },
    },
    {
        slug: "matiere-051",
        name: "51 - Soie Texturée Motif Reptile Argent",
        composition: "100% Soie, texture brillante en relief style écailles 3D." +
            "\nUtilisation Suggérée : Robes de soirée ou de cocktail, blouses fluides, jupes, foulards, ou éléments de décoration intérieure (coussins)." +
            "\nPalette de Couleurs : Argent.",
        image: { src: `${M}/matiere-51.jpg`, alt: "51 - Soie texturée motif reptile argent" },
    },
    {
        slug: "matiere-052",
        name: "52 - Suédine Beige/Sable",
        composition: "100% Suédine, imitation daim." +
            "\nUtilisation Suggérée : Vestes style motard ou sahariennes, jupes trapèze, robes chasubles, pantalons coupe droite, sacs à main, pochettes, ou éléments de décoration intérieure (coussins)." +
            "\nPalette de Couleurs : Beige/Sable.",
        image: { src: `${M}/matiere-52.jpg`, alt: "52 - Suédine beige/sable" },
    },
    {
        slug: "matiere-053",
        name: "53 - Suédine Gris Foncé",
        composition: "100% Suédine, imitation daim." +
            "\nUtilisation Suggérée : Vestes style motard ou sahariennes, jupes trapèze, robes chasubles, pantalons coupe droite, sacs à main, pochettes, ou éléments de décoration intérieure (coussins)." +
            "\nPalette de Couleurs : Gris foncé.",
        image: { src: `${M}/matiere-53.jpg`, alt: "53 - Suédine Gris Foncé" },
    },
];

export type FabricShopLink = {
    name: string;
    url: string;
};

export const fabricShops: FabricShopLink[] = [
    { name: "Les Tissus du Chien Vert", url: "https://www.chienvert.com" },
    { name: "La Toison d'Or", url: "https://www.latoisondor.be/" },
    { name: "Chamick", url: "https://www.chamick.com/" },
    { name: "Mondial Tissus", url: "https://www.mondialtissus.fr/" },
];