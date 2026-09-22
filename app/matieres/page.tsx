"use client";

import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FloatingCart from "@/components/ui/FloatingCart";
import { matieres, fabricShops } from "@/lib/matieres";
import { useCart } from "@/lib/cart-context";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

const COMPOSITION_LABELS = ["Utilisation Suggérée", "Palette de Couleurs"];

function renderComposition(text: string) {
    return text.split("\n").map((line, i) => {
        const label = COMPOSITION_LABELS.find((l) => line.startsWith(`${l} :`));
        if (label) {
            const rest = line.slice(`${label} :`.length);
            return (
                <p key={i} className={styles.compositionLabelLine}>
                    <strong>{label} :</strong>
                    {rest}
                </p>
            );
        }
        return (
            <p key={i} className={styles.compositionLine}>
                {line}
            </p>
        );
    });
}

export default function MatieresPage() {
    const { enCours, ajouterMatiere, retirerMatiere, ajouterAvecNote, annulerSelection } = useCart();
    const selectedSlugs = new Set(enCours?.matieres.map((m) => m.slug) ?? []);
    const [externalNote, setExternalNote] = useState("");
    const [showReplaceConfirm, setShowReplaceConfirm] = useState(false);
    const [detailIndex, setDetailIndex] = useState<number | null>(null);
    const [fullscreen, setFullscreen] = useState(false);

    const detail = detailIndex !== null ? matieres[detailIndex] : null;
    const total = matieres.length;

    const closeDetail = () => {
        setDetailIndex(null);
        setFullscreen(false);
    };
    const goTo = (i: number) => {
        setDetailIndex((i + total) % total);
        setFullscreen(false);
    };
    const prevDetail = () => detailIndex !== null && goTo(detailIndex - 1);
    const nextDetail = () => detailIndex !== null && goTo(detailIndex + 1);

    useEffect(() => {
        if (detailIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                fullscreen ? setFullscreen(false) : closeDetail();
            }
            if (event.key === "ArrowLeft") prevDetail();
            if (event.key === "ArrowRight") nextDetail();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailIndex, fullscreen]);

    function handleAddExternalFabric() {
        if (!enCours || !externalNote.trim()) return;

        if (enCours.matieres.length > 0) {
            setShowReplaceConfirm(true);
            return;
        }

        confirmAddExternalFabric();
    }

    function confirmAddExternalFabric() {
        if (!enCours) return;
        ajouterAvecNote(
            {
                slug: enCours.creationSlug,
                title: enCours.creationTitle,
                image: enCours.creationImage,
            },
            externalNote,
            "lien-externe"
        );
        annulerSelection();
        setExternalNote("");
        setShowReplaceConfirm(false);
    }

    return (
        <>
            <section className="section">
                <div className="wrap">
                    <div className="section-head">
                        <Eyebrow>Matières</Eyebrow>
                        <h1>Les matières disponibles en atelier</h1>
                        <p className="lede">
                            Toutes les créations du site sont réalisées à la demande. Voici
                            un aperçu des tissus actuellement disponibles dans l&apos;atelier
                            — vous pouvez aussi vous laisser conseiller si aucun ne vous
                            parle encore.
                        </p>
                    </div>

                    <div className={styles.priceDisclaimer}>
                        <strong>Prix indicatif</strong>
                        <p>
                            Le prix du modèle constitue la base de la création. Le prix
                            final dépend de la matière choisie et de son tarif actuel : il
                            varie selon le marché.
                        </p>
                        <p>
                            Le prix de la matière indiqué correspond à son tarif au moment
                            de la confection de la pièce présentée en page Créations.
                        </p>
                        <p>
                            Vous souhaitez une création dans une autre matière ?
                            Indiquez-nous sa référence et la matière souhaitée via la page{" "}
                            <a href="/contact" className={styles.disclaimerLink}>Contact</a>{" "}
                            pour obtenir le prix final.
                        </p>
                    </div>

                    <div className={styles.matiereGrid}>
                        {matieres.map((m, i) => (
                            <button
                                key={m.slug}
                                type="button"
                                className={styles.matiereCard}
                                onClick={() => setDetailIndex(i)}
                            >
                                <div className={styles.imageBox}>
                                    <Image
                                        src={m.image.src}
                                        alt={m.image.alt}
                                        fill
                                        sizes="(max-width: 560px) 50vw, (max-width: 880px) 33vw, 25vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <h4>{m.name}</h4>
                            </button>
                        ))}
                    </div>

                    <hr className="hairline" style={{ margin: "60px 0 40px" }} />

                    <div className="section-head">
                        <Eyebrow>Élargir le choix</Eyebrow>
                        <h2>Quelques boutiques de tissus en ligne</h2>
                    </div>
                    <div className={styles.shopList}>
                        {fabricShops.map((shop) => (
                            <a
                                key={shop.url}
                                href={shop.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.shopLink}
                            >
                                <span>{shop.name}</span>
                                <span>→</span>
                            </a>
                        ))}
                    </div>

                    {enCours ? (
                        <div className={styles.externalFabricCard}>
                            <h4>Vous avez trouvé votre tissu ailleurs ?</h4>
                            <label htmlFor="external-fabric" className={styles.externalFabricHint} style={{ display: "block" }}>
                                Indiquez le nom du tissu, sa référence et la boutique (ou collez
                                directement le lien de la page produit) : on s&apos;occupe du reste.
                            </label>
                            <textarea
                                id="external-fabric"
                                className={styles.externalFabricInput}
                                rows={3}
                                placeholder="Ex : Velours côtelé bordeaux, réf. VC-234, chienvert.com/..."
                                value={externalNote}
                                onChange={(e) => setExternalNote(e.target.value)}
                            />
                            <button
                                type="button"
                                className={styles.addBtn}
                                disabled={!externalNote.trim()}
                                onClick={handleAddExternalFabric}
                            >
                                + Ajouter
                            </button>
                        </div>
                    ) : (
                        <p className={styles.externalFabricHint}>
                            Repérez d&apos;abord une création sur la page{" "}
                            <a href="/creations" className={styles.disclaimerLink}>Créations</a>{" "}
                            pour pouvoir ajouter un tissu trouvé ailleurs à votre panier.
                        </p>
                    )}
                </div>
            </section>

            {showReplaceConfirm && enCours && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmBox}>
                        <Eyebrow>Confirmation</Eyebrow>
                        <h3>Remplacer la sélection en cours ?</h3>
                        <p>
                            Vous avez déjà sélectionné {enCours.matieres.length} matière(s) de
                            l&apos;atelier pour « {enCours.creationTitle} ». Ajouter ce tissu
                            trouvé en ligne effacera cette sélection.
                        </p>
                        <div className={styles.confirmActions}>
                            <button
                                type="button"
                                className="cta-outline"
                                onClick={() => setShowReplaceConfirm(false)}
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="cta-solid"
                                onClick={confirmAddExternalFabric}
                            >
                                Remplacer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {detail && !fullscreen && (
                <div
                    className={styles.confirmOverlay}
                    onClick={(e) => { if (e.target === e.currentTarget) closeDetail(); }}
                >
                    <div className={styles.detailBox}>
                        <button
                            type="button"
                            className={styles.detailClose}
                            onClick={closeDetail}
                            aria-label="Fermer"
                        >
                            ✕
                        </button>

                        <button
                            type="button"
                            className={styles.detailImage}
                            onClick={() => setFullscreen(true)}
                            aria-label="Agrandir l'échantillon"
                        >
                            <Image
                                src={detail.image.src}
                                alt={detail.image.alt}
                                fill
                                sizes="(max-width: 620px) 100vw, 360px"
                                style={{ objectFit: "cover" }}
                            />
                        </button>

                        <div className={styles.detailInfo}>
                            <div className={styles.detailScroll}>
                                <Eyebrow>Matière</Eyebrow>
                                <h3>{detail.name}</h3>
                                <div className={styles.composition}>{renderComposition(detail.composition)}</div>
                                {enCours && (
                                    <button
                                        type="button"
                                        className={`${styles.addBtn} ${selectedSlugs.has(detail.slug) ? styles.added : ""}`}
                                        onClick={() =>
                                            selectedSlugs.has(detail.slug)
                                                ? retirerMatiere(detail.slug)
                                                : ajouterMatiere(detail)
                                        }
                                    >
                                        {selectedSlugs.has(detail.slug) ? "✓ Ajoutée" : "+ Ajouter"}
                                    </button>
                                )}
                            </div>
                            {total > 1 && (
                                <div className={styles.navigation}>
                                    <button
                                        type="button"
                                        className={styles.navButton}
                                        onClick={prevDetail}
                                        aria-label="Matière précédente"
                                    >
                                        <span>←</span>
                                        <span>Préc.</span>
                                    </button>

                                    <div className={styles.progress}>
                                        <div className={styles.counter}>
                                            <span className={styles.current}>
                                                {String(detailIndex! + 1).padStart(2, "0")}
                                            </span>
                                            <span className={styles.separator}>/</span>
                                            <span>{String(total).padStart(2, "0")}</span>
                                        </div>
                                        <div className={styles.progressTrack}>
                                            <div
                                                className={styles.progressBar}
                                                style={{ width: `${((detailIndex! + 1) / total) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className={`${styles.navButton} ${styles.navNext}`}
                                        onClick={nextDetail}
                                        aria-label="Matière suivante"
                                    >
                                        <span>Suiv.</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {detail && fullscreen && (
                <div className={styles.lightbox} onClick={() => setFullscreen(false)}>
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        onClick={() => setFullscreen(false)}
                        aria-label="Fermer l'agrandissement"
                    >
                        ✕
                    </button>
                    <div className={styles.lightboxImage}>
                        <Image
                            src={detail.image.src}
                            alt={detail.image.alt}
                            fill
                            sizes="90vw"
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </div>
            )}

            <FloatingCart />
        </>
    );
}