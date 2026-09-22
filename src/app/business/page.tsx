import type { Metadata } from "next";
import Image from "next/image";
import businessImage from "@/assets/images/brand/local-business-v2.webp";
import drillImage from "@/assets/images/things-around/drel.webp";
import { Header } from "@/components/sections/Header";
import { FooterSection } from "@/components/sections/FooterSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandIcon } from "@/components/ui/BrandIcon";

export const metadata: Metadata = {
  title: "Для локального бизнеса — Всё рядом",
  description:
    "Готовим сервис аренды вещей рядом с домом. Приглашаем локальные прокаты и мастерские обсудить участие в запуске «Всё рядом».",
  openGraph: {
    title: "Ваш бизнес ближе к соседям — Всё рядом",
    description:
      "Локальные прокаты, мастерские и вещи для больших планов. Обсудите участие в запуске сервиса «Всё рядом».",
    type: "website",
  },
};

const navigation = [
  { label: "О проекте", href: "/" },
  { label: "Возможности", href: "#business-benefits" },
  { label: "Как присоединиться", href: "#business-process" },
  { label: "FAQ", href: "#business-faq" },
];
const benefits = [
  {
    title: "Стать ближе",
    text: "Расскажите о своём ассортименте тем, кто живёт или работает неподалёку.",
  },
  {
    title: "Показать возможности",
    text: "Помогите людям найти инструмент, оборудование или снаряжение для своих планов.",
  },
  {
    title: "Расти по-соседски",
    text: "Хороший сервис и бережное отношение дают повод обратиться к вам снова.",
  },
];
const steps = [
  {
    title: "Расскажите о себе",
    text: "Напишите, какой у вас бизнес и в каком городе вы работаете.",
  },
  {
    title: "Обсудим формат",
    text: "Познакомимся с ассортиментом и задачами вашей команды.",
  },
  {
    title: "Подготовим предложения",
    text: "Определим, какие вещи и условия вы хотите представить.",
  },
  {
    title: "Встретим запуск вместе",
    text: "Согласуем следующие шаги по мере готовности сервиса.",
  },
];
const faq = [
  {
    question: "Кому подойдёт сервис?",
    answer:
      "Локальным прокатам, мастерским и небольшим компаниям, которые сдают вещи и оборудование в аренду. Если ваш формат отличается, расскажите о нём команде.",
  },
  {
    question: "Можно ли уже разместить предложения?",
    answer:
      "Приложение готовится к запуску. Сейчас можно познакомиться с командой и обсудить будущее участие. Работающий кабинет пока недоступен.",
  },
  {
    question: "Сколько будет стоить размещение?",
    answer:
      "Условия участия и тарифы пока не опубликованы. Обсудим потребности вашего бизнеса и сообщим условия до подключения.",
  },
  {
    question: "Что нужно для первого разговора?",
    answer:
      "Название компании, город, краткое описание ассортимента и удобный способ связи. Документы и интеграции на этом этапе не нужны.",
  },
  {
    question: "Как связаться с командой?",
    answer:
      "Напишите на hello@sosedi.app. Расскажите о своём бизнесе и о том, как вы представляете участие в проекте.",
  },
];

