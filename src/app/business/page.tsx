import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import businessHeroImage from "@/assets/images/business/business-hero.webp";
import { Header } from "@/components/sections/Header";
import { FooterSection } from "@/components/sections/FooterSection";
import { ButtonLink } from "@/components/ui/ButtonLink";

const businessNavLinks = [
  { label: "О проекте", href: "/" },
  { label: "Как это работает", href: "#business-process" },
  { label: "Для бизнеса", href: "#business-benefits" },
  { label: "FAQ", href: "#business-faq" },
  { label: "Контакты", href: "#business-final-cta" },
] as const;

const businessStats = [
  { value: "10 000+", label: "активных пользователей" },
  { value: "25 000+", label: "успешных размещений" },
  { value: "50+", label: "городов" },
  { value: "4.8", label: "средний рейтинг" },
] as const;

const businessBenefits = [
  {
    icon: "users",
    title: "Новые клиенты рядом",
    text: "Показывайте предложения людям поблизости, когда им действительно нужна вещь или услуга.",
  },
  {
    icon: "shield",
    title: "Безопасные сделки",
    text: "Рейтинг, отзывы и понятные правила помогают бизнесу спокойно принимать заявки.",
  },
  {
    icon: "control",
    title: "Простое управление",
    text: "Добавляйте позиции, обновляйте условия и следите за обращениями без сложных интеграций.",
  },
] as const;

const businessSteps = [
  {
    icon: "edit",
    title: "Создайте профиль",
    text: "Заполните информацию о компании, районе работы и доступных предложениях.",
  },
  {
    icon: "box",
    title: "Разместите товары",
    text: "Добавьте позиции, условия аренды или услуги, которые удобно показать людям рядом.",
  },
  {
    icon: "message",
    title: "Получайте заявки",
    text: "Отвечайте на обращения, уточняйте детали и договаривайтесь о времени.",
  },
  {
    icon: "growth",
    title: "Зарабатывайте",
    text: "Получайте больше заказов и развивайте локальную аудиторию вокруг бизнеса.",
  },
] as const;

const interfaceCards = [
  { title: "Новая заявка", text: "Дрель на выходные" },
  { title: "Просмотры", text: "+186 за неделю" },
  { title: "Рейтинг", text: "4.8 из 5" },
  { title: "Бронирование", text: "Сегодня, 18:30" },
] as const;

const businessFaq = [
  {
    question: "Кому подходит размещение на платформе?",
    answer:
      "Локальным прокатам, сервисам, магазинам и небольшим компаниям, которые хотят получать обращения от людей рядом.",
  },
  {
    question: "Нужно ли подключать сложную интеграцию?",
    answer:
      "Нет. На старте достаточно создать профиль, добавить предложения и указать понятные условия.",
  },
  {
    question: "Можно ли размещать услуги, а не только товары?",
    answer:
      "Да. Страница рассчитана и на предметы, и на услуги, которые востребованы в конкретном районе.",
  },
  {
    question: "Как пользователи находят предложения бизнеса?",
    answer:
      "Через локальный поиск, подборки рядом с домом и карточки предложений в приложении.",
  },
  {
    question: "Как повышается доверие к компании?",
    answer:
      "Помогают отзывы, рейтинг, прозрачные условия и история выполненных заявок.",
  },
  {
    question: "Можно ли начать с небольшого каталога?",
    answer:
      "Да. Можно добавить несколько популярных позиций и расширять каталог по мере роста спроса.",
  },
  {
    question: "Что будет видно в профиле компании?",
    answer:
      "Название, район работы, предложения, условия, рейтинг, отзывы и способы связи внутри продукта.",
  },
  {
    question: "Как оставить заявку на подключение?",
    answer:
      "Нажмите на кнопку размещения на странице, и команда Соседи поможет выбрать формат запуска.",
  },
] as const;

type BusinessIconName =
  | "briefcase"
  | "users"
  | "shield"
  | "growth"
  | "control"
  | "edit"
  | "box"
  | "message"
  | "star"
  | "pin";

