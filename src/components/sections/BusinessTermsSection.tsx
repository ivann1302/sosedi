import Image from "next/image";
import businessImage from "@/assets/images/brand/local-business-v2.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function BusinessTermsSection() {
  return (
    <section
      className="section business-terms"
      id="landlords"
      aria-labelledby="business-terms-title"
    >
      <div className="container split-layout">
        <div className="section-copy">
          <p className="eyebrow">Для локального бизнеса</p>
          <h2 id="business-terms-title">
            Ваши вещи.
            <br />
            Новые соседи.
            <br />
            Больше историй.
          </h2>
          <p className="lead">
            Прокат, мастерская или небольшой сервис? Давайте сделаем ваши
            предложения ближе к людям района.
          </p>
          <ButtonLink href="/business">
            Для бизнеса <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
        <figure className="editorial-photo">
          <Image
            src={businessImage}
            alt="Владелица локального проката готовит инструменты к аренде"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}
