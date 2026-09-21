import { ButtonLink } from "@/components/ui/ButtonLink";

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
            <g fill="#FFD400" stroke="#FFF" strokeWidth="5">
              <path d="M140 135a24 24 0 1 0-48 0c0 22 24 43 24 43s24-21 24-43Z" />
              <path d="M512 353a24 24 0 1 0-48 0c0 22 24 43 24 43s24-21 24-43Z" />
              <path d="M280 470a24 24 0 1 0-48 0c0 22 24 43 24 43s24-21 24-43Z" />
            </g>
            <g fill="#111">
              <circle cx="116" cy="134" r="7" />
              <circle cx="488" cy="352" r="7" />
              <circle cx="256" cy="469" r="7" />
              <path d="M338 186a32 32 0 1 0-64 0c0 29 32 55 32 55s32-26 32-55Z" />
            </g>
            <circle cx="306" cy="184" r="10" fill="#FFF" />
          </svg>
          <figcaption>
            Вещи ближе, чем кажется. Иллюстрация будущего поиска.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
