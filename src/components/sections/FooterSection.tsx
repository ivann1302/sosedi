import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link href="/" aria-label="Всё рядом — главная">
              <Image
                src="/brand/logo-badge.webp"
                alt="Всё рядом"
                width={112}
                height={112}
              />
            </Link>
            <h2 id="footer-title">
              Люди. Вещи.
              <br />
              Возможности.
              <br />
              <span>Рядом.</span>
            </h2>
          </div>
          <div className="site-footer__launch">
            <p className="eyebrow">Хорошие вещи должны работать</p>
            <h3>
              Новая привычка —<br />
              делиться.
            </h3>
            <p>
              Готовим приложение к запуску.
              <br />
              Встретимся по соседству.
            </p>
            <Link className="button button--contrast" href="/#download">
              Скоро запуск <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Всё рядом</p>
          <nav aria-label="Навигация в подвале">
            <Link href="/business">Для бизнеса</Link>
            <Link href="/#faq">Вопросы и ответы</Link>
            <a href="mailto:hello@sosedi.app">Связаться с нами ↗</a>
          </nav>
          <span>Ближе, чем кажется.</span>
        </div>
      </div>
    </footer>
  );
}
