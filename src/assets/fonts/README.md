# Шрифты брендбука

Загружены из официального репозитория Google Fonts. Оригинальные variable TTF, лицензии OFL и метаданные сохранены рядом.

- [Nunito](https://github.com/google/fonts/tree/main/ofl/nunito): заголовки, 800–900. Добавлен 2026-09-23 после выбора пользователем округлой кириллицы из референса.
- [Montserrat](https://github.com/google/fonts/tree/main/ofl/montserrat): основной текст и fallback для заголовков, 100–900.
- [Caveat](https://github.com/google/fonts/tree/main/ofl/caveat): рукописные акценты, 400–700.

Все семейства содержат кириллицу согласно `METADATA.pb`. Название `Montserrat Rounded` из ранней версии брендбука не соответствует отдельному официальному семейству Google Fonts; выбранный визуальный характер заголовков реализован через Nunito.

В рабочем редизайне подключены локальные variable WOFF2 из `public/fonts/` через `src/app/fonts.scss`. Браузер загружает только нужные наборы символов по `unicode-range`; используется `font-display: swap`. CSS и WOFF2 получены через официальный Google Fonts CSS API. Внешних запросов к Google при сборке и открытии сайта нет. Nunito используется для заголовков, Montserrat — для основного текста, Caveat — для рукописных акцентов.
