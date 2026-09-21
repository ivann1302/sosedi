import Image from "next/image";
import drillImage from "@/assets/images/things-around/drel.webp";
import tentImage from "@/assets/images/things-around/tent.webp";
import vacuumImage from "@/assets/images/things-around/vcleaner.webp";
import projectorImage from "@/assets/images/things-around/proector.webp";
import bicycleImage from "@/assets/images/things-around/bycicle.webp";
import vrImage from "@/assets/images/things-around/vr.webp";

const categories = [
  {
    title: "Для ремонта",
    text: "Повесить полку. Собрать мечту.",
    image: drillImage,
  },
  {
    title: "Для приключений",
    text: "Уехать за город налегке.",
    image: tentImage,
  },
  {
    title: "Для дома",
    text: "Навести порядок без лишних покупок.",
    image: vacuumImage,
  },
  {
    title: "Для впечатлений",
    text: "Устроить кино у себя дома.",
    image: projectorImage,
  },
  {
    title: "Для движения",
    text: "Открыть любимый город заново.",
    image: bicycleImage,
  },
  {
    title: "Для новых открытий",
    text: "Попробовать то, что давно хотелось.",
    image: vrImage,
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
            Что можно
            <br />
            найти рядом?
          </h2>
          <p>
            От дрели на один вечер
            <br />
            до палатки на целую неделю.
          </p>
        </div>
        <ul className="category-grid">
          {categories.map((category, index) => (
            <li className="category" key={category.title}>
              <div className="category__image">
                <span className="category__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <Image
                  src={category.image}
                  alt=""
                  sizes="(min-width: 1024px) 30vw, 45vw"
                />
              </div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </li>
          ))}
        </ul>
        <p className="section-footnote">
          Примеры вещей для аренды. Каталог появится после запуска приложения.
        </p>
      </div>
    </section>
  );
}
