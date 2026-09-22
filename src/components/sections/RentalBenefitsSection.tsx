import type { ComponentProps } from "react";
import Image from "next/image";
import { BrandIcon } from "@/components/ui/BrandIcon";
import rentalTote from "@/assets/images/brand/rental-tote.webp";

const benefits: {
  title: string;
  text: string;
  icon: ComponentProps<typeof BrandIcon>["name"];
}[] = [
  { title: "Ближе", text: "Нужное может быть рядом.", icon: "pin" },
  { title: "Выгоднее", text: "Плати за использование.", icon: "coins" },
  { title: "Разумнее", text: "Хорошие вещи должны работать.", icon: "cycle" },
];

export function RentalBenefitsSection() {
  return (
    <section className="section rental-benefits" aria-labelledby="rental-benefits-title">
      <div className="container">
        <div className="rental-benefits__intro">
          <div>
        <h2 id="rental-benefits-title">
          Нужная вещь может быть ближе, чем кажется.
        </h2>
        <p className="rental-benefits__lead">
          Не покупай то, что понадобится всего на пару дней.
        </p>
          </div>
          <div className="rental-benefits__visual">
            <Image
              src={rentalTote}
              alt="Сумка с фотоаппаратом, бутылкой и ковриком. Надпись: Хорошие вещи должны работать."
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 90vw"
            />
            <svg className="rental-benefits__rays" viewBox="0 0 80 100" aria-hidden="true" focusable="false">
              <path d="m53 12 12 29M13 40l27 14M10 82l28-4" />
            </svg>
            <svg className="rental-benefits__arrow" viewBox="0 0 80 120" aria-hidden="true" focusable="false">
              <path d="M30 10c53 15 44 70-15 87m3-19-7 22 23 8" />
            </svg>
          </div>
        </div>
        <ul className="rental-benefits__list">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <BrandIcon name={benefit.icon} className="rental-benefits__icon" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </li>
          ))}
        </ul>
        <p className="handwritten rental-benefits__signature">
          ~ всё рядом <span aria-hidden="true">♡</span>
        </p>
      </div>
    </section>
  );
}