function BusinessPageIcon({ name }: { name: BusinessIconName }) {
  if (name === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M7 8V6.7A2.7 2.7 0 0 1 9.7 4h4.6A2.7 2.7 0 0 1 17 6.7V8m-12 3.2h14M10 11v2h4v-2M5.7 20h12.6a1.7 1.7 0 0 0 1.7-1.7V9.7A1.7 1.7 0 0 0 18.3 8H5.7A1.7 1.7 0 0 0 4 9.7v8.6A1.7 1.7 0 0 0 5.7 20Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M8.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.8 19.5c.6-3.4 2.8-5.2 5.7-5.2s5.1 1.8 5.7 5.2H2.8Zm11.4-1.7c.8-1.6 2.1-2.6 3.8-2.6 2 0 3.5 1.2 4 3.7h-6.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 3.5 19 6v5.2c0 4.4-2.6 7.1-7 9.3-4.4-2.2-7-4.9-7-9.3V6l7-2.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "growth") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="m3 17 5-5 4 3.5 7-8M17 7h2v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle cx="8" cy="12" r="1.6" fill="currentColor" />
        <circle cx="19" cy="7" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  if (name === "control") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M4 7h16M4 17h16M8 7v4m8 6v-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <circle cx="8" cy="7" r="2.2" fill="currentColor" />
        <circle cx="16" cy="17" r="2.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "edit") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="m5 18 1.1-4.1L16 4l4 4-9.9 9.9L6 19l-1-1Zm10-13 4 4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "box") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="m4 8 8-4 8 4-8 4-8-4Zm0 0v8l8 4m0-8v8m8-12v8l-8 4"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M6.5 17.5H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4.5L6 20v-2.5h.5Zm10.5-8h1a3 3 0 0 1 3 3v5.5l-3.2-2.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.9"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="10" r="2.6" fill="currentColor" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Для бизнеса — Соседи",
  description:
    "Посадочная страница Соседи для локальных компаний: размещайте товары и услуги, получайте заявки от людей рядом и развивайте бизнес в районе.",
  openGraph: {
    title: "Для бизнеса — Соседи",
    description:
      "Соседи помогает локальным компаниям находить новых клиентов рядом с домом.",
    type: "website",
  },
};

