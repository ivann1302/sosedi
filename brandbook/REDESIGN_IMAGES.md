# Фотографии для редизайна

Созданы встроенным `image_gen` по фотостилю брендбука. Это постановочные AI-иллюстрации сценариев, а не фотографии реальных пользователей или партнёров.

По просьбе пользователя заменены типажи людей. Текущая подборка:

- `hero-mobile.webp` — прозрачный вырез мужчины во весь рост с дрелью и кейсом у открытого багажника для мобильного hero.
- `hero-neighbor-v2.webp` — женщина с короткой тёмной стрижкой, голубая рубашка, жёлтая сумка.
- `neighbors-sharing-v2.webp` — женщина старшего возраста и молодой мужчина, передача инструментов.
- `local-business-v2.webp` — владелица проката с рыжими волосами, очками и синим фартуком.

Файлы лежат в `src/assets/images/brand/`. Первая подборка без суффикса `-v2` сохранена, но не подключена.

## Иллюстрации категорий

Шесть плоских стикерных иллюстраций для карусели категорий созданы встроенным `image_gen` по предоставленному пользователем референсу, сохранены с прозрачностью и оптимизированы в WebP 1024 × 1024. Каждый стикер дополнительно отцентрирован на квадратном холсте с гарантированным прозрачным полем. Файлы лежат в `src/assets/images/things-around/generated/`:

- `tools.webp` — дрель, отвёртка и рулетка;
- `tourism.webp` — палатка, рюкзак и коврик;
- `home.webp` — вертикальный пылесос и лампа;
- `sport.webp` — городской велосипед и велошлем;
- `photo-electronics.webp` — камера и проектор;
- `clothing.webp` — куртка, кроссовки и белый свитер.

Общий промпт набора:

> Use case: stylized-concept. Asset type: square category carousel illustration for the “Всё рядом” rental service. Input images: the user-provided square sheet of yellow, black and white doodle stickers is the primary style reference; the “Всё рядом” brandbook board is a secondary palette and brand-character reference only. Generate a new illustration; do not copy or edit either reference. Style/medium: flat hand-drawn sticker illustration matching the reference sheet: playful uneven black ink outlines, warm yellow fill, clean white areas, thick white sticker border, tiny yellow rays or sparkles, simple friendly character, slightly imperfect handmade linework; clearly 2D, not photorealistic, not 3D. Composition/framing: one centered cohesive object cluster, complete objects fully visible, transparent safety margin on every side, consistent scale across the set. Color palette: Brand Yellow #FFD400, Brand Black #111111 and white only. Scene/backdrop: genuinely transparent background outside the white sticker silhouette. Text: none. Constraints: no words, letters, numbers, logos, trademarks or watermark; no cropped objects; no object or white border touching canvas edges; no realistic materials, reflections, photographic lighting or 3D rendering; crisp alpha edges; designed to remain fully visible with CSS object-fit contain.

Для каждой категории к общему промпту добавлялось соответствующее перечисление предметов из списка выше.

## Промпты текущей подборки

### Мобильный hero

Use case: background-extraction with outpainting. Asset type: transparent full-height subject cutout for a mobile website hero. The previous mobile hero is the edit target and identity/style reference. Extend the same friendly man naturally downward so his complete body is visible from the top of his beanie through both shoes. Preserve his face, dark beanie, beige sweatshirt, dark practical trousers, yellow-and-black cordless drill and black/yellow tool case. Keep a restrained edge of the open everyday car trunk behind him on the far right. Vertical portrait composition with the person in the right two-thirds, transparent negative space on the left and at least 5% transparent safety margin above the beanie and below both shoes. Photorealistic editorial lifestyle photography, realistic skin, fabric, tools and proportions, soft warm daylight. Genuinely transparent alpha everywhere outside the man, tools, case and car edge. No courtyard, buildings, plants, floor, rectangular background, text, letters, logos, watermark, UI, cropped head, cropped legs, missing shoes, distorted hands, malformed drill or duplicated tools.

Последующая точечная правка: сохранить человека и инструменты без изменений, полностью дорисовать верхний силуэт поднятой двери багажника и оставить не менее 6% прозрачного запаса над её высшей точкой. Ни багажник, ни голова, ни обувь не должны касаться границ холста.

### Hero

Use case: photorealistic-natural. NEW CASTING for a neighborhood item-sharing website hero photograph. Completely different person from conventional young wavy-haired brunette stock models. Subject: an everyday woman aged about 42, short straight dark pixie haircut, softly angular face, light freckles, warm brown eyes, natural skin with fine smile lines, relaxed confident expression. Wearing a muted dusty-blue cotton overshirt over white T-shirt, relaxed light beige trousers, a plain vivid yellow canvas tote on shoulder. Holding a compact folded camping chair in one hand. Walking casually in a bright contemporary residential courtyard with pale stone, trees and wooden benches. Three-quarter portrait to knees, whole hands and item visible, looking to the side rather than posing directly, caught mid-conversation with someone outside frame. Authentic editorial documentary lifestyle photography, gentle daylight, neutral true colors, real fabric texture, no beautified airbrushed face. Vertical 4:5 composition, uncluttered surroundings. This is an ordinary neighbor, not a fashion model. No long or wavy hair, no cream overshirt with dark trousers, no logos, lettering, UI, graphics, watermarks or props bearing text.

### Доверие

Use case: photorealistic-natural. Completely new casting for an authentic neighborhood sharing editorial photograph, NOT young brown-haired model couple. Two ordinary adult neighbors from different generations: a woman around 58 with a short silver-grey pixie haircut, fine natural face lines, small round glasses, dark indigo linen jacket and light grey trousers; and a clean-shaven East Asian man around 32 with straight short black hair, broad friendly face, off-white T-shirt and navy work trousers. They are handing over a compact charcoal tool case containing a cordless drill at a bright residential entrance with a simple light wooden bench and cream plaster. Both look toward the case while talking with natural small smiles; relaxed ordinary neighbor encounter, not posed romantic or corporate scene. The older woman is the owner passing the tool case to the younger man. Anatomically accurate visible hands. One yellow canvas tote resting on the bench as restrained brand accent. Candid documentary magazine photography, realistic skin texture and daylight, neutral warm cream background with green planting, no luxury styling, no airbrushed model faces. Vertical 4:5 frame, waist to thigh view, entire handover visible, enough space around heads. NO previous wavy-haired brunette woman, NO curly-haired bearded man in sage shirt. No logos, text, UI, watermarks or decorative graphics.

### Для бизнеса

Use case: photorealistic-natural. Completely new character for neighborhood rental-business website editorial photograph. Main person: an ordinary friendly woman aged around 46 with shoulder-length curly copper-red hair loosely tied back, small dark round eyeglasses, light freckled skin and natural smile lines, wearing a simple white cotton T-shirt and dark navy practical canvas work apron. She is the owner of a small local tool and outdoor equipment rental workshop. Standing behind a pale wooden workbench, checking a compact open cordless drill kit with her hands, glancing up with an unposed welcoming smile. Natural body proportions and ordinary appearance, genuine working person rather than beauty or corporate stock model. Bright cream plaster interior, neatly arranged few tools, a folded camping chair on shelf, indoor plant, a small yellow toolbox as color accent. Soft window daylight, clean neutral palette, realistic skin and wood, restrained magazine photography. Portrait 4:5 composition, show head, apron, hands and whole tool case clearly with breathing room. NO curly-haired young man, NO green overshirt, NO logos, text, signage, watermarks, interface overlays or illustrations.
