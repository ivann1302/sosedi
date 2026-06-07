import Image from "next/image";
import heroHomeImage from "@/assets/hero-home.webp";
import bicycleImage from "@/assets/images/things-around/bycicle.webp";
import drillImage from "@/assets/images/things-around/drel.webp";
import projectorImage from "@/assets/images/things-around/proector.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import { HeroActivityCard } from "@/components/sections/HeroActivityCard";

const heroActivities = [
  {
    action: "Передал дрель",
    image: drillImage,
    imageAlt: "Дрель",
    position: "top",
    title: "Квартира 27",
    time: "5 минут назад",
  },
  {
    action: "Взяли велосипед",
    image: bicycleImage,
    imageAlt: "Велосипед",
    position: "right",
    title: "Квартира 58",
    time: "20 минут назад",
  },
  {
    action: "Сдали проектор",
    image: projectorImage,
    imageAlt: "Проектор",
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
          <div className="hero__actions">
            <ButtonLink href="#download">Скачать приложение</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              Как это работает
            </ButtonLink>
          </div>
          <div
            className="hero__stores"
            aria-label="Ссылки для скачивания приложения"
          >
            <AppStoreButtons />
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