export default function BusinessPage() {
  return (
    <div className="page business-page">
      <Header
        navLinks={navigation}
        ctaHref="#business-final-cta"
        ctaLabel="Обсудить участие"
      />
      <main id="main-content">
        <section
          className="hero business-hero"
          aria-labelledby="business-title"
        >
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="eyebrow">
                <span className="status-dot" />
                Локальному бизнесу
              </p>
              <h1 id="business-title">
                Ваш бизнес.
                <br />
                Ещё <span className="hero__highlight">ближе.</span>
              </h1>
              <p className="lead">
                Хороший прокат может быть за углом. Поможем соседям узнать о
                ваших вещах и возможностях.
              </p>
              <div className="actions">
                <ButtonLink href="#business-final-cta">
                  Обсудить участие <span aria-hidden="true">↗</span>
                </ButtonLink>
                <a className="text-link" href="#business-process">
                  Как присоединиться
                </a>
              </div>
              <p className="hero__note">
                Готовим запуск. Знакомимся с будущими партнёрами.
              </p>
            </div>
            <figure className="hero__visual">
              <Image
                src={businessImage}
                alt="Владелица проката в светлой мастерской с инструментами"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <figcaption className="handwritten">
                Большие возможности
                <br />
                маленького бизнеса.
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="business-intro"
          aria-labelledby="business-intro-title"
        >
          <div className="container">
            <p className="eyebrow">В основе — соседство</p>
            <h2 id="business-intro-title">
              Здесь ценят то,
              <br />
              что вы делаете рядом.
            </h2>
            <p>
              Мы создаём место встречи для людей, которым нужна вещь на время, и
              тех, у кого она уже есть.
            </p>
          </div>
        </section>
        <section
          className="section"
          id="business-benefits"
          aria-labelledby="business-benefits-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="business-benefits-title">
                Локальный бизнес.
                <br />
                Общие возможности.
              </h2>
            </div>
            <div className="business-benefits">
              {benefits.map((benefit, i) => (
                <article key={benefit.title}>
                  <span className="handwritten" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section business-process"
          id="business-process"
          aria-labelledby="business-process-title"
        >
          <div className="container">
            <div className="section-heading">
              <h2 id="business-process-title">
                Начнём
                <br />с знакомства.
              </h2>
              <p>
                Четыре шага
                <br />к совместному запуску.
              </p>
            </div>
            <ol className="business-steps">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span>0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          className="section business-product"
          aria-labelledby="business-product-title"
        >
          <div className="container split-layout">
            <figure className="business-product__visual">
              <div className="offer-concept">
                <p className="eyebrow">Прокат рядом с домом</p>
                <Image
                  src={drillImage}
                  alt="Аккумуляторная дрель как пример товара проката"
                  sizes="(min-width: 1024px) 35vw, 80vw"
                />
                <h3>Всё для маленького ремонта</h3>
                <p>Ваша вещь. Ваши условия. Ваш район.</p>
              </div>
              <figcaption>
                Иллюстрация предложения, не действующее объявление.
              </figcaption>
            </figure>
            <div className="section-copy">
              <p className="eyebrow">Понятно с первого взгляда</p>
              <h2 id="business-product-title">
                У каждой вещи
                <br />
                есть своё дело.
              </h2>
              <p className="lead">
                Покажите, для каких задач подходит ваш ассортимент.
              </p>
              <ul className="simple-list">
                <li><BrandIcon name="check" />Фотографии и описание вещи</li>
                <li><BrandIcon name="check" />Понятные условия аренды</li>
                <li><BrandIcon name="check" />Удобное место передачи</li>
              </ul>
              <p>Детали размещения согласуем перед запуском.</p>
            </div>
          </div>
        </section>
        <section
          className="section faq"
          id="business-faq"
          aria-labelledby="business-faq-title"
        >
          <div className="container faq__inner">
            <h2 id="business-faq-title">Вопросы бизнеса</h2>
            <div className="faq__list">
              {faq.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section business-final"
          id="business-final-cta"
          aria-labelledby="business-final-title"
        >
          <div className="container">
            <p className="handwritten">Давайте познакомимся.</p>
            <h2 id="business-final-title">
              Хорошему бизнесу
              <br />
              нужны хорошие соседи.
            </h2>
            <p>
              Расскажите, чем занимаетесь. Вместе найдём место
              <br className="desktop-break" /> для ваших вещей в новом сервисе.
            </p>
            <ButtonLink href="mailto:hello@sosedi.app" variant="contrast">
              Написать команде <span aria-hidden="true">↗</span>
            </ButtonLink>
            <a className="business-final__email" href="mailto:hello@sosedi.app">
              hello@sosedi.app
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
