"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CollectionImage } from "@/lib/collections";
import styles from "./CollectionsGallery.module.css";
import SlideNav from "@/components/ui/SlideNav";

type CollectionGalleryProps = {
    images: CollectionImage[];
};

// Sorti du composant principal : NavBar est déclaré une seule fois,
// au niveau du module, et reçoit tout ce dont il a besoin en props.
// (voir règle ESLint react-hooks/static-components)
type NavBarProps = {
    onPrev: () => void;
    onNext: () => void;
};


export default function CollectionGallery({ images }: CollectionGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const isOpen = activeIndex !== null;
    const total = images.length;
    const current = activeIndex !== null ? images[activeIndex] : null;

    const currentNumber = activeIndex !== null ? String(activeIndex + 1).padStart(2, "0") : "00";
    const totalNumber = String(total).padStart(2, "0");
    const progress = activeIndex !== null && total > 1 ? ((activeIndex + 1) / total) * 100 : 100;

    const close = () => setActiveIndex(null);
    const goTo = (i: number) => setActiveIndex((i + total) % total);
    const prev = () => activeIndex !== null && goTo(activeIndex - 1);
    const next = () => activeIndex !== null && goTo(activeIndex + 1);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
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
    }, [isOpen, activeIndex, total]);

    return (
        <>
            {/* ================= GRILLE ================= */}
            <div className={styles.galleryGrid}>
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        className={styles.galleryCard}
                        onClick={() => setActiveIndex(i)}
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

            {/* ================= PLEIN ÉCRAN ================= */}
            {isOpen && current && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) close();
                    }}
                >
                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={close}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    <div className={styles.lightboxContent}>

                        <p className={styles.lightboxCaption}>{current.alt}</p>

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

                        <SlideNav current={activeIndex! + 1} total={total} onPrev={prev} onNext={next} dark />

                    </div>
                </div>
            )}
        </>
    );
}