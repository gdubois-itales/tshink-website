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

// EXEMPLES — à remplacer par tes vraies matières en stock.
export const matieres: Matiere[] = [
    {
        slug: "tartan-rouge",
        name: "Tartan Rouge",
        composition: "Laine mélangée, motif écossais rouge/noir",
        image: { src: `${M}/tartan-rouge.jpg`, alt: "Tissu tartan rouge" },
    },
    {
        slug: "fausse-fourrure-ecrue",
        name: "Fausse Fourrure Écrue",
        composition: "Fausse fourrure longue, ton écru",
        image: { src: `${M}/fausse-fourrure-ecrue.jpg`, alt: "Fausse fourrure écrue" },
    },
    {
        slug: "voile-noir",
        name: "Voile Noir",
        composition: "Voile de polyester fin, noir",
        image: { src: `${M}/voile-noir.jpg`, alt: "Voile noir" },
    },
];

export type FabricShopLink = {
    name: string;
    url: string;
};

// À COMPLÉTER avec tes vraies boutiques de référence.
export const fabricShops: FabricShopLink[] = [
    { name: "Les Tissus du Chien Vert", url: "https://www.chienvert.com" },
    { name: "La Toison d'Or", url: "https://www.latoisondor.be/" },
    { name: "Chamick", url: "https://www.chamick.com/" },
    { name: "Mondial Tissus", url: "https://www.mondialtissus.fr/" },
];