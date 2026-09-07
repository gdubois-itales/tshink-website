"use client";

// lib/cart-context.tsx
//
// État global du "panier" TshinK, partagé entre /creations, /matieres et
// /panier via React Context. Persisté dans sessionStorage pendant la
// session (résiste à un F5) et entièrement vidé après confirmation de
// commande — voir viderPanier(), appelé à la fermeture de la pop-up de
// confirmation sur /panier.

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import type { Matiere } from "./matieres";

export type CartLineMode = "matieres" | "note";

export type CartImage = { src: string; alt: string };

export type CartLine = {
    id: string;
    creationSlug: string;
    creationTitle: string;
    creationImage: CartImage;
    mode: CartLineMode;
    matieres: Matiere[]; // rempli si mode === "matieres"
    note: string; // rempli si mode === "note"
};

export type EnCours = {
    creationSlug: string;
    creationTitle: string;
    creationImage: CartImage;
    matieres: Matiere[];
};

type CreationRef = {
    slug: string;
    title: string;
    image: CartImage;
};

type CartContextValue = {
    panier: CartLine[];
    enCours: EnCours | null;
    commencerSelection: (creation: CreationRef) => void;
    annulerSelection: () => void;
    ajouterMatiere: (matiere: Matiere) => void;
    retirerMatiere: (slug: string) => void;
    validerCreationAvecMatieres: () => void;
    ajouterAvecNote: (creation: CreationRef, note: string) => void;
    retirerLigne: (id: string) => void;
    viderPanier: () => void;
};

const STORAGE_KEY = "tshink-panier";

const CartContext = createContext<CartContextValue | null>(null);

function makeId(slug: string) {
    return `${slug}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [panier, setPanier] = useState<CartLine[]>([]);
    const [enCours, setEnCours] = useState<EnCours | null>(null);
    const [hydrated, setHydrated] = useState(false);

    // Hydratation depuis sessionStorage au montage (résiste à un F5).
    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw) as {
                    panier?: CartLine[];
                    enCours?: EnCours | null;
                };
                // Hydratation volontaire depuis sessionStorage : doit se faire après
                // le montage (côté client uniquement) pour éviter un mismatch SSR/client.
                /* eslint-disable react-hooks/set-state-in-effect */
                if (Array.isArray(parsed.panier)) setPanier(parsed.panier);
                if (parsed.enCours) setEnCours(parsed.enCours);
                /* eslint-enable react-hooks/set-state-in-effect */
            }
        } catch {
            // sessionStorage indisponible ou contenu corrompu : on repart à vide.
        }
        setHydrated(true);
    }, []);

    // Sauvegarde à chaque changement, une fois l'hydratation initiale faite
    // (sinon on écraserait le storage avec l'état vide du tout premier rendu).
    useEffect(() => {
        if (!hydrated) return;
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ panier, enCours }));
        } catch {
            // quota dépassé ou navigation privée : tant pis, on continue en mémoire.
        }
    }, [panier, enCours, hydrated]);

    function commencerSelection(creation: CreationRef) {
        setEnCours({
            creationSlug: creation.slug,
            creationTitle: creation.title,
            creationImage: creation.image,
            matieres: [],
        });
    }

    function annulerSelection() {
        setEnCours(null);
    }

    function ajouterMatiere(matiere: Matiere) {
        if (!enCours) return;
        if (enCours.matieres.some((m) => m.slug === matiere.slug)) return;
        setEnCours({ ...enCours, matieres: [...enCours.matieres, matiere] });
    }

    function retirerMatiere(slug: string) {
        if (!enCours) return;
        setEnCours({
            ...enCours,
            matieres: enCours.matieres.filter((m) => m.slug !== slug),
        });
    }

    function validerCreationAvecMatieres() {
        if (!enCours || enCours.matieres.length === 0) return;
        const ligne: CartLine = {
            id: makeId(enCours.creationSlug),
            creationSlug: enCours.creationSlug,
            creationTitle: enCours.creationTitle,
            creationImage: enCours.creationImage,
            mode: "matieres",
            matieres: enCours.matieres,
            note: "",
        };
        setPanier((p) => [...p, ligne]);
        setEnCours(null);
    }

    function ajouterAvecNote(creation: CreationRef, note: string) {
        if (!note.trim()) return;
        const ligne: CartLine = {
            id: makeId(creation.slug),
            creationSlug: creation.slug,
            creationTitle: creation.title,
            creationImage: creation.image,
            mode: "note",
            matieres: [],
            note: note.trim(),
        };
        setPanier((p) => [...p, ligne]);
    }

    function retirerLigne(id: string) {
        setPanier((p) => p.filter((l) => l.id !== id));
    }

    function viderPanier() {
        setPanier([]);
        setEnCours(null);
        try {
            sessionStorage.removeItem(STORAGE_KEY);
        } catch {
            // rien à faire si sessionStorage n'est pas disponible.
        }
    }

    const value = useMemo<CartContextValue>(
        () => ({
            panier,
            enCours,
            commencerSelection,
            annulerSelection,
            ajouterMatiere,
            retirerMatiere,
            validerCreationAvecMatieres,
            ajouterAvecNote,
            retirerLigne,
            viderPanier,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [panier, enCours]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart() doit être appelé à l'intérieur d'un <CartProvider>.");
    }
    return ctx;
}