import Image, { getImageProps } from "next/image";
import { BrandIcon } from "@/components/ui/BrandIcon";
import heroImage from "@/assets/images/brand/hero-tools-reference.png";
import heroMobileImage from "@/assets/images/brand/hero-mobile.webp";

export function HeroSection() {
  const { props: mobileHeroImageProps } = getImageProps({
    src: heroMobileImage,
    alt: "",
    sizes: "92vw",
  });

  return (
    <section className="home-hero" id="about" aria-labelledby="home-title">
      <div className="home-hero__content">
        <h1 id="home-title">
          <span>Сервис аренды</span>
          <span>вещей и инструментов</span>
          <span className="home-hero__last-line">
            в Москве
            <svg className="home-hero__rays" viewBox="0 0 90 100" aria-hidden="true">
              <path d="m16 36 12-27M39 57l28-24M48 80l29-5" />
            </svg>
          </span>
        </h1>
        <p className="home-hero__description">
          Инструменты, техника, вещи для поездки или хобби часто нужны всего на
          пару дней.{" "}
          <strong className="home-hero__description-accent">
            Возьми то, что нужно, рядом — и не переплачивай
          </strong>{" "}
          за вещи, которые потом будут лежать без дела.
        </p>
        <ul className="home-hero__benefits" aria-label="Почему брать рядом удобно">
          <li>
            <span className="home-hero__icon" aria-hidden="true">
              <BrandIcon name="coins" />
            </span>
            <h2>Экономь</h2>
            <p>Плати за использование,<br />а не за владение.</p>
          </li>
          <li>
            <span className="home-hero__icon" aria-hidden="true">
              <BrandIcon name="dollarCoin" />
            </span>
            <h2>Зарабатывай</h2>
            <p>Сдавай свои вещи,<br />когда они не нужны.</p>
          </li>
          <li>
            <span className="home-hero__icon" aria-hidden="true">
              <BrandIcon name="leaf" />
            </span>
            <h2>Используй разумнее</h2>
            <p>Одна вещь работает<br />для нескольких людей.</p>
          </li>
        </ul>
      </div>
      <div className="home-hero__visual">
        <ul className="home-hero__visual-points" aria-label="Возможности сервиса">
          <li>Экономь</li>
          <li>Зарабатывай</li>
          <li>Используй разумнее</li>
        </ul>
        <div className="home-hero__image-frame">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet={mobileHeroImageProps.srcSet}
              sizes={mobileHeroImageProps.sizes}
            />
            <Image
              src={heroImage}
              alt="Мужчина во весь рост с инструментами у автомобиля."
              priority
              sizes="(min-width: 1024px) 110vw, 200vw"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
