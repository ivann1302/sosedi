"use client";

import { useEffect, useRef, useState } from "react";
import { StatsList, type StatsListItem } from "@/components/sections/StatsList";

type StatItem = {
  label: string;
  suffix?: string;
  value: number;
};

const stats = [
  {
    value: 80,
    suffix: "%",
    label: "вещей используется меньше 10 раз",
  },
  {
    value: 12,
    suffix: " мин",
    label: "в среднем до нужной вещи",
  },
  {
    value: 300,
    suffix: " ₽",
    label: "вместо покупки за 15 000 ₽",
  },
  {
    value: 50000,
    suffix: "+",
    label: "предметов вокруг вас",
  },
] as const satisfies readonly StatItem[];

function formatStat(value: number, suffix = "") {
  return `${Math.round(value).toLocaleString("ru-RU")}${suffix}`;
}

function getStatsByProgress(progress: number): StatsListItem[] {
  return stats.map((item) => ({
    label: item.label,
    value: formatStat(item.value * progress, item.suffix),
  }));
}

const visibleStats = getStatsByProgress(1);
const hiddenStats = getStatsByProgress(0);

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayStats, setDisplayStats] = useState<StatsListItem[]>(visibleStats);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let hasAnimated = false;

    const animateStats = () => {
      const startedAt = performance.now();
      const duration = 1200;

      setDisplayStats(hiddenStats);
      setIsVisible(true);

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setDisplayStats(getStatsByProgress(easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated) {
          return;
        }

        hasAnimated = true;

        if (reducedMotion) {
          setDisplayStats(visibleStats);
          setIsVisible(true);
        } else {
          animateStats();
        }

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      className={`stats${isVisible ? " stats--visible" : ""}`}
      aria-labelledby="stats-title"
      ref={sectionRef}
    >
      <div className="stats__inner">
        <div className="stats__intro">
          <p className="stats__eyebrow">Соседский шеринг в цифрах</p>
          <h2 id="stats-title">Редко нужные вещи можно не покупать</h2>
        </div>

        <StatsList items={displayStats} />
      </div>
    </section>
  );
}
