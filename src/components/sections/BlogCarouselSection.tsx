import Image from "next/image";
import drillImage from "@/assets/images/things-around/drel.webp";
import tentImage from "@/assets/images/things-around/tent.webp";
import bicycleImage from "@/assets/images/things-around/bycicle.webp";

const tips = [
  {
    label: "Разумные покупки",
    title: "Нужно один раз? Возьми на время.",
    text: "Прежде чем покупать инструмент для одной задачи, подумай об аренде. Освободится и бюджет, и полка в шкафу.",
    image: drillImage,
  },
  {
    label: "Забота о вещах",
    title: "Подготовь вещь к новой истории.",
    text: "Проверь комплект, очисти вещь и расскажи владельцу или арендатору обо всех особенностях. Это делает встречу проще.",
    image: bicycleImage,
  },
  {
    label: "Идеи для выходных",
    title: "Приключения без лишнего багажа.",
    text: "Палатка, складной стул и термос — составь список для короткой поездки. Необязательно покупать всё сразу.",
    image: tentImage,
  },
];

export function BlogCarouselSection() {
  return (
    <section
      className="section journal"
      id="blog-preview"
      aria-labelledby="journal-title"
    >
      <div className="container">
        <div className="section-heading">
          <h2 id="journal-title">
            Хорошие идеи
            <br />
            тоже рядом.
          </h2>
          <p>
            О вещах, заботе
            <br />и маленьких открытиях.
          </p>
        </div>
        <div className="journal__grid">
          {tips.map((tip) => (
            <article className="journal__article" key={tip.title}>
              <div className="journal__image">
                <Image
                  src={tip.image}
                  alt=""
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </div>
              <p className="eyebrow">{tip.label}</p>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
