import Image from "next/image";
import Link from "next/link";

const stores = [
  { id: "app-store", name: "App Store" },
  { id: "google-play", name: "Google Play" },
  { id: "rustore", name: "RuStore" },
] as const;

type StoreId = (typeof stores)[number]["id"];

function StoreLogo({ store }: { store: StoreId }) {
  if (store === "app-store") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35-.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z"
        />
      </svg>
    );
  }

  if (store === "google-play") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="#00d7fe" d="M3.4 2.3c-.3.4-.4.9-.4 1.5v16.4c0 .6.1 1.1.4 1.5L13 12 3.4 2.3Z" />
        <path fill="#00f076" d="m4.7 1.5 11.2 6.4L13 12 3.4 2.3c.3-.5.8-.8 1.3-.8Z" />
        <path fill="#ffce00" d="m15.9 7.9 3.8 2.2c1 .6 1 1.3 0 1.9l-3.8 2.2L13 12l2.9-4.1Z" />
        <path fill="#f63448" d="M15.9 14.1 4.7 20.5c-.5.3-1 .2-1.3-.3L13 12l2.9 2.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
      <path
        fill="#0077ff"
        d="M6.748 89.252C13.497 96 24.358 96 46.08 96h3.84c21.722 0 32.583 0 39.332-6.748C96 82.503 96 71.642 96 49.92v-3.84c0-21.723 0-32.584-6.748-39.332C82.503 0 71.642 0 49.92 0h-3.84C24.358 0 13.497 0 6.748 6.748 0 13.496 0 24.357 0 46.08v3.84c0 21.722 0 32.583 6.748 39.332Z"
      />
      <path
        fill="white"
        fillRule="evenodd"
        d="m74.117 63.809-6.486-1.62a1.86 1.86 0 0 1-1.36-1.744l-.81-23.874c-.234-3.16-2.58-5.673-5.031-6.413-.138-.042-.284.014-.366.133a.276.276 0 0 0 .065.376c.605.469 2.271 1.998 2.271 4.635l-.005 31.215c0 3.014-2.848 5.224-5.786 4.49l-6.586-1.645a1.86 1.86 0 0 1-1.265-1.72l-.809-23.876c-.234-3.16-2.58-5.673-5.031-6.413-.138-.042-.285.014-.366.133a.276.276 0 0 0 .065.376c.605.469 2.271 1.998 2.271 4.635l-.005 26.019.004.001v5.198c0 3.014-2.848 5.224-5.786 4.49l-18.605-4.647a5.79 5.79 0 0 1-4.4-5.614V36.681c0-3.014 2.848-5.224 5.786-4.49l11.723 2.928v-5.636c0-3.014 2.848-5.224 5.786-4.49l11.722 2.928v-5.636c0-3.014 2.848-5.225 5.786-4.49l18.604 4.647a5.79 5.79 0 0 1 4.4 5.613v31.263c0 3.014-2.848 5.225-5.786 4.491Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <svg
        className="site-footer__rays site-footer__rays--left"
        viewBox="0 0 92 118"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m70 23-18 24M35 48 9 37M37 82 9 90" />
      </svg>
      <svg
        className="site-footer__rays site-footer__rays--right"
        viewBox="0 0 92 118"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m70 23-18 24M35 48 9 37M37 82 9 90" />
      </svg>

      <div className="container site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              className="site-footer__logo"
              href="/"
              aria-label="Всё рядом — главная"
            >
              <Image
                src="/brand/logo-primary.webp"
                alt="Всё рядом"
                width={180}
                height={120}
              />
            </Link>
            <h2 id="footer-title">
              Люди. Вещи. Возможности.
              <br />
              Рядом.
            </h2>
          </div>

          <div className="site-footer__stores">
            <h3>Скоро в магазинах приложений</h3>
            <p>Добавим ссылки сразу после публикации приложения.</p>
            <div className="store-badges" aria-label="Магазины приложений">
              {stores.map((store) => (
                <button
                  className="store-badge"
                  type="button"
                  disabled
                  aria-label={`${store.name} — скоро`}
                  key={store.name}
                >
                  <span className={`store-badge__mark store-badge__mark--${store.id}`}>
                    <StoreLogo store={store.id} />
                  </span>
                  <span>
                    <small>СКОРО В</small>
                    <strong>{store.name}</strong>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Всё рядом.
            <br />
            Все права защищены.
          </p>
          <nav aria-label="Навигация в подвале">
            <Link href="/business">Для бизнеса</Link>
            <Link href="/#faq">Вопросы и ответы</Link>
            <a href="mailto:hello@sosedi.app">Контакты</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
