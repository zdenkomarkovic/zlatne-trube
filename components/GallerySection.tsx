"use client";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

export default function GallerySection() {
  const images = [
    "/optimized/IMG-38dd3d661b28d6a6a6e581bd4091abb3-V.webp",
    "/optimized/IMG-6955ad04e764ed28f052604da87dee11-V.webp",
    "/optimized/IMG-8b153e6952390e83da2617fa36cbaba0-V.webp",
    "/optimized/IMG-e3bbdfa52aec481c1318cb01c7b3267c-V.webp",
    "/optimized/IMG-e6a918801517ab3cf99a1b9873d68ca8-V.webp",
    "/optimized/IMG-ff35e7d8edc394b4a4ca4712248fb58a-V.webp",
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="brut-container mt-16 mb-8">
      <AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.04}>
              <div
                className="relative h-full overflow-hidden rounded-2xl group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative transition-transform duration-500 h-full ${
                    hoveredIndex === idx ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Zlatne Trube nastup"
                    width={800}
                    height={800}
                    className="w-full h-full aspect-square object-cover"
                    unoptimized
                  />
                </div>
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-orange-900/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    🎺 Zlatne Trube
                  </div>
                </div>
                {/* Glow border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredIndex === idx
                      ? "shadow-[0_0_30px_rgba(255,165,0,0.6)]"
                      : ""
                  }`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
