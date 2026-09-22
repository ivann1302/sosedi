import Image from "next/image";
import { BrandIcon } from "@/components/ui/BrandIcon";
import heroImage from "@/assets/images/brand/hero-tools-reference.png";

export function HeroSection() {
  return (
    <section className="home-hero" id="about" aria-labelledby="home-title">
      <div className="home-hero__content">
        <h1 id="home-title">
          <span>Сервис</span>
          <span className="home-hero__last-line">
            аренды
            <svg className="home-hero__rays" viewBox="0 0 90 100" aria-hidden="true">
              <path d="m16 36 12-27M39 57l28-24M48 80l29-5" />
            </svg>
          </span>
        </h1>
        <p className="home-hero__description">
          Инструменты, техника, вещи для поездки или хобби часто нужны всего на
          пару дней. Возьми то, что нужно, рядом — и не переплачивай за вещи,
          которые потом будут лежать без дела.
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
              <BrandIcon name="pin" />
            </span>
            <h2>Бери рядом</h2>
            <p>Нужная вещь может быть<br />в соседнем доме.</p>
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
        <div className="home-hero__image-frame">
          <Image
            src={heroImage}
            alt="Мужчина с инструментами у автомобиля. Хорошие вещи должны работать."
            priority
            sizes="(min-width: 1024px) 110vw, 200vw"
          />
        </div>
      </div>
    </section>
  );
}
