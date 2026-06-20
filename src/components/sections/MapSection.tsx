import Image from "next/image";
import mapImage from "@/assets/images/map-section/map.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";

const mapUpdates = [
  {
    person: "Мария",
    text: "Сдали проектор",
    time: "5 минут назад",
    tone: "green",
    position: "top",
  },
  {
    person: "Анна",
    text: "Взяли велосипед",
    time: "20 минут назад",
    tone: "orange",
    position: "bottom",
  },
  {
    person: "Илья",
    text: "Нашли дрель",
    time: "Только что",
    tone: "blue",
    position: "right",
  },
] as const;

export function MapSection() {
  return (
    <section className="district-map" aria-labelledby="district-map-title">
      <div className="district-map__inner" data-reveal="scale">
        <div className="district-map__content">
          <p className="district-map__eyebrow">Прямо сейчас в вашем районе</p>
          <h2 id="district-map-title">
            Район живет и делится каждую минуту
          </h2>
          <ButtonLink href="#download" variant="secondary">
            Начать аренду
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <div className="district-map__visual" aria-hidden="true">
          <Image
            src={mapImage}
            alt=""
            sizes="(max-width: 760px) 100vw, 900px"
            className="district-map__image"
          />

          <ul className="district-map__updates">
            {mapUpdates.map((update, index) => (
              <li
                className={`district-map__update district-map__update--${update.position}`}
                data-reveal="soft"
                data-reveal-delay={String(index + 2)}
                key={update.text}
              >
                <span
                  className={`district-map__avatar district-map__avatar--${update.tone}`}
                >
                  {update.person[0]}
                </span>
                <span className="district-map__update-copy">
                  <small>{update.time}</small>
                  <strong>{update.text}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
