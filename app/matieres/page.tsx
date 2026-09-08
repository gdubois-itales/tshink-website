"use client";

import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FloatingCart from "@/components/ui/FloatingCart";
import { matieres, fabricShops } from "@/lib/matieres";
import { useCart } from "@/lib/cart-context";
import styles from "./page.module.css";

export default function MatieresPage() {
    const { enCours, ajouterMatiere, retirerMatiere } = useCart();
    const selectedSlugs = new Set(enCours?.matieres.map((m) => m.slug) ?? []);

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
                        {matieres.map((m) => {
                            const isSelected = selectedSlugs.has(m.slug);
                            return (
                                <div key={m.slug} className={styles.matiereCard}>
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
                                    <div className={styles.composition}>{m.composition}</div>

                                    {enCours && (
                                        <button
                                            type="button"
                                            className={`${styles.addBtn} ${isSelected ? styles.added : ""}`}
                                            onClick={() =>
                                                isSelected ? retirerMatiere(m.slug) : ajouterMatiere(m)
                                            }
                                        >
                                            {isSelected ? "✓ Ajoutée" : "+ Ajouter"}
                                        </button>
                                    )}
                                </div>
                            );
                        })}
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
                </div>
            </section>

            <FloatingCart />
        </>
    );
}