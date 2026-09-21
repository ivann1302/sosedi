import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  navLinks?: readonly { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
};

const defaultNavLinks = [
  { label: "Что можно взять", href: "/#things" },
  { label: "Как это работает", href: "/#how-it-works" },
  { label: "Для бизнеса", href: "/business" },
  { label: "FAQ", href: "/#faq" },
];

export function Header({
  navLinks = defaultNavLinks,
  ctaHref = "/#download",
  ctaLabel = "Скоро запуск",
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          className="site-header__logo"
          href="/"
          aria-label="Всё рядом — главная"
        >
          <Image
            src="/brand/logo-primary.webp"
            alt="Всё рядом"
            width={120}
            height={80}
            priority
          />
        </Link>
        <nav className="site-header__nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="button button--primary site-header__cta"
          href={ctaHref}
        >
          {ctaLabel}
          <span aria-hidden="true">↗</span>
        </Link>
        <details className="site-header__mobile-menu">
          <summary aria-label="Меню сайта">
            <span />
            <span />
          </summary>
          <nav aria-label="Мобильная навигация">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="button button--primary" href={ctaHref}>
              {ctaLabel}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
