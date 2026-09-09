"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { useCart, type CartLine } from "@/lib/cart-context";
import styles from "./page.module.css";

// Formulaire Google — "Nom" et "Message" sont des questions classiques,
// chacune avec son entry.XXXXX (récupéré via "Obtenir le lien pré-rempli").
const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTbZYSbqwYGHlsPiJQkYa76ZtFrQw6Q68FRuD2oweYeq_y8A/formResponse";
const ENTRY_NOM = "entry.1324899612";
const ENTRY_MESSAGE = "entry.1467334355";
const ENTRY_EMAIL = "entry.1949116587";
const ENTRY_COMMENTAIRE = "entry.899148491";

// L'adresse e-mail, elle, passe par le champ natif "Collecter les adresses
// e-mail" (Paramètres > Réponses) plutôt que par une question classique :
// ce champ n'a donc pas d'entry.XXXXX obtenu via "lien pré-rempli". "emailAddress"
// est la clé la plus souvent rapportée pour ce champ natif, mais ce n'est
// pas documenté officiellement par Google et ça peut ne pas fonctionner
// via un envoi en arrière-plan comme celui-ci (à la différence d'une vraie
// soumission du formulaire dans un navigateur). À TESTER : passe une
// commande de test sur /panier et vérifie que le mail récapitulatif arrive
// bien à l'adresse saisie. Si rien n'arrive, la solution fiable est de
// désactiver ce champ natif et de créer une vraie question "Adresse e-mail"
// avec son propre entry.XXXXX, récupéré de la même façon que les 2 autres.


function detailLigne(ligne: CartLine): string {
    if (ligne.mode === "matieres") {
        return ligne.matieres.length > 0
            ? `Matière(s) : ${ligne.matieres.map((m) => m.name).join(", ")}`
            : "Matière(s) : aucune sélectionnée";
    }

    if (ligne.noteType === "connue") {
        return `Matière déjà en sa possession : ${ligne.note}`;
    }

    return `Demande de conseil sur la matière : ${ligne.note}`;
}

function buildRecap(panier: CartLine[]): string {
    return panier
        .map((ligne, i) => `${i + 1}. ${ligne.creationTitle}\n   ${detailLigne(ligne)}`)
        .join("\n\n");
}

export default function PanierPage() {
    const router = useRouter();
    const { panier, retirerLigne, viderPanier } = useCart();

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [commentaire, setCommentaire] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const recap = buildRecap(panier);
    const canSubmit = panier.length > 0 && nom.trim() !== "" && email.trim() !== "";

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!canSubmit || sending) return;
        setSending(true);

        const body = new URLSearchParams();
        body.append(ENTRY_EMAIL, email.trim());
        body.append(ENTRY_NOM, nom.trim());
        body.append(ENTRY_MESSAGE, recap);
        body.append(ENTRY_COMMENTAIRE, commentaire.trim());

        try {
            // mode "no-cors" : on ne peut pas lire la réponse (comportement
            // normal pour un formResponse Google), on tire donc la requête et
            // on considère l'envoi fait si elle ne lève pas d'exception réseau.
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });
        } catch {
            // Rien à faire de plus ici : on affiche quand même la confirmation
            // côté client, l'essentiel est d'avoir tenté l'envoi.
        }

        setSending(false);
        setSent(true);
    }

    function handleCloseConfirmation() {
        setSent(false);
        viderPanier();
        router.push("/creations");
    }

    return (
        <section className="section">
            <div className="wrap">
                <div className="section-head">
                    <Eyebrow>Panier</Eyebrow>
                    <h1>Votre commande</h1>
                    <p className="lede">
                        Vérifiez les créations et matières sélectionnées, puis laissez-nous
                        vos coordonnées pour recevoir un récapitulatif et être recontacté·e.
                    </p>
                    {panier.length > 0 && (
                        <button
                            type="button"
                            className="cta-outline"
                            onClick={() => router.push("/creations")}
                        >
                            Ajouter une création
                        </button>
                    )}
                </div>

                {panier.length === 0 ? (
                    <p className={styles.empty}>
                        Votre panier est vide. Direction la page{" "}
                        <Link href="/creations" className={styles.emptyLink}>
                            Créations
                        </Link>{" "}
                        pour commencer.
                    </p>
                ) : (
                    <div className={styles.layout}>
                        <div className={styles.lineList}>
                            {panier.map((ligne) => (
                                <div key={ligne.id} className={styles.lineCard}>
                                    <button
                                        type="button"
                                        className={styles.removeLine}
                                        onClick={() => retirerLigne(ligne.id)}
                                        aria-label={`Retirer ${ligne.creationTitle} du panier`}
                                    >
                                        ✕
                                    </button>
                                    <div className={styles.lineThumb}>
                                        <Image
                                            src={ligne.creationImage.src}
                                            alt={ligne.creationImage.alt}
                                            fill
                                            sizes="84px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className={styles.lineInfo}>
                                        <h4>{ligne.creationTitle}</h4>
                                        {ligne.mode === "matieres" ? (
                                            <div className={styles.lineDetail}>
                                                {ligne.matieres.map((m) => (
                                                    <span key={m.slug} className={styles.matiereTag}>
                                                        {m.name}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className={`${styles.lineDetail} ${styles.noteText}`}>
                                                {ligne.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form className={styles.orderBox} onSubmit={handleSubmit}>
                            <h3>Envoyer ma commande</h3>
                            <div className={styles.field}>
                                <label htmlFor="nom">Nom</label>
                                <input
                                    id="nom"
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Adresse e-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="commentaire">
                                    Un commentaire, une question ? (facultatif)
                                </label>
                                <textarea
                                    id="commentaire"
                                    rows={3}
                                    value={commentaire}
                                    onChange={(e) => setCommentaire(e.target.value)}
                                    placeholder="Ex : je préfère être recontacté·e par téléphone…"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`cta-solid ${styles.submitBtn}`}
                                disabled={!canSubmit || sending}
                            >
                                {sending ? "Envoi…" : "Envoyer commande"}
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {sent && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmBox}>
                        <Eyebrow>Commande envoyée</Eyebrow>
                        <h3>Merci {nom} !</h3>
                        <p>
                            Votre commande a bien été envoyée. Vous allez recevoir un
                            récapitulatif par e-mail à l&apos;adresse indiquée.
                        </p>
                        <div className={styles.confirmRecap}>{recap}</div>
                        <button
                            type="button"
                            className="cta-outline"
                            style={{ marginTop: 20 }}
                            onClick={handleCloseConfirmation}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}