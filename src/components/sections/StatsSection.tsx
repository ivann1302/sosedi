const benefits = [
  { title: "Меньше покупок", text: "Бери на время то, что нужно изредка." },
  { title: "Больше места", text: "Пусть вещи работают, а не пылятся." },
  { title: "Рядом с домом", text: "Знакомься с теми, кто живёт по соседству." },
];

export function StatsSection() {
  return (
    <section className="benefits-strip" aria-label="Почему делиться удобно">
      <div className="container">
        <ul>
          {benefits.map((item, index) => (
            <li key={item.title}>
              <span className="benefits-strip__number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
