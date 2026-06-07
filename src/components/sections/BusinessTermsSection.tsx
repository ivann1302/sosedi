import { ButtonLink } from "@/components/ui/ButtonLink";

const businessTerms = [
  {
    title: "Быстрый старт",
    text: "Подключим точку, добавим карточку бизнеса и поможем оформить первые предложения для жителей района.",
  },
  {
    title: "Локальные заявки",
    text: "Показываем услуги и товары людям рядом, чтобы бизнес получал обращения без лишнего рекламного шума.",
  },
  {
    title: "Прозрачные условия",
    text: "Без сложной интеграции и долгих договоров. Можно начать с базового размещения и расширять формат позже.",
  },
] as const;

export function BusinessTermsSection() {
  return (
    <section
      className="business-terms"
      id="landlords"
      aria-labelledby="business-terms-title"
    >
      <div className="business-terms__inner">
        <div className="business-terms__content">
          <p className="business-terms__eyebrow">Для бизнеса</p>
          <h2 id="business-terms-title">
            Выгодные условия подключения для локальных компаний
          </h2>
          <p className="business-terms__text">
            Sosedi помогает сервисам, прокатам и магазинам быть заметнее для
            людей рядом с домом.
          </p>
          <ButtonLink href="#download" variant="secondary">
            Обсудить подключение
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <ul className="business-terms__list">
          {businessTerms.map((term) => (
            <li className="business-terms__item" key={term.title}>
              <span className="business-terms__marker" aria-hidden="true" />
              <h3>{term.title}</h3>
              <p>{term.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
