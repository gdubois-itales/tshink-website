"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

type Slide = {
    src: string;
    alt: string;
};

type ImageCarouselProps = {
    slides: Slide[];
    sizes?: string;
    objectFit?: "contain" | "cover";
};

export default function ImageCarousel({
                                          slides,
                                          sizes = "(max-width: 920px) 100vw, 50vw",
                                          objectFit = "contain",
                                      }: ImageCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const goTo = (i: number) => {
        setCurrent((i + slides.length) % slides.length);
    };

    const prev = () => goTo(current - 1);
    const next = () => goTo(current + 1);

    const total = slides.length;

    const currentNumber = String(current + 1).padStart(2, "0");
    const totalNumber = String(total).padStart(2, "0");

    const progress = total > 1
        ? ((current + 1) / total) * 100
        : 100;

    // Fermer la lightbox avec Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }

            if (event.key === "ArrowLeft" && total > 1) {
                prev();
            }

            if (event.key === "ArrowRight" && total > 1) {
                next();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Empêche la page de défiler derrière la lightbox
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, current, total]);

    return (
        <>
            <div className={styles.carousel}>

                {/* ================= IMAGE ================= */}

                <div className={styles.imageFrame}>
                    <button
                        type="button"
                        className={styles.imageButton}
                        onClick={() => setIsOpen(true)}
                        aria-label="Agrandir l'image"
                    >
                        {slides.map((slide, i) => (
                            <Image
                                key={slide.src}
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                sizes={sizes}
                                priority={i === 0}
                                style={{
                                    objectFit,
                                    position: "absolute",
                                    inset: 0,
                                    opacity: i === current ? 1 : 0,
                                    transition: "opacity 0.5s ease",
                                }}
                            />
                        ))}
                    </button>
                </div>

                {/* ================= NAVIGATION ================= */}

                {slides.length > 1 && (
                    <div className={styles.navigation}>

                        <button
                            type="button"
                            className={styles.navButton}
                            onClick={prev}
                            aria-label="Image précédente"
                        >
                            <span>←</span>
                            <span>Préc.</span>
                        </button>

                        <div className={styles.progress}>
                            <div className={styles.counter}>
                                <span className={styles.current}>
                                    {currentNumber}
                                </span>

                                <span className={styles.separator}>
                                    /
                                </span>

                                <span>{totalNumber}</span>
                            </div>

                            <div className={styles.progressTrack}>
                                <div
                                    className={styles.progressBar}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.navButton} ${styles.navNext}`}
                            onClick={next}
                            aria-label="Image suivante"
                        >
                            <span>Suiv.</span>
                            <span>→</span>
                        </button>

                    </div>
                )}
            </div>

            {/* ================= LIGHTBOX ================= */}

            {isOpen && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image agrandie"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => setIsOpen(false)}
                        aria-label="Fermer l'image"
                    >
                        ×
                    </button>

                    <div
                        className={styles.lightboxContent}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.lightboxImage}>
                            <Image
                                src={slides[current].src}
                                alt={slides[current].alt}
                                fill
                                sizes="90vw"
                                priority
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        {slides.length > 1 && (
                            <div className={styles.lightboxNavigation}>

                                <button
                                    type="button"
                                    className={styles.lightboxNavButton}
                                    onClick={prev}
                                    aria-label="Image précédente"
                                >
                                    ← <span>Préc.</span>
                                </button>

                                <div className={styles.lightboxProgress}>
                                    <div className={styles.counter}>
                                        <span className={styles.current}>
                                            {currentNumber}
                                        </span>

                                        <span className={styles.separator}>
                                            /
                                        </span>

                                        <span>{totalNumber}</span>
                                    </div>

                                    <div className={styles.progressTrack}>
                                        <div
                                            className={styles.progressBar}
                                            style={{
                                                width: `${progress}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className={styles.lightboxNavButton}
                                    onClick={next}
                                    aria-label="Image suivante"
                                >
                                    <span>Suiv.</span> →
                                </button>

                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}