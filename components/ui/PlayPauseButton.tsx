"use client";

import styles from "./PlayPauseButton.module.css";

type PlayPauseButtonProps = {
    isPlaying: boolean;
    onToggle: () => void;
};

export default function PlayPauseButton({
                                            isPlaying,
                                            onToggle,
                                        }: PlayPauseButtonProps) {
    return (
        <button
            type="button"
            className={styles.playPause}
            onClick={onToggle}
            aria-label={isPlaying ? "Mettre en pause" : "Reprendre la lecture"}
        >
            {isPlaying ? (
                <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                    <rect x="5" y="4" width="5" height="16" rx="1" fill="currentColor" />
                    <rect x="14" y="4" width="5" height="16" rx="1" fill="currentColor" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                    <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
                </svg>
            )}
            <span>{isPlaying ? "Arrêter le défilé" : "Relancer le défilé"}</span>
        </button>
    );
}