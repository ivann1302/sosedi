"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import bicycleImage from "@/assets/images/things-around/bycicle.webp";
import chainsawImage from "@/assets/images/things-around/chainsaw.webp";
import drillImage from "@/assets/images/things-around/drel.webp";
import jigsawImage from "@/assets/images/things-around/jigsaw.webp";
import projectorImage from "@/assets/images/things-around/proector.webp";
import tentImage from "@/assets/images/things-around/tent.webp";
import vacuumImage from "@/assets/images/things-around/vcleaner.webp";
import vrImage from "@/assets/images/things-around/vr.webp";

type ThingPosition =
  | "drill"
  | "projector"
  | "bicycle"
  | "chainsaw"
  | "vr"
  | "tent"
  | "vacuum"
  | "jigsaw";

type FloatingThing = {
  image: StaticImageData;
  name: string;
  position: ThingPosition;
};

const floatingThings = [
  {
    name: "Дрель",
    image: drillImage,
    position: "drill",
  },
  {
    name: "Проектор",
    image: projectorImage,
    position: "projector",
  },
  {
    name: "Велосипед",
    image: bicycleImage,
    position: "bicycle",
  },
  {
    name: "Цепная пила",
    image: chainsawImage,
    position: "chainsaw",
  },
  {
    name: "VR-шлем",
    image: vrImage,
    position: "vr",
  },
  {
    name: "Палатка",
    image: tentImage,
    position: "tent",
  },
  {
    name: "Пылесос",
    image: vacuumImage,
    position: "vacuum",
  },
  {
    name: "Лобзик",
    image: jigsawImage,
    position: "jigsaw",
  },
] as const satisfies readonly FloatingThing[];

export function ThingsAroundSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frameId = 0;

    const updateScrollFly = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionProgress = Math.min(
        Math.max(
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
          0,
        ),
        1,
      );
      const rawProgress = Math.min(
        Math.max((sectionProgress - 0.2) / 0.8, 0),
        1,
      );
      const progress = rawProgress * rawProgress * (3 - 2 * rawProgress);

      section.style.setProperty("--things-scroll-fly", `${progress * 280}px`);
      frameId = 0;
    };

    const requestScrollFlyUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollFly);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        requestScrollFlyUpdate();
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -24% 0px",
        threshold: 0.24,
      },
    );
    const footer = document.querySelector<HTMLElement>(".site-footer");
    let footerObserver: IntersectionObserver | null = null;

    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(Boolean(entry?.isIntersecting));
        },
        {
          rootMargin: "0px 0px -72px 0px",
          threshold: 0.08,
        },
      );
      footerObserver.observe(footer);
    }

    observer.observe(section);
    window.addEventListener("scroll", requestScrollFlyUpdate, { passive: true });
    window.addEventListener("resize", requestScrollFlyUpdate);

    return () => {
      observer.disconnect();
      footerObserver?.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestScrollFlyUpdate);
      window.removeEventListener("resize", requestScrollFlyUpdate);
    };
  }, []);

  return (
    <section
      className={`things-around${isVisible ? " things-around--visible" : ""}`}
      aria-labelledby="things-around-title"
      ref={sectionRef}
    >
      <div className="things-around__inner">
        <div className="things-around__content">
          <h2 id="things-around-title">
            У соседей уже есть всё,{" "}
            <span>что может понадобиться</span>
          </h2>
          <p className="things-around__text">
            От дрели на один вечер, до палатки на неделю.
          </p>
          <p className="things-around__metric">
            <strong>50 000+</strong>
            <span>вещей вокруг вас</span>
          </p>
        </div>

        <ul className="things-around__items" aria-hidden="true">
          {floatingThings.map((thing) => (
            <li
              className={`things-around__item things-around__item--${thing.position}`}
              key={thing.position}
            >
              <span className="things-around__scroll">
                <Image
                  src={thing.image}
                  alt=""
                  sizes="(max-width: 680px) 34vw, (max-width: 1120px) 22vw, 220px"
                  className="things-around__image"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        className={`things-around__mobile-cta${
          isFooterVisible ? " things-around__mobile-cta--footer" : ""
        }`}
        href="#download"
      >
        Скачать приложение
      </Link>
    </section>
  );
}
