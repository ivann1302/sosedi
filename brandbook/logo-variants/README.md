# Варианты логотипа «Всё рядом»

Созданы встроенным image_gen 2026-09-21 по `../brandbook.png`. Это растровые варианты для выбора, не финальные SVG или прозрачные файлы для сайта.

- `01-stacked.png` — наиболее близкий к брендбуку двухстрочный знак с улыбкой и лучами.
- `02-horizontal.png` — горизонтальная адаптация для шапки.
- `03-badge.png` — круглая версия для аватаров и наклеек.

Выбраны вариант 1 (основной) и вариант 3 (дополнительный). Файлы для сайта и правила находятся в [../logos/README.md](../logos/README.md). Генерация сохраняет характер референса, но не является точной векторной копией.

## Промпты

Общий шаблон (Input: `brandbook/brandbook.png`):

Use case: logo-brand. Create ONE standalone logo variant {n} for review, derived from the main smile-and-rays logo in the reference brandbook, not its other illustrations. {detail} Exact Cyrillic text: «Всё рядом» (preserve ё). Warm friendly rounded heavy lettering. Flat crisp vector-like artwork, black #111111 and yellow #FFD400 only. Plain cream #F7F4EA background, ample clear margins. No photography, no mockups, no extra icons, no slogans, no labels, no watermarks. This is a clean logo proposal, not a brandboard.

01: Faithful reconstruction: stacked two-line wordmark, slight lively upward tilt, closest possible to main smile logo in reference. Three yellow rounded rays upper right, yellow smile underneath.

02: Horizontal website-header adaptation: exact words on one line, rounded extra bold custom Cyrillic lettering faithful to reference, small three-ray sun above right end and understated yellow smile below the word рядом. Wide compact silhouette.

03: Compact badge adaptation: two-line wordmark within a solid brand-yellow circular badge, black smile and three black rounded rays. Preserve reference rounded letterform identity. No outer border.