export default function BusinessPage() {
  return (
    <div className="page business-page">
      <Header
        navLinks={businessNavLinks}
        ctaHref="#business-final-cta"
        ctaLabel="Разместиться"
      />

      <main>
        <section
          className="business-page-hero"
          id="business-hero"
          aria-labelledby="business-page-hero-title"
        >
          <div className="business-page-hero__inner">
            <div className="business-page-hero__content" data-reveal="left">
              <p className="business-page__badge">
                <span aria-hidden="true">
                  <BusinessPageIcon name="briefcase" />
                </span>
                Для бизнеса
              </p>
              <h1 id="business-page-hero-title">
                Размещайте вещи на нашей платформе и находите{" "}
                <span>новых клиентов</span>
              </h1>
              <p className="business-page-hero__text">
                Тысячи людей рядом ищут вещи каждый день. Покажите свои
                предложения тем, кому они действительно нужны.
              </p>
              <div className="business-page-hero__actions">
                <ButtonLink href="#business-benefits">
                  Подробнее для бизнеса
                </ButtonLink>
                <Link
                  className="business-page__text-link"
                  href="#business-process"
                >
                  Как это работает
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div
              className="business-page-hero__visual"
              data-reveal="right"
              aria-hidden="true"
            >
              <div className="business-page-hero__shape" />
              <div className="business-page-hero__photo-slot">
                <Image
                  src={businessHeroImage}
                  alt=""
                  sizes="(max-width: 920px) 90vw, 720px"
                  className="business-page-hero__image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="business-page-stats"
          data-reveal="scale"
          aria-labelledby="business-page-stats-title"
        >
          <div className="business-page-stats__inner">
            <div className="business-page-stats__intro">
              <h2 id="business-page-stats-title">
                Платформа, которой доверяют
              </h2>
              <p>
                Мы создаём соседское сообщество, где бизнесу удобно быть
                заметным рядом с клиентами.
              </p>
              <Link href="#business-benefits">
                О возможностях
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <dl className="business-page-stats__list">
              {businessStats.map((stat, index) => (
                <div
                  className="business-page-stats__item"
                  data-reveal="soft"
                  data-reveal-delay={String(index + 1)}
                  key={stat.label}
                >
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="business-page-benefits"
          id="business-benefits"
          aria-labelledby="business-page-benefits-title"
        >
          <div className="business-page__section-head" data-reveal="left">
            <p className="business-page__eyebrow">Преимущества</p>
            <h2 id="business-page-benefits-title">
              Что получает локальный бизнес
            </h2>
          </div>
          <div className="business-page-benefits__grid">
            {businessBenefits.map((benefit, index) => (
              <article
                className="business-page-benefits__card"
                data-reveal="soft"
                data-reveal-delay={String(index + 1)}
                key={benefit.title}
              >
                <span className="business-page-benefits__icon" aria-hidden="true">
                  <BusinessPageIcon name={benefit.icon} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="business-page-process"
          id="business-process"
          aria-labelledby="business-page-process-title"
        >
          <div className="business-page-process__head" data-reveal="left">
            <div>
              <p className="business-page__eyebrow">Как это работает</p>
              <h2 id="business-page-process-title">
                Запуститься можно в четыре шага
              </h2>
            </div>
            <Link className="business-page__text-link" href="#business-faq">
              Подробнее о процессе
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol className="business-page-process__list">
            {businessSteps.map((step, index) => (
              <li
                className="business-page-process__item"
                data-reveal="soft"
                data-reveal-delay={String(index + 1)}
                key={step.title}
              >
                <span className="business-page-process__icon" aria-hidden="true">
                  <BusinessPageIcon name={step.icon} />
                </span>
                <span className="business-page-process__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="business-page-action"
          data-reveal="scale"
          aria-labelledby="business-page-action-title"
        >
          <div className="business-page-action__content" data-reveal="left">
            <h2 id="business-page-action-title">
              Ваши товары увидят люди рядом
            </h2>
            <p>
              Добавьте востребованные позиции и получайте обращения от тех, кто
              уже ищет решение поблизости.
            </p>
            <ButtonLink href="#business-final-cta" variant="secondary">
              Разместиться на платформе
            </ButtonLink>
          </div>
          <div className="business-page-action__object-slot" aria-hidden="true" />
        </section>

        <section
          className="business-page-product"
          aria-labelledby="business-page-product-title"
        >
          <div
            className="business-page__section-head business-page__section-head--center"
            data-reveal="scale"
          >
            <p className="business-page__eyebrow">Интерфейс приложения</p>
            <h2 id="business-page-product-title">
              Всё важное видно в одном экране
            </h2>
          </div>
          <div className="business-page-product__stage" data-reveal="soft">
            <div className="business-page-product__phone" aria-hidden="true">
              <div className="business-page-product__phone-top" />
              <div className="business-page-product__screen">
                <span>Мои объявления</span>
                <strong>4 активных предложения</strong>
                <div className="business-page-product__screen-card">
                  <span>Проектор</span>
                  <strong>1 200 ₽</strong>
                </div>
                <div className="business-page-product__screen-card">
                  <span>Велосипед</span>
                  <strong>1 000 ₽</strong>
                </div>
                <div className="business-page-product__screen-cta" />
              </div>
            </div>
            <ul className="business-page-product__cards">
              {interfaceCards.map((card, index) => (
                <li
                  className="business-page-product__card"
                  data-reveal="soft"
                  data-reveal-delay={String(index + 1)}
                  key={card.title}
                >
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="business-page-faq"
          id="business-faq"
          aria-labelledby="business-page-faq-title"
        >
          <div className="business-page-faq__intro" data-reveal="left">
            <p className="business-page__eyebrow">FAQ</p>
            <h2 id="business-page-faq-title">
              Частые вопросы бизнеса
            </h2>
            <p>
              Коротко о подключении, заявках, доверии и первых шагах на
              платформе.
            </p>
          </div>
          <div className="business-page-faq__list" data-reveal="right">
            {businessFaq.map((item, index) => (
              <details
                className="business-page-faq__item"
                data-reveal="soft"
                data-reveal-delay={String(index + 1)}
                key={item.question}
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="business-page-final"
          id="business-final-cta"
          data-reveal="scale"
          aria-labelledby="business-page-final-title"
        >
          <p className="business-page__eyebrow">Старт для бизнеса</p>
          <h2 id="business-page-final-title">
            Готовы получать новых клиентов?
          </h2>
          <p>
            Оставьте заявку, и мы поможем подготовить первые предложения для
            жителей рядом.
          </p>
          <ButtonLink href="mailto:hello@sosedi.app">
            Разместиться на платформе
          </ButtonLink>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
