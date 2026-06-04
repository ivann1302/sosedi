type HeroActivityCardProps = {
  action: string;
  icon: string;
  position: "top" | "right" | "bottom";
  title: string;
  time: string;
};

export function HeroActivityCard({
  action,
  icon,
  position,
  title,
  time,
}: HeroActivityCardProps) {
  return (
    <div className={`hero-card hero-card--${position}`}>
      <span className="hero-card__icon">{icon}</span>
      <span>
        <strong>{title}</strong>
        {action}
        <small>{time}</small>
      </span>
    </div>
  );
}
