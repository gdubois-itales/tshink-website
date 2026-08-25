"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

type Slide = {
    src: string;
    alt: string;
};

/**
 * Manually-controlled carousel (arrows + dots, no timer).
 * Unlike ImageSlideshow, nothing advances on its own — this avoids the
 * classic "visitor never notices there was more than one image" problem,
 * which matters on content pages where people may not linger long enough
 * to see an automatic transition.
 */
export default function ImageCarousel({
                                          slides,
                                          sizes = "(max-width: 920px) 100vw, 50vw",
                                      }: {
    slides: Slide[];
    sizes?: string;
}) {
    const [current, setCurrent] = useState(0);

    const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);
    const prev = () => goTo(current - 1);
    const next = () => goTo(current + 1);

    return (
        <div className={styles.carousel}>
            {slides.map((slide, i) => (
                <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes={sizes}
                    priority={i === 0}
                    style={{
                        objectFit: "contain",
                        position: "absolute",
                        inset: 0,
                        opacity: i === current ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                />
            ))}

            {slides.length > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.arrow} ${styles.arrowPrev}`}
                        onClick={prev}
                        aria-label="Image précédente"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className={`${styles.arrow} ${styles.arrowNext}`}
                        onClick={next}
                        aria-label="Image suivante"
                    >
                        →
                    </button>

                    <div className={styles.dots}>
                        {slides.map((slide, i) => (
                            <button
                                key={slide.src}
                                type="button"
                                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                                onClick={() => goTo(i)}
                                aria-label={`Aller à l'image ${i + 1}`}
                                aria-current={i === current}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}