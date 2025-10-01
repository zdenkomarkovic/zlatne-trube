"use client";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function CelebrationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const celebrations = [
    {
      title: "Svadbe i venčanja",
      emoji: "💍",
      desc: "Trubači za svadbe i venčanja donose svečanu atmosferu od dočeka mladenaca do iznošenja torte. Prilagođavamo tempo protokolu i željama, uz tradicionalna kola i moderne hitove za pun podijum.",
    },
    {
      title: "Rođendani i privatne žurke",
      emoji: "🎉",
      desc: "Trubači za rođendane i privatne žurke podižu energiju gostiju autentičnim zvukom i dinamičnim setovima. Idealno za iznenađenja, prilagođen repertoar i nezaboravnu atmosferu.",
    },
    {
      title: "Krštenja i porodične svečanosti",
      emoji: "👶",
      desc: "Trubači za krštenja i porodične svečanosti neguju meru i ukus – lagani tonovi za okupljanje, svečani momenti kada je najvažnije i radosne melodije za slavlje sa porodicom i prijateljima.",
    },
    {
      title: "Korporativni događaji",
      emoji: "🏢",
      desc: "Trubači za korporativne događaje daju jedinstven pečat koktelima, team building okupljanjima i svečanim večerama. Profesionalan pristup, precizna satnica i brending-friendly nastup.",
    },
    {
      title: "Festivali i gradske proslave",
      emoji: "🎪",
      desc: "Trubači za festivale i gradske proslave osvajaju publiku snažnim zvukom i scenskom energijom. Veličina bine nije prepreka – donosimo pravi balkanski ritam i spektakl uživo.",
    },
    {
      title: "Restorani, kafane, klubovi",
      emoji: "🍻",
      desc: "Trubači za restorane, kafane i klubove stvaraju atmosferu koja vraća goste. Od laganog uvoda do vrhunca večeri – repertoar koji drži ritam i puni prostor pozitivnom energijom.",
    },
  ];

  const images = [
    "/optimized/IMG-d400b49c7169a03807e7cb781fe3c3a2-V.webp",
    "/optimized/IMG-38dd3d661b28d6a6a6e581bd4091abb3-V.webp",
    "/optimized/IMG-41d1127c21e9bde1a8841b7e3a07d5fb-V.webp",
  ];

  return (
    <section id="usluge" className="brut-container mt-16 mb-8">
      <AnimatedSection>
        <div className="modern-card modern-elevation-2 p-8 md:p-12">
          <h2 className="gradient-text">Vrste slavlja koje sviramo</h2>
          <p className="mt-6 text-base md:text-xl leading-relaxed text-muted-foreground">
            Specijalizovani smo za{" "}
            <strong className="text-foreground">svadbe</strong> (građansko i
            crkveno venčanje, doček mladenaca, prvi ples, kolo, iznošenje
            torte), <strong className="text-foreground">rođendane</strong> (od
            intimnih okupljanja do velikih žurki),
            <strong className="text-foreground"> krštenja</strong>,{" "}
            <strong className="text-foreground">
              momačke i devojačke večeri
            </strong>
            , <strong className="text-foreground">korporativne događaje</strong>{" "}
            (kokteli, team building, novogodišnje zabave),{" "}
            <strong className="text-foreground">
              festivale i gradske proslave
            </strong>
            , kao i svirke u
            <strong className="text-foreground"> restoranima i kafanama</strong>
            . Program prilagođavamo planu protokola i publici – od svečanog do
            eksplozivno zabavnog. Uz nas, vaša proslava dobija vrhunac energije
            i emocije koje se pamte.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 ">
            {celebrations.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="modern-card modern-elevation-1 p-6 group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-5xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-center mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-center leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            {images.map((src, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.04}>
                <div
                  className="relative overflow-hidden rounded-2xl group cursor-pointer h-full"
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
                      className="w-full h-full  object-cover"
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
        </div>
      </AnimatedSection>
    </section>
  );
}
