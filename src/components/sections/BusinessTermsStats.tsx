"use client";

import { useEffect, useRef } from "react";

const businessStats = [
  {
    value: "10 000+",
    label: "активных пользователей",
    icon: "users",
    position: "users",
  },
  {
    value: "2 356",
    label: "новых запросов каждый день",
    icon: "growth",
    position: "requests",
  },
  {
    value: "Безопасные",
    label: "сделки и рейтинг",
    icon: "shield",
    position: "safety",
  },
] as const;

type BusinessStatIcon = (typeof businessStats)[number]["icon"];

function BusinessIcon({ name }: { name: BusinessStatIcon }) {
  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M8.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.8 19.5c.6-3.4 2.8-5.2 5.7-5.2s5.1 1.8 5.7 5.2H2.8Zm11.4-1.7c.8-1.6 2.1-2.6 3.8-2.6 2 0 3.5 1.2 4 3.7h-6.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "growth") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="m3 17 5-5 4 3.5 7-8M17 7h2v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle cx="8" cy="12" r="1.6" fill="currentColor" />
        <circle cx="19" cy="7" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 3.5 19 6v5.2c0 4.4-2.6 7.1-7 9.3-4.4-2.2-7-4.9-7-9.3V6l7-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function BusinessTermsStats() {
  const statsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const stats = statsRef.current;

    if (!stats) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stats.classList.add("business-terms__stats--visible");
      return;
    }

    stats.classList.add("business-terms__stats--motion");

    const observer = new IntersectionObserver(
      ([entry]) => {
        stats.classList.toggle(
          "business-terms__stats--visible",
          entry.isIntersecting,
        );
      },
      {
        rootMargin: "-12% 0px -18%",
        threshold: 0.32,
      },
    );

    observer.observe(stats);

    return () => observer.disconnect();
  }, []);

  return (
    <ul
      className="business-terms__stats"
      ref={statsRef}
    >
      {businessStats.map((stat) => (
        <li
          className={`business-terms__stat business-terms__stat--${stat.position}`}
          key={stat.label}
        >
          <span className="business-terms__stat-icon">
            <BusinessIcon name={stat.icon} />
          </span>
          <span className="business-terms__stat-copy">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
