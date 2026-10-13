"use client";

import styles from "./SlideNav.module.css";

type SlideNavProps = {
    current: number; // 1-based
    total: number;
    onPrev: () => void;
    onNext: () => void;
    dark?: boolean;
    size?: "md" | "lg";
    prevLabel?: string;
    nextLabel?: string;
};

export default function SlideNav({
                                     current,
                                     total,
                                     onPrev,
                                     onNext,
                                     dark = false,
                                     size = "md",
                                     prevLabel = "Préc.",
                                     nextLabel = "Suiv.",
                                 }: SlideNavProps) {
    if (total <= 1) return null;

    const currentNumber = String(current).padStart(2, "0");
    const totalNumber = String(total).padStart(2, "0");
    const progress = (current / total) * 100;
    const sizeClass = size === "lg" ? styles.lg : "";

    return (
        <div className={`${dark ? styles.navigationDark : styles.navigation} ${sizeClass}`}>
            <button
                type="button"
                className={dark ? styles.navButtonDark : styles.navButton}
                onClick={onPrev}
                aria-label="Précédent"
            >
                <span>←</span>
                <span>{prevLabel}</span>
            </button>

            <div className={styles.progress}>
                <div className={styles.counter}>
                    <span className={styles.current}>{currentNumber}</span>
                    <span className={styles.separator}>/</span>
                    <span>{totalNumber}</span>
                </div>
                <div className={dark ? styles.progressTrackDark : styles.progressTrack}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <button
                type="button"
                className={`${dark ? styles.navButtonDark : styles.navButton} ${styles.navNext}`}
                onClick={onNext}
                aria-label="Suivant"
            >
                <span>{nextLabel}</span>
                <span>→</span>
            </button>
        </div>
    );
}