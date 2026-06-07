import Image from "next/image";
import Link from "next/link";
import drillImage from "@/assets/images/things-around/drel.webp";

const footerGroups = [
  {
    title: "Продукт",
    links: [
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Скачать приложение", href: "#download" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Блог", href: "/blog" },
      { label: "Для бизнеса", href: "/business" },
      { label: "Контакты", href: "/contacts" },
    ],
  },
  {
    title: "Документы",
    links: [
      { label: "Конфиденциальность", href: "/privacy" },
      { label: "Условия сервиса", href: "/terms" },
      { label: "Правовая информация", href: "/legal" },
    ],
  },
] as const;

const socialLinks = [
  { label: "Telegram", href: "https://t.me/", icon: "telegram" },
  { label: "VK", href: "https://vk.com/", icon: "vk" },
  { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
] as const;

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.7 4.4c.3-.1.6.2.5.5l-2.8 14.2c-.1.6-.8.8-1.3.5l-4.3-3.2-2.2 2.1c-.3.3-.8.1-.8-.4v-3.4l8.4-7.6c.2-.2 0-.5-.3-.3L7.6 13.3 3.2 12c-.6-.2-.6-1 0-1.2l17.5-6.4Z"
        />
      </svg>
    );
  }

  if (name === "vk") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12.7 17.5c-5.4 0-8.5-3.7-8.6-9.9h2.7c.1 4.5 2.1 6.4 3.6 6.8V7.6H13v3.9c1.5-.2 3-2 3.5-3.9h2.7c-.4 2.3-2.3 4.1-3.6 4.8 1.3.6 3.3 2.1 4.1 5.1h-3c-.6-1.8-1.9-3.2-3.7-3.5v3.5h-.3Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.6 2 12 2 12s0 3.4.4 4.8c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.8.4-4.8s0-3.4-.4-4.8ZM10 14.8V9.2l5.2 2.8L10 14.8Z"
      />
    </svg>
  );
}

const legalLinks = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  { label: "Карта сайта", href: "/sitemap.xml" },
] as const;

export function FooterSection() {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="site-footer__shell">
        <section
          className="site-footer__accent"
          aria-labelledby="site-footer-accent-title"
        >
          <div className="site-footer__accent-visual" aria-hidden="true">
            <Image
              src={drillImage}
              alt=""
              sizes="(max-width: 640px) 180px, 260px"
              className="site-footer__accent-image"
            />
          </div>

          <div className="site-footer__accent-content">
            <p className="site-footer__eyebrow">Вещи работают чаще</p>
            <h2 id="site-footer-accent-title">
              Дрель, проектор или палатка могут быть в соседнем подъезде
            </h2>
            <p>
              Sosedi помогает найти нужное рядом, договориться напрямую и не
              покупать то, что нужно на один день.
            </p>
          </div>
        </section>

        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              className="site-footer__logo"
              href="/"
              aria-labelledby="site-footer-title"
            >
              <span className="site-footer__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4.5 10.7 12 4.6l7.5 6.1v7.5a1.7 1.7 0 0 1-1.7 1.7h-3.4v-5.5H9.6v5.5H6.2a1.7 1.7 0 0 1-1.7-1.7v-7.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span id="site-footer-title">Соседи</span>
            </Link>
            <p>
              Sosedi помогает брать вещи у соседей, экономить на редких
              покупках и развивать локальное сообщество.
            </p>

            <nav className="site-footer__social" aria-label="Социальные сети">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.label} aria-label={link.label}>
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer__groups">
            {footerGroups.map((group) => (
              <nav
                className="site-footer__group"
                aria-label={group.title}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© 2026 Sosedi. Шеринг вещей в вашем районе.</p>
          <nav aria-label="Юридическая навигация">
            {legalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
