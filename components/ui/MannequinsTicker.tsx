"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MannequinsTicker.module.css";

type Look = {
    src: string;
    alt: string;
};

// ⚠️ Ajuste les textes alt si tu veux nommer les tenues plus précisément.
const looks: Look[] = [
    { src: "/images/mannequins/A_Model.jpg", alt: "Model A, pose" },
    { src: "/images/mannequins/A_Walk.jpg", alt: "Model A, walk" },
    { src: "/images/mannequins/B01_Model.jpg", alt: "Model B01, pose" },
    { src: "/images/mannequins/B01_Walk.jpg", alt: "Model B01, walk" },
    { src: "/images/mannequins/B02_Model.jpg", alt: "Model B02, pose" },
    { src: "/images/mannequins/B02_Walk.jpg", alt: "Model B02, walk" },
    { src: "/images/mannequins/C_Model.jpg", alt: "Model C, pose" },
    { src: "/images/mannequins/C_Walk.jpg", alt: "Model C, walk" },
    { src: "/images/mannequins/D_Model.jpg", alt: "Model D, pose" },
    { src: "/images/mannequins/D_Walk.jpg", alt: "Model D, walk" },
    { src: "/images/mannequins/E_Model.jpg", alt: "Model E, pose" },
    { src: "/images/mannequins/E_Walk.jpg", alt: "Model E, walk" },
    { src: "/images/mannequins/F_Model.jpg", alt: "Model F, pose" },
    { src: "/images/mannequins/F_Walk.jpg", alt: "Model F, walk" },
];

const track = [...looks, ...looks];

export default function MannequinsTicker() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const isOpen = activeIndex !== null;
    const active = activeIndex !== null ? looks[activeIndex] : null;
    const total = looks.length;

    const close = () => setActiveIndex(null);
    const goTo = (i: number) => setActiveIndex((i + total) % total);
    const prev = () => activeIndex !== null && goTo(activeIndex - 1);
    const next = () => activeIndex !== null && goTo(activeIndex + 1);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
            if (event.key === "ArrowLeft") prev();
            if (event.key === "ArrowRight") next();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, activeIndex]);

    return (
        <div className={styles.tickerWrap}>
            <div className={styles.track}>
                {track.map((look, i) => (
                    <button
                        key={`${look.src}-${i}`}
                        type="button"
                        className={styles.item}
                        onClick={() => setActiveIndex(i % total)}
                        aria-label={`Voir en grand : ${look.alt}`}
                    >
                        <Image
                            src={look.src}
                            alt={look.alt}
                            fill
                            sizes="220px"
                            style={{ objectFit: "cover" }}
                        />
                    </button>
                ))}
            </div>

            {isOpen && active && (
                <div
                    className={styles.lightbox}
                    onClick={(e) => { if (e.target === e.currentTarget) close(); }}
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        onClick={close}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    <div className={styles.lightboxImage}>
                        <Image
                            src={active.src}
                            alt={active.alt}
                            fill
                            sizes="90vw"
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>

                    <div className={styles.lightboxNav}>
                        <button type="button" onClick={prev} aria-label="Silhouette précédente">←</button>
                        <span>
                            {String(activeIndex! + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                        <button type="button" onClick={next} aria-label="Silhouette suivante">→</button>
                    </div>
                </div>
            )}
        </div>
    );
}