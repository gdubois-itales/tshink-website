"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { creations, type Creation, type Category } from "@/lib/creations";
import styles from "./page.module.css";

const filterOptions: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "Toutes" },
  { key: "vetement", label: "Créations" },
  { key: "accessoire", label: "Accessoires" },
];

export default function CreationsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [selected, setSelected] = useState<Creation | null>(null);

  const visible =
      activeFilter === "all"
          ? creations
          : creations.filter((c) => c.cat === activeFilter);

  return (
      <>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Créations</Eyebrow>
              <h1 style={{ fontStyle: "italic" }}>
                Une création ne s&apos;arrête pas lorsqu&apos;elle est
                terminée. C&apos;est là que son histoire commence.
              </h1>
              <p className="lede">
                Découvrez une sélection de créations de vêtements et
                d&apos;accessoires imaginées par TshinK. Chaque pièce est
                conçue et confectionnée avec le même soin apporté à
                l&apos;ensemble de mon travail. Selon les modèles, certaines
                créations sont disponibles immédiatement tandis que
                d&apos;autres peuvent être recréées sur demande dans
                d&apos;autres matières ou coloris. Une pièce vous inspire ?
                Voyons ensemble comment elle peut devenir la vôtre.
              </p>
            </div>

            <div className={styles.filters}>
              {filterOptions.map((f) => (
                  <button
                      key={f.key}
                      type="button"
                      className={`${styles.filterBtn} ${
                          activeFilter === f.key ? styles.active : ""
                      }`}
                      onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
              ))}
            </div>

            <div className={styles.creationGrid}>
              {visible.map((c) => (
                  <button
                      key={c.slug}
                      type="button"
                      className={styles.creationCard}
                      onClick={() => setSelected(c)}
                  >
                    <div className={styles.cardImage}>
                      <Image
                          src={c.cardImage.src}
                          alt={c.cardImage.alt}
                          fill
                          sizes="(max-width: 560px) 100vw, (max-width: 880px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h4>{c.title}</h4>
                    <div className={styles.meta}>{c.meta}</div>
                  </button>
              ))}
            </div>
          </div>
        </section>

        {selected && (
            <div
                className={styles.modalOverlay}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelected(null);
                }}
            >
              <div className={styles.modalBox}>
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={() => setSelected(null)}
                    aria-label="Fermer"
                >
                  ✕
                </button>

                <div className={styles.modalImageWrap}>
                  <ImageCarousel
                      slides={selected.modalImages}
                      sizes="(max-width: 720px) 100vw, 50vw"
                      objectFit="cover"
                      aspectRatio="3 / 4"
                  />
                </div>

                <div className={styles.modalInfo}>
                  <Eyebrow>
                    {selected.cat === "accessoire" ? "Accessoire" : "Création"}
                  </Eyebrow>
                  <h3 style={{ marginTop: 14 }}>{selected.title}</h3>
                  <p>{selected.desc}</p>
                  <span className={styles.badge}>{selected.badge}</span>
                </div>
              </div>
            </div>
        )}
      </>
  );
}