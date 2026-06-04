import Link from "next/link";

const navLinks = [
  { label: "О проекте", href: "#about" },
  { label: "Скачать приложение", href: "#download" },
  { label: "Для арендодателей", href: "#landlords" },
  { label: "Блог", href: "/blog" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="Соседи">
          <span className="site-header__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path
                d="M4.5 10.7 12 4.6l7.5 6.1v7.5a1.7 1.7 0 0 1-1.7 1.7h-3.4v-5.5H9.6v5.5H6.2a1.7 1.7 0 0 1-1.7-1.7v-7.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>Соседи</span>
        </Link>

        <nav className="site-header__nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="site-header__cta site-header__cta--desktop" href="#download">
          Скачать приложение
        </Link>

        <div className="site-header__mobile-menu">
          <input
            className="site-header__menu-toggle"
            type="checkbox"
            id="site-header-menu"
            aria-label="Открыть меню"
            aria-controls="site-header-mobile-panel"
          />
          <label className="site-header__burger" htmlFor="site-header-menu">
            <span className="site-header__burger-lines" aria-hidden="true" />
          </label>

          <div className="site-header__mobile-panel" id="site-header-mobile-panel">
            <nav
              className="site-header__mobile-nav"
              aria-label="Мобильная навигация"
            >
              {navLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link className="site-header__cta site-header__cta--menu" href="#download">
              Скачать приложение
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
