"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import styles from "./FloatingCart.module.css";

/**
 * Carte flottante affichée sur /matieres : montre la création en cours de
 * composition (photo + matières déjà ajoutées) et permet de valider cette
 * création dans le panier, ou de sauter directement à /panier.
 * Ne s'affiche que s'il y a une sélection en cours ou déjà des créations
 * dans le panier — sinon elle n'a rien à montrer.
 */
export default function FloatingCart() {
    const router = useRouter();
    const { enCours, panier, retirerMatiere, validerCreationAvecMatieres, annulerSelection } =
        useCart();

    if (!enCours && panier.length === 0) return null;

    function handleAjouterCreation() {
        validerCreationAvecMatieres();
        router.push("/creations");
    }

    return (
        <div className={styles.floatingCart}>
            {enCours && (
                <>
                    <div className={styles.header}>
                        <div className={styles.creationThumb}>
                            <Image
                                src={enCours.creationImage.src}
                                alt={enCours.creationImage.alt}
                                fill
                                sizes="56px"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <div className={styles.label}>Création en cours</div>
                            <div className={styles.title}>{enCours.creationTitle}</div>
                        </div>
                        <button
                            type="button"
                            className={styles.cancel}
                            onClick={annulerSelection}
                            aria-label="Annuler la sélection en cours"
                        >
                            ✕
                        </button>
                    </div>

                    <div className={styles.matieresList}>
                        {enCours.matieres.length === 0 ? (
                            <p className={styles.empty}>
                                Ajoutez une ou plusieurs matières ci-dessus.
                            </p>
                        ) : (
                            enCours.matieres.map((m) => (
                                <div key={m.slug} className={styles.matiereRow}>
                                    <div className={styles.matiereThumb}>
                                        <Image
                                            src={m.image.src}
                                            alt={m.image.alt}
                                            fill
                                            sizes="32px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <span>{m.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => retirerMatiere(m.slug)}
                                        aria-label={`Retirer ${m.name}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <button
                        type="button"
                        className="cta-solid"
                        style={{ width: "100%", marginTop: 14 }}
                        disabled={enCours.matieres.length === 0}
                        onClick={handleAjouterCreation}
                    >
                        Ajouter une création
                    </button>

                    <hr className="hairline" style={{ margin: "16px 0" }} />
                </>
            )}

            <div className={styles.panierSummary}>
                <span>
                    {panier.length} création{panier.length > 1 ? "s" : ""} dans le panier
                </span>
                <button
                    type="button"
                    className="cta-outline"
                    disabled={panier.length === 0}
                    onClick={() => router.push("/panier")}
                >
                    Valider mon panier
                </button>
            </div>
        </div>
    );
}