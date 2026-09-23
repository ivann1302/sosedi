import { ButtonLink } from "@/components/ui/ButtonLink";

export function JoinSection() {
  return (
    <section
      className="section join-section"
      id="join"
      aria-labelledby="join-title"
    >
      <div className="container join-section__inner">
        <svg
          className="join-section__rays join-section__rays--left"
          viewBox="0 0 110 160"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m77 39-27-24M61 80 17 70M74 119l-29 27" />
        </svg>
        <h2 id="join-title">
          Присоединяйтесь
          <br />к «Всё рядом»
        </h2>
        <p>
          Оставьте заявку — мы сообщим о запуске и поможем начать пользоваться
          сервисом.
        </p>
        <ButtonLink
          href="mailto:hello@sosedi.app?subject=Хочу%20присоединиться%20к%20«Всё%20рядом»"
          variant="contrast"
        >
          Присоединиться <span aria-hidden="true">→</span>
        </ButtonLink>
        <svg
          className="join-section__rays join-section__rays--right"
          viewBox="0 0 110 160"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m77 39-27-24M61 80 17 70M74 119l-29 27" />
        </svg>
      </div>
    </section>
  );
}
