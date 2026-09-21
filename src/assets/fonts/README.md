# Шрифты брендбука

Загружены 2026-09-21 из официального репозитория Google Fonts. Оригинальные variable TTF, лицензии OFL и метаданные сохранены рядом.

- [Montserrat](https://github.com/google/fonts/tree/main/ofl/montserrat): основной текст и разрешённый брендбуком fallback для заголовков, 100–900.
- [Caveat](https://github.com/google/fonts/tree/main/ofl/caveat): рукописные акценты, 400–700.

Оба семейства содержат кириллицу согласно METADATA.pb. Официальный источник семейства с точным названием Montserrat Rounded при поиске не найден; скачанный Montserrat не является Montserrat Rounded.

В рабочем редизайне подключены локальные variable WOFF2 из `public/fonts/` через `src/app/fonts.scss`. Браузер загружает только нужные наборы символов по unicode-range; используется font-display: swap. CSS и WOFF2 получены через официальный Google Fonts CSS API. Внешних запросов к Google при сборке и открытии сайта больше нет. Montserrat используется для текста и заголовков, Caveat — для рукописных акцентов.
