"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { WheelEvent } from "react";
import { useRef } from "react";
import businessImage from "@/assets/images/business/business.webp";

type BlogArticle = {
  title: string;
  href: string;
  image: StaticImageData;
};

const blogArticles = [
  {
    title: "Какие вещи выгоднее брать у соседей, а не покупать",
    href: "/blog/chto-brat-u-sosedey",
    image: businessImage,
  },
  {
    title: "Как подготовить вещь к первой сдаче в аренду",
    href: "/blog/podgotovit-vesch-k-arende",
    image: businessImage,
  },
  {
    title: "Идеи для выходных: что можно найти рядом с домом",
    href: "/blog/idei-dlya-vyhodnyh",
    image: businessImage,
  },
  {
    title: "Почему локальный шеринг помогает экономить место дома",
    href: "/blog/lokalnyy-shering",
    image: businessImage,
  },
] as const satisfies readonly BlogArticle[];

export function BlogCarouselSection() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollByArticle = (direction: -1 | 1) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const firstItem = viewport.querySelector<HTMLElement>(
      ".blog-carousel__item",
    );
    const scrollStep = firstItem?.offsetWidth ?? viewport.clientWidth;

    viewport.scrollBy({
      left: direction * scrollStep,
      behavior: "smooth",
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (window.matchMedia("(max-width: 680px)").matches) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const scrollDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (Math.abs(scrollDelta) < 2) {
      return;
    }

    event.preventDefault();
    viewport.scrollBy({ left: scrollDelta, behavior: "auto" });
  };

  return (
    <section
      className="blog-carousel"
      id="blog-preview"
      aria-labelledby="blog-carousel-title"
    >
      <div className="blog-carousel__inner">
        <div className="blog-carousel__intro">
          <p className="blog-carousel__eyebrow">Блог</p>
          <h2 id="blog-carousel-title">Полезные статьи от наших авторов</h2>
        </div>

        <div className="blog-carousel__stage">
          <button
            className="blog-carousel__arrow blog-carousel__arrow--previous"
            type="button"
            onClick={() => scrollByArticle(-1)}
            aria-label="Предыдущие статьи"
          />

          <div
            className="blog-carousel__viewport"
            ref={viewportRef}
            onWheel={handleWheel}
          >
            <ul className="blog-carousel__list">
              {blogArticles.map((article) => (
                <li className="blog-carousel__item" key={article.href}>
                  <Link className="blog-carousel__card" href={article.href}>
                    <span className="blog-carousel__image-wrap">
                      <Image
                        src={article.image}
                        alt=""
                        sizes="(max-width: 560px) calc(100vw - 72px), (max-width: 680px) 340px, 360px"
                        className="blog-carousel__image"
                      />
                    </span>
                    <span className="blog-carousel__title">
                      {article.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="blog-carousel__arrow blog-carousel__arrow--next"
            type="button"
            onClick={() => scrollByArticle(1)}
            aria-label="Следующие статьи"
          />
        </div>

        <div className="blog-carousel__swipe-hint" aria-hidden="true">
          <span />
        </div>

        <Link className="blog-carousel__link" href="/blog">
          Перейти в блог
        </Link>
      </div>
    </section>
  );
}
