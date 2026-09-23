import { BrandIcon } from "@/components/ui/BrandIcon";

const faqItems = [
  {
    question: "Что такое «Всё рядом»?",
    answer:
      "Мы создаём сервис аренды и совместного использования вещей между соседями и локальными прокатами. Он поможет находить нужное на время и давать своим вещам больше работы.",
    icon: "cycle",
  },
  {
    question: "Что можно будет взять в аренду?",
    answer:
      "Например, инструменты для ремонта, туристическое снаряжение, бытовую технику или проектор для домашнего кино. Конкретные предложения будут зависеть от владельцев вещей в вашем районе.",
    icon: "box",
  },
  {
    question: "Можно ли будет сдавать свои вещи?",
    answer:
      "Да, это один из основных сценариев будущего приложения. Вы сможете рассказать о вещи и договориться о её использовании. Подробные условия опубликуем к запуску.",
    icon: "dollarCoin",
  },
  {
    question: "Как договориться о стоимости и возврате?",
    answer:
      "Перед передачей вещи важно обсудить срок, стоимость, комплектность и состояние, а также порядок возврата. Правила работы сервиса и условия аренды появятся до запуска.",
    icon: "check",
  },
  {
    question: "Когда и где запустится приложение?",
    answer:
      "Мы готовим запуск. Дату выхода, первые города и ссылки для скачивания опубликуем на этом сайте. Пока приложение недоступно.",
    icon: "pin",
  },
  {
    question: "Как бизнесу присоединиться к проекту?",
    answer:
      "На странице для бизнеса можно узнать о проекте и написать команде по адресу hello@sosedi.app. Обсудим ваш ассортимент и участие в запуске.",
    icon: "coins",
  },
] as const;

export function FaqSection() {
  return (
    <section className="section faq faq--home" id="faq" aria-labelledby="faq-title">
      <svg
        className="faq__rays faq__rays--left"
        viewBox="0 0 88 124"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m72 18-23 27M35 61 7 60M48 86l-20 25" />
      </svg>
      <svg
        className="faq__rays faq__rays--right"
        viewBox="0 0 88 124"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m72 18-23 27M35 61 7 60M48 86l-20 25" />
      </svg>
      <div className="container faq__inner">
        <h2 id="faq-title">Частые вопросы</h2>
        <div className="faq__list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>
                <span className="faq__icon" aria-hidden="true">
                  <BrandIcon name={item.icon} />
                </span>
                <span className="faq__question">{item.question}</span>
                <span className="faq__toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
