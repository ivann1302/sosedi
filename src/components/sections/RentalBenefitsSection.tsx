import Image from "next/image";
import { BrandIcon } from "@/components/ui/BrandIcon";
import rentalTote from "@/assets/images/brand/rental-tote.webp";

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
        <div className="rental-benefits__paths">
          <div className="rental-benefits__path">
            <h3>Арендуй вещь</h3>
            <p>Найди нужную вещь рядом и возьми её на подходящий срок.</p>
          </div>
          <div className="rental-benefits__exchange" aria-hidden="true">
            <BrandIcon name="cycle" />
          </div>
          <div className="rental-benefits__path">
            <h3>Сдай в аренду</h3>
            <p>Добавь свою вещь, укажи условия и сдавай людям поблизости.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
