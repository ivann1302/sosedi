import Image from "next/image";
import sharingImage from "@/assets/images/brand/neighbors-sharing-v2.webp";

const principles = [
  {
    title: "Договориться заранее",
    text: "Обсудите стоимость, срок аренды и место встречи до передачи вещи.",
  },
  {
    title: "Проверить вместе",
    text: "Посмотрите, как всё работает, и зафиксируйте состояние вещи.",
  },
  {
    title: "Вернуть с заботой",
    text: "Бережное отношение помогает делиться снова и снова.",
  },
];

export function TrustSection() {
  return (
    <section className="section trust" id="trust" aria-labelledby="trust-title">
      <div className="container split-layout">
        <figure className="editorial-photo">
          <Image
            src={sharingImage}
            alt="Соседи передают друг другу набор инструментов"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <figcaption className="handwritten">
            Доверие начинается
            <br />с простых вещей.
          </figcaption>
        </figure>
        <div className="section-copy">
          <p className="eyebrow">По-соседски — значит с заботой</p>
          <h2 id="trust-title">
            Спокойно брать.
            <br />
            Спокойно сдавать.
          </h2>
          <p className="lead">
            Хорошая аренда начинается с понятной договорённости.
          </p>
          <ul className="principles">
            {principles.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true">✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
