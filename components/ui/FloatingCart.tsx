"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import styles from "./FloatingCart.module.css";

/**
 * Carte flottante affichée sur /matieres :
 * - montre la création en cours de composition ;
 * - permet d'ajouter les matières au panier ;
 * - après validation, affiche un résumé confirmant l'ajout ;
 * - permet ensuite de choisir une autre création ou de valider le panier.
 */
export default function FloatingCart() {
    const router = useRouter();
    const {
        enCours,
        panier,
        retirerMatiere,
        validerCreationAvecMatieres,
        annulerSelection,
    } = useCart();

    const [zoomOpen, setZoomOpen] = useState(false);
    const [creationAjoutee, setCreationAjoutee] = useState(false);

    if (!enCours && panier.length === 0 && !creationAjoutee) return null;

    function handleAjouterAuPanier() {
        validerCreationAvecMatieres();
        setCreationAjoutee(true);
    }

    function handleAjouterCreation() {
        setCreationAjoutee(false);
        router.push("/creations");
    }

    return (
        <>
            <div className={styles.floatingCart}>
                {enCours ? (
                    <>
                        <div className={styles.header}>
                            <button
                                type="button"
                                className={styles.creationThumb}
                                onClick={() => setZoomOpen(true)}
                                aria-label="Agrandir la photo de la création"
                            >
                                <Image
                                    src={enCours.creationImage.src}
                                    alt={enCours.creationImage.alt}
                                    fill
                                    sizes="140px"
                                    style={{ objectFit: "cover" }}
                                />
                                <span className={styles.zoomHint}>⤢</span>
                            </button>

                            <div className={styles.headerText}>
                                <div className={styles.label}>Création en cours</div>
                                <div className={styles.title}>
                                    {enCours.creationTitle}
                                </div>
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
                                    <div
                                        key={m.slug}
                                        className={styles.matiereRow}
                                    >
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
                                            onClick={() =>
                                                retirerMatiere(m.slug)
                                            }
                                            aria-label={`Retirer ${m.name}`}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className={styles.actionsRow}>
                            <button
                                type="button"
                                className="cta-outline"
                                disabled={enCours.matieres.length === 0}
                                onClick={handleAjouterAuPanier}
                            >
                                Ajouter au panier
                            </button>

                            <button
                                type="button"
                                className="cta-solid"
                                disabled={enCours.matieres.length === 0}
                                onClick={() => {
                                    validerCreationAvecMatieres();
                                    setCreationAjoutee(false);
                                    router.push("/creations");
                                }}
                            >
                                Ajouter une création
                            </button>
                        </div>

                        <hr
                            className="hairline"
                            style={{ margin: "16px 0" }}
                        />
                    </>
                ) : (
                    creationAjoutee && (
                        <>
                            <div className={styles.addedConfirmation}>
                                <div className={styles.addedTitle}>
                                    ✓ Création ajoutée au panier
                                </div>
                            </div>

                            <hr
                                className="hairline"
                                style={{ margin: "16px 0" }}
                            />
                        </>
                    )
                )}

                <div className={styles.panierSummary}>
                    <span>
                        {panier.length} création
                        {panier.length > 1 ? "s" : ""} dans le panier
                    </span>

                    {creationAjoutee ? (
                        <div className={styles.summaryActions}>
                            <button
                                type="button"
                                className="cta-outline"
                                onClick={handleAjouterCreation}
                            >
                                Ajouter une création
                            </button>

                            <button
                                type="button"
                                className="cta-solid"
                                onClick={() => router.push("/panier")}
                            >
                                Valider mon panier
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="cta-outline"
                            disabled={panier.length === 0}
                            onClick={() => router.push("/panier")}
                        >
                            Valider mon panier
                        </button>
                    )}
                </div>
            </div>

            {zoomOpen && enCours && (
                <div
                    className={styles.zoomOverlay}
                    onClick={() => setZoomOpen(false)}
                >
                    <button
                        type="button"
                        className={styles.zoomClose}
                        onClick={() => setZoomOpen(false)}
                        aria-label="Fermer l'aperçu"
                    >
                        ✕
                    </button>

                    <div
                        className={styles.zoomImageWrap}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={enCours.creationImage.src}
                            alt={enCours.creationImage.alt}
                            fill
                            sizes="90vw"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}