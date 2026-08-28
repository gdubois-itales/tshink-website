"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./RunwayWalker.module.css";

type RunwayWalkerProps = {
    isPlaying: boolean;
    onToggle: () => void;
    frameCount?: number;
    frameDuration?: number; // ex: 100ms par image = 10 images par seconde
};

export default function RunwayWalker({
                                         isPlaying,
                                         onToggle,
                                         frameCount = 22,
                                         frameDuration = 100,
                                     }: RunwayWalkerProps) {
    const [frame, setFrame] = useState(0);

    // Références pour éviter les re-renders excessifs de la boucle d'animation
    const requestRef = useRef<number | null>(null);
    const previousTimeRef = useRef<number | null>(null);
    const frameIndexRef = useRef(0);

    // 1. Préchargement strict de TOUTES les silhouettes en mémoire cache
    useEffect(() => {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/images/runway/walk-${String(i).padStart(2, "0")}.gif`;
        }
        const pauseImage = new Image();
        pauseImage.src = "/images/runway/pause.png";
    }, [frameCount]);

    // 2. Boucle d'animation haute performance (Zéro temps d'arrêt)
    useEffect(() => {
        const animate = (time: number) => {
            if (previousTimeRef.current !== null) {
                const deltaTime = time - previousTimeRef.current;

                // Si le temps écoulé est supérieur ou égal à la durée de la frame
                if (deltaTime >= frameDuration) {
                    // Calcul mathématique instantané de la frame suivante (0 à 31)
                    frameIndexRef.current = (frameIndexRef.current + 1) % frameCount;
                    setFrame(frameIndexRef.current);

                    // Ajustement précis du temps pour éviter le décalage cumulé
                    previousTimeRef.current = time - (deltaTime % frameDuration);
                }
            } else {
                previousTimeRef.current = time;
            }

            if (isPlaying) {
                requestRef.current = requestAnimationFrame(animate);
            }
        };

        if (isPlaying) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            // Si on met en pause, on réinitialise le temps de référence
            previousTimeRef.current = null;
        }

        // Nettoyage de l'animation lors du démontage ou de la pause
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isPlaying, frameCount, frameDuration]);

    return (
        <button
            type="button"
            className={styles.walker}
            onClick={onToggle}
            aria-label={
                isPlaying
                    ? "Mettre le diaporama en pause"
                    : "Reprendre le diaporama"
            }
        >
            <img
                src={
                    isPlaying
                        ? `/images/runway/walk-${String(frame + 1).padStart(2, "0")}.gif`
                        : "/images/runway/pause.png"
                }
                alt=""
                aria-hidden="true"
            />
        </button>
    );
}
