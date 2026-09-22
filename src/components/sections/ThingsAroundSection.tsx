import Image from "next/image";
import drillImage from "@/assets/images/things-around/drel.webp";
import tentImage from "@/assets/images/things-around/tent.webp";
import vacuumImage from "@/assets/images/things-around/vcleaner.webp";
import projectorImage from "@/assets/images/things-around/proector.webp";
import bicycleImage from "@/assets/images/things-around/bycicle.webp";
import clothingImage from "@/assets/images/brand/hero-neighbor-v2.webp";

const categories = [
  {
    title: "Инструменты",
    image: drillImage,
    alt: "Аккумуляторная дрель",
  },
  {
    title: "Туризм",
    image: tentImage,
    alt: "Туристическая палатка",
  },
  {
    title: "Для дома",
    image: vacuumImage,
    alt: "Пылесос для дома",
  },
  {
    title: "Спорт",
    image: bicycleImage,
    alt: "Городской велосипед",
  },
  {
    title: "Фото и электроника",
    image: projectorImage,
    alt: "Домашний проектор",
  },
  {
    title: "Одежда",
    image: clothingImage,
    alt: "Повседневная одежда для прогулки",
    cover: true,
  },
];

export function ThingsAroundSection() {
  return (
    <section
      className="section things-around"
      id="things"
      aria-labelledby="things-title"
    >
      <div className="container">
        <div className="section-heading">
          <h2 id="things-title">
            Что можно найти рядом?
          </h2>
          <p>
            От дрели на один вечер до палатки на целую неделю.
          </p>
        </div>
        <ul className="category-grid">
          {categories.map((category) => (
            <li className="category" key={category.title}>
              <div
                className={`category__image${category.cover ? " category__image--cover" : ""}`}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  sizes="(min-width: 1024px) 30vw, 45vw"
                />
              </div>
              <h3>{category.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
