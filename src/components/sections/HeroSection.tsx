import Image from "next/image";
import heroHomeImage from "@/assets/hero-home.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroActivityCard } from "@/components/sections/HeroActivityCard";

const heroActivities = [
  {
    action: "Передал дрель",
    icon: "Д",
    position: "top",
    title: "Квартира 27",
    time: "5 минут назад",
  },
  {
    action: "Взяли велосипед",
    icon: "В",
    position: "right",
    title: "Квартира 58",
    time: "20 минут назад",
  },
  {
    action: "Сдали проектор",
    icon: "П",
    position: "bottom",
    title: "Квартира 114",
    time: "1 час назад",
  },
] as const;

export function HeroSection() {
  return (
    <section className="hero" id="about" aria-labelledby="home-title">
      <div className="hero__image-wrap" aria-hidden="true">
        <Image
          src={heroHomeImage}
          alt=""
          priority
          sizes="(max-width: 560px) 86vw, (max-width: 920px) 77vw, 75vw"
          className="hero__image"
        />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Шеринг вещей в вашем районе</p>
          <h1 id="home-title">
            <span className="hero__title-main">Всё нужное уже есть</span>
            <span className="hero__title-accent">рядом с вами</span>
          </h1>
          <p className="hero__text">
            Берите вещи у соседей, экономьте бюджет и живите в стиле
            осознанного потребления.
          </p>
          <div className="hero__actions" id="download">
            <ButtonLink href="#download">Скачать приложение</ButtonLink>
            <ButtonLink href="#about" variant="secondary">
              Как это работает
            </ButtonLink>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          {heroActivities.map((activity) => (
            <HeroActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
