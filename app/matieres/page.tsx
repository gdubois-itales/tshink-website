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
                            Voici un aperçu des tissus actuellement disponibles dans
                            l&apos;atelier. Le prix d&apos;une création tient compte de la
                            matière sélectionnée au moment de sa confection — contactez-moi
                            avec la référence du modèle et le tissu souhaité pour obtenir un
                            prix final actualisé.
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