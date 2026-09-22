import { BrandIcon } from "@/components/ui/BrandIcon";

const steps = [
  {
    number: "01",
    title: "Найди",
    text: "Выбери нужную вещь и договорись с владельцем об условиях.",
    symbol: "search",
  },
  {
    number: "02",
    title: "Используй",
    text: "Забери вещь в удобном месте и воплоти свои планы.",
    symbol: "box",
  },
  {
    number: "03",
    title: "Верни",
    text: "Верни вещь вовремя — теперь она пригодится кому-то ещё.",
    symbol: "cycle",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      className="section how-it-works"
      id="how-it-works"
      aria-labelledby="steps-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Как это работает</p>
            <h2 id="steps-title">
              Взял. Использовал.
              <br />
              Вернул.
            </h2>
          </div>
          <p className="handwritten">
            Всё просто,
            <br />
            по-соседски.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.number}>
              <div className="steps__top">
                <span>{step.number}</span>
                <span className="steps__symbol" aria-hidden="true">
                  <BrandIcon name={step.symbol} />
                </span>
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
