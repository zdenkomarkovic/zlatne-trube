"use client";
import { useMemo } from "react";
import AnimatedSection from "./AnimatedSection";

type Testimonial = {
  name: string;
  location: string;
  content: string;
  rating: number; // 1-5
  avatar?: string;
};

export default function Testimonials() {
  const items = useMemo<Testimonial[]>(
    () => [
      {
        name: "Milica & Nikola",
        location: "Beograd",
        content:
          "Trubači Zlatne Trube u Beogradu podigli su atmosferu na našoj svadbi od dočeka do torte. Profesionalni, tačni i puni energije – najbolji izbor za venčanja u Beogradu!",
        rating: 5,
      },
      {
        name: "Ana",
        location: "Novi Sad",
        content:
          "Trubači Zlatne Trube u Novom Sadu su napravili spektakl za moj rođendan. Savršen balans tradicionalnih kola i modernih hitova – gosti su non-stop igrali!",
        rating: 5,
      },
      {
        name: "Marko",
        location: "Subotica",
        content:
          "Trubači Zlatne Trube u Subotici su ispunili svaku želju i držali odličan ritam cele večeri. Preporučujem za proslave u Subotici i okolini!",
        rating: 5,
      },
      {
        name: "Jelena",
        location: "Šabac",
        content:
          "Trubači Zlatne Trube u Šapcu su našem krštenju dali poseban svečani ton, a kasnije i odličnu zabavu. Sve preporuke!",
        rating: 5,
      },
      {
        name: "Vladimir",
        location: "Kragujevac",
        content:
          "Trubači Zlatne Trube u Kragujevcu – besprekorna koordinacija sa restoranom i protokolom, a repertoar taman kako smo želeli.",
        rating: 5,
      },
      {
        name: "Sara",
        location: "Niš",
        content:
          "Trubači Zlatne Trube u Nišu su podigli atmosferu na korporativnom događaju – profesionalno ozvučenje, odličan ritam i interakcija sa publikom.",
        rating: 5,
      },
      {
        name: "Emir",
        location: "Novi Pazar",
        content:
          "Trubači Zlatne Trube u Novom Pazaru doneli su vrhunsku energiju i poštovali sve dogovore – atmosfera je bila za pamćenje!",
        rating: 5,
      },
      {
        name: "Ivana",
        location: "Zagreb",
        content:
          "Trubači Zlatne Trube u Zagrebu – autentičan balkanski zvuk, savršeno uklopljen u naš porodični jubilej. Gosti oduševljeni!",
        rating: 5,
      },
      {
        name: "Luka",
        location: "Ljubljana",
        content:
          "Trubači Zlatne Trube u Ljubljani uneli su posebnu živost i ritam – divna kombinacija tradicije i modernog zvuka.",
        rating: 5,
      },
    ],
    []
  );

  return (
    <section className="brut-container mt-10">
      <AnimatedSection>
        <div className="md-card md-elevation-1 p-6 md:p-10">
          <h2>Utisci i preporuke</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {items.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.05}>
                <article className="md-card md-elevation-1 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.location}
                      </div>
                      <Stars rating={t.rating} />
                    </div>
                  </div>
                  <p className="leading-relaxed mt-4">“{t.content}”</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="#kontakt" className="md-btn">
              Pogledaj još utisaka
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < rating);
  return (
    <div className="flex gap-1 mt-1" aria-label={`${rating} od 5 zvezdica`}>
      {stars.map((filled, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={filled ? "hsl(var(--primary))" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}
