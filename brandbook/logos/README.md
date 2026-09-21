# Логотипы «Всё рядом»

Выбор пользователя: вариант 1 — основной; вариант 3 — дополнительный. Вариант 2 не используется.

## Файлы и применение

- `primary.png` — основной двухстрочный знак с прозрачным фоном; исходник для экспорта.
- `badge.png` — дополнительный круглый знак с прозрачностью за пределами жёлтого круга.
- `../../public/brand/logo-primary.webp` — версия для шапки сайта, 480 × 320.
- `../../public/brand/logo-badge.webp` — версия для подвала и дополнительных размещений, 384 × 384.
- `../../src/app/icon.png` — круглая иконка сайта, 192 × 192.

Основной знак размещать на белом или кремовом фоне. Для тёмного фона использовать дополнительный круглый знак с жёлтой подложкой. Не растягивать, не перекрашивать, не добавлять тени и не заменять буквы наборным шрифтом. Сохранять прозрачные поля файлов. Не использовать оба знака рядом как два разных бренда.

Это растровые файлы, не векторные SVG. PNG подготовлены встроенным image_gen из выбранных эскизов; WebP и иконка — уменьшенные экспорты. Для крупной печати нужен отдельный векторный мастер. PNG могут выглядеть некорректно в просмотрщиках, игнорирующих альфа-канал; проверять с корректным наложением на фон.

## Промпты подготовки

### Основной

Edit target: the approved attached 01-stacked logo. Exact background removal only. Output transparent PNG. Preserve the original logo shape and lettering without changes: black words Всё рядом, three solid yellow rays and solid yellow smile. All letter counters and all space outside the solid logo strokes must be fully transparent. Absolutely NO GLOW or halo around yellow: edge stops sharply. NO BLACK BACKGROUND. Flat two-color screenprint appearance: black #111111 and yellow #FFD400 fully opaque interiors. Smooth antialiasing only at stroke boundaries. Crop to logo bounds with a tiny transparent margin. Do not add any visual effect, gradient, illumination or shadow.

### Дополнительный

Use case: background-extraction. Edit target: attached approved logo. Prepare a clean web PNG with GENUINE TRANSPARENT ALPHA background, not a checkerboard painting. Keep the entire yellow circular badge and all black letters, smile and exactly three rays unchanged. Remove only cream background outside the circle. Preserve EXACT Cyrillic lettering «Всё рядом», original shapes, tilt, layout, spacing, identity and proportions. Do not redesign, do not retype. Tight artwork bounds with only a small 3 percent transparent safety margin. Crisp smooth antialiased edges, flat #111111 black and #FFD400 yellow, no texture, gradient, shadows, halos or extra text.

