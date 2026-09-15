"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import type { CollectionImage } from "@/lib/collections";
import styles from "./CollectionsGallery.module.css";

type CollectionGalleryProps = {
    images: CollectionImage[];
};

// Sorti du composant principal : NavBar est déclaré une seule fois,
// au niveau du module, et reçoit tout ce dont il a besoin en props.
// (voir règle ESLint react-hooks/static-components)
type NavBarProps = {
    dark?: boolean;
    onPrev: () => void;
    onNext: () => void;
    currentNumber: string;
    totalNumber: string;
    progress: number;
};

function NavBar({ dark = false, onPrev, onNext, currentNumber, totalNumber, progress }: NavBarProps) {
    return (
        <div className={dark ? styles.lightboxNavigation : styles.navigation}>
            <button
                type="button"
                className={dark ? styles.lightboxNavButton : styles.navButton}
                onClick={onPrev}
                aria-label="Image précédente"
            >
                <span>←</span>
                <span>Préc.</span>
            </button>

            <div className={dark ? styles.lightboxProgress : styles.progress}>
                <div className={styles.counter}>
                    <span className={styles.current}>{currentNumber}</span>
                    <span className={styles.separator}>/</span>
                    <span>{totalNumber}</span>
                </div>
                <div className={styles.progressTrack}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <button
                type="button"
                className={`${dark ? styles.lightboxNavButton : styles.navButton} ${
                    dark ? styles.lightboxNavNext : styles.navNext
                }`}
                onClick={onNext}
                aria-label="Image suivante"
            >
                <span>Suiv.</span>
                <span>→</span>
            </button>
        </div>
    );
}

export default function CollectionGallery({ images }: CollectionGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [fullscreen, setFullscreen] = useState(false);

    const isOpen = activeIndex !== null;
    const total = images.length;
    const current = activeIndex !== null ? images[activeIndex] : null;

    const currentNumber = activeIndex !== null ? String(activeIndex + 1).padStart(2, "0") : "00";
    const totalNumber = String(total).padStart(2, "0");
    const progress = activeIndex !== null && total > 1 ? ((activeIndex + 1) / total) * 100 : 100;

    const close = () => {
        setActiveIndex(null);
        setFullscreen(false);
    };

    const goTo = (i: number) => setActiveIndex((i + total) % total);
    const prev = () => activeIndex !== null && goTo(activeIndex - 1);
    const next = () => activeIndex !== null && goTo(activeIndex + 1);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                fullscreen ? setFullscreen(false) : close();
            }
            if (event.key === "ArrowLeft" && total > 1) prev();
            if (event.key === "ArrowRight" && total > 1) next();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, fullscreen, activeIndex, total]);

    return (
        <>
            {/* ================= GRILLE ================= */}
            <div className={styles.galleryGrid}>
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        className={styles.galleryCard}
                        onClick={() => {
                            setActiveIndex(i);
                            setFullscreen(false);
                        }}
                    >
                        <div className={styles.galleryImage}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 880px) 50vw, 25vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: img.objectPosition ?? "center",
                                }}
                            />
                        </div>
                        <span className={styles.galleryCaption}>{img.alt}</span>
                    </button>
                ))}
            </div>

            {/* ================= MODE FICHE ================= */}
            {isOpen && current && !fullscreen && (
                <div
                    className={styles.modalOverlay}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) close();
                    }}
                >
                    <div className={styles.modalBox}>
                        <button
                            type="button"
                            className={styles.modalClose}
                            onClick={close}
                            aria-label="Fermer"
                        >
                            ✕
                        </button>

                        <div className={styles.modalHeader}>
                            <Eyebrow>Collection</Eyebrow>
                            <p className={styles.modalCaption}>{current.note ?? current.alt}</p>
                        </div>

                        <button
                            type="button"
                            className={styles.modalImageWrap}
                            onClick={() => setFullscreen(true)}
                            aria-label="Agrandir l'image"
                        >
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                sizes="(max-width: 720px) 90vw, 640px"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: current.objectPosition ?? "center",
                                }}
                            />
                        </button>

                        {total > 1 && (
                            <NavBar
                                onPrev={prev}
                                onNext={next}
                                currentNumber={currentNumber}
                                totalNumber={totalNumber}
                                progress={progress}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* ================= MODE PLEIN ÉCRAN ================= */}
            {isOpen && current && fullscreen && (
                <div className={styles.lightbox} role="dialog" aria-modal="true">
                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => setFullscreen(false)}
                        aria-label="Revenir à la fiche"
                    >
                        ✕
                    </button>

                    <div className={styles.lightboxContent}>
                        <div className={styles.lightboxImage}>
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                sizes="90vw"
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

                        {total > 1 && (
                            <NavBar
                                dark
                                onPrev={prev}
                                onNext={next}
                                currentNumber={currentNumber}
                                totalNumber={totalNumber}
                                progress={progress}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}