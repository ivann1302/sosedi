import Image from "next/image";
import stepsReference from "@/assets/images/how-it-works/steps-reference.png";

const steps = [
  {
    number: "01",
    title: "Найди вещь",
    text: "Выбери то, что нужно, в каталоге.",
  },
  {
    number: "02",
    title: "Забронируй",
    text: "Согласуй время и получение.",
  },
  {
    number: "03",
    title: "Верни владельцу",
    text: "После использования просто верни вещь.",
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
          <p className="how-it-works__label">Как это работает</p>
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
              <div className={`steps__visual steps__visual--${step.number}`} aria-hidden="true">
                <Image
                  src={stepsReference}
                  alt=""
                  sizes="(min-width: 1440px) 1400px, (min-width: 1024px) 100vw, 1400px"
                />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="how-it-works__note">Иллюстрация будущего сервиса. Приложение готовится к запуску.</p>
      </div>
    </section>
  );
}
