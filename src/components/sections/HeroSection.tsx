import Image from "next/image";
import heroImage from "@/assets/images/brand/hero-neighbor-v2.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="hero" id="about" aria-labelledby="home-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">
            <span className="status-dot" />
            Арендуй. Делись. Используй.
          </p>
          <h1 id="home-title">
            Всё, что
            <br />
            нужно,
            <br />
            <span className="hero__highlight">рядом.</span>
          </h1>
          <p className="lead">
            Вещи для больших планов и маленьких дел. Бери у соседей то, что
            понадобится всего пару раз.
          </p>
          <div className="actions">
            <ButtonLink href="#how-it-works">
              Как это работает <span aria-hidden="true">↗</span>
            </ButtonLink>
            <ButtonLink href="#download" variant="secondary">
              О запуске
            </ButtonLink>
          </div>
          <p className="hero__note">Меньше покупок. Больше возможностей.</p>
        </div>
        <figure className="hero__visual">
          <Image
            src={heroImage}
            alt="Женщина с жёлтой сумкой и складным стулом во дворе жилого дома"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <figcaption className="handwritten">
            Хорошие вещи
            <br />
            объединяют людей
          </figcaption>
          <svg className="hero__rays" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M21 50 6 37M46 28 41 5M70 37 85 15" />
          </svg>
        </figure>
      </div>
    </section>
  );
}
