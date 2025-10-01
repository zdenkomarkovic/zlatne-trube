"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView } as const;
}

function useCountUp(target: number, start: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);
  return value;
}

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
  delay: number;
  index: number;
}

function StatItem({ target, suffix, label, description, inView, delay, index }: StatItemProps) {
  const val = useCountUp(target, inView, 1200 + index * 200);

  return (
    <AnimatedSection delay={delay}>
      <div className="text-center">
        <div className="text-3xl md:text-5xl font-extrabold text-primary mb-2">
          {val}
          {suffix}
        </div>
        <div className="text-lg md:text-xl font-bold text-foreground mb-1">
          {label}
        </div>
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Statistics() {
  const stats = [
    {
      number: "500+",
      label: "Uspešnih proslava",
      description: "Preko 500 zadovoljnih klijenata"
    },
    {
      number: "15+",
      label: "Godina iskustva",
      description: "Profesionalni pristup i tradicija"
    },
    {
      number: "50+",
      label: "Gradova u regionu",
      description: "Srbija, Hrvatska, Slovenija"
    },
    {
      number: "100%",
      label: "Zadovoljstvo klijenata",
      description: "Pozitivni utisci i preporuke"
    }
  ];

  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="brut-container mt-10">
      <div ref={ref} className="modern-card modern-elevation-2 p-6 md:p-10">
        <h2 className="gradient-text text-center mb-8">Naše statistike</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const match = stat.number.match(/\d+/);
            const suffix = stat.number.replace(/\d+/g, "");
            const target = match ? parseInt(match[0], 10) : 0;

            return (
              <StatItem
                key={index}
                target={target}
                suffix={suffix}
                label={stat.label}
                description={stat.description}
                inView={inView}
                delay={index * 0.05}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
