import Image from "next/image";
import Link from "next/link";
import businessImage from "@/assets/images/business/business.webp";
import { BusinessTermsStats } from "@/components/sections/BusinessTermsStats";

export function BusinessTermsSection() {
  return (
    <section
      className="business-terms"
      id="landlords"
      aria-labelledby="business-terms-title"
    >
      <div className="business-terms__inner">
        <div className="business-terms__content" data-reveal="left">
          <p className="business-terms__eyebrow">
            <span className="business-terms__eyebrow-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M7 8V6.5A2.5 2.5 0 0 1 9.5 4h5A2.5 2.5 0 0 1 17 6.5V8m-12 3h14m-8 0v2h4v-2M5.5 20h13A1.5 1.5 0 0 0 20 18.5v-10A1.5 1.5 0 0 0 18.5 7h-13A1.5 1.5 0 0 0 4 8.5v10A1.5 1.5 0 0 0 5.5 20Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            Для бизнеса
          </p>
          <h2 id="business-terms-title">
            Размещайте вещи на нашей платформе и находите{" "}
            <span>новых клиентов</span>
          </h2>
          <p className="business-terms__text">
            Тысячи людей рядом ищут вещи каждый день. Ваши товары и услуги
            могут быть у них в руках.
          </p>
          <Link className="business-terms__link" href="/business">
            Узнать больше для бизнеса
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="business-terms__visual" aria-hidden="true">
          <div className="business-terms__image-card" data-reveal="right">
            <Image
              src={businessImage}
              alt=""
              sizes="(max-width: 760px) 100vw, 680px"
              className="business-terms__image"
            />
          </div>

          <BusinessTermsStats />
        </div>
      </div>
    </section>
  );
}
