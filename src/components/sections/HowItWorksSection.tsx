"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import findImage from "@/assets/images/how-it-work/ho-it-work-1.png";
import bookImage from "@/assets/images/how-it-work/ho-it-work-2.png";
import pickupImage from "@/assets/images/how-it-work/ho-it-work-3.png";
import phoneImage from "@/assets/images/how-it-work/ho-it-work-4.1.png";
import reviewImage from "@/assets/images/how-it-work/ho-it-work-4.2.png";

type HowItWorksStep = {
  description: string;
  floatingImage?: StaticImageData;
  floatingImageAlt?: string;
  image: StaticImageData;
  imageAlt: string;
  number: string;
  title: string;
};

const steps: readonly HowItWorksStep[] = [
  {
    number: "01",
    title: "Найдите вещь",
    description: "Выберите нужную вещь прямо рядом с собой.",
    image: findImage,
    imageAlt: "Экран приложения с картой вещей рядом",
  },
  {
    number: "02",
    title: "Забронируйте",
    description: "Укажите дату и время в приложении.",
    image: bookImage,
    imageAlt: "Календарь выбора даты бронирования",
  },
  {
    number: "03",
    title: "Заберите у соседа",
    description: "Свяжитесь с соседом и заберите в удобном месте.",
    image: pickupImage,
    imageAlt: "Соседи передают дрель друг другу",
  },
  {
    number: "04",
    title: "Верните и оцените",
    description: "Верните вещь и оставьте отзыв о сделке.",
    image: phoneImage,
    imageAlt: "Экран приложения со списком сделок",
    floatingImage: reviewImage,
    floatingImageAlt: "Карточка отзыва после завершения сделки",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -22% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`how-it-works${isVisible ? " how-it-works--visible" : ""}`}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      ref={sectionRef}
    >
      <div className="how-it-works__inner">
        <div className="how-it-works__intro">
          <p className="how-it-works__eyebrow">Как это работает</p>
          <h2 id="how-it-works-title">Берите нужное у соседей в четыре шага</h2>
        </div>

        <ol className="how-it-works__steps">
          {steps.map((step) => (
            <li className="how-it-works__step" key={step.number}>
              <div
                className={`how-it-works__media${
                  step.floatingImage ? " how-it-works__media--layered" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  sizes="(max-width: 640px) 76vw, (max-width: 1024px) 34vw, 240px"
                  className={`how-it-works__image${
                    step.floatingImage ? " how-it-works__image--phone" : ""
                  }`}
                />
                {step.floatingImage ? (
                  <Image
                    src={step.floatingImage}
                    alt={step.floatingImageAlt ?? ""}
                    sizes="(max-width: 640px) 68vw, (max-width: 1024px) 30vw, 220px"
                    className="how-it-works__floating-image"
                  />
                ) : null}
              </div>
              <div className="how-it-works__copy">
                <span className="how-it-works__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
