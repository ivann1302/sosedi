import Image from "next/image";
import headingSticker from "@/assets/images/how-it-works/how-it-works-heading-sticker.webp";
import findItemImage from "@/assets/images/how-it-works/generated/find-item.webp";
import bookItemImage from "@/assets/images/how-it-works/generated/book-item.webp";
import returnItemImage from "@/assets/images/how-it-works/generated/return-item.webp";

const steps = [
  {
    number: "01",
    title: "Найди вещь",
    text: "Выбери то, что нужно, в каталоге.",
    image: findItemImage,
  },
  {
    number: "02",
    title: "Забронируй",
    text: "Согласуй время и получение.",
    image: bookItemImage,
  },
  {
    number: "03",
    title: "Верни владельцу",
    text: "После использования просто верни вещь.",
    image: returnItemImage,
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="section how-it-works"
      id="how-it-works"
      aria-labelledby="steps-title"
    >
      <div className="container">
        <div className="how-it-works__heading">
          <div className="how-it-works__label-sticker">
            <Image
              src={headingSticker}
              alt=""
              sizes="(min-width: 1024px) 220px, 180px"
            />
            <p className="visually-hidden">Как это работает</p>
          </div>
          <h2 id="steps-title">
            Взял. Использовал. Вернул.
            <svg className="how-it-works__rays" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
              <path d="m14 35 15-27M38 47l29-21M49 66l23 4" />
            </svg>
          </h2>
          <p className="how-it-works__lead">
            Найти нужную вещь рядом, договориться и вернуть её после использования — просто.
          </p>
        </div>
        <ol className="steps" role="list">
          {steps.map((step) => (
            <li key={step.number}>
              <div className="steps__visual" aria-hidden="true">
                <span className="steps__number">{step.number}</span>
                <Image
                  src={step.image}
                  alt=""
                  sizes="(min-width: 1024px) 30vw, 90vw"
                />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
