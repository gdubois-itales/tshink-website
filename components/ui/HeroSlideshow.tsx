"use client";

import { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import PlayPauseButton from "./PlayPauseButton";
import RunwayWalker from "./RunwayWalker";
import styles from "./HeroSlideshow.module.css";

type Slide = { src: string; alt: string };

export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const toggle = () => setIsPlaying((playing) => !playing);

    // Fragment : ces deux blocs deviennent directement des colonnes de la grille .hero
    return (
        <>
            <div className={styles.imageBox}>
                <ImageSlideshow
                    slides={slides}
                    isPlaying={isPlaying}
                    onPlayingChange={setIsPlaying}
                />
            </div>

            <div className={styles.walkerColumn}>
                <PlayPauseButton isPlaying={isPlaying} onToggle={toggle} />
                <RunwayWalker isPlaying={isPlaying} onToggle={toggle} />
            </div>
        </>
    );
}