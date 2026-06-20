const faqItems = [
  {
    question: "Что можно брать у соседей?",
    answer:
      "Инструменты, туристическое снаряжение, технику для дома, детские вещи и другие предметы, которые нужны не каждый день.",
  },
  {
    question: "Как понять, что вещь рядом?",
    answer:
      "В приложении вещи отображаются на карте района. Можно выбрать удобный радиус и договориться о передаче рядом с домом.",
  },
  {
    question: "Кто отвечает за сохранность вещи?",
    answer:
      "Условия аренды фиксируются при бронировании. После сделки пользователи оставляют отзывы, а спорные ситуации разбираются через поддержку.",
  },
  {
    question: "Можно ли самому сдавать вещи?",
    answer:
      "Да. Добавьте описание, фотографии и доступные даты, чтобы соседи могли найти вещь и отправить запрос на бронирование.",
  },
  {
    question: "Когда приложение будет доступно?",
    answer:
      "Мы готовим запуск. Оставьте приложение в закладках или скачайте его после релиза, чтобы первыми увидеть вещи рядом.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner">
        <div className="faq__intro" data-reveal="left">
          <p className="faq__eyebrow">FAQ</p>
          <h2 id="faq-title">Частые вопросы о Sosedi</h2>
          <p>
            Коротко о том, как пользоваться сервисом, находить вещи рядом и
            договариваться с соседями.
          </p>
        </div>

        <div className="faq__list" data-reveal="right">
          {faqItems.map((item, index) => (
            <details
              className="faq__item"
              data-reveal="soft"
              data-reveal-delay={String(index + 1)}
              key={item.question}
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
