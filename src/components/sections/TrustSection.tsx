import Link from "next/link";

const trustItems = [
  {
    title: "Профили и отзывы",
    text: "После сделки соседи оставляют оценку, чтобы другим было проще выбирать.",
  },
  {
    title: "Условия бронирования",
    text: "Дата, время, стоимость и правила возврата фиксируются до передачи вещи.",
  },
  {
    title: "Поддержка в спорных ситуациях",
    text: "Если что-то пошло не так, можно обратиться в поддержку и разобраться по истории сделки.",
  },
] as const;

const roles = [
  {
    title: "Беру вещь",
    text: "Найдите нужное рядом, забронируйте время и договоритесь о передаче.",
    href: "#download",
    linkText: "Найти вещь рядом",
  },
  {
    title: "Сдаю вещь",
    text: "Добавьте вещь, укажите доступные даты и получайте запросы от соседей.",
    href: "#download",
    linkText: "Сдать свою вещь",
  },
] as const;

export function TrustSection() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="trust__inner">
        <div className="trust__intro" data-reveal="left">
          <p className="trust__eyebrow">Доверие</p>
          <h2 id="trust-title">Делиться вещами проще, когда всё прозрачно</h2>
          <p>
            Sosedi помогает договориться, зафиксировать условия и оставить
            понятную историю сделки.
          </p>
        </div>

        <ul className="trust__list" aria-label="Что помогает доверять сделке">
          {trustItems.map((item, index) => (
            <li
              className="trust__item"
              data-reveal="soft"
              data-reveal-delay={String(index + 1)}
              key={item.title}
            >
              <span className="trust__icon" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="trust__roles" aria-label="Роли пользователей Sosedi">
          {roles.map((role, index) => (
            <article
              className="trust__role"
              data-reveal="soft"
              data-reveal-delay={String(index + 2)}
              key={role.title}
            >
              <h3>{role.title}</h3>
              <p>{role.text}</p>
              <Link href={role.href}>{role.linkText}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
