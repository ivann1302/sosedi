import Image from "next/image";
import Link from "next/link";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { MobileMenu } from "@/components/ui/MobileMenu";

type HeaderProps = {
  navLinks?: readonly { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
  appearance?: "default" | "home";
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
  appearance = "default",
}: HeaderProps) {
  return (
    <header className={`site-header${appearance === "home" ? " site-header--home" : ""}`}>
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
        {appearance === "home" && (
          <Link className="button site-header__about-launch" href="/#download">
            Узнать о запуске
          </Link>
        )}
        <Link
          className="button button--primary site-header__cta"
          href={ctaHref}
        >
          {ctaLabel}
          <BrandIcon name="arrow" />
        </Link>
        <MobileMenu
          navLinks={navLinks}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          desktopBreakpoint={appearance === "home" ? 1024 : 1280}
        />
      </div>
    </header>
  );
}
