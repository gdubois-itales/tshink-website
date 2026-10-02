"use client";

import styles from "./Pagination.module.css";

type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const prev = () => onPageChange(Math.max(1, page - 1));
    const next = () => onPageChange(Math.min(totalPages, page + 1));

    return (
        <div className={styles.pagination}>
            <button
                type="button"
                className={styles.navButton}
                onClick={prev}
                disabled={page === 1}
                aria-label="Page précédente"
            >
                <span>←</span>
                <span>Préc.</span>
            </button>

            <div className={styles.progress}>
                <div className={styles.counter}>
                    <span className={styles.current}>{String(page).padStart(2, "0")}</span>
                    <span className={styles.separator}>/</span>
                    <span>{String(totalPages).padStart(2, "0")}</span>
                </div>
                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${(page / totalPages) * 100}%` }}
                    />
                </div>
            </div>

            <button
                type="button"
                className={`${styles.navButton} ${styles.navNext}`}
                onClick={next}
                disabled={page === totalPages}
                aria-label="Page suivante"
            >
                <span>Suiv.</span>
                <span>→</span>
            </button>
        </div>
    );
}

