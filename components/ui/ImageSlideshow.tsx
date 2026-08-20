"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
    src: string;
    alt: string;
};

export default function ImageSlideshow({
                                           slides,
                                           intervalMs = 4000,
                                           sizes = "(max-width: 920px) 100vw, 50vw",
                                       }: {
    slides: Slide[];
    intervalMs?: number;
    sizes?: string;
}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((i) => (i + 1) % slides.length);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [slides.length, intervalMs]);

    return (
        <>
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
                        transition: "opacity 1.6s ease",
                    }}
                />
            ))}
        </>
    );
}