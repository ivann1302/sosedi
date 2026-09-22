import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function MapSection() {
  return (
    <section
      className="section district-map"
      aria-labelledby="district-map-title"
    >
      <div className="container split-layout">
        <div className="section-copy">
          <p className="eyebrow">Твой район. Твои возможности.</p>
          <h2 id="district-map-title">
            Большие планы.
            <br />
            Маленькие
            <br />
            расстояния.
          </h2>
          <p className="lead">
            Нужная вещь может оказаться в соседнем доме. Мы создаём сервис,
            который поможет вам найти друг друга.
          </p>
          <ButtonLink href="#download" variant="secondary">
            О запуске приложения <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
        <figure className="neighborhood-map">
          <svg
            viewBox="0 0 640 580"
            role="img"
            aria-label="Иллюстрация района с несколькими точками обмена вещами"
          >
            <rect width="640" height="580" rx="32" fill="#EFEEE6" />
            <g fill="#E1DECF">
              <rect x="36" y="32" width="130" height="130" rx="18" />
              <rect x="204" y="32" width="180" height="85" rx="18" />
              <rect x="437" y="32" width="164" height="135" rx="18" />
              <rect x="43" y="226" width="120" height="160" rx="18" />
              <rect x="425" y="226" width="176" height="80" rx="18" />
              <rect x="36" y="457" width="131" height="86" rx="18" />
              <rect x="225" y="419" width="130" height="124" rx="18" />
              <rect x="426" y="389" width="175" height="154" rx="18" />
            </g>
            <g fill="none" stroke="#FFF" strokeWidth="26" strokeLinecap="round">
              <path d="M188 0v195l-2 385M410 0v580M0 198h640M0 420h186l213-69h241" />
            </g>
            <rect
              x="226"
              y="245"
              width="141"
              height="126"
              rx="40"
              fill="#CFD9C6"
            />
            <g fill="#B4C5AB">
              <circle cx="250" cy="275" r="16" />
              <circle cx="340" cy="344" r="14" />
              <circle cx="274" cy="339" r="20" />
            </g>
            <circle cx="306" cy="199" r="113" fill="#FFD400" opacity=".14" />
            <circle
              cx="306"
              cy="199"
              r="77"
              fill="none"
              stroke="#D5B800"
              strokeDasharray="5 8"
            />
            {[
              { x: 116, y: 150, scale: 1 },
              { x: 488, y: 368, scale: 1 },
              { x: 256, y: 485, scale: 1 },
              { x: 306, y: 199, scale: 1.3 },
            ].map((pin) => (
              <g key={pin.x} transform={`translate(${pin.x} ${pin.y}) scale(${pin.scale})`}>
                <rect x="-28" y="-28" width="56" height="56" rx="14" fill="#FFD400" />
                <g transform="translate(-16 -16)" color="#111111">
                  <BrandIcon name="pin" />
                </g>
              </g>
            ))}
          </svg>
          <figcaption>
            Вещи ближе, чем кажется. Иллюстрация будущего поиска.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
