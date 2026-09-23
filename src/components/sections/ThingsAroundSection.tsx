"use client";

import Image from "next/image";
import type { TransitionEvent } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import toolsImage from "@/assets/images/things-around/generated/tools.webp";
import tourismImage from "@/assets/images/things-around/generated/tourism.webp";
import homeImage from "@/assets/images/things-around/generated/home.webp";
import sportImage from "@/assets/images/things-around/generated/sport.webp";
import electronicsImage from "@/assets/images/things-around/generated/photo-electronics.webp";
import clothingImage from "@/assets/images/things-around/generated/clothing.webp";
import categoryHeadingSticker from "@/assets/images/things-around/category-heading-sticker.png";

const categories = [
  {
    title: "Инструменты",
    image: toolsImage,
    alt: "Жёлто-чёрные дрель, отвёртка и рулетка",
  },
  {
    title: "Туризм",
    image: tourismImage,
    alt: "Жёлто-чёрные палатка, рюкзак и туристический коврик",
  },
  {
    title: "Для дома",
    image: homeImage,
    alt: "Жёлто-чёрные пылесос и настольная лампа",
  },
  {
    title: "Спорт",
    image: sportImage,
    alt: "Жёлто-чёрные городской велосипед и велошлем",
  },
  {
    title: "Фото и электроника",
    image: electronicsImage,
    alt: "Жёлто-чёрные фотокамера и проектор",
  },
  {
    title: "Одежда",
    image: clothingImage,
    alt: "Жёлто-чёрные куртка и кроссовки с белым свитером",
  },
];

const cloneCount = 3;
const firstRealSlideIndex = cloneCount;
const slides = [
  ...categories.slice(-cloneCount).map((category, index) => ({
    ...category,
    key: `before-${index}`,
    isClone: true,
  })),
  ...categories.map((category, index) => ({
    ...category,
    key: `category-${index}`,
    isClone: false,
  })),
  ...categories.slice(0, cloneCount).map((category, index) => ({
    ...category,
    key: `after-${index}`,
    isClone: true,
  })),
];

function normalizeSlideIndex(index: number) {
  if (index < firstRealSlideIndex) {
    return index + categories.length;
  }

  if (index >= firstRealSlideIndex + categories.length) {
    return index - categories.length;
  }

  return index;
}

export function ThingsAroundSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const currentSlideRef = useRef(firstRealSlideIndex);
  const isMovingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayCycle, setAutoplayCycle] = useState(0);

  const setTrackPosition = useCallback((index: number, animate: boolean) => {
    const track = trackRef.current;
    const slide = track?.children.item(index);

    if (!track || !(slide instanceof HTMLElement)) {
      return;
    }

    if (animate) {
      track.dataset.moving = "true";
    } else {
      delete track.dataset.moving;
    }

    track.style.transform = `translate3d(${-slide.offsetLeft}px, 0, 0)`;
  }, []);

  const moveCarousel = useCallback(
    (direction: -1 | 1) => {
      if (isMovingRef.current) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let nextSlide = currentSlideRef.current + direction;

      if (prefersReducedMotion) {
        nextSlide = normalizeSlideIndex(nextSlide);
      }

      currentSlideRef.current = nextSlide;
      isMovingRef.current = !prefersReducedMotion;
      setTrackPosition(nextSlide, !prefersReducedMotion);
    },
    [setTrackPosition],
  );

  const moveManually = (direction: -1 | 1) => {
    moveCarousel(direction);
    setAutoplayCycle((cycle) => cycle + 1);
  };

  useLayoutEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    setTrackPosition(currentSlideRef.current, false);

    const resizeObserver = new ResizeObserver(() => {
      isMovingRef.current = false;
      setTrackPosition(currentSlideRef.current, false);
    });

    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, [setTrackPosition]);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (!document.hidden) {
        moveCarousel(1);
      }
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [autoplayCycle, isPaused, moveCarousel]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLUListElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    isMovingRef.current = false;

    const normalizedSlide = normalizeSlideIndex(currentSlideRef.current);

    if (normalizedSlide !== currentSlideRef.current) {
      currentSlideRef.current = normalizedSlide;
      setTrackPosition(normalizedSlide, false);
    }
  };

  return (
    <section
      className="section things-around"
      id="things"
      aria-labelledby="things-title"
    >
      <div className="container">
        <div className="section-heading things-around__heading">
          <h2 id="things-title">Что можно найти рядом?</h2>
          <div className="things-around__heading-sticker">
            <Image
              src={categoryHeadingSticker}
              alt=""
              sizes="(min-width: 640px) 320px, 150px"
            />
            <p className="visually-hidden">
              От дрели на один вечер до палатки на целую неделю.
            </p>
          </div>
        </div>
        <div
          className="category-carousel"
          role="region"
          aria-roledescription="карусель"
          aria-label="Категории вещей"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <button
            className="category-carousel__button category-carousel__button--previous"
            type="button"
            aria-label="Показать предыдущую категорию"
            onClick={() => moveManually(-1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <div className="category-carousel__viewport" ref={viewportRef}>
            <ul
              className="category-carousel__track"
              ref={trackRef}
              aria-live="off"
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((category) => (
                <li
                  className="category"
                  key={category.key}
                  aria-hidden={category.isClone || undefined}
                >
                  <div className="category__image">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 85vw"
                    />
                  </div>
                  <h3>{category.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="category-carousel__button category-carousel__button--next"
            type="button"
            aria-label="Показать следующую категорию"
            onClick={() => moveManually(1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
