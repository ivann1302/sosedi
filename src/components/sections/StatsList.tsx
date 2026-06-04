export type StatsListItem = {
  label: string;
  value: string;
};

type StatsListProps = {
  items: readonly StatsListItem[];
};

export function StatsList({ items }: StatsListProps) {
  return (
    <dl className="stats__list">
      {items.map((item) => (
        <div className="stats__item" key={item.label}>
          <dt>{item.value}</dt>
          <dd>{item.label}</dd>
        </div>
      ))}
    </dl>
  );
}
