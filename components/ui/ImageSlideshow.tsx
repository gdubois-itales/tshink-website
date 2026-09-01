"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RunwayWalker from "./RunwayWalker";
import styles from "./ImageSlideshow.module.css";
import PlayPauseButton from "./PlayPauseButton";

type Slide = {
    src: string;
    alt: string;
};

type ImageSlideshowProps = {
    slides: Slide[];
    intervalMs?: number;
    sizes?: string;
    objectFit?: "contain" | "cover";
};

export default function ImageSlideshow({
                                           slides,
                                           intervalMs = 3000,
                                           sizes = "(max-width: 920px) 100vw, 50vw",
                                           objectFit = "contain",
                                       }: ImageSlideshowProps) {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const timer = setInterval(() => {
            setCurrent((i) => (i + 1) % slides.length);
        }, intervalMs);

        return () => clearInterval(timer);
    }, [isPlaying, slides.length, intervalMs]);

    const togglePlayback = () => {
        setIsPlaying((playing) => !playing);
    };

    return (
        <div className={styles.slideshow}>
            <div className={styles.imageArea}>
                {slides.map((slide, i) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes={sizes}
                        priority={i === 0}
                        style={{
                            objectFit: objectFit,
                            position: "absolute",
                            inset: 0,
                            opacity: i === current ? 1 : 0,
                            transition: "opacity 1.6s ease",
                        }}
                    />
                ))}
            </div>

            <div className={styles.runwayControls}>
                <PlayPauseButton
                    isPlaying={isPlaying}
                    onToggle={togglePlayback}
                />


                <RunwayWalker
                    isPlaying={isPlaying}
                    onToggle={togglePlayback}
                />
            </div>

        </div>
    );
}